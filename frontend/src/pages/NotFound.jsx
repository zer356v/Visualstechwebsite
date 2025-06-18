
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from '../components/Layout';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-50 py-20">
        <h1 className="text-6xl md:text-8xl font-bold text-sapphire-700 mb-4">404</h1>
        <p className="text-2xl md:text-3xl text-gray-700 mb-8">Oops! Page not found</p>
        <p className="text-gray-600 mb-8 text-center max-w-md">
          We couldn't find the page you were looking for. It might have been moved or deleted.
        </p>
        <Link to="/" className="btn-primary">
          Return to Home
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;