import { FormDataType } from "@/components/Forms";
import Table from "@/components/Table";
import React from 'react'

const TenderTypesView = () => {
    const data: (string)[][] = []
  return (
    <Table headers={["Name", "Description", "Classification"]} data={data}/>
  )
}

export default TenderTypesView
export const tenderTypes: FormDataType = {
    title: "Add a Tender Type",
    category: "Tender Type",
    view: TenderTypesView,
    fields: [
        {
        title: "Name",
        type: "text"
    },
    {
        title: "Description",
        type: "text"
    },
    {
        title: "Classification",
        type: "text"
    },
]
}