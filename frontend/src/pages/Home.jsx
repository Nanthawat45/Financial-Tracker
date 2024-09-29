import React, { useState, useEffect } from "react";
import FinancialService from "../services/financial.service"; // ตรวจสอบ path ของ service นี้ว่าถูกต้องหรือไม่
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom"; // เปลี่ยนมาใช้ useNavigate สำหรับการนำทาง
import Swal from "sweetalert2";

function Home() {
  const [financials, setFinancials] = useState([]);
  const navigate = useNavigate(); // ใช้ useNavigate แทน Navigate component

  useEffect(() => {
    const getFinancial = async () => {
      try {
        const response = await FinancialService.getAllFinancial();
        if (response.status === 200) {
          setFinancials(response.data);
        }
      } catch (error) {
        Swal.fire({
          title: "Get All Financials",
          text: error?.response?.data?.message || error.message,
          icon: "error",
        });
      }
    };
    getFinancial();
  }, []);

  // เพิ่ม useEffect เพื่อตรวจสอบและ navigate เมื่อ financials มีข้อมูล
  useEffect(() => {
    if (financials.length > 0) {
      navigate("/dashboard");
    }
  }, [financials, navigate]);

  return (
    <>
      <div className="container flex flex-row flex-wrap mx-auto items-center justify-center">
        <SignedOut>
          <h1 className="text-6xl font-bold mb-5 mt-5">
            Welcome to your own Personal Financial Tracker
          </h1>
          <div className="space-x-4">
            <SignUpButton mode="modal" className="btn btn-outline btn-primary">
              Sign Up
            </SignUpButton>
            <SignInButton mode="modal" className="btn btn-outline btn-secondary">
              Sign In
            </SignInButton>
          </div>
        </SignedOut>

        <SignedIn>
          {financials.length > 0 ? (
            <div className="flex items-center space-x-4">
              <p>Data Loaded</p>
              <UserButton />
              {/* แสดงข้อมูล financials */}
              {financials.map((item, index) => (
                <div key={index}>
                  <p>{item.description}</p>
                  <p>{item.amount}</p>
                </div>
              ))}
            </div>
          ) : (
            <div>Loading data...</div>
          )}
        </SignedIn>
      </div>
    </>
  );
}

export default Home;
