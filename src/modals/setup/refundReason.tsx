import { FormDataType } from "@/components/Forms";
import Table from "@/components/Table";
import React from 'react'

const RefundReasonsView = () => {
    const data: (string | number | boolean)[][] = []
  return (
    <Table headers={["Description", "Return to Stock"]} data={data} />
  )
}

export default RefundReasonsView;
export const refundReasons: FormDataType = 
    {
        category: "Refund Reason",
        title: "Add a Refund Reason",
        view: RefundReasonsView,
        fields: [
            {
                title: "Description",
                type: "text"
            },
            {
                title: "",
                type: "checkbox",
                options: ["Return to Stock"]
            }
        ]
    }