import ".//dealsHome.css";
import React from 'react';
import NightHeader from "./LateNightDeals/headerDeals/header";
import Slideshow from "./slideshowImages";
import ".//LateNightDeals/headerDeals/header.css"

const DealsImages: React.FC = () => {
    const imageUrls = [
        'https://images.unsplash.com/photo-1568497092392-9259710309b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWwlMjBuaWdodHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
        'https://www.ekohotels.com/assets/img/eko-gardens.jpg',
        'https://www.hollywoodreporter.com/wp-content/uploads/2019/03/empathy_suite-media_lounge-publicity-h_2019.jpg',
        'https://hips.hearstapps.com/hmg-prod/images/prince-park-tower-tokyo-1517332455.jpg',
        'https://image.cnbcfm.com/api/v1/image/105776555-balcony_pool.jpg?v=1551906147',
    ];

    return (
      // <div style={{ position: 'relative', width: '100%', height: '100vh' }}></div>
    <div>
      <Slideshow images={imageUrls} interval={5000} />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '90vh',
          // background: 'rgba(0, 0, 0, 0.2)',
          color: 'white',
          fontSize: '24px',
        }}
      >
        <div className="slideImageLateNight">
          <NightHeader />
        </div>
      </div>
    </div>
  );
};

export default DealsImages;
