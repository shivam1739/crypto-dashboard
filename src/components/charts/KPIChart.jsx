import PropTypes from "prop-types";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const KPIChart = ({ data, XAxisDataKey, line1DataKey, line2DataKey }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorLine1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#F6AD55" stopOpacity={0.1} />
            <stop offset="95%" stopColor="#F6AD55" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorLine2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#37D399" stopOpacity={0.1} />
            <stop offset="95%" stopColor="#37D399" stopOpacity={0} />
          </linearGradient>
        </defs>

        <XAxis
          dataKey={XAxisDataKey}
          stroke="#ffffff"
          tick={{ fill: "#b0b0b0" }}
        />
        <YAxis domain={["auto", "auto"]} hide={true} />
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          stroke="#1c1c1c"
        />
        <Tooltip
          contentStyle={{ backgroundColor: "#1e1e1e", borderColor: "#2c2c2c" }}
          labelStyle={{ color: "#ffffff" }}
        />

        <Area
          dataKey={line1DataKey}
          stroke="#F6AD55"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorLine1)"
          dot={false}
        />
        <Area
          dataKey={line2DataKey}
          stroke="#37D399"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorLine2)"
          dot={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
KPIChart.propTypes = {
  data: PropTypes.array.isRequired,
  XAxisDataKey: PropTypes.string.isRequired,
  line1DataKey: PropTypes.string.isRequired,
  line2DataKey: PropTypes.string.isRequired,
};

export default KPIChart;
