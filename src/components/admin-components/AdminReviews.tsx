// src/components/UserReview/ReviewsContainer.tsx
import React, { useEffect, useState } from "react";
import { getReviews } from "@/services/reviewService";
import { Review } from "@/components/UserReview/ReviewList";
import CardReview from "../UserReview/CardReview";
import ReactLoading from "react-loading";

const AdminReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchAllReviews = async () => {
    try {
      setLoading(true);
      const data = await getReviews();
      setReviews(data); // Guarda las reseñas en el estado
    } catch (error) {
      console.error("Error", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (id: string) => {
    setReviews((prevReviews) =>
      prevReviews.filter((review) => review.id !== id)
    );
  };

  useEffect(() => {
    fetchAllReviews();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ReactLoading
          type="spin"
          color="blue"
          height={50}
          width={50}
        ></ReactLoading>
      </div>
    );
  }

  return (
    <div className="w-full p-4 border-black border-opacity-15 rounded-xl border-[3px] overflow-y-auto max-h-96">
      <h2 className="text-xl font-semibold mb-4">Latest reviews</h2>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="flex flex-col gap-4">
            {reviews.map((review) => (
              <CardReview key={review.id} review={review} onDelete={handleDelete} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminReviews;
