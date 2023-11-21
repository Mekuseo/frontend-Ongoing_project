const ImportantInformation = () => {
  return (
    <div
      style={{
        fontFamily: "raleway, sans-serif",
        display: "flex",
        flexDirection: "column",
        gap: "5px",
      }}
    >
      <p
        style={{
          fontSize: "20px",
          fontWeight: "700",
          color: "#263238",
          marginBottom: "12px",
        }}
      >
        Important Information
      </p>
      <p style={{ fontSize: "18px", color: "#263238" }}>What to bring</p>
      <ul
        style={{
          fontSize: "15px",
          color: "#263238",
          marginLeft: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          marginBottom: "15px",
        }}
      >
        <li>Driver's licence</li>
        <li>Comfortable shoes</li>
        <li>Warm Clothing</li>
      </ul>
      <p style={{ fontSize: "20px", color: "#263238", fontWeight: "700" }}>
        Refund policy
      </p>
      <p style={{ fontSize: "15px", color: "#263238" }}>
        Contact organizer for a refund
      </p>
      <p style={{ fontSize: "15px", color: "#263238", marginBottom: "38px" }}>
        Thetravelhunters offer no refunds for ticket and fees
      </p>
      <div
        style={{
          borderRadius: "10px",
          border: "1px dashed #263238",
          padding: "16px 0 21px 31px",
          marginBottom: "34px",
        }}
      >
        <p
          style={{
            fontFamily: "raleway, sans-serif",
            fontSize: "18px",
            fontWeight: "700",
          }}
        >
          Reviews about this organizer
        </p>
        <p style={{ fontFamily: "raleway, sans-serif", fontSize: "15px" }}>
          "The place was a good place, I had fun"
        </p>
        <small style={{ fontFamily: "raleway, sans-serif", fontSize: "10px" }}>Gbenga Daniel</small>
      </div>
    </div>
  );
};

export default ImportantInformation;
