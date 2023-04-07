import React from "react";
import Navbar from "../../components/naavbar/navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/featured";

const Booking = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homecontainer">
        <Featured />
      </div>
    </div>
  );
};
export default Booking;
