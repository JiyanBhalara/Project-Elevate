import { StrictMode, lazy } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Layout from "./layouts/Layout";
import "./index.css";

// Lazy-load the big pages so the first paint is snappy
const HomePage = lazy(() => import("./pages/Homepage")); // “/”
const ServicePage = lazy(() => import("./pages/ServicePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServiceDetailPage = lazy(()=> import("./pages/Service/ServiceDetailPage"))

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/',          element: <HomePage /> },
      { path: 'services',    element: <ServicePage /> },
      { path: 'services/:slug', element: <ServiceDetailPage /> },
      { path: 'about',      element: <AboutPage /> },
      { path: 'contact',    element: <ContactPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider
      router={router}
      fallbackElement={<p className="p-6 text-gray-600">Loading…</p>}
    >
    </RouterProvider>
  </StrictMode>
);
