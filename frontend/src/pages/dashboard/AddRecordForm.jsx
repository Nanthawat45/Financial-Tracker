import { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { useFinancialRecord } from "../../contexts/financial.contexts";

const AddRecordForm = () => {
  const [record, setRecord] = useState({
    description: "",
    amount: 0,
    date: "",
    category: "",
    paymentMethod: "",
  });

  const { addRecord } = useFinancialRecord(); // ใช้ฟังก์ชัน addRecord จาก context
  const { user } = useUser(); // ใช้ข้อมูล user จาก Clerk

  // ฟังก์ชันสำหรับจัดการการเปลี่ยนแปลงของ input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecord({ ...record, [name]: value });
  };

  // ฟังก์ชันสำหรับจัดการการส่งฟอร์ม
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      try {
        await addRecord({ ...record, userId: user.id }); // เพิ่ม record และใส่ userId
        setRecord({ description: "", amount: 0, date: "", category: "", paymentMethod: "" }); // รีเซ็ตฟอร์มหลังการบันทึก
      } catch (error) {
        console.error("Failed to add record:", error);
      }
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
            placeholder="Type here"
            name="description"
            value={record.description}
            onChange={handleChange} // เพิ่ม onChange เพื่ออัปเดตค่าใน state
            className="input input-bordered w-full max-w-xs"
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Amount</span>
          </div>
          <input
            type="number" // เปลี่ยนจาก text เป็น number เพื่อความถูกต้องของข้อมูล
            placeholder="Type here"
            name="amount"
            value={record.amount}
            onChange={handleChange} // เพิ่ม onChange
            className="input input-bordered w-full max-w-xs"
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Date</span>
          </div>
          <input
            type="date" // ใช้ date แทน text เพื่อความถูกต้อง
            placeholder="Type here"
            name="date"
            value={record.date}
            onChange={handleChange} // เพิ่ม onChange
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
            onChange={handleChange} // เพิ่ม onChange เพื่ออัปเดตค่าใน state
            className="select select-bordered"
          >
            <option value="">Select a category</option>
            <option value="Food">Food</option>
            <option value="Rent">Rent</option>
            <option value="Salary">Salary</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Payment Method</span>
          </div>
          <select
            name="paymentMethod"
            value={record.paymentMethod}
            onChange={handleChange} // เพิ่ม onChange เพื่ออัปเดตค่าใน state
            className="select select-bordered"
          >
            <option value="">Select a Payment Method</option>
            <option value="Cash">Cash</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <button type="submit" className="btn btn-primary w-full max-w-xs">
          Add Record
        </button>
      </form>
    </div>
  );
};

export default AddRecordForm;
