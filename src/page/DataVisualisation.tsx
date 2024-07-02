import Header from "../components/User/header/Header";
import BarChart from "../components/Visualisation/BarChart";
import PieChart from "../components/Visualisation/PieChart";

import "../components/Visualisation/visualisation.css";
const DataVisualisation = () => {
  return (
    <>
      <Header />
      <div className="visualisation-container">
        <div className="piechart">
          <PieChart />
        </div>
        <div className="barchart">
          <BarChart />
        </div>
      </div>
    </>
  );
};

export default DataVisualisation;
