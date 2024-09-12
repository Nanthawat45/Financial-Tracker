import React from "react";
import { useUser } from "@clerk/clerk-react";
import { useFinancialRecords } from "../../contexts/financial.contexts";
import AddRecordForm from "./AddRecordForm";
import { FinancialRecordTable } from "./FinancialRecordTable";
import { useMemo } from "react";

const Dashbard = () => {
  const { user } = useUser();
  const { records } = useFinancialRecords();

  const totalMonthly = useMemo(() => {
    let totalAmount = 0;
    records.forEach((record) => {
      const amount = Number(record.amount);
      totalAmount += amount;
    });
    return totalAmount;
  });
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <div className="text-center text-3xl md:text-4xl md:leading-snug font-bold my-2">
        Welcome {user?.firstName}! Here are your finances:
      </div>
      <AddRecordForm />
      <div className="text-center text-xl my-4">
        Total Monthly: {totalMonthly}฿
      </div>
      <FinancialRecordTable records={records} />
    </div>
  );
};

export default Dashbard;
