const EventCountryList = () => {
  const eventStates = [
    "Lagos",
    "Port Harcourt",
    "Ibadan",
    "Owerri",
    "Jos",
    "Aba",
    "Akwa",
    "Kaduna",
  ];

  return (
    <div>
      <div
        style={{
          fontSize: "30px",
          fontFamily: "raleway, sans-serif",
          fontWeight: "700",
          marginBottom: "25px",
        }}
      >
        Things to do
      </div>
      <div style={{ display: "flex", justifyContent:"space-between", marginBottom:"10px" }}>
        {eventStates.map((state, index) => (
          <div key={index}>
            <div
              style={{
                backgroundColor: "#263238",
                borderRadius: "8px",
                color: "white",
                padding: "10px 26px",
                fontSize:"20px",
                fontWeight:"700",
                fontFamily:"roboto, sans-serif",
              }}
            >
              {state}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCountryList;
