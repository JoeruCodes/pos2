import { FormDataType } from "@/components/Forms";
import Table from "@/components/Table";
import React from 'react'

const NoSaleRecordsView = () => {
  const data: (string | number)[][] = []; // use getter
    return (
    <Table headers={["Reason"]} data={data}/>
  )
}

export default NoSaleRecordsView;
export const noSaleReasons: FormDataType = 
    {
        category: "No Sale Reason",
        title: "Add a No Sale Reason",
        view: NoSaleRecordsView,
        fields: [
            {
                title: "Reason",
                type: "text"
            },
        ]
    }