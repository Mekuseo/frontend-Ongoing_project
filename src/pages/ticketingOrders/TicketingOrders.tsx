import Navbar from "../../component/HomePage/header/header";
import { Typography } from "antd";

const Table = [
  {
    headers: [
      "Reference ID",
      "Name",
      "Email address",
      "Payment",
      "Phone Number",
      "Number of tickets",
      "Number of Event",
      "Amount",
      "Booking Date",
    ],
    row1: [
      "001",
      "Gbenga Daniel",
      "Gb007@gmail.com",
      "Confirmed",
      "***********",
      4,
      "Dee’s hangout",
      "Free",
      "20/05/2023",
    ],
    row2: [
      "002",
      "Dahiru Ahmed",
      "Ahmed@gmail.com",
      "Awaiting",
      "***********",
      1,
      "Gwalazo",
      "N5,000.00",
      "22/05/2023",
    ],
  },
];

export default function TicketingOrders() {
  return (
    <div>
      <div style={{ marginBottom: "80px" }}>
        <Navbar />
      </div>
      <Typography
        style={{
          fontFamily: "raleway, sans-serif",
          fontSize: "40px",
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        Ticketing and Orders
      </Typography>
      <table style={{ margin: "0 auto", marginTop: "20px" }}>
        <thead>
          <tr>
            {Table[0].headers.map((header, index) => (
              <th
                key={index}
                style={{
                  width: "88px",
                  borderBottom: "1px solid #92E3A9",
                  background: "#E9F1EA",
                  padding: "12px 8px",
                  borderRadius: "5px",
                  fontFamily: "volkhov, sans-serif",
                  fontSize: "8px",
                  color: "#263238",
                  height: "44px",
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Table[0].row1.map((data, index) => (
              <td
                key={index}
                style={{
                  color: "#263238;",
                  fontFamily: "volkhov, sans-serif",
                  fontSize: "10px",
                  width: "100px",
                  padding: "12px 8px",
                  borderBottom: "1px solid #92E3A9",
                  textAlign: "center",
                }}
              >
                {data}
              </td>
            ))}
          </tr>
          <tr>
            {Table[0].row2.map((data, index) => (
              <td
                key={index}
                style={{
                  color: "#263238;",
                  fontFamily: "volkhov, sans-serif",
                  fontSize: "10px",
                  width: "100px",
                  padding: "12px 8px",
                  borderBottom: "1px solid #92E3A9",
                  textAlign: "center",
                }}
              >
                {data}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
