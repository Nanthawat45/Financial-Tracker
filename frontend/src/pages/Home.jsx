import React from "react";
import { Navigate } from "react-router-dom";
import {SignedIn, SignedOut} from "@clerk/clerk-react";

const Home = ()=>{
    return (
      <div>
        <SignedOut>
          <h1 className="text-center text-4xl md:text-5xl md:leading-snug font-bold my-2">
            ยินดีต้อนรับ
          </h1>
        </SignedOut>
        <SignedIn>
          <Navigate to="/dashboard" replace />
        </SignedIn>
      </div>
    );
};
export default Home;