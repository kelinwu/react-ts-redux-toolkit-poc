import { CartI } from "../../app/interfaces/Cart";
import { useAppSelector } from "../../app/hooks";
import { useDispatch } from "react-redux";
import { removeCartItemFromState } from "./cartSilice";

export default function CartPage() {
  const { items } = useAppSelector((state) => state.myCart);
  const dispatch = useDispatch()

  const handleDelete = (item: CartI) => {
    dispatch(removeCartItemFromState(item))
  }

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        {items &&
          items.map((item: CartI) => (
            <div
              key={item.id}
              style={{
                width: "300px",
                marginBottom: "30px",
                backgroundColor: "lightGreen",
                padding: "5px",
              }}
            >
              <div>name: {item.name}</div>
              <div>descition: {item.descript}</div>
              <div>price: {item.price}</div>
              <div>
                <button type="button" onClick={() => handleDelete(item)}>Delete</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
