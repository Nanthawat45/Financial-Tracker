import { FinancialRecordsProvider } from "../contexts/financial.contexts"; // ตรวจสอบ path ที่ถูกต้อง

function App() {
  return (
    <FinancialRecordsProvider>
      <RouterProvider router={router} />
    </FinancialRecordsProvider>
  );
}
export default App