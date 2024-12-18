export const IcPureCheck = ({ size = 20, color = "white" }: { size?: number; color?: string; } = {}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.49995 17.0167L2.32495 11.8417L4.68328 9.48333L7.49995 12.3083L15.7333 4.06667L18.0916 6.425L7.49995 17.0167Z" fill={color}/>
    </svg>
  );
};
