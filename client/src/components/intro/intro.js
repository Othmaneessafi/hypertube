import React from "react";
import { Link } from "react-router-dom";
import "./intro.css";
import Logo from "../../image/logo.png";
import { Icon } from '@iconify/react';

export default function intro() {
  return (
    <main className="introContainer relative h-screen w-full p-6">
      <div className="z-[99] p-6 flex flex-row items-center justify-between">
        <div className="logo w-1/3" >
          <img src={Logo} width={200} alt="logo w-96" />
        </div>
        <div className="loginButton" >
          <Link to="/login" style={{ textDecoration: "none" }}>
              <button
                className="bg-primaryRed py-2 px-6 rounded-md text-primaryWhite"
              >
                Sign In
              </button>
            </Link>
        </div>
      </div>
      <div className="introContent w-full h-[89vh] p-10 justify-center flex flex-col">
        <div className="text-6xl text-primaryWhite w-1/2 leading-[1.1]" >
          Watch movies online, and find your favorites and new movies.
          Subscribe now for more
        </div>
        <div className="mt-6" >
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button
              className="bg-primaryRed py-4 px-12 rounded-md text-2xl text-primaryWhite flex items-center"
            >
              Get Started <Icon icon="akar-icons:arrow-right" className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </main>
     
  );
}
