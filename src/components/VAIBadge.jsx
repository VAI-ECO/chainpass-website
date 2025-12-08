function VAIBadge({ size = 'large' }) {
  const sizeClasses = {
    small: 'w-24 h-24',
    medium: 'w-32 h-32',
    large: 'w-40 h-40'
  };

  return (
    <div className={`${sizeClasses[size]} relative inline-flex items-center justify-center`}>
      <div className="absolute inset-0 bg-teal-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="relative bg-gradient-to-br from-teal-500 to-blue-500 rounded-full p-1">
        <div className="bg-gray-900 rounded-full p-4 flex flex-col items-center justify-center">
          <div className="text-2xl font-bold text-teal-400">V.A.I.</div>
          <div className="text-xs text-gray-400 mt-1">VERIFIED</div>
          <div className="text-xs text-gray-500">⛓️</div>
        </div>
      </div>
    </div>
  );
}

export default VAIBadge;
