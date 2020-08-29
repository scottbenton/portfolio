import React from "react";
import clsx from "clsx";

interface SvgWaveProps {
  className: string;
}

export const SvgWave: React.FC<SvgWaveProps> = (props) => {
  const { className } = props;

  return (
    <svg
      preserveAspectRatio={"none"}
      viewBox="0 0 1440 320"
      className={clsx(
        className,
        "fill-current absolute t-0 left-0 right-0 h-full w-full"
      )}
    >
      <path d="M0,160L60,176C120,192,240,224,360,213.3C480,203,600,149,720,112C840,75,960,53,1080,74.7C1200,96,1320,160,1380,192L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
    </svg>
  );
};
