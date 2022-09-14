import { useAppSelector } from "../../app/hooks";
import { PartI } from "../../app/interfaces/Parts";
import { addCartItem } from "../myCart/cartSilice";
import { useDispatch } from "react-redux";
import CartPage from "../myCart/CartPage";

export default function BuilderPage() {
  const { parts, loading } = useAppSelector((state) => state.builder);

  const dispatch = useDispatch();

  const handleAddToCart = (part: PartI) => {
    dispatch(
      addCartItem({
        id: part.id,
        name: part.name,
        descition: part.email,
        price: Math.floor(Math.random() * 100),
      })
    );
  };

  const renderingParts =
    parts &&
    parts.map((part: PartI) => (
      <div
        style={{
          marginBottom: "20px",
          padding: "5px",
          borderBlockColor: "red",
          borderBlockWidth: "1px",
          backgroundColor: "#cccccc",
          width: 300,
        }}
        key={part.id}
      >
        <div>{part.id}</div>
        <div>{part.name}</div>
        <div style={{ color: "red" }}>{part.email}</div>
        <div>
          <button type="button" onClick={() => handleAddToCart(part)}>
            Add item to the cart
          </button>
        </div>
      </div>
    ));

  return (
    <div>
      <h1>Build Computer</h1>
      <div>
        {loading && <div>loading...</div>}
        <div>{renderingParts}</div>
      </div>
      <CartPage />
    </div>
  );
}
