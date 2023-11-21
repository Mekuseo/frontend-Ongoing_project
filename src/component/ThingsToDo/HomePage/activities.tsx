// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState } from 'react';
import "./toDo.css";

const Activities: React.FC = () => {
    const [activeCard, setActiveCard] = useState<number>(0);

    const cards = [
      { 
        id: 0, 
        imageUrl: 'https://s3-alpha-sig.figma.com/img/1f92/8881/0fc8c16e74b1ee655de43809aa139cc4?Expires=1694995200&Signature=jyEWyX9U2EG6RJv9fo87fyqnt6bXlD1BQE-Bb9MJCemCKvvnyr3d2WFK39w~dgkPFssUBobBfo2Rno-rpghZrrjHu4d6G6Vq1y6ud1YIAXcYNNS~EsQG4Qd8WWF1rg-v1-ks3dXmgHvQ6Ns5GmwRh8trHSX4Faigtyw6kaT3By2-X3V2DVH3rlNzw29iFFxxhjy1HEirJ1~CELBonAErE3ZDgULOUzSdtMAhVkqUqkLKebgkMRK5emsj2D-VrPZaOSRYpKtTQCDlj1K2ZAjos8nkKTinA7SThS77a2TnmaMG5geLMkiJBHjeO74I-d3j0YXeUFu0KZy168IIxR1Mgg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', 
        title: 'Neighbourhood Hangout' 
      },

      {
        id: 1, 
        imageUrl: 'https://s3-alpha-sig.figma.com/img/9582/357c/8699cb25e11f94e9d2adc9f1a82202db?Expires=1694995200&Signature=Yq7VuqkUND-1qgMo7c1H146MrrdFQYRV2PvB9lMm-QkCCP-ZUbYbOPYMOiLhlm5TC-AIM945~Gjwl5pzZOGsh1JJN0RgAJrd55LJXbRm6E~mXbYKi0I6GoeRS99SqyzoV4HTJRqzyiZg~6A-W0Zl8pYjlSdnsnPVYgBaPuvIiuocYxHzWntsctHTUs62iIAkTY3OJ20HQMjdcoykfeLA1j0Dy1~-eXP5spvRl7W452EWrGpWp0z7n06ZQokIpYB2adzg0dusXXJEufLLe3OVPBVHfIFSNbUm56mTHLsQoWp6xOU-EksHXj8fVYdeXsamJCadnpLQgRvEc-G4N8qF6Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', 
        title: 'Music' 
      },

      { 
        id: 2, 
        imageUrl: 'https://s3-alpha-sig.figma.com/img/6c1b/cedb/332c32a157ad0839f435900d4deeb983?Expires=1694995200&Signature=CzHCBS9FCxVQEyQ-llWqHwDA9FW2YpHSXRb1OcxicU~VV3hvfc2pL1XN2ijd1XoDWTnVVHatuRIIAyabZcAJY0zuzsTbbxZL34EnVADM0EqsGfymldEaWMjDFwNgNZWi~eHzbQl-OlCAGdE6d8tc65-L44fYgZJpolGHLN-w0ujVuZquLUMZ2zwnkbfQ5Uzkm5hKxmxzw7eNp1PpabMs0eX7NpzBtTH~Kmdm~rl-kHV79DozYHXHMfcJdt9nzlSgAwL~dM9NznBTZyEu-MsRX~PIATOaP4VfnXHjYTCiATcUQNR9WSnVL9PS4c1oVDIRMDfQ1i9Ghc8zwb1U61fNQA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', 
        title: 'Sports' 
      },

      { 
        id: 3, 
        imageUrl: 'https://s3-alpha-sig.figma.com/img/0fa6/c00c/ce9b924faed16df9ccd4d730913b74f3?Expires=1694995200&Signature=eYk5yxwiJUfeoZI1zbEk6m1aeoFjwH8uPt0tNar4Ya69Ikam9PCzXnqQXOp4lWujkBKmj9Qww2hVligME4GdlEFi8Jn-ATN2iSC8TPhDJZEQWHVxSKaIZ4TQ5asW4hL4Fi5eQR4aib1mNjFB5QreT-xDX1Q4E4REkPFDQVQ7DLtkLeIOe0CwVYfsm5KaFsT9Wh-EYa6JnngLnkKOmMu5TS4xAsaN2LFfCFbyMY2Q6APl644r7MQHLfKIUw8rcfekEkCThazaG7ycJrZTOphoz37oZlGW9SoMMQJ5qG4uhOXIsw9KjLRKiMN-~BDJgAFTyg6OF2uCFmlc0wBz~4VJ5A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', 
        title: 'Comedy' 
      },

      { 
        id: 4, 
        imageUrl: 'https://s3-alpha-sig.figma.com/img/68b4/71b6/d4369f28a822ddd25b9ba2febe734a52?Expires=1694995200&Signature=Jq~Wv7OnwFZ5LHTwBDmLQTzGlFFz-5hPqYcZlvJPbSlaZ39RO3JW348dGbglM6fYuDB2VKvaQzZB5yhtjlAC7fACpQ~Gs0l7M~X37Qg9M6fBsohS3pEroaGNRZpS1ABolJ9gR0k9RlIHblf~0YoS6MzNvAiPHD5VzFIKWVop-EMLuOgk8d7rGFQDVG711OC1N9A8In5Si7XIYrjs6I7DEuzqxLHvFtoWranhkCGJJ3RNS5XW7SiI2RDtLlispx4vsvW2JNp6Vu0YJCoNC1kaqsm8DZF3deVm4XjKoaCz1~VVdnc8pbpM3obgfi4acBpFBm8eIkijLzaNIhYg6iv1fw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', 
        title: 'Night life' 
      },

      { 
        id: 5, 
        imageUrl: 'https://s3-alpha-sig.figma.com/img/83bd/4b07/e77bd10f399ae0effe6f26100cf422a1?Expires=1694995200&Signature=TpnUnEZ0mpC9ND~Ku7PjnNY~C~5~Swx~b9IzpQmrD4D-YhJ3YvvcNjGYGXdKXexa-XHoNltvjDOwjVCxPueWk3QZ4QxQWty4ijRAn3NtwQH6X~oVxQsjR5vOv5KRMMtpT418kHio4XBa~ql05BCpXIE9PluCKf0UZoNEyQoQ-51T8L9SQ9h34xvrVm2GXeQZFQtmoLBmOov6M1~5ynjfXCliaGeEEwaK7XIe2gTF6VGEraEslQ2GabPwIOaTQW~KrZd4J676Poz~Aylvn6pgB~MlomZp3E2I8YbgL6jsr0-OUanRvKby5ziOiY03B8nVoGga00~YN05Ctn5gTZWL7g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', 
        title: 'Food' 
      },
    ];
  
    const handleArrowClick = (direction: 'prev' | 'next') => {
      if (direction === 'prev') {
        setActiveCard(activeCard === 0 ? cards.length - 1 : activeCard - 1);
      } else {
        setActiveCard(activeCard === cards.length - 1 ? 0 : activeCard + 1);
      }
    };

    const handleCardClick = (id: number) => {
      setActiveCard(id);
    };

  return (
    <div className='mainActivitiesCont'>
      <div className="ActivitiesContainer">
        <button onClick={() => handleArrowClick('prev')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M10.757 12.0002L15.707 16.9502C15.8026 17.0424 15.8787 17.1528 15.9311 17.2748C15.9836 17.3968 16.0111 17.528 16.0123 17.6608C16.0135 17.7936 15.9882 17.9252 15.9379 18.0481C15.8876 18.171 15.8133 18.2827 15.7194 18.3766C15.6256 18.4705 15.5139 18.5447 15.391 18.595C15.2681 18.6453 15.1364 18.6706 15.0036 18.6694C14.8709 18.6683 14.7396 18.6407 14.6176 18.5883C14.4956 18.5359 14.3853 18.4597 14.293 18.3642L8.63605 12.7072C8.44858 12.5197 8.34326 12.2653 8.34326 12.0002C8.34326 11.735 8.44858 11.4807 8.63605 11.2932L14.293 5.63618C14.4817 5.45402 14.7343 5.35323 14.9964 5.35551C15.2586 5.35778 15.5095 5.46295 15.6949 5.64836C15.8803 5.83377 15.9854 6.08458 15.9877 6.34678C15.99 6.60898 15.8892 6.86158 15.707 7.05018L10.757 12.0002Z" fill="#475569"/>
            </svg>
        </button>
        {cards.map((card) => (
          <div
            key={card.id}
            className={`ActivityCard ${activeCard === card.id ? 'active' : ''}`}
          >
            <img src={card.imageUrl} alt={card.title} onClick={() => handleCardClick(card.id)} />
            <br />
            <h2>{card.title}</h2>
          </div>
        ))}
        <button onClick={() => handleArrowClick('next')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M13.314 12.0705L8.36396 7.12049C8.18181 6.93189 8.08101 6.67929 8.08329 6.41709C8.08557 6.1549 8.19074 5.90408 8.37615 5.71867C8.56155 5.53327 8.81237 5.4281 9.07456 5.42582C9.33676 5.42354 9.58936 5.52434 9.77796 5.70649L15.435 11.3635C15.6224 11.551 15.7278 11.8053 15.7278 12.0705C15.7278 12.3357 15.6224 12.59 15.435 12.7775L9.77796 18.4345C9.58936 18.6167 9.33676 18.7174 9.07456 18.7152C8.81237 18.7129 8.56155 18.6077 8.37615 18.4223C8.19074 18.2369 8.08557 17.9861 8.08329 17.7239C8.08101 17.4617 8.18181 17.2091 8.36396 17.0205L13.314 12.0705Z" fill="#475569"/>
            </svg>
        </button>
      </div>
    </div>
  );
};

export default Activities;
