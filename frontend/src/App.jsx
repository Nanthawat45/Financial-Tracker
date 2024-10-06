import React from 'react';
import AddRecordForm from './pages/dashboard/AddRecordForm';
import FinancialRecordTable from './pages/dashboard/FinancialRecordTable';
import { FinancialRecordsProvider } from "./contexts/financial.contexts"; // ตรวจสอบ path ที่ถูกต้อง

function App() {
  return (
    <FinancialRecordsProvider>
      <div className="p-4">
      <AddRecordForm />
      <RouterProvider router={router} />
      <FinancialRecordTable />
      </div>
    </FinancialRecordsProvider>
  );
}
export default App