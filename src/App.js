import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./Pages/ProtectedRoute";
import AuthWrapper from "./Pages/AuthWrapper";
import {
  AboutPage,
  Homepage,
  ProductsPage,
  SharedLayout,
  CheckoutPage,
  SinglePage,
  CartPage,
  ErrorPage,
} from "./Pages";
function App() {
  return (
    <AuthWrapper>
      <Router>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Homepage />} />
            <Route path="about" element={<AboutPage />} />
            <Route
              path="checkout"
              element={
                <ProtectedRoute>
                  <CheckoutPage />
                </ProtectedRoute>
              }
            />
            <Route path="products" element={<ProductsPage />} />
            <Route path="products/:id" element={<SinglePage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </Router>
    </AuthWrapper>
  );
}

export default App;
