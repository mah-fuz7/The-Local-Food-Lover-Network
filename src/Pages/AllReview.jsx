import { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import SkeletonCard from "../Components/SkeletonCard";
import FoodReviewCard from "../Components/FoodReviewCard";

const AllReview = () => {
  const axiosSecure = useAxiosSecure();

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);

    axiosSecure
      .get(`/search?reviews=${search}`)
      .then((res) => {
        setReviews(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [axiosSecure, search]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-orange-600 text-center mb-8">
        All Reviews ({reviews.length})
      </h1>

      {/* Search */}
      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

     

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))
          : reviews.map((review) => (
              <FoodReviewCard key={review._id} review={review} />
            ))}
      </div>
    </div>
  );
};

export default AllReview;