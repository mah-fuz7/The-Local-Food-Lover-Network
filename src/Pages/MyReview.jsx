import { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyReview = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

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

  // handle delete button
const handleDelete = async(id) => {
  
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Delete it!",
  }).then(async (result) => {
    if (result.isConfirmed) {
  const res=await axiosSecure.delete(`/reviews/${id}`)

      if (res.data.data.deletedCount > 0) {
               setReviews((prev)=>prev.filter((r)=>r._id !== id))


        Swal.fire({
          title: "Delete!",
          text: "Your Review has been Deleted.",
          icon: "success",
        });
      }
    }
  });
};

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-orange-500">
          My Reviews ({reviews.length})
        </h1>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-x-auto">
        <table className="min-w-[750px] w-full">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              {/* SL No */}
              <th className="px-3 py-3 text-left text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-widest">
                SL
              </th>

              {/* Food Image (hidden on sm) */}
              <th className="hidden md:table-cell px-3 py-3 text-left text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-widest">
                Food Image
              </th>

              {/* Food Name */}
              <th className="px-3 py-3 text-left text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-widest">
                Food Name
              </th>

              {/* Restaurant (hidden on sm) */}
              <th className="hidden md:table-cell px-3 py-3 text-left text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-widest">
                Restaurant
              </th>

              {/* Rating (hidden on sm) */}
              <th className="hidden lg:table-cell px-3 py-3 text-left text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-widest">
                Rating
              </th>

              {/* Date (hidden on sm) */}
              <th className="hidden lg:table-cell px-3 py-3 text-left text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-widest">
                Date
              </th>

              {/* Actions always visible */}
              <th className="px-3 py-3 text-left text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-widest">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {loading ? (
              <tr>
                <td colSpan={7} className="text-center py-10 text-gray-500">
                  Loading...
                </td>
              </tr>
            ) : reviews.length > 0 ? (
              reviews.map((review, index) => (
                <tr key={review._id} className="hover:bg-slate-50">
                  {/* SL No */}
                  <td className="px-3 py-4 text-sm font-semibold text-slate-600">
                    {index + 1}
                  </td>

                  {/* Food Image */}
                  <td className="hidden md:table-cell px-3 py-4">
                    <img
                      src={review.foodImg}
                      alt={review.foodName}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-cover"
                    />
                  </td>

                  {/* Food Name */}
                  <td className="px-3 py-4 text-sm font-semibold text-slate-800">
                    {review.foodName}
                  </td>

                  {/* Restaurant */}
                  <td className="hidden md:table-cell px-3 py-4 text-sm text-slate-600">
                    {review.restaurantName}
                  </td>

                  {/* Rating */}
                  <td className="hidden lg:table-cell px-3 py-4 text-sm text-orange-600 font-semibold">
                    ⭐ {review.rating}
                  </td>

                  {/* Date */}
                  <td className="hidden lg:table-cell px-3 py-4 text-sm text-slate-600">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </td>

                  {/* Actions */}
                  <td className="px-3 py-4">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Link
                        to={`/editreview/${review._id}`}
                        className="text-xs px-3 py-2 bg-orange-500 text-white rounded-lg text-center hover:bg-orange-600"
                      >
                        Update
                      </Link>

                      <button onClick={()=>handleDelete(review._id)} className="text-xs px-3 py-2 border border-red-300 text-red-500 rounded-lg hover:bg-red-500 hover:text-white">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="text-center py-10 text-gray-400">
                  No reviews found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReview;