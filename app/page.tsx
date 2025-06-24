import Link from "next/link";
import { Button } from "@/components/ui/button";
import "../styles/globals.css";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-blue-200 font-sans pt-12">
      <h1 className="text-4xl font-extrabold mb-3 text-black text-center">
        Welcome to Artistly
      </h1>
      <p className="text-gray-700 text-xl mb-8 text-center">
        Your gateway to booking incredible performing artists.
      </p>
      <div className="flex flex-row justify-evenly items-center mb-10 gap-x-8">
        <Link href="/artists">
          <Button className="homepagebutton">Explore Artists</Button>
        </Link>
        <Link href="/dashboard">
          <Button className="homepagebutton">Manager Dashboard</Button>
        </Link>
        <Link href="/onboard">
          <Button className="homepagebutton">Artist Onboarding</Button>
        </Link>
      </div>
      <section className="flex flex-col items-center w-full max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
          Top Artist Categories
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mx-auto max-w-4xl">
          {[
            "Singers",
            "Dancers",
            "Speakers",
            "DJs",
            "Rappers",
            "Comedians",
          ].map((cat) => (
            <div
              key={cat}
              className="p-8 bg-white border rounded-xl text-center shadow hover:shadow-xl transition"
            >
              <h4 className="font-semibold text-xl text-blue-700">{cat}</h4>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
