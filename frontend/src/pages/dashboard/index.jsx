import React, { useMemo } from "react";
import { useUser } from "@clerk/clerk-react";
import { useFinancialRecord } from "../../contexts/financial.contexts";
import AddRecordForm from "./AddRecordForm";
import FinancialRecordTable from "../dashboard/FinancialRecordTable";

const Dashbord = () => {
  const { user } = useUser();
  const { records } = useFinancialRecord();
  
  if (!records) {
      return <div>Loading...</div>; 
  }
  const totalMonthly = useMemo(() => {
      let totalAmount = 0;
      records.forEach((record) => {
          const amount = Number(record.amount);
          totalAmount += amount;
      });
      return totalAmount;
  }, [records]); 

  return (
      <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
          <div className="text-center text-3xl md:text-4xl md:leading-snug font-bold my-2">
              Welcome {user ? user.firstName : "User"}! Here are your finances:
          </div>
          <AddRecordForm />
          <div className="text-center text-xl my-4">
              Total Monthly: {totalMonthly}฿
          </div>
          {records.length > 0 ? (
              <FinancialRecordTable records={records} />
          ) : (
              <p>No records found.</p>
          )}
      </div>
  );
};

export default Dashbord;