import React, { useState } from 'react';

interface ReadMoreProps {
  text: string;
  clampLines?: 2 | 3;
  className?: string;
  /** Controls text/button colors for dark backgrounds (e.g. Diaspora card) */
  variant?: 'light' | 'dark';
  /** Override for paragraph size – defaults to 15px for ServicesPage style, HomePage can pass 16px via this */
  textSizeClass?: string;
}

export const ReadMore: React.FC<ReadMoreProps> = ({
  text,
  clampLines = 3,
  className = '',
  variant = 'light',
  textSizeClass,
}) => {
  const [expanded, setExpanded] = useState(false);
  const clampClass = clampLines === 2 ? 'line-clamp-2' : 'line-clamp-3';
  const isDark = variant === 'dark';
  // Base editorial typography; allow size override for HomePage (text-[16px])
  const sizeClass = textSizeClass ?? "text-[15px]";
  const textColor = isDark ? "text-[#e7e1dc]" : "text-[#58423c]";
  const buttonColor = isDark
    ? "text-[#ffdbd1] hover:text-white focus-visible:ring-[#ffdbd1]"
    : "text-[#a43716] hover:text-[#c54f2c] focus-visible:ring-[#a43716]";

  return (
    <div className={className}>
      <p
        className={`font-['Plus_Jakarta_Sans',sans-serif] ${sizeClass} leading-7 ${textColor} ${expanded ? '' : clampClass}`}
      >
        {text}
      </p>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setExpanded((v) => !v);
        }}
        className={`mt-2 text-[13px] font-semibold ${buttonColor} transition-colors focus:outline-none focus-visible:ring-2 rounded-full`}
      >
        {expanded ? 'Show less' : 'Read more'}
      </button>
    </div>
  );
};

export default ReadMore;
