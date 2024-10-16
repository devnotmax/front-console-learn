import React from "react";
import Hero from "@/components/Hero/Hero";
import UserReview from "@/components/UserReview/UserReviews";

export default function Home() {
  return (
    <main className="container">
      <Hero></Hero>
      <UserReview />
    </main>
  );
}
