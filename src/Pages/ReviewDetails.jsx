import { useParams } from "react-router";
import { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const ReviewDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(true);
console.log(review)
  useEffect(() => {
    axiosSecure
      .get(`/reviews/${id}`)
      .then((res) => {
        setReview(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id, axiosSecure]);

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto p-6 animate-pulse space-y-4">
        <div className="h-72 bg-gray-300 rounded-xl"></div>
        <div className="h-6 bg-gray-300 w-1/3"></div>
        <div className="h-4 bg-gray-300 w-2/3"></div>
        <div className="h-4 bg-gray-300 w-full"></div>
      </div>
    );
  }

  if (!review) {
    return <p className="text-center mt-10">Review not found</p>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">

      {/* FOOD IMAGE */}
      <div className="rounded-xl overflow-hidden shadow-lg">
        <img
          src={review.foodImg}
          alt={review.foodName}
          className="w-full h-[350px] object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="mt-6 space-y-4">

        <h1 className="text-3xl font-bold">{review.foodName}</h1>

        <p className="text-gray-600">{review.description}</p>

        {/* INFO GRID */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">

          <div className="space-y-2">
            <p><span className="font-semibold">Restaurant:</span> {review.restaurantName}</p>
            <p><span className="font-semibold">Location:</span> {review.location}</p>
            <p><span className="font-semibold">Dining Type:</span> {review.diningType}</p>
            <p><span className="font-semibold">Rating:</span> ⭐ {review.rating}</p>
            <p><span className="font-semibold">Shares:</span> {review.shareCount}</p>
          </div>

          {/* REVIEW TEXT */}
          <div className="bg-gray-50 p-4 rounded-lg border">
            <h3 className="font-semibold mb-2">Review</h3>
            <p className="text-gray-700">{review.reviewText}</p>
          </div>
        </div>

        {/* REVIEWER CARD */}
        <div className="flex items-center gap-4 mt-8 p-4 border rounded-lg shadow-sm">
          <img
            src={review.reviewerAvatar}
            alt={review.reviewerName}
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">{review.reviewerName}</p>
            <p className="text-sm text-gray-500">{review.reviewerEmail}</p>
            <p className="text-xs text-gray-400">
              {new Date(review.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ReviewDetails;