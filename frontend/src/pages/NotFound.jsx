import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center gap-y-3 my-3 w-full">
      <h2 className="text-xl">404 Not Found</h2>
      <p>The page you are looking for does not exist</p>
      <p>Redirecting to the Homepage in 3 seconds...</p>
    </div>
  );
};

export default NotFound;
