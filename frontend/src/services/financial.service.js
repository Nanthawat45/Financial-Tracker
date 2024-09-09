import api from "./api"
const FINANCIAL_API_URL = import.meta.env.VITE_FINANCIAL_API_URL;

//get all financial record
const getAllFinancialRecordsByUserId = async (userId) =>{
    return await api.get(`${FINANCIAL_API_URL}/user/${userId}`);
}
//get all financial record
const createFinancialRecord = async(record)=> {
    return await api.post(`${FINANCIAL_API_URL}`, record);
};

const getByUserId = async(record)=> {
    return await api.post(`${FINANCIAL_API_URL}`, record);
};

//update a record
const FinancialService = {
  getAllFinancialRecords,
  getAllFinancialRecordsByUserId,
  getAllFinancialRecordsById,
  createFinancialRecord,
  updateFinancialRecord,
  deleteFinancialRecord,
};

export default FinancialService;