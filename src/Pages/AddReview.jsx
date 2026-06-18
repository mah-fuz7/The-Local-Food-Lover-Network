import { useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const AddReview = () => {
  const navigate=useNavigate()
const {user}=useAuth()
const useAxios=useAxiosSecure()
const[loading,setLoading]=useState(false)

console.log(user)


const handleSubmit =(e) =>{

  const FoodName  =e.target.FoodName.value
const FoodImg =e.target.FoodImg.value
const RestaurantName =e.target.RestaurantName.value
const Location  =e.target.Location.value
const Rating  =e.target.Rating.value
const ReviewText =e.target.ReviewText .value


  e.preventDefault()
  setLoading(true)

  const newReview={
  description: "",
  foodName: FoodName,
  foodImg: FoodImg,
  restaurantName: RestaurantName,
  location: Location,
  rating: Rating,
  reviewText: ReviewText,
  reviewerName: user.displayName,
  reviewerEmail: user.email,
  reviewerAvatar: user.photoURL,
  foodDetails: "",
  diningType: "MAIN DISHES",
  shareCount: Math.floor(Math.random() * 100) + 1,
  createdAt: new Date(),
  }
   console.log(newReview)
   
   useAxios.post("/reviews",newReview)
   .then(()=>{
    navigate('/allreview')
    toast.success("Review Added Successfully")
   })
   .catch(()=>{
    toast.error("failed to add review")
    setLoading(false)
   })
  
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="w-full max-w-md bg-base-100 shadow-xl rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center text-base-content mb-6">
          ADD REVIEW
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="FoodName"
            placeholder="Food Name"
            className="input input-bordered w-full"
          />

          <input
            type="url"
            name="FoodImg"
            placeholder="Food Image URL"
            className="input input-bordered w-full"
          />

          <input
            type="text"
            name="RestaurantName"
            placeholder="Restaurant Name"
            className="input input-bordered w-full"
          />

          <input
            type="text"
            name="Location"
            placeholder="Location"
            className="input input-bordered w-full"
          />

          <input
            type="number"
            name="Rating"
            placeholder="Your Rating"
            min="1"
            max="5"
            className="input input-bordered w-full"
          />

          <textarea
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

export default AddReview;