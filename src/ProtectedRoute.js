import React from "react";
import Navbar from "./components/navbar";
import Header from "./components/navbar/header";

const ProtectedRoute = (props) => {

    return (
        <div className="route-container">
            <Header />
            <div className="page-container">{props.children}</div>
            <Navbar />
        </div>
    )
};
export default ProtectedRoute;
