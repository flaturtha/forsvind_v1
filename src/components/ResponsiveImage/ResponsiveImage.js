import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import useWindowSize from './useWindowSize.js'; // Custom hook to get window size

const ResponsiveImage = ({ src, alt, width, height }) => {
  const [objectPosition, setObjectPosition] = useState('center');
  const { width: windowWidth } = useWindowSize(); // Using custom hook to get window width

  useEffect(() => {
    const setFocalPoint = () => {
      if (windowWidth >= 1024) {
        setObjectPosition('top right');
      } else if (windowWidth >= 768) {
        setObjectPosition('center');
      } else {
        setObjectPosition('bottom left');
      }
    };

    setFocalPoint();
  }, [windowWidth]); // Re-run effect when windowWidth changes

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        objectFit="cover"
        objectPosition={objectPosition}
      />
    </div>
  );
};

export default ResponsiveImage;
