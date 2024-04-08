import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ? 
    (<div>


      <div>
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="bg-gray-100 p-4 rounded-md shadow-md">
  <div className="flex justify-between mb-4">
    <div>
      <h2 className="text-lg font-semibold">Your Cart</h2>
      <p className="text-sm text-gray-600">Summary</p>
    </div>
    <div className="text-right">
      <p className="text-sm text-gray-600">Total Items: {cart.length}</p>
    </div>
  </div>
  <div className="flex justify-between items-center">
    <div>
      <p className="text-lg font-bold">Total Amount: ${totalAmount}</p>
    </div>
    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300">
      CheckOut Now
    </button>
  </div>
</div>



    </div>) : 
    (<div>
      <h1>Cart Empty</h1>
      <Link to={"/"}>
        <button>
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
