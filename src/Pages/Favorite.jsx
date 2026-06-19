import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Favorite = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch favorites
  useEffect(() => {
    if (!user?.email) return;

    axiosSecure
      .get(`/favorite?email=${user.email}`)
      .then((res) => {
        setFavorites(res.data.data);
        setLoading(false);
        
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [axiosSecure, user?.email]);

  
//Remove favorite data
const handleDelete=(id)=>{
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) 
    axiosSecure.delete(`/favorite/${id}`)
setFavorites((prev)=>prev.filter((f)=>f._id !== id))
    
    Swal.fire({
    title: "Removed!",
    text: "Your file has been Removed.",
    icon: "success"
  });
});
}
  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-orange-500">
          My Favorites ({favorites.length})
        </h1>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-x-auto">
        <table className="min-w-[700px] w-full">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-3 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                SL
              </th>

              <th className="px-3 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                Image
              </th>

              <th className="px-3 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                Food Name
              </th>

              <th className="hidden md:table-cell px-3 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                Restaurant
              </th>

              <th className="hidden lg:table-cell px-3 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                Location
              </th>

              <th className="px-3 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                Rating
              </th>

              <th className="px-3 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {loading ? (
              <tr>
                <td
                  colSpan={7}
                  className="text-center py-10 text-gray-500"
                >
                  Loading...
                </td>
              </tr>
            ) : favorites.length > 0 ? (
              favorites.map((favorite, index) => (
                <tr key={favorite._id} className="hover:bg-slate-50">
                  {/* SL */}
                  <td className="px-3 py-4 text-sm font-medium">
                    {index + 1}
                  </td>

                  {/* Image */}
                  <td className="px-3 py-4">
                    <img
                      src={favorite.reviewData.foodImg}
                      alt={favorite.reviewData.foodName}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                  </td>

                  {/* Food Name */}
                  <td className="px-3 py-4 text-sm font-semibold text-slate-800">
                    {favorite.reviewData.foodName}
                  </td>

                  {/* Restaurant */}
                  <td className="hidden md:table-cell px-3 py-4 text-sm text-slate-600">
                    {favorite.reviewData.restaurantName}
                  </td>

                  {/* Location */}
                  <td className="hidden lg:table-cell px-3 py-4 text-sm text-slate-600">
                    {favorite.reviewData.location}
                  </td>

                  {/* Rating */}
                  <td className="px-3 py-4 text-sm font-semibold text-orange-500">
                    ⭐ {favorite.reviewData.rating}
                  </td>

                  {/* Actions */}
                  <td className="px-3 py-4">
                    <button
                      onClick={() => handleDelete(favorite._id)}
                      className="px-3 py-2 text-xs bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={7}
                  className="text-center py-10 text-gray-400"
                >
                  No favorite reviews found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Favorite;