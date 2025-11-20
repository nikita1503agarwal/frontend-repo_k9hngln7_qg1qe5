import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { api } from '../lib/api';

export default function Tracker(){
  const location = useLocation();
  useEffect(() => {
    api('/events', { method: 'POST', body: { event_type: 'pageview', path: location.pathname } }).catch(()=>{});
  }, [location.pathname]);
  return null;
}
