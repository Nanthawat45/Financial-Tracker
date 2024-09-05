import React from 'react'
import {useUser} from "@clerk/clerk-react";
import {useFinancialRecords} from "../../contexts/financial.service";
import AddRecordForm from "./AddRecordForm";
import { FinancialRecordTable } from './FinancialRecordTable';
import { log } from 'console';

const Dashbard = () => {
    const {user}= useUSer();
    console.log();
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        <div className='text-center text-3xl md:text-4xl md:leading-snug font-bold my-2'>
            Welcome {user?}
        </div>
    </div>
  )
}

export default index