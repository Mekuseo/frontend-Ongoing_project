import "./hangOut.css";

interface HighlightProps {
    highlightValue: string;
    infoValue: string;
}

const Highlight: React.FC<HighlightProps> = (
    {
        highlightValue,
        infoValue,
    }) => {
    return(
        <>
            <div className="highlightHangout">
                <div className="highlighightHangOutContainer">
                    <h1>
                        Highlight of activity 
                    </h1>

                    <p>
                        {highlightValue}
                    </p>
                </div>

                <h4>
                    Important Information
                </h4>

                <span>
                    What to bring
                </span>

                <br/>
                &nbsp;
                <div className="whatToBring">
                    {infoValue}
                </div>
                
                {/* <ul>
                    <li>
                        {infoValue}
                    </li>

                    <li>
                        Comfortable shoes
                    </li>

                    <li>
                        Warm clothing
                    </li>
                </ul> */}
            </div>
        </>
    );
};

export default Highlight;