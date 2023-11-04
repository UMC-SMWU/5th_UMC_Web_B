import React from 'react';
import Ad from './Ad.jsx';
import { useLocation } from 'react-router-dom';

export default function AdPage() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return <div>{isHomePage && <Ad />}</div>;
}
