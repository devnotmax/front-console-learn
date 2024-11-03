import React from "react";
import Hero from "@/components/Hero/Hero";
import Carrousel from "@/components/Carrousel/Carrousel";
import ReviewCourse from "@/components/UserReview/ReviewCourse";
import ReviewsContainer from "@/components/UserReview/ReviewsContainer";

export default function Home() {
  return (
    <main className="w-full font-poppins">
      <Hero />
      <Carrousel />
      <div className="container p-6 mx-auto">
        <ReviewsContainer />
      </div>
    </main>
  );
}
