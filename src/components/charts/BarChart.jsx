import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  ReferenceLine,
  Cell,
} from "recharts";

const CustomBarChart = ({ data }) => {
  const average = Math.floor(
    data?.reduce((sum, item) => sum + item.value, 0) / data?.length
  );

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <XAxis dataKey="month" tick={{ fill: "#aaa" }} />

        <Bar dataKey="value">
          {data?.map((entry, index) => (
            <Cell
              key={entry.month + index}
              fill={entry.change > 0 ? "#3ba904" : "gray"}
              width={25}
              radius={[10, 10, 0, 0]}
            />
          ))}
        </Bar>
        <ReferenceLine
          y={average}
          label={{
            value: `Avg ${average} `,
            fill: "white",
            position: "insideLeft",
            className: "referenceLineLabel",
          }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
CustomBarChart.propTypes = {
  data: PropTypes.shape([
    PropTypes.shape({
      month: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      change: PropTypes.number.isRequired,
    }),
  ]).isRequired,
};

export default CustomBarChart;
