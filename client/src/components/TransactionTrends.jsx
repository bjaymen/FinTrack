import {
    BarChart,
    Bar,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
  } from 'recharts';
  import { format } from 'date-fns';
  
  export default function TransactionTrends({ data }) {
    const trendsMap = {};
  
    data.forEach((txn) => {
      const date = format(new Date(txn.date), 'yyyy-MM-dd');
      if (!trendsMap[date]) {
        trendsMap[date] = { date, income: 0, expense: 0 };
      }
      if (txn.type === 'income') {
        trendsMap[date].income += txn.amount;
      } else {
        trendsMap[
  ::contentReference[oaicite:0]{index=0} 