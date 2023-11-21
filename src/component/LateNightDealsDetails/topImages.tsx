// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useState } from 'react';
import ".//topImages.css";

const images = [
    {
        thumbnail: "https://independent.ng/wp-content/uploads/Hilton-Hotels-697x430.jpg",
        large: "https://independent.ng/wp-content/uploads/Hilton-Hotels-697x430.jpg",
        alt: 'Outdoor',
    },
    {
        thumbnail: "https://media.timeout.com/images/105892648/image.jpg",
        large: "https://media.timeout.com/images/105892648/image.jpg",
        alt: 'Beach View',
    },
    {
      thumbnail: "https://www.maybourne.com/siteassets/exquisite-hotels/exquisite-hotels-mbh-pool-1920-720.jpg",
      large: "https://www.maybourne.com/siteassets/exquisite-hotels/exquisite-hotels-mbh-pool-1920-720.jpg",
      alt: 'Pool',
    },
    {
      thumbnail: "https://www.welcome-hotels.com/site/assets/files/35059/welcome_hotel_marburg_lobby_2k.2560x1600.jpg",
      large: "https://www.welcome-hotels.com/site/assets/files/35059/welcome_hotel_marburg_lobby_2k.2560x1600.jpg",
      alt: 'Lounge',
    },
    {
      thumbnail: "https://www.travelandleisure.com/thmb/K61cQn9BXFJ9UqWJm1Hghb_tpfU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/best-charleston-hotels-loutrel-00-CHASHOTELSWB22-6c8667e894454e62a2161dc78af05f1e.jpg",
      large: "https://www.travelandleisure.com/thmb/K61cQn9BXFJ9UqWJm1Hghb_tpfU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/best-charleston-hotels-loutrel-00-CHASHOTELSWB22-6c8667e894454e62a2161dc78af05f1e.jpg",
      alt: 'Indoor Room',
    },
];

