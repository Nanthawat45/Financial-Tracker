import{createContext, useContext, useEffect,useState} from "react";
import FinancialService from"../services/financial.service";
import{useUser} from "@clerk/clerk-react";
import { update } from "../../../backend/controllers/financial.controller";

export const FinancialRecordContext = createContext();

export const FinancialRecordProvider = ({childern})=>{
    const [records, setRecords] = useState([])
    const {user} = useUser();

    const fetchRecords = async ()=>{
        if(!user) return;
        try{
            const response = await FinancialService.getAllFinancialRecordsByUserId(user.id);
            if(response.status ===200){
                setRecords(response.data);
            }
        }catch(error){
            console.log(error);
        }
    };
    useEffect(() => {
    fetchRecords();
  }, [user]);

        const addRecord = async(record)=>{
            try{
                const response = await FinancialService.addRecord(record);
                if(response.status === 200){
                    setRecords((prev)=>[...prev, response.data]);
                }
            }catch (error){
                console.log();
            }
        };
    
 const deleteRecord = async (id) => {
    try {
      const response = await FinancialService.deleteFinancialRecord(id);
      if (response.status === 200) {
        setRecords((prev) => prev.filter((record) => record.id !== id));
      }
    } catch (error) {
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
          prev.map((record) => (record.id === id ? newRecord : record))
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FinancialRecordContext.Provider
      value={{ records, addRecord, updateRecord, deleteRecord }}
    >
      {childern}
    </FinancialRecordContext.Provider>
  );


        
        
}
export const useFinancialRecords = () => useContext
(FinancialRecordContext);

