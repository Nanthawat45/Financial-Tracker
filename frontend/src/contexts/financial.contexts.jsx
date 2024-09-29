import { createContext, useContext, useEffect, useState } from "react";
import FinancialService from "../services/financial.service";
import { useUser } from "@clerk/clerk-react";

export const FinancialRecordContext = createContext();

export const FinancialRecordsProvider = ({ children }) => {
    const [records, setRecords] = useState([]);
    const { user } = useUser();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const [selectedMonth, setSelectedMonth] = useState(
      months[new Date().getMonth()]
    );
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

    useEffect(() => {
      const fetchRecords = async () => {
        if (!user) return;
        try {
          const response = await FinancialService.getAllFinancialRecordsByUserId(
            user.id
          );
          if (response.status === 200) {
            setRecords(response.data);
          }
        }catch (error) {
          console.log(error);
        }
    };
    fetchRecords();
    }, [user]);

    const addRecord = async (record) => {
      try {
        const response = await FinancialService.createFinancialRecord(record);

        if (response.status === 200) {
          setRecords((prev) => [...prev, response.data]);
        }
      }catch (error) {
        console.log(error);
      }
    };
    
    const updateRecord = async (id, newRecord) => {
      try {
        const response = await FinancialService.updateFinancialRecord(
          id,
          newRecord
        );
        if (response.status === 200) {
          setRecords((prev) => 
            prev.map((record) => {
              if (record.id === id) {
                return newRecord;
              } else {
                return record;
              }
            })
          );
        }
      } catch (error) {
        console.log(error);
      }
    };
    const getFinancialRecordById = async (id) => {
      try {
        const response = await FinancialService.getFinancialRecordsById(id);
        if (response.status === 200) {
          return response;
        } else {
          return null;
        }
      }catch (error) {
        console.log(error);
      }
    };

    const deleteRecord = async (id) => {
      try {
        const response = await FinancialService.deleteFinancialRecord(id);
        if (response.status === 200) {
          setRecords((prev) => prev.filter((record) => record.id !== id));
        }
      }catch (error) {
        console.log(error);
      }
    };
    return (
      <FinancialRecordContext.Provider
        value={{
          records,
          months,
          selectedMonth,
          setSelectedMonth,
          selectedYear,
          setSelectedYear,
          addRecord,
          updateRecord,
          deleteRecord,
          getFinancialRecordById,
        }}
      >
        {children}
        </FinancialRecordContext.Provider>
    );
};
export const useFinancialRecord = () => useContext(FinancialRecordContext);