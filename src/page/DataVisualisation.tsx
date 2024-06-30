import Header from "../components/User/Header";
import BarChart from "../components/Visualisation/BarChart";
import PieChart from "../components/Visualisation/PieChart";

const DataVisualisation = () => {
  return (
    <>
      <Header />
      <div className="visualisation-container">
        <div style={{ width: 500 }}>
          <PieChart />
        </div>
        <div style={{ width: 500 }}>
          <BarChart />
        </div>
      </div>
    </>
  );
};

export default DataVisualisation;
