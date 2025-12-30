import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function ProductsDetailsPage() {
  const {id} = useParams();

  return (
    <div>
      <Navbar />
      <h1>Product Details Page - Product# {id}</h1>
    </div>
  );
}

export default ProductsDetailsPage;
