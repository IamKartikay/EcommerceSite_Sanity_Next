import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import Cart from "./Cart";
import { useStateContext } from "../context/StateContext";
import { FaArtstation } from "react-icons/fa";

const Navbar = () => {
  const { totalQuantities, setShowCart, showCart } = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <span className="logoimg" ><FaArtstation/></span>
        <Link href="/">boAt   </Link>
      </p>
      
      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart((value) => !value)}
      >
        <AiOutlineShoppingCart />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
