import Camera from "@/app/components/Camera";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="bg-gray-950 min-h-screen py-8">
      <div className="max-w-3xl mx-auto space-y-8 px-4">
        <Header />
        <Camera />
      </div>
    </main>
  );
}
