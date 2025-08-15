import { useState } from "react";
import Wrapper from "../assets/wrappers/ChartsContainer";
import BarChartComponent from "./BarChart";
import AreaChartComponent from "./AreaChart";

const ChartsContainer = ({ data }) => {
  const [showBar, setShowBar] = useState(false);

  if (!data || data.length === 0) return null;

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type="button" onClick={() => setShowBar((s) => !s)}>
        {showBar ? "Show Area Chart" : "Show Bar Chart"}
      </button>

      {showBar ? (
        <BarChartComponent data={data} />
      ) : (
        <AreaChartComponent data={data} />
      )}
    </Wrapper>
  );
};

export default ChartsContainer;
