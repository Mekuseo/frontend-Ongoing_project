import ".//table.css"
import redmore from "../../../assets/pics/red-more.png";
// import Search from "./searchBar";
// import Confirmation from "./DateDropDown";
import SearchNames from "./searchFilter";


const Table: React.FC = () => {
    return (
        <>
            <div className="tableContainer">
                {/* <Search /> */}
                <SearchNames/>

                <div className="tableContent">

                    <div className="listedTable">
                        <p>
                            <img src={redmore} alt="" className="redmore"/>
                            Uncompleted transactions are listed as pending.
                        </p>

                        <p>
                            <img src={redmore} alt="" className="redmore"/>
                            Successful transactions are listed as completed.
                        </p>

                        <p>
                            <img src={redmore} alt="" className="redmore"/>
                            Unsuccessful transactions are listed as failed.
                        </p>
                    </div>

                    
                </div>
            </div>
            

        </>
    );
};

export default Table;