/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { useFinancialRecords } from "../contexts/financial.contexts";

const EditModal = ({ id, title }) => {
  const [record, setRecord] = useState({
    description: "",
    amount: 0,
    type: "expense",
    date: new Date().toISOString().split("T")[0],
    category: "",
  });

  const { updateRecord, getFinancialRecordById } = useFinancialRecords();
  const { user } = useUser();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecord({ ...record, [name]: value });
  };

  const categories = {
    income: ["Salary", "Bonus", "Investment", "Other"],
    expense: ["Food", "Rent", "Utilities", "Entertainment", "Other"],
  };

  const paymentMethods = ["Cash", "Credit Card", "Bank Transfer"];

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await getFinancialRecordById(id);
        if (response.status === 200) {
          setRecord({
            ...response.data,
            date: response.data.date.split("T")[0],
          });
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchRecords(); // เรียกใช้ฟังก์ชัน fetchRecords
  }, [getFinancialRecordById, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecord(id, { ...record, userId: user.id }); // เปลี่ยน user.Id เป็น user.id
    const modal = document.getElementById("updateRecord");
    if (modal) {
      modal.close(); // ตรวจสอบว่า modal มีอยู่จริงแล้วค่อย close
    }
  };

  return (
    <div>
      <form className="space-y-2" onSubmit={handleSubmit}>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Description</span>
          </div>
          <input
            type="text"
            name="description"
            value={record.description}
            onChange={handleChange}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Amount</span>
          </div>
          <input
            type="number"
            name="amount"
            value={record.amount}
            onChange={handleChange}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Date</span>
          </div>
          <input
            type="date"
            name="date"
            value={record.date}
            onChange={handleChange}
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Category</span>
          </div>
          <select
            name="category"
            value={record.category}
            onChange={handleChange}
            className="select select-bordered w-full max-w-xs"
          >
            <option value="">Select a category</option>
            {categories[record.type].map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Payment Method</span>
          </div>
          <select
            name="paymentMethod"
            value={record.paymentMethod}
            onChange={handleChange}
            className="select select-bordered w-full max-w-xs"
          >
            <option value="">Select a Payment Method</option>
            {paymentMethods.map((method, index) => (
              <option key={index} value={method}>
                {method}
              </option>
            ))}
          </select>
        </label>
        <div className="modal-action">
          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditModal;
