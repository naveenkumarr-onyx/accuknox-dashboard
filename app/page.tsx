import dynamic from "next/dynamic";

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
