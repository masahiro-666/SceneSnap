import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link, useNavigate } from "react-router-dom";

function Template() {

    return (
        <>
             <div className="app-container">
                <div className="max-md:hidden z-10">
                    <Navbar />
                </div>
                <div className="page-container max-md:hidden">
                    <div className="bg-white">
                        
                    </div>
                </div>
                <div className="max-md:hidden">
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Template;