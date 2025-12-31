import React from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const products = [
  { id: 1, name: "product 1" },
  { id: 2, name: "product 2" },
  { id: 3, name: "product 3" },
  { id: 4, name: "product 4" },
];

function ProductPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const sortBy = searchParams.get("sortBy");
  const order = searchParams.get("order");
  console.log(searchParams.toString());
  console.log({ sortBy, order });

  const sortHandler = () => {
    setSearchParams({ order: "asc", sortBy: "sale" });
  };
  const HomeHandler = () => {
    navigate("/");
    navigate(-1);
    navigate(1);
    navigate("/", { replace: true });
  };

  return (
    <div>
      <Navbar />
      <button onClick={sortHandler}>Sort</button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <button onClick={HomeHandler}>Go Home</button>
    </div>
  );
}
export default ProductPage;
