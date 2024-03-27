import { useParams } from "react-router-dom";
import { countryMap } from "../config";

export default function Stats() {
  const { country } = useParams();
  const links = {
    "The Americas":
      "https://redash.usvisa.lol/public/dashboards/qrJjgOHiBBhlxdJGhHWkOOcS4yCdRS8eQlzRJvVd?org_slug=default",
    Europe:
      "https://redash.usvisa.lol/public/dashboards/8f9ysadqeQHjPbfuOGl8j0SuE3QF7hBhMvoI8Gqx?org_slug=default",
  };
  return (
    <div className="flex h-screen w-full flex-col items-center gap-y-6 py-12">
      <p className="text-2xl font-bold lg:text-3xl">系统监测slot数据</p>
      <iframe src={links[countryMap[country][0]]} className="h-full w-full" />
    </div>
  );
}
