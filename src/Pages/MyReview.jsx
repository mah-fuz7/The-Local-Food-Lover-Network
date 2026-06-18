import { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router";

const MyReview = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;
    // setLoading(true);

    axiosSecure
      .get(`/users/reviews?email=${user.email}`)
      .then((res) => {
        setReviews(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [user?.email, axiosSecure]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-orange-500">
          My Reviews{" "}
          <span className="text-orange-500">({reviews.length})</span>
        </h1>
      </div>

      {/* Table Card */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="text-left text-[11px] font-semibold text-slate-400 uppercase tracking-widest px-5 py-3">
                  SL No
                </th>

                <th className="text-left text-[11px] font-semibold text-slate-400 uppercase tracking-widest px-5 py-3">
                  Food Image
                </th>

                <th className="text-left text-[11px] font-semibold text-slate-400 uppercase tracking-widest px-5 py-3">
                  Food Name
                </th>

                <th className="text-left text-[11px] font-semibold text-slate-400 uppercase tracking-widest px-5 py-3">
                  Restaurant Name
                </th>

                <th className="text-left text-[11px] font-semibold text-slate-400 uppercase tracking-widest px-5 py-3">
                  Rating
                </th>

                <th className="text-left text-[11px] font-semibold text-slate-400 uppercase tracking-widest px-5 py-3">
                  Posted Date
                </th>

                <th className="text-left text-[11px] font-semibold text-slate-400 uppercase tracking-widest px-5 py-3">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td
                    colSpan={7}
                    className="text-center py-10 text-slate-500"
                  >
                    Loading...
                  </td>
                </tr>
              ) : reviews.length > 0 ? (
                reviews.map((review, index) => (
                  <tr
                    key={review._id}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    {/* SL No */}
                    <td className="px-5 py-4 text-sm font-semibold text-slate-600">
                      {index + 1}
                    </td>

                    {/* Food Image */}
                    <td className="px-5 py-4">
                      <img
                        src={review.foodImg}
                        alt={review.foodName}
                        className="w-14 h-14 rounded-lg object-cover"
                      />
                    </td>

                    {/* Food Name */}
                    <td className="px-5 py-4">
                      <p className="font-semibold text-slate-800">
                        {review.foodName}
                      </p>
                    </td>

                    {/* Restaurant Name */}
                    <td className="px-5 py-4">
                      <p className="text-slate-600">
                        {review.restaurantName}
                      </p>
                    </td>

                    {/* Rating */}
                    <td className="px-5 py-4">
                      <span className="inline-flex items-center px-3 py-1   text-orange-600 text-sm font-medium">
                        {review.rating}
                      </span>
                    </td>

                    {/* Posted Date */}
                    <td className="px-5 py-4 text-slate-600">
                      {new Date(review.createdAt).toLocaleDateString()}
                    </td>

                    {/* Actions */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <Link to={`/editreview/${review._id}`} className="text-xs font-semibold px-3 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-colors">
                          Update
                        </Link>

                        <button className="text-xs font-semibold px-3 py-2 rounded-lg border border-red-300 text-red-500 hover:bg-red-500 hover:text-white transition-colors">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={7}
                    className="px-5 py-16 text-center text-sm text-slate-400"
                  >
                    No reviews found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyReview;