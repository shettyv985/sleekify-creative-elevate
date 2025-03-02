
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center max-w-xl">
        <div className="text-9xl font-display font-bold text-primary">404</div>
        <h1 className="text-3xl md:text-4xl font-display font-bold mt-4 mb-6">
          Page not found
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="inline-flex items-center py-3 px-6 bg-primary text-primary-foreground rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
