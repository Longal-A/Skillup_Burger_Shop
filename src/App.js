import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import MyOrders from "./components/myOrders/MyOrders";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Contact from "./components/contact/Contact";
<<<<<<< HEAD
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
=======
// Add module imports for CAR
>>>>>>> e30e399b013b7b0370951066c43d060ac03ad515


import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import MyOrders from "./components/myOrders/MyOrders";

import OrderDetails from "./components/myOrders/OrderDetails";
import About from "./components/about/About";


import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/table.scss";
import "./styles/orderDetails.scss";
import "./styles/about.scss";

function App() {
  return (
    <Router>
      <Header isAuthenticated={true} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
<<<<<<< HEAD

=======
        <Route path="/myorders" element={<MyOrders />} />
          //           Add the Route for CART
      
          //           Add the Route for SHIPPING
        
>>>>>>> e30e399b013b7b0370951066c43d060ac03ad515
        <Route path="/login" element={<Login />} />
        <Route path="/me" element={<Profile />} />
        <Route path="/myorders" element={<MyOrders />} />

        <Route path="/order/:id" element={<OrderDetails />} />
      
       

        
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;