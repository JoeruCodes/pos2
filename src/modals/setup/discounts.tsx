import { FormDataType } from "@/components/Forms";
import Table from "@/components/Table";
import { title } from "process";
import React from 'react'

const DiscountTypeView = () => {
    const data: string[][]=[]
  return (
    <Table headers={["Reason", "Default Value"]} data={data}/>
  )
}

export default DiscountTypeView;
export const discountReasons: FormDataType = 
    {
        category: "Discount Reason",
        title: "Add a Discount Reason",
        view: DiscountTypeView,
        fields: [
            {
                title: "Reason",
                type: "text"
            },
            {
                title: "Default Value",
                type: "text"
            }
        ]
    }