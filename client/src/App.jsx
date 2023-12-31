import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css"
import HomePage from "./pages/HomePage.jsx";
import Blog from "./pages/blog.jsx"
import Cart from "./pages/cartPage.jsx"
import CheckOutPage from "./pages/checkOutPage.jsx"
import ContactPage from "./pages/contactPage.jsx"
import FAQ from "./pages/FAQ.jsx"
import NotFound from "./pages/notfound.jsx"
import PrivacyPolicy from "./pages/privacy-policy.jsx"
import ProductPage from "./pages/productPage.jsx"
import RegistrationPage from "./pages/registrationPage.jsx"
import Review from "./pages/review.jsx"
import SearchPage from "./pages/searchPage.jsx"
import Terms from "./pages/terms.jsx"
import ThankYouPage from "./pages/thankYouPage.jsx"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/checkout" element={<CheckOutPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/faq" element={<FAQ/>}/>
                <Route path="/notfound" element={<NotFound/>}/>
                <Route path="/privacy" element={<PrivacyPolicy/>}/>
                <Route path="/product" element={<ProductPage/>}/>
                <Route path="/registration" element={<RegistrationPage/>}/>
                <Route path="/review" element={<Review/>}/>
                <Route path="/search" element={<SearchPage/>}/>
                <Route path="/terms" element={<Terms/>}/>
                <Route path="/thankyou" element={<ThankYouPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;