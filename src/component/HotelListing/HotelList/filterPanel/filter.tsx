/* eslint-disable @typescript-eslint/no-unused-vars */
import "./filterSideBar.css"
import sort from "../../../../assets/pics/sort.png"
import OtherFilters from './otherFilters';
import { useState, useEffect } from "react";

const check = [
    {
      id: 1,
      name: "Hotels",
    },
  
    {
      id: 2,
      name: "4 star rating",
    },

    {
        id: 3,
        name: "Free breakfast",
    },

    {
        id: 4,
        name: "3 star rating",
    },
];

const checkRight = [
    {
        id: 5,
        name: "Double bed",
    },

    {
        id: 6,
        name: "Kitchen",
    },

    {
        id: 7,
        name: "Wi-fi",
    },

    {
        id: 8,
        name: "Gym",
    },

]

const Filter = () => {
    const [isFixed, setIsFixed] = useState(false);
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 950;
  
      if (scrollPosition > scrollThreshold) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
        <>

            <div className="sidebarFilter">
                <div className="sort">
                    <img src={sort} alt="" />
                    <p>
                        Sort types
                    </p>
                </div>

                <div className={`popularFilters ${isFixed ? 'fixed' : ''}`}>
                    <h1>
                        Popular filters
                    </h1>

                    <div className="row">
                        <div className="filterColumn">
                            {check.map((checkname) => (
                                <label className="filterContainer">
                                    {checkname.name}
                                    <input type="checkbox" />
                                    <span className="filterTick"></span>
                                </label>
                            ))}

                        </div>

                        <div className="filterColumn">
                            {checkRight.map((checkname) => (
                                <label className="filterContainer">
                                    {checkname.name}
                                    <input type="checkbox" />
                                    <span className="filterTick"></span>
                                </label>
                            ))}
                        </div>

                    </div>
                </div>

                <OtherFilters />
            </div>

        </>
    );
};

export default Filter;