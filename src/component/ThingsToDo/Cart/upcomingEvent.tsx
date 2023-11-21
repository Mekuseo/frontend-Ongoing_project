import ".//cart.css"

const items = [
    { 
        id: 1, 
        imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/af3abd5d-d234-4626-9217-162817a894dd/day93q4-22cc4351-cfe1-40a7-91ef-14a6e6606386.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FmM2FiZDVkLWQyMzQtNDYyNi05MjE3LTE2MjgxN2E4OTRkZFwvZGF5OTNxNC0yMmNjNDM1MS1jZmUxLTQwYTctOTFlZi0xNGE2ZTY2MDYzODYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.z-bemkyHR-vXySAkCMQuXhz_SNvLRWi5WZscttD-9EQ',
        eventName: 'All white party',
        likeCount: '120',
        date: 'Saturday, September 9th, 10:00pm',
        location: 'Wuse,Abuja. Nigeria',
        price: '₦ 45,000.00',
        organizer: 'Gbenga Events',
    },

    { 
        id: 2, 
        imageUrl: 'https://appalachiantrail.org/wp-content/uploads/2022/05/Group-Shot-Go-Dark-Horizonline-Pictures-4x3-WEB.jpg',
        eventName: 'Nature hiking day',
        likeCount: '35',
        date: 'Monday, September 4th, 9:00am',
        location: 'Maitama,Abuja. Nigeria',
        price: 'Free',
        organizer: 'Gbenga Events',
    },

    { 
        id: 3, 
        imageUrl: 'https://images.squarespace-cdn.com/content/v1/59b04dcebac9cbc8f77cc21f/1653678402105-THGJEL9H7F20JVMXCRB4/Paint+and+Sip+square+graphic.png?format=2500w',
        eventName: 'Paint & Sip',
        likeCount: '80',
        date: 'Friday, September 20th, 6:00pm',
        location: 'Gwarinpa,Abuja.Nigeria',
        price: '₦ 30,000.00',
        organizer: 'Gbenga Events',
    },

    { 
        id: 4, 
        imageUrl: 'https://img.freepik.com/premium-vector/football-tournament-concept-with-3d-soccer-ball-participating-team-vs-b-blue-green-stadium-background_1302-35561.jpg',
        eventName: 'Football Tournament',
        likeCount: '24',
        date: 'Tuesday, September 12th, 12:00pm',
        location: 'Lifecamp,Abuja.Nigeria',
        price: '₦ 15,000.00',
        organizer: 'Gbenga Events',
    },
];

const ToDoUpcomingEvent = () =>{
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

export default ToDoUpcomingEvent;