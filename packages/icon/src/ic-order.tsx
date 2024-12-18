export const IcOrder = ({ size = 56, color = "white" }: { size?: number; color?: string; } = {}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <rect width="56" height="56" fill="url(#pattern0_1_210)"/>
      <defs>
        <pattern id="pattern0_1_210" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_1_210" transform="scale(0.01)"/>
        </pattern>
        <image id="image0_1_210" width="100" height="100" xlinkHref="data:image/png;base64,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"/>
      </defs>
    </svg>
  );
};

