import React from 'react';
import { useFinancialRecord } from "../../contexts/financial.contexts";

const FinancialRecordTable = () => {
  const { records } = useFinancialRecord();
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* Head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Category</th>
              <th>Payment Method</th>
              {/* <th>Edit</th>
              <th>Delete</th> */}
            </tr>
          </thead>
          {/* Body */}
          <tbody>
            {records.map((record, index) => (
              <tr key={record.id}>
                <td>{index + 1}</td>
                <td>{record.description}</td>
                <td>{record.amount}</td>
                <td>{record.date}</td>
                <td>{record.category}</td>
                <td>{record.paymentMethod}</td>
                {/* <td>
                  <button className="btn btn-sm">Edit</button>
                </td>
                <td>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FinancialRecordTable;