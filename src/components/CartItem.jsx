import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-4 flex flex-col md:flex-row items-center md:space-x-4">
      <img
        src={item.image}
        alt={item.title}
        className="w-32 h-32 md:w-24 md:h-24 rounded-md object-cover mb-4 md:mb-0"
      />
      <div className="flex flex-col flex-grow">
        <h1 className="text-lg font-semibold mb-2">{item.title}</h1>
        <p className="text-sm text-gray-600 mb-2">{item.description}</p>
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-blue-600">${item.price}</p>
          <button
            className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500 text-white hover:bg-red-600 transition duration-300"
            onClick={removeFromCart}
          >
            <FcDeleteDatabase />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
