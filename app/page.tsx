import Image from "next/image";
import SideBar from "./sidebar/SideBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <SideBar />
    </main>
  );
}
