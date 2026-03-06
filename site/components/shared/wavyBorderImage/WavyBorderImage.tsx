import { HTMLAttributes } from 'react';
import WavyBorderImageMask from './WavyBorderImageMask';
import { LoadingIconOption } from './WavyBorderImageMask';
import { WavyShape } from '@/lib/types/WavyShapes';

interface WavyBorderImageProps extends HTMLAttributes<HTMLDivElement> {
  imageUrl: string | undefined;
  shape?: WavyShape;
  disableLoadingEffect?: boolean;
  minimumLoadingTimeMS?: number;
  alt?: string;
  width?: number | string;
  height?: number | string;
  loadingIcon?: LoadingIconOption;
}

const WavyBorderImage = ({
  imageUrl,
  shape = WavyShape.Square,
  disableLoadingEffect = false,
  minimumLoadingTimeMS = 400,
  alt = '',
  width = '100%',
  height = '100%',
  className = '',
  style,
  loadingIcon,
  ...rest
}: WavyBorderImageProps) => {
  return (
    <div className="border-main-accent bg-main-accent border-6 rounded-sm w-full h-full">
      <div className="border-background bg-background border-6 rounded-sm w-full h-full">
        <div className={`relative ${className}`} style={{ width, height, ...style }} {...rest}>
          <WavyBorderImageMask
            imageUrl={imageUrl}
            shape={shape}
            alt={alt}
            disableLoadingEffect={disableLoadingEffect}
            minimumLoadingTimeMS={minimumLoadingTimeMS}
            loadingIcon={loadingIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default WavyBorderImage;
