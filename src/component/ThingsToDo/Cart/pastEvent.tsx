import ".//cart.css"

const items = [
    { 
        id: 1, 
        imageUrl: 'https://media.istockphoto.com/id/1402293859/photo/portrait-of-a-diverse-group-of-smiling-ethnic-business-women-standing-together-in-the-office.webp?b=1&s=170667a&w=0&k=20&c=fFhrTb36hHvaGeBmmet6VFi1IienvvQQSrwqqWO0M30=',
        eventName: 'International women’s day',
        likeCount: '20',
        date: 'Thursday, August 28th, 10:00am',
        location: 'Wuse,Abuja. Nigeria',
        price: 'Free',
        organizer: 'Gbenga Events',
    },

    { 
        id: 2, 
        imageUrl: 'https://i1.sndcdn.com/artworks-cwsuvpTgA5pU504z-Ny7WZg-t500x500.jpg',
        eventName: 'Summer Rave',
        likeCount: '205',
        date: 'Monday, August 20th, 9:00am',
        location: 'Maitama,Abuja. Nigeria',
        price: '₦ 5,000.00',
        organizer: 'Gbenga Events',
    },

    { 
        id: 3, 
        imageUrl: 'https://www.gourmetads.com/wp-content/uploads/2020/01/food-festival-advertising-square.jpg',
        eventName: 'Zenith Food & Drink',
        likeCount: '180',
        date: 'Friday, August 10th, 6:00pm',
        location: 'Gwarinpa,Abuja.Nigeria',
        price: '₦ 10,000.00',
        organizer: 'Gbenga Events',
    },
];

const ToDoPastEvent = () =>{
    return(
        <>
            <div>
                {items.map((item) => (
                    <div className="toDoListCard">
                        <div className="row">
                            <div 
                            className="toDoListCardSides cardToDoListImage"
                            key={item.id}
                            style={{
                                backgroundImage: `url(${item.imageUrl})`,
                                backgroundSize: 'cover',
                                height: '240px',
                                borderTopLeftRadius: '5px',
                                borderBottomLeftRadius: '5px',
                            }}
                            >
                            </div>
                            <div className="toDoListCardSides cardToDoListContent">
                                <div>
                                    <h1 className="topic">
                                        {item.eventName}
                                    </h1>
                                </div>

                                <div className="toDoListInformation">
                                    <p className="date">
                                        {item.date}
                                    </p>

                                    <p className="location">
                                        {item.location}
                                    </p>

                                    <p className="price">
                                        {item.price}
                                    </p>

                                    <h1 className="organizer">
                                        {item.organizer}
                                    </h1>
                                </div>
                                
                                <div className="floatright">
                                    <span>
                                        See location
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
};

export default ToDoPastEvent;