const TopImages: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const openModal = (index: number) => {
    setModalVisible(true);
    setSlideIndex(index);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const plusSlides = (n: number) => {
    const newIndex = slideIndex + n;
    
    if (newIndex >= images.length) {
      setSlideIndex(0);
    } else if (newIndex < 0) {
      setSlideIndex(images.length - 1);
    } else {
      setSlideIndex(newIndex);
    }
  };

  const currentSlide = (index: number) => {
    setSlideIndex(index);
  };

  return (
    <div className="top-images-container">

      <div className="row">
        <div className="topImagesTwo">
            <div className="main-image-container">
                <img
                src={images[0].large}
                alt={images[0].alt}
                onClick={() => openModal(0)}
                className="main-image"
                />

                <div className="main-image-container-top-right">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                        <path d="M14.44 0C12.63 0 11.01 0.88 10 2.23C8.99 0.88 7.37 0 5.56 0C2.49 0 0 2.5 0 5.59C0 6.78 0.19 7.88 0.52 8.9C2.1 13.9 6.97 16.89 9.38 17.71C9.72 17.83 10.28 17.83 10.62 17.71C13.03 16.89 17.9 13.9 19.48 8.9C19.81 7.88 20 6.78 20 5.59C20 2.5 17.51 0 14.44 0Z" fill="#FF3C42"/>
                    </svg>
                </div>

                <div className="aboutHotel">
                    <h1>
                        9.0 Very good
                    </h1>
                    <p  onClick={() => openModal(0)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 14 15" fill="none">
                            <g clip-path="url(#clip0_4794_4937)">
                                <path d="M1.5 14L12.5 14C13.0523 14 13.5 13.5523 13.5 13L13.5 2C13.5 1.44771 13.0523 1 12.5 1L1.5 1C0.947715 1 0.5 1.44771 0.5 2L0.5 13C0.5 13.5523 0.947715 14 1.5 14Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M0.5 11.4997H13.5M3.84 11.4997L9.05 6.61972C9.13984 6.54489 9.25307 6.50391 9.37 6.50391C9.48693 6.50391 9.60016 6.54489 9.69 6.61972L13.5 9.34972" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M4.5 6.5C5.32843 6.5 6 5.82843 6 5C6 4.17157 5.32843 3.5 4.5 3.5C3.67157 3.5 3 4.17157 3 5C3 5.82843 3.67157 6.5 4.5 6.5Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_4794_4937">
                                <rect width="14" height="14" fill="white" transform="translate(0 0.5)"/>
                                </clipPath>
                            </defs>
                        </svg>
                        Show all photos
                    </p>
                </div>
            </div>
        </div>

        <div className="topImagesTwo">
            <div className="row">
                <div className="">
                {images.slice(1).map((image, index) => (
                    <div className='topImagesFour' key={index}>
                        <img
                        src={image.thumbnail}
                        alt={image.alt}
                        onClick={() => openModal(index + 1)}
                        style={{ width: '100%' }}
                        />
                    </div>
                ))}
                </div>
            </div>
        </div>
      </div>
  
      {modalVisible && (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="closeCursor" onClick={closeModal}>&times;</span>
            {images.map((image, index) => (
              <div key={index} style={{ display: index === slideIndex ? 'block' : 'none' }} className='imageModalImagesContainer'> 
                <img src={image.large} style={{ width: '100%' }} alt={image.alt} className='dealsDetailsLargeImage'/>
                <div className="imageDetailsTextModal">
                  <div>
                    <a onClick={() => plusSlides(-1)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="33" viewBox="0 0 30 30" fill="none">
                        <path d="M16.6661 10.8456L16.6849 10.826L16.7014 10.8044L16.3047 10.5C16.7014 10.8044 16.7017 10.8041 16.7019 10.8038L16.7023 10.8032L16.7033 10.802L16.7052 10.7993L16.7096 10.7935L16.7196 10.7793C16.7269 10.7688 16.7354 10.756 16.7446 10.741C16.7629 10.7111 16.7846 10.6719 16.806 10.6239C16.8486 10.5283 16.8915 10.3945 16.9015 10.2301C16.9226 9.88046 16.7902 9.48307 16.4036 9.09645C15.6083 8.30119 14.3917 8.30119 13.5964 9.09645L9.09645 13.5964C8.30119 14.3917 8.30119 15.6083 9.09645 16.4036L13.5964 20.9036C14.3917 21.6988 15.6083 21.6988 16.4036 20.9036C17.1988 20.1083 17.1988 18.8917 16.4036 18.0964L16.3894 18.0823L16.3742 18.0694L12.7275 14.9629L16.6661 10.8456ZM29.5 15C29.5 22.9739 22.9739 29.5 15 29.5C7.02614 29.5 0.5 22.9739 0.5 15C0.5 7.02614 7.02614 0.5 15 0.5C22.9739 0.5 29.5 7.02614 29.5 15Z" fill="#5F5E5E" stroke="white"/>
                      </svg>
                    </a>

                    <a id="caption">{images[slideIndex].alt}</a>
                    
                    <a onClick={() => plusSlides(1)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="33" viewBox="0 0 30 30" fill="none">
                        <path d="M13.3339 19.1544L13.3151 19.174L13.2986 19.1956L13.6953 19.5C13.2986 19.1956 13.2983 19.1959 13.2981 19.1962L13.2977 19.1968L13.2967 19.198L13.2948 19.2007L13.2904 19.2065L13.2804 19.2207C13.2731 19.2312 13.2646 19.244 13.2554 19.259C13.2371 19.2889 13.2154 19.3281 13.194 19.3761C13.1514 19.4717 13.1085 19.6055 13.0985 19.7699C13.0774 20.1195 13.2098 20.5169 13.5964 20.9036C14.3917 21.6988 15.6083 21.6988 16.4036 20.9036L20.9036 16.4036C21.6988 15.6083 21.6988 14.3917 20.9036 13.5964L16.4036 9.09645C15.6083 8.30119 14.3917 8.30119 13.5964 9.09645C12.8012 9.89171 12.8012 11.1083 13.5964 11.9036L13.6106 11.9177L13.6258 11.9306L17.2725 15.0371L13.3339 19.1544ZM0.5 15C0.5 7.02614 7.02614 0.5 15 0.5C22.9739 0.5 29.5 7.02614 29.5 15C29.5 22.9739 22.9739 29.5 15 29.5C7.02614 29.5 0.5 22.9739 0.5 15Z" fill="#5F5E5E" stroke="white"/>
                      </svg>
                    </a>
                  </div>     
                </div>
              </div>
            ))}

            <div className="row">
              {images.map((image, index) => (
                <div className={`topImagesFive ${index === slideIndex ? 'highlighted' : ''}`}>
                  <img src={image.thumbnail} alt="" style={{ width: '100%' }} onClick={() => currentSlide(index)}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default TopImages;
