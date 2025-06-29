// src/layouts/Layout.tsx
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ScrollRestoration } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollRestoration />  
      <Navbar />
      <main className="flex-1">
        <Outlet />  {/* active page renders here */}
      </main>
      <Footer />
    </div>
  );
}
