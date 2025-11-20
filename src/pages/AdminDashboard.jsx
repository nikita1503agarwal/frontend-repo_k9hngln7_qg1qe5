import { useEffect, useState } from 'react';
import { api } from '../lib/api';

export default function AdminDashboard(){
  const [overview, setOverview] = useState(null);
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(()=>{
    (async()=>{
      try{ setOverview(await api('/admin/overview')); }catch{}
      try{ setUsers(await api('/admin/users')); }catch{}
      try{ setOrders(await api('/admin/orders')); }catch{}
      try{ setEvents(await api('/admin/events?limit=50')); }catch{}
    })();
  },[]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-bold">Admin Portal</h1>
      <div className="grid md:grid-cols-4 gap-4 mt-6">
        {overview && Object.entries(overview).map(([k,v]) => (
          <div key={k} className="p-4 rounded-xl border border-black/10 dark:border-white/10">
            <div className="text-sm opacity-60">{k}</div>
            <div className="text-2xl font-semibold">{v}</div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <Card title="Users" data={users}/>
        <Card title="Orders" data={orders}/>
        <Card title="Events" data={events}/>
      </div>
    </div>
  );
}

function Card({ title, data }){
  return (
    <div className="p-4 rounded-xl border border-black/10 dark:border-white/10">
      <div className="font-semibold mb-2">{title}</div>
      <pre className="text-xs opacity-70 overflow-auto max-h-80">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
