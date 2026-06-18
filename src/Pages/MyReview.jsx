
const MyReview = () => {
    return (
         <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-orange-500">
          My Review{" "}
          <span className="text-orange-500">(6)</span>
        </h1>
      </div>

      {/* Table Card */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="text-left text-[11px] font-semibold text-slate-400 uppercase tracking-widest px-5 py-3 ">
                SL No
              </th>
              <th className="text-left text-[11px] font-semibold text-slate-400 uppercase tracking-widest px-5 py-3">
                Food Img
              </th>
              <th className="text-left text-[11px] font-semibold text-slate-400 uppercase tracking-widest px-5 py-3">
                Food Name
              </th>
              <th className="text-left text-[11px] font-semibold text-slate-400 uppercase tracking-widest px-5 py-3">
                Resturant Name
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
            {/* map */}
            {((bid, index) => (
              <tr
                key={bid._id}
                className="hover:bg-slate-50 transition-colors"
              >
                {/* SL */}
                <td className="px-5 py-4 text-sm font-semibold text-slate-300 w-12">
                  {index + 1}
                </td>

                {/* Product ID */}
                <td className="px-5 py-4">
                  <p className="text-sm font-mono text-slate-600 truncate max-w-[180px]">
                    {bid.product}
                  </p>
                </td>

                {/* Buyer */}
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={bid.buyer_image}
                      alt={bid.buyer_name}
                      className="w-9 h-9 rounded-full object-cover border-2 border-purple-100 flex-shrink-0"
                    />
                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        {bid.buyer_name}
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {bid.buyer_email}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Bid Price */}
                <td className="px-5 py-4">
                  <span className="text-base font-bold text-slate-800 tracking-tight">
                    ${Number(bid.bid_price).toLocaleString()}
                  </span>
                </td>

                {/* Status */}
                <td className="px-5 py-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-600 capitalize">
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {bid.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-5 py-4">
                  <button
                    // onClick={() => handleRemove(bid._id)}
                    className="text-xs font-semibold px-3.5 py-1.5 rounded-lg border border-red-300 text-red-400 hover:bg-red-400 hover:text-white transition-all cursor-pointer"
                  >
                    Remove Bid
                  </button>
                </td>
              </tr>
            ))}

            {/* {0 === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="px-5 py-16 text-center text-sm text-slate-400"
                >
                  No bids found.
                </td>
              </tr>
            )} */}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default MyReview;