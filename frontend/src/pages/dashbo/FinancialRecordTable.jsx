import React from 'react'
import{ useFinancialRcords } from "../../contexts/financial.service";

const FinancialRecordTable = () => {
    const{ records } = useFinancialRcords();
  return (
    <div>
      <div>
        <div className="overflow-x-auto">
          <table className="table teble-zebra">
            {/* head */}
            <table>
              <tr>
                <th></th>
                <th>Description</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Category</th>
                <th>Payment Method</th>
              </tr>
            </table>
            <table>
                {/* row 1 */}
                {records.map((record)=>(
                    <tr key={record.id}>
                        <td>{record.id}</td>
                        <td>{record.description}</td>
                        <td>{record.amount}</td>
                        <td>{record.date}</td>
                        <td>{record.category}</td>
                        <td>{record.paymentMethod}</td>
                    </tr>
                ))}
                {/* row 2 */}
            </table>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FinancialRecordTable