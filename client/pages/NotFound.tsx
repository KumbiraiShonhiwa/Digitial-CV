import Layout from "@/components/layout/Layout";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ChevronLeft } from "lucide-react";

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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-card/30 py-20">
        <div className="text-center max-w-2xl px-4">
          <h1 className="text-7xl md:text-8xl font-space-grotesk font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Sorry, the page you're looking for doesn't exist. This could be a mistyped URL or the
            page might have been removed.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            <ChevronLeft size={20} />
            Return to Home
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
