import React, { useRef } from 'react';
import '../toDo.css';

const cards = [
    { 
      id: 0, 
      imageUrl: 'https://s3-alpha-sig.figma.com/img/1f92/8881/0fc8c16e74b1ee655de43809aa139cc4?Expires=1694995200&Signature=jyEWyX9U2EG6RJv9fo87fyqnt6bXlD1BQE-Bb9MJCemCKvvnyr3d2WFK39w~dgkPFssUBobBfo2Rno-rpghZrrjHu4d6G6Vq1y6ud1YIAXcYNNS~EsQG4Qd8WWF1rg-v1-ks3dXmgHvQ6Ns5GmwRh8trHSX4Faigtyw6kaT3By2-X3V2DVH3rlNzw29iFFxxhjy1HEirJ1~CELBonAErE3ZDgULOUzSdtMAhVkqUqkLKebgkMRK5emsj2D-VrPZaOSRYpKtTQCDlj1K2ZAjos8nkKTinA7SThS77a2TnmaMG5geLMkiJBHjeO74I-d3j0YXeUFu0KZy168IIxR1Mgg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', 
      title: 'Neighbourhood Hangout' ,
      subhead: 'IT’S A PARTY LIKE NEVER BEFORE',
      location: 'Wuse: 5 minus from to city centre',
      date: 'Sat 19th Sept 2023 - 5:00pm WAT',
      price: 'N5,000.00 per person',
      organizer: 'Organizer: Daniel Events'
    },

    { 
        id: 1, 
        imageUrl: 'https://s3-alpha-sig.figma.com/img/1f92/8881/0fc8c16e74b1ee655de43809aa139cc4?Expires=1694995200&Signature=jyEWyX9U2EG6RJv9fo87fyqnt6bXlD1BQE-Bb9MJCemCKvvnyr3d2WFK39w~dgkPFssUBobBfo2Rno-rpghZrrjHu4d6G6Vq1y6ud1YIAXcYNNS~EsQG4Qd8WWF1rg-v1-ks3dXmgHvQ6Ns5GmwRh8trHSX4Faigtyw6kaT3By2-X3V2DVH3rlNzw29iFFxxhjy1HEirJ1~CELBonAErE3ZDgULOUzSdtMAhVkqUqkLKebgkMRK5emsj2D-VrPZaOSRYpKtTQCDlj1K2ZAjos8nkKTinA7SThS77a2TnmaMG5geLMkiJBHjeO74I-d3j0YXeUFu0KZy168IIxR1Mgg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', 
        title: 'Neighbourhood Hangout' ,
        subhead: 'IT’S A PARTY LIKE NEVER BEFORE',
        location: 'Wuse: 5 minus from to city centre',
        date: 'Sat 19th Sept 2023 - 5:00pm WAT',
        price: 'N5,000.00 per person',
        organizer: 'Organizer: Daniel Events'
    },

    { 
        id: 2, 
        imageUrl: 'https://s3-alpha-sig.figma.com/img/1f92/8881/0fc8c16e74b1ee655de43809aa139cc4?Expires=1694995200&Signature=jyEWyX9U2EG6RJv9fo87fyqnt6bXlD1BQE-Bb9MJCemCKvvnyr3d2WFK39w~dgkPFssUBobBfo2Rno-rpghZrrjHu4d6G6Vq1y6ud1YIAXcYNNS~EsQG4Qd8WWF1rg-v1-ks3dXmgHvQ6Ns5GmwRh8trHSX4Faigtyw6kaT3By2-X3V2DVH3rlNzw29iFFxxhjy1HEirJ1~CELBonAErE3ZDgULOUzSdtMAhVkqUqkLKebgkMRK5emsj2D-VrPZaOSRYpKtTQCDlj1K2ZAjos8nkKTinA7SThS77a2TnmaMG5geLMkiJBHjeO74I-d3j0YXeUFu0KZy168IIxR1Mgg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', 
        title: 'Neighbourhood Hangout' ,
        subhead: 'IT’S A PARTY LIKE NEVER BEFORE',
        location: 'Wuse: 5 minus from to city centre',
        date: 'Sat 19th Sept 2023 - 5:00pm WAT',
        price: 'N5,000.00 per person',
        organizer: 'Organizer: Daniel Events' 
    },

    { 
        id: 3, 
        imageUrl: 'https://s3-alpha-sig.figma.com/img/1f92/8881/0fc8c16e74b1ee655de43809aa139cc4?Expires=1694995200&Signature=jyEWyX9U2EG6RJv9fo87fyqnt6bXlD1BQE-Bb9MJCemCKvvnyr3d2WFK39w~dgkPFssUBobBfo2Rno-rpghZrrjHu4d6G6Vq1y6ud1YIAXcYNNS~EsQG4Qd8WWF1rg-v1-ks3dXmgHvQ6Ns5GmwRh8trHSX4Faigtyw6kaT3By2-X3V2DVH3rlNzw29iFFxxhjy1HEirJ1~CELBonAErE3ZDgULOUzSdtMAhVkqUqkLKebgkMRK5emsj2D-VrPZaOSRYpKtTQCDlj1K2ZAjos8nkKTinA7SThS77a2TnmaMG5geLMkiJBHjeO74I-d3j0YXeUFu0KZy168IIxR1Mgg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', 
        title: 'Neighbourhood Hangout' ,
        subhead: 'IT’S A PARTY LIKE NEVER BEFORE',
        location: 'Wuse: 5 minus from to city centre',
        date: 'Sat 19th Sept 2023 - 5:00pm WAT',
        price: 'N5,000.00 per person',
        organizer: 'Organizer: Daniel Events'
    },

    { 
        id: 4, 
        imageUrl: 'https://s3-alpha-sig.figma.com/img/1f92/8881/0fc8c16e74b1ee655de43809aa139cc4?Expires=1694995200&Signature=jyEWyX9U2EG6RJv9fo87fyqnt6bXlD1BQE-Bb9MJCemCKvvnyr3d2WFK39w~dgkPFssUBobBfo2Rno-rpghZrrjHu4d6G6Vq1y6ud1YIAXcYNNS~EsQG4Qd8WWF1rg-v1-ks3dXmgHvQ6Ns5GmwRh8trHSX4Faigtyw6kaT3By2-X3V2DVH3rlNzw29iFFxxhjy1HEirJ1~CELBonAErE3ZDgULOUzSdtMAhVkqUqkLKebgkMRK5emsj2D-VrPZaOSRYpKtTQCDlj1K2ZAjos8nkKTinA7SThS77a2TnmaMG5geLMkiJBHjeO74I-d3j0YXeUFu0KZy168IIxR1Mgg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', 
        title: 'Neighbourhood Hangout' ,
        subhead: 'IT’S A PARTY LIKE NEVER BEFORE',
        location: 'Wuse: 5 minus from to city centre',
        date: 'Sat 19th Sept 2023 - 5:00pm WAT',
        price: 'N5,000.00 per person',
        organizer: 'Organizer: Daniel Events'
    },

    { 
        id: 5, 
        imageUrl: 'https://s3-alpha-sig.figma.com/img/1f92/8881/0fc8c16e74b1ee655de43809aa139cc4?Expires=1694995200&Signature=jyEWyX9U2EG6RJv9fo87fyqnt6bXlD1BQE-Bb9MJCemCKvvnyr3d2WFK39w~dgkPFssUBobBfo2Rno-rpghZrrjHu4d6G6Vq1y6ud1YIAXcYNNS~EsQG4Qd8WWF1rg-v1-ks3dXmgHvQ6Ns5GmwRh8trHSX4Faigtyw6kaT3By2-X3V2DVH3rlNzw29iFFxxhjy1HEirJ1~CELBonAErE3ZDgULOUzSdtMAhVkqUqkLKebgkMRK5emsj2D-VrPZaOSRYpKtTQCDlj1K2ZAjos8nkKTinA7SThS77a2TnmaMG5geLMkiJBHjeO74I-d3j0YXeUFu0KZy168IIxR1Mgg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', 
        title: 'Neighbourhood Hangout' ,
        subhead: 'IT’S A PARTY LIKE NEVER BEFORE',
        location: 'Wuse: 5 minus from to city centre',
        date: 'Sat 19th Sept 2023 - 5:00pm WAT',
        price: 'N5,000.00 per person',
        organizer: 'Organizer: Daniel Events'
    },
];

