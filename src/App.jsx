import '@fortawesome/fontawesome-free';
import Home from './Pages/Home/Home';
import { useEffect, useState } from 'react';
import Loading from './Pages/Loading/Loading';
import Footer from './Components/Footer/Footer';
import About from './Pages/About/About';
import TechStack from './Components/TechStack/TechStack';
import Contact from './Pages/Contact/Contact';
import MyWorks from './Pages/MyWorks/MyWorks';
import Layout from './Components/Layout/Layout';
import { createBrowserRouter, RouterProvider, ScrollRestoration } from 'react-router-dom';

let routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Layout />
        <ScrollRestoration />
      </>
    ),
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/techStack', element: <TechStack /> },
      { path: '/contact', element: <Contact /> },
      { path: '/myWorks', element: <MyWorks /> },
    ],
  },
]);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center bg-black">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
  
}

export default App;