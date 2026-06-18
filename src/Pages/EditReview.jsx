
const EditReview = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="w-full max-w-md bg-base-100 shadow-xl rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center text-base-content mb-6">
          Edit Review
        </h2>

        <form className="space-y-4">
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

export default EditReview;