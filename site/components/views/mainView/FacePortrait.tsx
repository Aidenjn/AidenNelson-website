import FrilledCircle from "@/components/shared/FrilledCircle";
import React from "react";

export default function FacePortrait() {
  const size: number = 200;
  const spacingIncrement: number = 10;

  const facePortraitStyle: React.CSSProperties = {
    width: size - spacingIncrement,
  }

  return (
    <div className="relative inline-flex items-center justify-center">
        {/* Frilled circles (background, transforms together) */}
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <FrilledCircle
            size={size}
            backgroundColor="var(--color-main-accent)"
            borderRadius={0}
          >
            <FrilledCircle
              size={size - spacingIncrement}
              backgroundColor="var(--color-background)"
              borderRadius={0}
            >
              <FrilledCircle
                size={size - spacingIncrement * 2}
                backgroundColor="var(--color-secondary-accent)"
                borderRadius={0}
              >
                <FrilledCircle
                  size={size - spacingIncrement * 3}
                  backgroundColor="var(--color-background)"
                  borderRadius={0}
                >
                  <FrilledCircle
                    size={size - spacingIncrement * 4}
                    backgroundColor="var(--color-foreground)"
                    borderRadius={0}
                  >
                    <FrilledCircle
                      size={size - spacingIncrement * 5}
                      backgroundColor="var(--color-background)"
                      borderRadius={0}
                    />
                  </FrilledCircle> 
                </FrilledCircle>    
              </FrilledCircle>
            </FrilledCircle>
          </FrilledCircle>
        </div>

        <img
          src='/images/me.jpg'
          className="rounded-full relative z-10"
          style={{
           ...facePortraitStyle,
          }}
        />
    </div>
  );
}