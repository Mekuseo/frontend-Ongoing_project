import React, { useEffect, useState } from 'react';
import ".//toDo.css"

const ThingsHappening: React.FC = () => {
    const [slideIndex, setSlideIndex] = useState<number>(0);

    useEffect(() => {
        const showSlides = () => {
        let i;
        const slides = document.getElementsByClassName('toDomySlides') as HTMLCollectionOf<HTMLElement>;
        const dots = document.getElementsByClassName('toDodot') as HTMLCollectionOf<HTMLElement>;

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        setSlideIndex((prevIndex) => (prevIndex >= slides.length - 1 ? 0 : prevIndex + 1));

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(' toDoactive', '');
        }

        slides[slideIndex].style.display = 'block';
        dots[slideIndex].className += ' toDoactive';
        };

        const interval = setInterval(showSlides, 3000);

        return () => clearInterval(interval);
    }, [slideIndex]);

    return (
        <div>
            <div className="toDocontainer">
                <div className="toDoslideshow-container">
                    <div className="toDomySlides fade">
                        <img 
                        src="https://digital.hammacher.com//Items/13547/13547H_1000x1000.jpg" 
                        alt="" 
                        style={{ width: '100%' }} />
                    </div>

                    <div className="toDomySlides fade">
                        <img 
                        src="https://www.nps.gov/grte/planyourvisit/images/Hiking-NPS-Photo-J-Tobiason_3.jpg?maxwidth=1300&maxheight=1300&autorotate=false" 
                        alt="" 
                        style={{ width: '100%' }} />
                    </div>

                    <div className="toDomySlides fade">
                        <img 
                        src="https://ericotrips.files.wordpress.com/2021/04/paintball-lagos-nigeria.jpg" 
                        alt="" 
                        style={{ width: '100%' }} />
                    </div>

                    <div className="toDomySlides fade">
                        <img 
                        src="https://www.tampabay.com/resizer//-8Vc_O6zPBG9v2mk1ysnwyQcoIc=/900x506/smart/cloudfront-us-east-1.images.arcpublishing.com/tbt/L5HZXBA7SNC4HJBWV3H35KAV2M.jpg" 
                        alt="" 
                        style={{ width: '100%' }} />
                    </div>

                    <div className="toDomySlides fade">
                        <img 
                        src="https://guardian.ng/wp-content/uploads/2022/09/IMG_5220.jpg" 
                        alt="" 
                        style={{ width: '100%' }} />
                    </div>

                </div>
                
                <div className="toDo-text-block">
                    <h4>
                        Everything happening in abuja this weekend
                    </h4>
                    <p>
                        Let’s walk you through some of the best places and things to do in Abuja this weekend to enjoy your self
                    </p>
                </div>

                <div className='toDodotCont'>
                    <span className="toDodot"></span>
                    <span className="toDodot"></span>
                    <span className="toDodot"></span>
                    <span className="toDodot"></span>
                    <span className="toDodot"></span>
                </div>
            </div>
        </div>
    );
};

export default ThingsHappening;
