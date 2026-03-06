import { useState, useEffect, useMemo } from 'react';
import { getWavyShapeData } from './utils/wavyShapes';
import { WavyShape } from '@/lib/types/WavyShapes';
import Icon from '@/components/shared/CustomIconSVG';
import { CustomIcon } from '@/lib/types/CustomIcon';
import { IconType } from 'react-icons';

// --- Union type for loading icon options ---
export type LoadingIconOption =
  | { icontype: 'custom'; icon: CustomIcon }
  | { icontype: 'fontawesome'; icon: IconType };

interface Props {
  imageUrl: string | undefined;
  shape?: WavyShape;
  disableLoadingEffect?: boolean;
  minimumLoadingTimeMS?: number;
  alt?: string;
  loadingIcon?: LoadingIconOption;
}

export default function WavyBorderImageMask({
  imageUrl,
  shape = WavyShape.Square,
  disableLoadingEffect = false,
  minimumLoadingTimeMS = 400,
  alt = '',
  loadingIcon,
}: Props) {
  const [status, setStatus] = useState({ loaded: false, minDone: false });
  const { loaded, minDone } = status;

  const { viewBox } = getWavyShapeData(shape);

  // --- Stable clip ID to avoid SVG mismatches on client navigation ---
  const clipId = useMemo(() => {
    if (!imageUrl) return 'clip-none';
    return 'clip-' + imageUrl.replace(/[^a-zA-Z0-9]/g, '');
  }, [imageUrl]);

  // --- Determine if we should show persistent loading icon ---
  const hasImage = Boolean(imageUrl);
  const showPersistentIcon = !hasImage && !disableLoadingEffect;

  // --- Reset loading state every time imageUrl changes ---
  useEffect(() => {
    // No image: immediately show persistent loading icon (async to avoid cascading renders)
    if (!hasImage || disableLoadingEffect) {
      queueMicrotask(() => {
        setStatus({ loaded: true, minDone: true });
      });
      return;
    }

    // Has image: run normal loading sequence
    queueMicrotask(() => {
      setStatus({ loaded: false, minDone: false });
    });

    const timer = setTimeout(() => {
      setStatus((prev) => ({ ...prev, minDone: true }));
    }, minimumLoadingTimeMS);

    const img = new Image();
    img.src = imageUrl!;
    img.onload = () => setStatus((prev) => ({ ...prev, loaded: true }));

    return () => clearTimeout(timer);
  }, [imageUrl, hasImage, disableLoadingEffect, minimumLoadingTimeMS]);

  const showImage = loaded && minDone && hasImage;

  // --- Determine which icon to show ---
  const iconSeed = imageUrl || 'default';

  // --- Render the appropriate loading icon ---
  const renderLoadingIcon = () => {
    if (!loadingIcon) {
      return <Icon icon={undefined} seed={iconSeed} className="svg-loading-icon" />;
    }

    if (loadingIcon.icontype === 'fontawesome') {
      const FontAwesomeIcon = loadingIcon.icon;
      return <FontAwesomeIcon className="text-[6.2rem] text-background" />;
    }

    return <Icon icon={loadingIcon.icon} seed={undefined} className="svg-loading-icon" />;
  };

  return (
    <svg className="splat" viewBox={viewBox} preserveAspectRatio="none">
      {alt && <title>{alt}</title>}

      {/* Background fill */}
      <rect width="100%" height="100%" clipPath={`url(#${clipId})`} className="fill-foreground" />

      {/* Loading icon - persistent when no image, transitional when image loading */}
      {!disableLoadingEffect && (
        <g
          transform={shape === WavyShape.Square ? 'translate(10, 10) scale(0.8)' : ''}
          style={{
            opacity: showImage ? 0 : 1,
            transition: showPersistentIcon ? 'none' : 'opacity 0.6s ease',
            pointerEvents: 'none',
            shapeRendering: 'geometricPrecision',
          }}
        >
          {renderLoadingIcon()}
        </g>
      )}

      {/* Actual image */}
      {hasImage && (
        <image
          href={imageUrl}
          width="100%"
          height="100%"
          clipPath={`url(#${clipId})`}
          preserveAspectRatio="xMidYMid slice"
          style={{
            opacity: showImage ? 1 : 0,
            filter: disableLoadingEffect || showImage ? 'none' : 'blur(15px)',
            transition: disableLoadingEffect ? 'none' : 'opacity 0.8s ease, filter 0.6s ease',
          }}
        />
      )}
    </svg>
  );
}
