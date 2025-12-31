import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import AboutUsPage from "./pages/AboutUsPage";
import PageNotFound from "./pages/PageNotFound";
import ProductPage from "./pages/ProductPage";
import ProductsDetailsPage from "./pages/ProductsDetailsPage";
import Programmers from "./components/Programmers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/landing" element={<Navigate to="/" />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<ProductsDetailsPage />} />
        <Route path="/about-us" element={<AboutUsPage />}>
          <Route path="programmers" element={<Programmers />} />
          <Route path="users" element={<div>Users</div>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
