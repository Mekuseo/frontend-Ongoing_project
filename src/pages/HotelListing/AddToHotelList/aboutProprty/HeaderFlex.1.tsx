const HeaderFlexV1 = () => {
  return (
    <div>
      <h1 className="headText">Property Axis</h1>
      <center>
        <div className="myDIV">
          <a href="/aboutProperty">
            <button className="btn clicked">1</button>
          </a>
          <a href="/Amenities">
            <button className="btn">2</button>
          </a>
          <a href="/propertyType">
            <button className="btn">3</button>
          </a>
          <a href="/PropertyPolicy">
            <button className="btn">4</button>
          </a>
          <a href="/commision">
            <button className="btn">5</button>
          </a>
          <a href="/photos">
            <button className="btn">6</button>
          </a>
          <a href="/contract">
            <button className="btn">7</button>
          </a>
        </div>
      </center>
    </div>
  );
};

export default HeaderFlexV1;
