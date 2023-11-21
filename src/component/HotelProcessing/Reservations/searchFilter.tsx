import React, { useState } from 'react';
import './/searchBar.css';
import ReservationModal from './ReservationModal';

interface ReservationData {
    name: string;
    reservationNumber: string;
    status: string;
    checkIn: string;
    checkOut: string;
    bookingRate: string;
    roomType: string;
    roomNumber: string;
    bookingDate: string;
}

const SearchNames = () => {
    const [searchText, setSearchText] = useState('');
    const [filter, setFilter] = useState('all');
    const [data] = useState<ReservationData[]>([
        {
            name: "Gbenga Daniel",
            reservationNumber: "001",
            status: "pending",
            checkIn: "26/05/2023",
            checkOut: "30/05/2023",
            bookingRate: "₦ 2,000.00",
            roomType: "Standard(2)/Classic(2)",
            roomNumber: "4",
            bookingDate: "20/05/2023",
        },
        {
            name: "Adetorera Marcus",
            reservationNumber: "002",
            status: "completed",
            checkIn: "27/05/2023",
            checkOut: "1/06/2023",
            bookingRate: "₦ 5,000.00",
            roomType: "Executive",
            roomNumber: "1",
            bookingDate: "22/05/2023",
        },
        {
            name: "Dahiru Ahmed",
            reservationNumber: "003",
            status: "denied",
            checkIn: "30/05/2023",
            checkOut: "31/05/2023",
            bookingRate: "₦ 55,000.00",
            roomType: "Presidential",
            roomNumber: "1",
            bookingDate: "29/05/2023",
        },
    ]);
    const [selectedData, setSelectedData] = useState<ReservationData | null>(null);

    const handleRowClick = (rowData: ReservationData) => {
        setSelectedData(rowData);
    };

    const closeModal = () => {
        setSelectedData(null);
    };

    const filteredData = data
        .filter((row) => {
        const rowValues = Object.values(row).map((value) => value.toLowerCase());
        return rowValues.some((value) => value.includes(searchText.toLowerCase()));
        })
        .filter((row) => {
        if (filter === 'all') return true;
        return row.status === filter;
        });

        // const handleSearch = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        //     setSearchText(e.target.value);
        // };

        const handleFilter = (selectedFilter: React.SetStateAction<string>) => {
            setFilter(selectedFilter);
        };


  return (
    <>
        <form className="searchBar-inline">
            <input
            id="text"
            placeholder="Name, reservation number"
            name=""
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            />

            <button type="submit">Search</button>
        </form>

        <div className="tableContainermaincontent">
            <div className="reservationstablecontaainer">
                <div className="tableContent">
                    <div className="row">
                        <div className="reservationsTableColumn">
                            <button>S/N</button>
                        </div>

                        <div className="reservationsTableColumn">
                            <button>Guests name</button>
                        </div>

                        <div className="reservationsTableColumn">
                            <button>Reservation no.</button>
                        </div>

                        <div className="reservationsTableColumn">
                            <div className="confirmationStatusDrop">
                                <select value={filter} onChange={(e) => handleFilter(e.target.value)}>
                                    <option value="all">Confirmartion Status</option>
                                    <option value="pending">Pending</option>
                                    <option value="completed">Completed</option>
                                    <option value="denied">Denied</option>
                                </select>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="5" height="4" viewBox="0 0 5 4" fill="none">
                                        <path d="M0.5 1L2.5 3L4.5 1" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div className="reservationsTableColumn">
                            <button>Check-in date</button>
                        </div>

                        <div className="reservationsTableColumn">
                            <button>Check-out date</button>
                        </div>

                        <div className="reservationsTableColumn">
                            <button>Booking rate</button>
                        </div>

                        <div className="reservationsTableColumn">
                            <button>Room type(s)</button>
                        </div>

                        <div className="reservationsTableColumn">
                            <button>Number of room(s)</button>
                        </div>

                        <div className="reservationsTableColumn">
                            <button>Booking date</button>
                        </div>
                    </div>
                    {filteredData.map((row, index) => (
                        <div key={index} className="row" onClick={() => handleRowClick(row)}>
                            <div className="reservationsTableColumn">
                                <div className="reservationsTableContent">
                                    <p>{index + 1}</p>
                                </div>
                            </div>

                            <div className="reservationsTableColumn">
                                <div className="reservationsTableContent">
                                    <p>{row.name}</p>
                                </div>
                            </div>

                            <div className="reservationsTableColumn">
                                <div className="reservationsTableContent">
                                    <p>{row.reservationNumber}</p>
                                </div>
                            </div>

                            <div className="reservationsTableColumn">
                                <div className="reservationsTableContent">
                                    <p>{row.status}</p>
                                </div>
                            </div>

                            <div className="reservationsTableColumn">
                                <div className="reservationsTableContent">
                                    <p>
                                        {row.checkIn}
                                    </p>
                                </div>
                            </div>

                            <div className="reservationsTableColumn">
                                <div className="reservationsTableContent">
                                    <p>
                                        {row.checkOut}
                                    </p>
                                </div>
                            </div>

                            <div className="reservationsTableColumn">
                                <div className="reservationsTableContent">
                                    <p>
                                        {row.bookingRate}
                                    </p>
                                </div>
                            </div>

                            <div className="reservationsTableColumn">
                                <div className="reservationsTableContent">
                                    <p>
                                        {row.roomType}
                                    </p>
                                </div>
                            </div>

                            <div className="reservationsTableColumn">
                                <div className="reservationsTableContent">
                                    <p>
                                        {row.roomNumber}
                                    </p>
                                </div>
                            </div>

                            <div className="reservationsTableColumn">
                                <div className="reservationsTableContent">
                                    <p>
                                        {row.bookingDate}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

      {selectedData && (
        <ReservationModal data={selectedData} closeModal={closeModal} />
      )}
    </>
  );
};

export default SearchNames;
