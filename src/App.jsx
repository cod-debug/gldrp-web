import { createHashRouter, RouterProvider } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import Layout from "./layouts/Layout";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";

const Home = lazy(() => import('./pages/Home'));

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    id: 'root',
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
        loader: () => import('./pages/Home'),
      },
    ]
  }
]);

export default function App() {
  return (<RouterProvider router={router}>
    </RouterProvider>
  );
}