const HangOutCards: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 200;
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 200;
    }
  };

  return (
    <div className="scrollHangout-container">
      <div className="scrollHangout" ref={scrollRef}>
        {cards.map((card) => (
            <div className="hangOutCardsCol" key={card.id}>
                <div className="hangOutCard">
                    <div className="hangOutCardImage">
                        <img src={card.imageUrl} />
                        <div className="hangOutCardImageTopRight">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clip-path="url(#clip0_5922_996)">
                                    <path d="M7 11V19C7 19.2652 6.89464 19.5196 6.70711 19.7071C6.51957 19.8946 6.26522 20 6 20H4C3.73478 20 3.48043 19.8946 3.29289 19.7071C3.10536 19.5196 3 19.2652 3 19V12C3 11.7348 3.10536 11.4804 3.29289 11.2929C3.48043 11.1054 3.73478 11 4 11H7ZM7 11C8.06087 11 9.07828 10.5786 9.82843 9.82843C10.5786 9.07828 11 8.06087 11 7V6C11 5.46957 11.2107 4.96086 11.5858 4.58579C11.9609 4.21071 12.4696 4 13 4C13.5304 4 14.0391 4.21071 14.4142 4.58579C14.7893 4.96086 15 5.46957 15 6V11H18C18.5304 11 19.0391 11.2107 19.4142 11.5858C19.7893 11.9609 20 12.4696 20 13L19 18C18.8562 18.6135 18.5834 19.1402 18.2227 19.501C17.8619 19.8617 17.4328 20.0368 17 20H10C9.20435 20 8.44129 19.6839 7.87868 19.1213C7.31607 18.5587 7 17.7956 7 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_5922_996">
                                    <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>

                            <br />
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clip-path="url(#clip0_5922_999)">
                                    <path d="M3 12C3 12.7956 3.31607 13.5587 3.87868 14.1213C4.44129 14.6839 5.20435 15 6 15C6.79565 15 7.55871 14.6839 8.12132 14.1213C8.68393 13.5587 9 12.7956 9 12C9 11.2044 8.68393 10.4413 8.12132 9.87868C7.55871 9.31607 6.79565 9 6 9C5.20435 9 4.44129 9.31607 3.87868 9.87868C3.31607 10.4413 3 11.2044 3 12Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M15 6C15 6.79565 15.3161 7.55871 15.8787 8.12132C16.4413 8.68393 17.2044 9 18 9C18.7956 9 19.5587 8.68393 20.1213 8.12132C20.6839 7.55871 21 6.79565 21 6C21 5.20435 20.6839 4.44129 20.1213 3.87868C19.5587 3.31607 18.7956 3 18 3C17.2044 3 16.4413 3.31607 15.8787 3.87868C15.3161 4.44129 15 5.20435 15 6Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M15 18C15 18.7956 15.3161 19.5587 15.8787 20.1213C16.4413 20.6839 17.2044 21 18 21C18.7956 21 19.5587 20.6839 20.1213 20.1213C20.6839 19.5587 21 18.7956 21 18C21 17.2044 20.6839 16.4413 20.1213 15.8787C19.5587 15.3161 18.7956 15 18 15C17.2044 15 16.4413 15.3161 15.8787 15.8787C15.3161 16.4413 15 17.2044 15 18Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8.69995 10.7008L15.3 7.30078" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8.69995 13.3008L15.3 16.7008" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_5922_999">
                                    <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>

                    <br />
                    
                    <div className="hangOutCardText">
                        <h3 className='title'>
                            {card.title}
                        </h3>

                        <p className='subhead'>
                            {card.subhead}
                        </p>

                        <p className='location'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                                <path d="M5.33333 6.43969V9.49985C5.33333 9.65899 5.40357 9.81161 5.5286 9.92413C5.65362 10.0367 5.82319 10.0999 6 10.0999C6.17681 10.0999 6.34638 10.0367 6.4714 9.92413C6.59643 9.81161 6.66667 9.65899 6.66667 9.49985V6.43969C7.47603 6.29099 8.19522 5.87711 8.6848 5.27828C9.17438 4.67945 9.39948 3.93833 9.31645 3.19861C9.23343 2.45889 8.84819 1.77327 8.23544 1.27467C7.62268 0.776062 6.82605 0.5 6 0.5C5.17395 0.5 4.37732 0.776062 3.76456 1.27467C3.15181 1.77327 2.76657 2.45889 2.68355 3.19861C2.60052 3.93833 2.82562 4.67945 3.3152 5.27828C3.80478 5.87711 4.52397 6.29099 5.33333 6.43969ZM6 1.69945C6.39556 1.69945 6.78224 1.80502 7.11114 2.00282C7.44004 2.20062 7.69638 2.48175 7.84776 2.81068C7.99914 3.1396 8.03874 3.50154 7.96157 3.85072C7.8844 4.1999 7.69392 4.52065 7.41421 4.7724C7.13451 5.02415 6.77814 5.19559 6.39018 5.26504C6.00222 5.3345 5.60009 5.29885 5.23463 5.16261C4.86918 5.02636 4.55682 4.79564 4.33706 4.49962C4.1173 4.20359 4 3.85557 4 3.49954C4 3.02213 4.21071 2.56427 4.58579 2.22668C4.96086 1.8891 5.46957 1.69945 6 1.69945ZM8.80667 7.95177C8.71912 7.93522 8.62881 7.93436 8.54089 7.94922C8.45297 7.96409 8.36916 7.9944 8.29426 8.03841C8.21935 8.08243 8.15481 8.1393 8.10432 8.20576C8.05383 8.27223 8.01838 8.347 8 8.42579C7.98161 8.50459 7.98065 8.58587 7.99717 8.66501C8.01369 8.74414 8.04736 8.81957 8.09627 8.88698C8.14517 8.9544 8.20835 9.01249 8.2822 9.05793C8.35605 9.10338 8.43912 9.13528 8.52667 9.15183C10.04 9.42184 10.6667 9.90787 10.6667 10.0999C10.6667 10.4479 9.03333 11.2999 6 11.2999C2.96667 11.2999 1.33333 10.4479 1.33333 10.0999C1.33333 9.90787 1.96 9.42184 3.47333 9.12783C3.56088 9.11128 3.64395 9.07938 3.7178 9.03393C3.79165 8.98849 3.85483 8.9304 3.90373 8.86298C3.95264 8.79556 3.98631 8.72014 4.00283 8.641C4.01935 8.56187 4.01838 8.48059 4 8.40179C3.98161 8.32299 3.94617 8.24823 3.89568 8.18176C3.84519 8.11529 3.78065 8.05843 3.70574 8.01441C3.63084 7.97039 3.54703 7.94009 3.45911 7.92522C3.37119 7.91035 3.28088 7.91122 3.19333 7.92777C1.16667 8.34779 0 9.13383 0 10.0999C0 11.678 3.02 12.5 6 12.5C8.98 12.5 12 11.678 12 10.0999C12 9.13383 10.8333 8.34779 8.80667 7.95177Z" fill="#263238"/>
                            </svg>
                            {card.location}
                        </p>

                        <p className='location'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                                <path d="M4 3.375C3.795 3.375 3.625 3.205 3.625 3V1.5C3.625 1.295 3.795 1.125 4 1.125C4.205 1.125 4.375 1.295 4.375 1.5V3C4.375 3.205 4.205 3.375 4 3.375Z" fill="#263238"/>
                                <path d="M8 3.375C7.795 3.375 7.625 3.205 7.625 3V1.5C7.625 1.295 7.795 1.125 8 1.125C8.205 1.125 8.375 1.295 8.375 1.5V3C8.375 3.205 8.205 3.375 8 3.375Z" fill="#263238"/>
                                <path d="M10.25 5.41992H1.75C1.545 5.41992 1.375 5.24992 1.375 5.04492C1.375 4.83992 1.545 4.66992 1.75 4.66992H10.25C10.455 4.66992 10.625 4.83992 10.625 5.04492C10.625 5.24992 10.455 5.41992 10.25 5.41992Z" fill="#263238"/>
                                <path d="M8 11.875H4C2.175 11.875 1.125 10.825 1.125 9V4.75C1.125 2.925 2.175 1.875 4 1.875H8C9.825 1.875 10.875 2.925 10.875 4.75V9C10.875 10.825 9.825 11.875 8 11.875ZM4 2.625C2.57 2.625 1.875 3.32 1.875 4.75V9C1.875 10.43 2.57 11.125 4 11.125H8C9.43 11.125 10.125 10.43 10.125 9V4.75C10.125 3.32 9.43 2.625 8 2.625H4Z" fill="#263238"/>
                                <path d="M4.25 7.75001C4.185 7.75001 4.12 7.73501 4.06 7.71001C4 7.68501 3.945 7.65 3.895 7.605C3.85 7.555 3.81499 7.50001 3.78999 7.44001C3.76499 7.38001 3.75 7.31501 3.75 7.25001C3.75 7.12001 3.805 6.99001 3.895 6.89501C3.945 6.85001 4 6.815 4.06 6.79C4.15 6.75 4.25001 6.74 4.35001 6.76C4.38001 6.765 4.41 6.775 4.44 6.79C4.47 6.8 4.5 6.81501 4.53 6.83501C4.555 6.85501 4.58 6.87501 4.605 6.89501C4.625 6.92001 4.64999 6.94501 4.66499 6.97001C4.68499 7.00001 4.70001 7.03 4.71001 7.06C4.72501 7.09 4.73501 7.12 4.74001 7.15C4.74501 7.185 4.75 7.21501 4.75 7.25001C4.75 7.38001 4.695 7.51 4.605 7.605C4.51 7.695 4.38 7.75001 4.25 7.75001Z" fill="#263238"/>
                                <path d="M6 7.74945C5.87 7.74945 5.74 7.69444 5.645 7.60444C5.625 7.57944 5.60501 7.55445 5.58501 7.52945C5.56501 7.49945 5.54999 7.46945 5.53999 7.43945C5.52499 7.40945 5.51499 7.37945 5.50999 7.34945C5.50499 7.31445 5.5 7.28445 5.5 7.24945C5.5 7.18445 5.51499 7.11945 5.53999 7.05945C5.56499 6.99945 5.6 6.94445 5.645 6.89445C5.785 6.75445 6.01 6.70944 6.19 6.78944C6.255 6.81444 6.305 6.84945 6.355 6.89445C6.445 6.98945 6.5 7.11945 6.5 7.24945C6.5 7.28445 6.49501 7.31445 6.49001 7.34945C6.48501 7.37945 6.47501 7.40945 6.46001 7.43945C6.45001 7.46945 6.43499 7.49945 6.41499 7.52945C6.39499 7.55445 6.375 7.57944 6.355 7.60444C6.305 7.64944 6.255 7.68446 6.19 7.70946C6.13 7.73445 6.065 7.74945 6 7.74945Z" fill="#263238"/>
                                <path d="M4.25 9.49945C4.185 9.49945 4.12 9.48445 4.06 9.45946C4 9.43446 3.945 9.39944 3.895 9.35444C3.85 9.30444 3.81499 9.25445 3.78999 9.18945C3.76499 9.12945 3.75 9.06445 3.75 8.99945C3.75 8.86945 3.805 8.73945 3.895 8.64445C3.945 8.59945 4 8.56444 4.06 8.53944C4.245 8.45944 4.465 8.50445 4.605 8.64445C4.625 8.66945 4.64999 8.69445 4.66499 8.71945C4.68499 8.74945 4.70001 8.77945 4.71001 8.80945C4.72501 8.83945 4.73501 8.86945 4.74001 8.90445C4.74501 8.93445 4.75 8.96945 4.75 8.99945C4.75 9.12945 4.695 9.25944 4.605 9.35444C4.51 9.44444 4.38 9.49945 4.25 9.49945Z" fill="#263238"/>
                            </svg>
                            {card.date}
                        </p>

                        <p className='location'>
                            {card.price}
                        </p>

                        <p className='organizer'>
                            {card.organizer}
                        </p>
                    </div>
                </div>
            </div>
        ))}
      </div>

      <button className="scrollHangout-button" onClick={scrollRight}>
        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" viewBox="0 0 5 8" fill="none">
            <path d="M3.42123 4L0.183604 1.02019C0.0644606 0.906652 -0.00146551 0.75459 2.47254e-05 0.596752C0.00151496 0.438914 0.0703023 0.287929 0.191571 0.176317C0.31284 0.0647042 0.476888 0.00139432 0.648382 2.27565e-05C0.819875 -0.00134881 0.985094 0.0593277 1.10845 0.168984L4.8085 3.5744C4.93112 3.68729 5 3.84038 5 4C5 4.15962 4.93112 4.31271 4.8085 4.4256L1.10845 7.83102C0.985094 7.94067 0.819875 8.00135 0.648382 7.99998C0.476888 7.99861 0.31284 7.9353 0.191571 7.82368C0.0703023 7.71207 0.00151496 7.56109 2.47254e-05 7.40325C-0.00146551 7.24541 0.0644606 7.09335 0.183604 6.97981L3.42123 4Z" fill="#475569"/>
        </svg>
      </button>

      <button className="scrollHangout-button" onClick={scrollLeft}>
        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" viewBox="0 0 5 8" fill="none">
            <path d="M1.57877 4L4.8164 6.97981C4.93554 7.09335 5.00147 7.24541 4.99998 7.40325C4.99849 7.56109 4.9297 7.71207 4.80843 7.82368C4.68716 7.9353 4.52311 7.99861 4.35162 7.99998C4.18012 8.00135 4.01491 7.94067 3.89155 7.83102L0.191501 4.4256C0.0688831 4.31271 -3.35736e-07 4.15962 -3.49691e-07 4C-3.63646e-07 3.84038 0.068883 3.68729 0.191501 3.5744L3.89155 0.168984C4.01491 0.0593277 4.18012 -0.00134842 4.35162 2.29449e-05C4.52311 0.00139431 4.68716 0.0647044 4.80843 0.176317C4.9297 0.28793 4.99848 0.438914 4.99997 0.596752C5.00146 0.75459 4.93554 0.906652 4.8164 1.02019L1.57877 4Z" fill="#475569"/>
        </svg>
      </button>

      <br /><br />
    </div>
  );
};

export default HangOutCards;