import React, { useState, useEffect } from 'react';
import ".//dealsDetails.css";
import CustomDateRangePicker from './dateDeals';
import DealsIconsContainer from './dealsIconContainer';
import DealsReviews from './dealsReviews';
import DealsLocation from './location';
import DealsRules from './dealsRules';

const DealsDetailsContainer: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset >= stickyOffset) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const stickyOffset = 370;

  return (
    <div>
        <div className="row">
            <div className="stickColumnDeals infoCon">
                <div className="lateDealsInfo">
                    <h1>
                        Transcorp Hilton

                        &nbsp;

                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M11.7376 1.44567L13.5002 4.99454C13.7378 5.48534 14.3753 5.95097 14.9128 6.05165L18.1006 6.58021C20.1382 6.91999 20.6132 8.40498 19.1506 9.88997L16.663 12.3943C16.2504 12.8096 16.0129 13.6276 16.1504 14.2191L16.863 17.3149C17.4255 19.7563 16.1254 20.7128 13.9878 19.4291L11.0001 17.6421C10.4625 17.3149 9.56247 17.3149 9.02493 17.6421L6.03723 19.4291C3.89958 20.7002 2.59949 19.7563 3.16203 17.3149L3.87458 14.2191C3.98709 13.615 3.74957 12.797 3.33705 12.3817L0.849375 9.87739C-0.613225 8.40498 -0.138192 6.91999 1.89945 6.56762L5.08716 6.03907C5.6247 5.95097 6.26225 5.47276 6.49976 4.98196L8.26238 1.43308C9.22495 -0.479786 10.7751 -0.479786 11.7376 1.44567Z" fill="#F0B500"/>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M11.7376 1.44567L13.5002 4.99454C13.7378 5.48534 14.3753 5.95097 14.9128 6.05165L18.1006 6.58021C20.1382 6.91999 20.6132 8.40498 19.1506 9.88997L16.663 12.3943C16.2504 12.8096 16.0129 13.6276 16.1504 14.2191L16.863 17.3149C17.4255 19.7563 16.1254 20.7128 13.9878 19.4291L11.0001 17.6421C10.4625 17.3149 9.56247 17.3149 9.02493 17.6421L6.03723 19.4291C3.89958 20.7002 2.59949 19.7563 3.16203 17.3149L3.87458 14.2191C3.98709 13.615 3.74957 12.797 3.33705 12.3817L0.849375 9.87739C-0.613225 8.40498 -0.138192 6.91999 1.89945 6.56762L5.08716 6.03907C5.6247 5.95097 6.26225 5.47276 6.49976 4.98196L8.26238 1.43308C9.22495 -0.479786 10.7751 -0.479786 11.7376 1.44567Z" fill="#F0B500"/>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M11.7376 1.44567L13.5002 4.99454C13.7378 5.48534 14.3753 5.95097 14.9128 6.05165L18.1006 6.58021C20.1382 6.91999 20.6132 8.40498 19.1506 9.88997L16.663 12.3943C16.2504 12.8096 16.0129 13.6276 16.1504 14.2191L16.863 17.3149C17.4255 19.7563 16.1254 20.7128 13.9878 19.4291L11.0001 17.6421C10.4625 17.3149 9.56247 17.3149 9.02493 17.6421L6.03723 19.4291C3.89958 20.7002 2.59949 19.7563 3.16203 17.3149L3.87458 14.2191C3.98709 13.615 3.74957 12.797 3.33705 12.3817L0.849375 9.87739C-0.613225 8.40498 -0.138192 6.91999 1.89945 6.56762L5.08716 6.03907C5.6247 5.95097 6.26225 5.47276 6.49976 4.98196L8.26238 1.43308C9.22495 -0.479786 10.7751 -0.479786 11.7376 1.44567Z" fill="#F0B500"/>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M11.7376 1.44567L13.5002 4.99454C13.7378 5.48534 14.3753 5.95097 14.9128 6.05165L18.1006 6.58021C20.1382 6.91999 20.6132 8.40498 19.1506 9.88997L16.663 12.3943C16.2504 12.8096 16.0129 13.6276 16.1504 14.2191L16.863 17.3149C17.4255 19.7563 16.1254 20.7128 13.9878 19.4291L11.0001 17.6421C10.4625 17.3149 9.56247 17.3149 9.02493 17.6421L6.03723 19.4291C3.89958 20.7002 2.59949 19.7563 3.16203 17.3149L3.87458 14.2191C3.98709 13.615 3.74957 12.797 3.33705 12.3817L0.849375 9.87739C-0.613225 8.40498 -0.138192 6.91999 1.89945 6.56762L5.08716 6.03907C5.6247 5.95097 6.26225 5.47276 6.49976 4.98196L8.26238 1.43308C9.22495 -0.479786 10.7751 -0.479786 11.7376 1.44567Z" fill="#F0B500"/>
                        </svg>
                    </h1>

                    <p>
                        Plot 7, Yakubu Gowon way, Asokoro, Abuja 9001-
                    </p>

                    <span>
                        Show location on map
                    </span>

                    <h2>
                        Property description
                    </h2>

                    <p>
                        A stay at Pod Times Square places you in the heart of New York, 
                        within a 10-minute walk of Times Square and Broadway. 
                        This hotel is 0.7 mi (1.1 km) from Madison Square Garden 
                        and 0.5 mi (0.8 km) from Jacob K. Javits Convention Center. 
                        Take in the views from a terrace and make use of amenities 
                        such as concierge services and discounted use of a nearby 
                        fitness facility.
                    </p>
                </div>
            </div>

            <div className="stickColumnDeals fixedCalDeals">
                <div id="checkInNOutBox" className={isSticky ? 'sticky' : ''}>

                    <div className={isSticky ? 'iconStickyBackup' : 'iconStickyDeals'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                            <path d="M26.0785 18.1614L24.6189 15.733C24.296 15.2034 24.0118 14.183 24.0118 13.563V11.1476C24.0118 6.45885 20.2014 2.64844 15.5256 2.64844C10.8368 2.66135 7.0264 6.45885 7.0264 11.1476V13.5501C7.0264 14.1701 6.74223 15.1905 6.43223 15.7201L4.97265 18.1484C4.41723 19.0914 4.28807 20.1634 4.63682 21.0934C4.98557 22.0364 5.77348 22.7855 6.80682 23.1214C8.20182 23.5864 9.60973 23.9222 11.0435 24.1676C11.1856 24.1934 11.3276 24.2064 11.4697 24.2322C11.6506 24.258 11.8443 24.2839 12.0381 24.3097C12.3739 24.3614 12.7097 24.4001 13.0585 24.4259C13.8722 24.5034 14.6989 24.5422 15.5256 24.5422C16.3393 24.5422 17.1531 24.5034 17.9539 24.4259C18.251 24.4001 18.5481 24.3743 18.8322 24.3355C19.0647 24.3097 19.2972 24.2839 19.5297 24.2451C19.6718 24.2322 19.8139 24.2064 19.956 24.1805C21.4026 23.948 22.8364 23.5864 24.2314 23.1214C25.226 22.7855 25.9881 22.0364 26.3497 21.0805C26.7114 20.1118 26.6081 19.0526 26.0785 18.1614ZM16.4685 12.9172C16.4685 13.4597 16.0293 13.8989 15.4868 13.8989C14.9443 13.8989 14.5051 13.4597 14.5051 12.9172V8.91302C14.5051 8.37052 14.9443 7.93135 15.4868 7.93135C16.0293 7.93135 16.4685 8.37052 16.4685 8.91302V12.9172Z" fill="#CF0007"/>
                            <path d="M19.1553 25.8469C18.6128 27.3452 17.1791 28.4173 15.4999 28.4173C14.4795 28.4173 13.472 28.004 12.7616 27.2677C12.3483 26.8802 12.0383 26.3636 11.8574 25.834C12.0253 25.8598 12.1933 25.8727 12.3741 25.8986C12.6712 25.9373 12.9812 25.9761 13.2912 26.0019C14.0274 26.0665 14.7766 26.1052 15.5258 26.1052C16.262 26.1052 16.9983 26.0665 17.7216 26.0019C17.9928 25.9761 18.2641 25.9632 18.5224 25.9244C18.7291 25.8986 18.9358 25.8727 19.1553 25.8469Z" fill="#CF0007"/>
                        </svg>
                    </div>
                    <CustomDateRangePicker />

                    <div className="bookNowStickyDeals">
                        Book now | N20,000
                    </div>
                </div>
            </div>
        </div>

        <div className='heightPage'>
            <DealsIconsContainer />
            <DealsReviews />
            <DealsLocation />
            <DealsRules />

            <div className='dealsBookNow'>
                Book now | N20,000
            </div>
            
            <div className="dealsSimilarPropertiesLinkCont">
                 <a href="/deals" className='dealsSimilarPropertiesLink'>
                    FOR SIMILAR PROPERTIES
                </a>
            </div>
           
        </div>
    </div>
  );
};

export default DealsDetailsContainer;
