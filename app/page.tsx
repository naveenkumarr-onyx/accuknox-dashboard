import dynamic from "next/dynamic";
import Dashboard from "./components/categories/Dashboard";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  const NoSSR = dynamic(() => import("./components/categories/Dashboard"), {
    ssr: false,
  });
  return (
    <div>
      <NoSSR />
    </div>
  );
}
