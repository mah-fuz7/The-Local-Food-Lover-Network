import { FiHeart } from 'react-icons/fi';
import { useState } from 'react';
import { Link } from 'react-router';
import { HiArrowSmallRight } from "react-icons/hi2";

const FoodReviewCard = ({review}) => {
  // console.log(review)
  const{_id,description,foodName,foodImg,restaurantName,location,rating,reviewText,reviewerName}=review;

    const [isFavorite, setIsFavorite] = useState(false);
// const data=  {
//     "id": 11,
//     "description": "Authentic Italian pasta tossed in a rich tomato sauce with fresh herbs and parmesan cheese.",
//     "foodName": "Spaghetti",
//     "foodImg": "https://images.unsplash.com/photo-1622973536968-3ead9e780960",
//     "restaurantName": "Pasta Point",
//     "location": "Dhaka",
//     "rating": 4.7,
//     "reviewText": "Excellent flavor and generous portion size.",
//     "reviewerName": "Michael Lee",
//     "reviewerEmail": "michael.lee@example.com",
//     "reviewerAvatar": "https://randomuser.me/api/portraits/men/3.jpg",
//     "foodDetails": "Classic spaghetti pasta topped with parmesan and basil.",
//     "diningType": "delivery",
//     "shareCount": 14,
//     "createdAt": "2026-06-20T14:35:00.000Z"
//   }
    return (
          <div className="w-80 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {/* Image Container */}
      <div className="relative">
        <img
          src={foodImg}
          alt={foodName}
          className="w-full h-64 object-cover"
        />
        
        {/* Heart Icon */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
        >
          <FiHeart
            size={24}
            className={`transition-colors ${
              isFavorite ? 'fill-red-500 stroke-red-500' : 'stroke-gray-700'
            }`}
          />
        </button>
 
        {/* Reviewer Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-2 rounded-full flex items-center gap-2 shadow-md">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center text-white text-xs font-bold">
            {reviewerName.charAt(0)}
          </div>
          <span className="text-sm font-medium text-gray-800">
            by {reviewerName.split(' ')[0]}
          </span>
        </div>
      </div>
 
      {/* Content Container */}
      <div className="p-6">
        {/* Category */}
        <p className="text-orange-600 text-sm font-semibold tracking-widest uppercase mb-2">
          Main Dishes
        </p>
 
        {/* Food Name */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {foodName}
        </h2>
 
        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-800">
              {rating}
            </span>
            <span className="text-yellow-400 text-xl ml-1">★</span>
          </div>
          <span className="text-sm text-gray-500">
            {reviewText}
          </span>
        </div>
 
        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
 
        {/* Restaurant & Location with Details Button */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-sm font-semibold text-gray-900 mb-3">
            {restaurantName}
          </p>
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs text-gray-500">
              📍 {location}
            </p>
           <Link
  to={`/reviewdetails/${_id}`}
  className="bg-orange-600 hover:bg-orange-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1"
>
   Review Details
  <HiArrowSmallRight />
</Link>
          </div>
        </div>
      </div>
    </div>


    );
};

export default FoodReviewCard;