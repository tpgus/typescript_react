import styles from "./Chart.module.css";
import ChartBar from "./ChartBar";

interface ChartProps {
  dataPoints: {
    label: string;
    value: number;
  }[];
}
const Chart: React.FC<ChartProps> = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const Maximum = Math.max(...dataPointValues);
  return (
    <div className={styles["chart"]}>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={Maximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
