import { useEffect, useState } from 'react';
import axios from '../api/axios';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const { user, logout } = useAuth();

  useEffect(() => {
    const fetchTransactions = async () => {
      const res = await axios.get('/transactions');
      setTransactions(res.data);
    };
    fetchTransactions();
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-bold">Welcome, {user?.email}</h1>
        <button onClick={logout} className="bg-red-500 text-white px-4 py-2">Logout</button>
      </div>
      <h2 className="text-lg font-semibold mb-2">Transactions</h2>
      <ul>
        {transactions.map((txn) => (
          <li key={txn._id} className="border p-2 mb-1">{txn.description} - ${txn.amount}</li>
        ))}
      </ul>
    </div>
  );
}
