// import React from 'react';

// const Banner = () => {
//     return (
//         <div>
//           wesftgwestgerdf  
//         </div>
//     );
// };

// export default Banner;

import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const Banner = () => {
  const images = [
    {
      original: 'https://i.ibb.co/1fQVdFjk/download-1.jpg',
      thumbnail: 'https://i.ibb.co/1fQVdFjk/download-1.jpg',

    },
    {
      original: 'https://static.vecteezy.com/system/resources/thumbnails/023/533/570/small/generative-ai-psychedelic-space-banner-template-in-anime-manga-line-art-style-horizontal-illustration-of-the-future-landscape-with-mountains-planets-trees-moon-surrealist-escapism-concept-photo.jpg',
      thumbnail: 'https://static.vecteezy.com/system/resources/thumbnails/023/533/570/small/generative-ai-psychedelic-space-banner-template-in-anime-manga-line-art-style-horizontal-illustration-of-the-future-landscape-with-mountains-planets-trees-moon-surrealist-escapism-concept-photo.jpg',
      
    },
    {
      original: 'https://i.ibb.co/KBZ2MP8/artistic-scene-inspired-by-art-nouveau-style-with-colorful-depictions.jpg',
      thumbnail: 'https://i.ibb.co/KBZ2MP8/artistic-scene-inspired-by-art-nouveau-style-with-colorful-depictions.jpg',
      
    },
  ];

  return (
    <div className="banner-slider">
      <ImageGallery 
        items={images} 
        showThumbnails={true} 
         showFullscreenButton={false}
        showPlayButton={false}
        slideInterval={4000} 
      />
    </div>
  );
};

export default Banner;
