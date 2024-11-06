import PropTypes from "prop-types";
import { LineChart, Line, ResponsiveContainer, YAxis } from "recharts";

const SingleLineChart = ({ data, dataKey, currentChanges }) => {
  const stroke = currentChanges > 0 ? "#4ADE80" : "red";
  const priceData = data || [];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={priceData}
        margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
      >
        <YAxis
          domain={[priceData[0], priceData[priceData.length]]}
          hide={true}
        />
        <Line dataKey={dataKey} stroke={stroke} strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};

SingleLineChart.propTypes = {
  data: PropTypes.array.isRequired,
  dataKey: PropTypes.string.isRequired,
  currentChanges: PropTypes.number.isRequired,
};

export default SingleLineChart;
