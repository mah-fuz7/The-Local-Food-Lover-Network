import { useNavigate, useParams } from "react-router";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const EditReview = () => {
  const navigate=useNavigate()
  const {id}=useParams()
  const useAxios=useAxiosSecure()
const[review,setReview]=useState({})
const [loading,setLoading]=useState(false)
  useEffect(()=>{
    // setLoading(true)
    useAxios.get(`/reviews/${id}`)
    .then((res)=>{
      setReview(res.data.data)
      setLoading(false)
    })
    .catch((error)=>{
      console.log(error)
      setLoading(false)
    })
  },[id,useAxios])
  // handle submit form
  const handleSubmit = async(e)=>{
    e.preventDefault()
  
     const foodName  =e.target.FoodName.value
const foodImg =e.target.FoodImg.value
const restaurantName =e.target.RestaurantName.value
const location  =e.target.Location.value
const rating  =e.target.Rating.value
const reviewText =e.target.ReviewText .value

try {
const res=await useAxios.patch(`/reviews/${id}`,{
 
foodName,
foodImg,
restaurantName,
location,
rating,
reviewText

});
    if (res.data.modifiedCount > 0) {
      navigate("/myreview")
      toast.success("Review updated successfully!");
    } else {
      toast.info("No changes were made.");
    }


}catch(error){
  console.log(error)
  toast.error(error)
}
  }
  const{foodName,foodImg,restaurantName,location,rating,reviewText}=review
  console.log(review)
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="w-full max-w-md bg-base-100 shadow-xl rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center text-base-content mb-6">
          Edit Review
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
          defaultValue={foodName}
            type="text"
            name="FoodName"
            placeholder="Food Name"
            className="input input-bordered w-full"
          />

          <input
          defaultValue={foodImg}
            type="url"
            name="FoodImg"
            placeholder="Food Image URL"
            className="input input-bordered w-full"
          />

          <input
          defaultValue={restaurantName}
            type="text"
            name="RestaurantName"
            placeholder="Restaurant Name"
            className="input input-bordered w-full"
          />

          <input
          defaultValue={location}
            type="text"
            name="Location"
            placeholder="Location"
            className="input input-bordered w-full"
          />

          <input
          defaultValue={rating}
            type="number"
            name="Rating"
            placeholder="Your Rating"
            min="1"
            max="5"
            className="input input-bordered w-full"
          />

          <textarea
          defaultValue={reviewText}
            name="ReviewText"
            placeholder="Review Text"
            className="textarea textarea-bordered w-full"
            rows="4"
          ></textarea>

          <button
            type="submit"
            className="btn btn-warning w-full"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
    );
};

export default EditReview;