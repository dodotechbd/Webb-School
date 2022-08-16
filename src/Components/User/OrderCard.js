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
        <p>Payment Status: <button className="uppercase font-thin text-green-500">
          {status}
        </button></p>
      </div>
    </div>
  );
};

export default OrderCard;
