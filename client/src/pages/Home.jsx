import { useEffect, useState } from "react";
import API from "../api/axios";

const Home = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await API.get("/transactions");
        setTransactions(res.data);
      } catch (err) {
        console.error("Error fetching transactions:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {loading ? (
        <p>Loading transactions...</p>
      ) : transactions.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        <ul className="space-y-4">
          {transactions.map((tx) => (
            <li
              key={tx._id}
              className="border rounded-xl p-4 shadow-sm flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">{tx.title}</p>
                <p className="text-sm text-gray-500">{tx.date?.slice(0, 10)}</p>
              </div>
              <p
                className={`font-bold ${
                  tx.type === "income" ? "text-green-600" : "text-red-500"
                }`}
              >
                {tx.type === "income" ? "+" : "-"}${tx.amount}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
