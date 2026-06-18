import { useEffect, useState } from "react";
import Banner from "../../Components/Banner";
import FoodReviewCard from "../../Components/FoodReviewCard";
import JoinUs from "../../Components/JoinUs";
import NewsLetter from "../../Components/NewsLetter";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import SkeletonCard from "../../Components/SkeletonCard";

const Home = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get("/latestreviews")
      .then((res) => {
        setReviews(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [axiosSecure]);

  return (
    <div>
      <Banner />

      <div className="max-w-7xl mx-auto px-4 py-10">
        <p className="text-4xl font-bold text-orange-600 mb-4 text-center">Latest Review : {reviews.length}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))
            : reviews.map((review) => (
                <FoodReviewCard key={review.id} review={review} />
              ))}
        </div>
      </div>

      <JoinUs />
      <NewsLetter />
    </div>
  );
};

export default Home;