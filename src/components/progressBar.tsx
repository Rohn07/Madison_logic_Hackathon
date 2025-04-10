const ProgressBar = ({ progress }) => {
  const clampedProgress = Math.max(0, Math.min(100, progress));

  // Calculate widths more effectively with raw numbers
  const bronzeWidth = Math.min(clampedProgress, 45);  // Maximum 45 for Bronze
  const silverWidth = Math.max(0, Math.min(clampedProgress - 45, 35)); // Maximum 35 for Silver
  const goldWidth = Math.max(0, clampedProgress - 80); // Maximum 20 for Gold

  return (
    <div className="relative w-full bg-gray-200 h-6 rounded-full overflow-hidden shadow-lg">
      {/* Line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-black opacity-20"></div>

      {/* Progress Bars */}
      <div
        className="h-full absolute left-0 top-0 transition-all duration-500 ease-out"
        style={{
          width: `${bronzeWidth}%`,
          backgroundColor: '#ff4d4d',
          borderTopLeftRadius: '5px',
          borderBottomLeftRadius: '5px',
        }}
      />
      <div
        className="h-full absolute left-0 top-0 transition-all duration-500 ease-out"
        style={{
          width: `${bronzeWidth + silverWidth}%`,
          backgroundColor: '#ffff99',
          borderTopLeftRadius: '5px',
          borderBottomLeftRadius: '5px',
        }}
      />
      <div
        className="h-full absolute left-0 top-0 transition-all duration-500 ease-out"
        style={{
          width: `${bronzeWidth + silverWidth + goldWidth}%`,
          backgroundColor: '#66cc66',
          borderTopLeftRadius: '5px',
          borderBottomLeftRadius: '5px',
        }}
      />

      {/* Section Dividers (Lines between Bronze, Silver, Gold) */}
      <div
        className="absolute top-0 left-45% w-0.5 h-full bg-black"
        style={{ display: bronzeWidth > 0 ? 'block' : 'none' }} // Only show line if bronze exists
      ></div>
      <div
        className="absolute top-0 left-80% w-0.5 h-full bg-black"
        style={{ display: silverWidth > 0 ? 'block' : 'none' }} // Only show line if silver exists
      ></div>

      {/* Progress Percentage */}
      {/* <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-sm">
        {clampedProgress}%
      </div> */}

      {/* Text Labels */}
      <div
        className="absolute top-0 left-0 w-full flex justify-between text-xs font-medium text-gray-600 px-1 py-1"
      >
        <span>Standard</span>
        <span>Pro</span>
        <span>Legend</span>
      </div>
    </div>
  );
};

export default ProgressBar;
