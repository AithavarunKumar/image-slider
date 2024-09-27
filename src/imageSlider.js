import { useEffect, useState } from 'react';

const data = [
  "https://wallpaperaccess.com/full/767048.jpg",
  "https://wallpaperaccess.com/full/767152.jpg",
  "https://www.pixelstalk.net/wp-content/uploads/2016/08/Pictures-HD-Food-Download.jpg",
  "https://www.pixelstalk.net/wp-content/uploads/2016/08/Fresh-hot-delicious-food-wallpaper.jpg",
  "https://cdn.wallpapersafari.com/42/55/MDzowJ.jpg"
];

const ImageSlider = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Previous image handler
  const handlePreviousClick = () => {
    setActiveImageIndex(!activeImageIndex ? data.length - 1 : activeImageIndex - 1);
  };

  // Next image handler
  const handleNextClick = () => {
    setActiveImageIndex((activeImageIndex + 1) % data.length);
  };

  // Auto-slide with useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 2000);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [activeImageIndex]);

  return (
    <div className='flex justify-center p-8 m-10'>
      <button className='font-bold p-4 m-10' onClick={handlePreviousClick}>
        Previous
      </button>
      
      {/* Display the active image only */}
      <img
        src={data[activeImageIndex]}
        className='w-[1000px] h-[400px] rounded-[10px]'
        alt='wallpaper'
      />
      
      <button className='font-bold p-4 m-10' onClick={handleNextClick}>
        next
      </button>
    </div>
  );
};

export default ImageSlider;
