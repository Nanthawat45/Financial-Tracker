import React from 'react';
import { useFinancialRecord } from "../../contexts/financial.contexts";

const FinancialRecordTable = () => {
  const { records } = useFinancialRecord();

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Financial Records</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          {/* Head */}
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="py-3 px-4 text-left font-medium text-gray-600">#</th>
              <th className="py-3 px-4 text-left font-medium text-gray-600">Description</th>
              <th className="py-3 px-4 text-left font-medium text-gray-600">Amount</th>
              <th className="py-3 px-4 text-left font-medium text-gray-600">Date</th>
              <th className="py-3 px-4 text-left font-medium text-gray-600">Category</th>
              <th className="py-3 px-4 text-left font-medium text-gray-600">Payment Method</th>
              {/* Uncomment if you want to add Edit/Delete buttons */}
              {/* <th className="py-3 px-4 text-left font-medium text-gray-600">Edit</th>
              <th className="py-3 px-4 text-left font-medium text-gray-600">Delete</th> */}
            </tr>
          </thead>
          {/* Body */}
          <tbody>
            {records.length > 0 ? (
              records.map((record, index) => {
                // ตรวจสอบว่า record.amount เป็นตัวเลขหรือไม่
                const amount = typeof record.amount === 'number' ? record.amount : parseFloat(record.amount);

                return (
                  <tr key={record.id} className="border-b hover:bg-gray-50 transition">
                    <td className="py-3 px-4 text-gray-800">{index + 1}</td>
                    <td className="py-3 px-4 text-gray-800">{record.description}</td>
                    {/* แสดงจำนวนเงิน และใช้ toFixed เฉพาะเมื่อ amount เป็นตัวเลขที่ไม่ใช่ NaN */}
                    <td className={`py-3 px-4 ${amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {!isNaN(amount) ? amount.toFixed(2) : '-'}
                    </td>
                    <td className="py-3 px-4 text-gray-800">{record.date}</td>
                    <td className="py-3 px-4 text-gray-800">{record.category}</td>
                    <td className="py-3 px-4 text-gray-800">{record.paymentMethod}</td>
                    {/* Uncomment if you want to add Edit/Delete buttons */}
                    {/* <td className="py-3 px-4">
                      <button className="btn btn-sm text-blue-500 hover:text-blue-700">Edit</button>
                    </td>
                    <td className="py-3 px-4">
                      <button className="btn btn-sm text-red-500 hover:text-red-700">Delete</button>
                    </td> */}
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="6" className="py-4 text-center text-gray-500">
                  No records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FinancialRecordTable;
