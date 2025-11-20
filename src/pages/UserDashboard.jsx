import { useEffect, useState } from 'react';
import { api } from '../lib/api';

export default function UserDashboard(){
  const [orders, setOrders] = useState([]);
  const [activity, setActivity] = useState([]);

  useEffect(()=>{
    (async()=>{
      try{
        setOrders(await api('/orders'));
      }catch{}
      try{
        setActivity(await api('/admin/events?limit=50'));
      }catch{}
    })();
  },[]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-bold">Your Dashboard</h1>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="p-4 rounded-xl border border-black/10 dark:border-white/10">
          <div className="font-semibold mb-2">Orders</div>
          <pre className="text-xs opacity-70 overflow-auto max-h-72">{JSON.stringify(orders,null,2)}</pre>
        </div>
        <div className="p-4 rounded-xl border border-black/10 dark:border-white/10">
          <div className="font-semibold mb-2">Recent Activity</div>
          <pre className="text-xs opacity-70 overflow-auto max-h-72">{JSON.stringify(activity,null,2)}</pre>
        </div>
      </div>
    </div>
  );
}
