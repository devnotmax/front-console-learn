import React from "react";
import Hero from "@/components/Hero/Hero";
import Carrousel from "@/components/Carrousel/Carrousel";
import UserReview from "@/components/UserReview/userReview";

export default function Home() {
  return (
    <main className="w-full font-poppins">
      <Hero />
      <Carrousel />
      <div className="container p-6 mx-auto">
        <UserReview />
      </div>
    </main>
  );
}
