import { useAppSelector } from "../../app/hooks";
import { CartI } from "../../app/interfaces/Cart";

export default function CartPage() {
  const { items } = useAppSelector((state) => state.myCart);

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {items &&
          items.map((item: CartI) => (
            <li key={item.id}>
              <h4>{item.name}</h4>
              <h4>{item.descript}</h4>
              <h4>{item.price}</h4>
            </li>
          ))}
      </ul>
    </div>
  );
}
