import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center gap-y-3 pt-36">
      <h2 className="text-6xl font-bold">404 Not Found</h2>
      <p className="text-2xl font-medium">
        The page you are looking for does not exist
      </p>
      <p className="text-xl font-medium">
        Redirecting to the Homepage in 3 seconds...
      </p>
    </div>
  );
}
