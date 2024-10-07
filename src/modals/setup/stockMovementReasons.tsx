import { FormDataType } from "@/components/Forms";
import Table from "@/components/Table";
import React from 'react'

const StockMovementReasonsView = () => {
    const data: string[][] = []
  return (
    <Table headers={["Reason"]} data={data}/>
  )
}

export default StockMovementReasonsView
export const stockMovementReasons: FormDataType = 
    {
        category: "Stock Movement Reason",
        title: "Add a Stock Movement Reason",
        view: StockMovementReasonsView,
        fields: [
            {
                title: "Reason",
                type: "text"
            }
        ]
    }