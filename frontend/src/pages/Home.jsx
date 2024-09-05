import React from "react";
import { Navigate } from "react-router-dom";
import {SignedIn, SignedOut} from "@clerk/clerk-react";
const Home = ()=>{
    return(
        <div>
            <SignedIn>
                < className="text-center text-4xl md:text-5xl md:landscape:">

                </>
            </SignedIn>
        </div>
    )
}