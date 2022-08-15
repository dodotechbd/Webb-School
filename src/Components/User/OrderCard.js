import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import primaryAxios from "../../Api/primaryAxios";

const OrderCard = ({ order, index, refetch }) => {
  const { productName, productImage, price, uname, _id, transactionId, status } =
    order;

    const handleCancelOrder = (id) => {
        swal({
          title: "Are you sure?",
          text: "Once Cancelled,This Process Can't Be Undone",
          icon: "warning",
          className: "rounded-3xl",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            (async () => {
              const { data } = await primaryAxios.delete(`/order?id=${_id}`);
              if (data.deletedCount > 0) {
                swal("Order Cancelled", {
                  icon: "success",
                  className: "rounded-3xl",
                });
    
                refetch();
              }
            })();
          } else {
            swal("Appreciate Your Not Cancelling The order", {
              className: "rounded-3xl",
            });
          }
        });
      };
  return (
    <div class="card card-side bg-base-200 rounded-lg border border-neutral">
      <figure>
        <img className="lg:w-56 md:w-56 hidden lg:block md:block h-full" src={productImage} alt="Movie" />
      </figure>
      <div class="card-body p-3">
        <h2 class="card-title">{productName}</h2>
        <p>Transaction ID: {transactionId ? transactionId : "Unpaid"}</p>
        <p>Price: ৳{price}</p>
        <p>Payment Status: {status}</p>
        {transactionId ? (
          <button className="btn btn-wide btn-sm font-thin normal-case bg-green-500 hover:bg-green-400 text-white">
          Paid
        </button>
        ):(
          <div className="lg:flex md:flex justify-between">
          <div className="flex-col mb-2 lg:mb-0 md:mb-0">
            Pay Now:
            <Link to={`/checkout/bkash/${uname}`} className="mx-3 btn btn-sm font-thin normal-case bg-[#CD1E63] hover:bg-[#B81D56] text-white">
              bKash
            </Link>
            <Link to={`/checkout/stripe/${uname}`} className="btn btn-sm font-thin normal-case bg-[#5C4DC1] hover:bg-[#607DE2] text-white">
              stripe
            </Link>
          </div>
          <button onClick={() => handleCancelOrder(_id)} className="btn btn-sm font-thin normal-case bg-[#ca2c34] hover:bg-[#FE6464] text-white">
              Cancel Order
            </button>
        </div>
        )}
      </div>
    </div>
  );
};

export default OrderCard;
