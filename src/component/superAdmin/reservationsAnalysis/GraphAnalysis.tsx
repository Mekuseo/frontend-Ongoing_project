import "./ReservationsAnalysis.css";
import { LineChart } from "@mui/x-charts/LineChart";
import { GraphData } from "./GraphData";

const GraphAnalysis = (props: { title: string | undefined }) => {
  // Assuming you want to display data for January (you can change the month as needed)
  const selectedMonth = "Jan";
  
  const selectedMonthData = GraphData[0].Data.filter((item) => item.Month === selectedMonth);
  
  const xAxisData = selectedMonthData.map((item) => item.Day);
  const yAxisData = selectedMonthData.map((item) => item.Bookings);

  return (
    <div className="graphAnalysis-card">
      <p className="graph-title">{props.title}</p>
      <LineChart
        xAxis={[{ data: xAxisData }]}
        series={[
          {
            curve: "linear",
            data: yAxisData,
            area: true,
          },
        ]}
        width={330}
        height={250}
        title={props.title}
      />
      <span className="graphMonth">{selectedMonth} </span>
    </div>
  );
};

export default GraphAnalysis;
