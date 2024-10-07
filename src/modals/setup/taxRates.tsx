import { FormDataType } from "@/components/Forms";
import Table from "@/components/Table";
import React from 'react'

const TaxRatesView = () => {
    const data: (string | number)[][] = [];
  return (
    <Table headers={["Name", "Description", "Tax Code", "Rate"]} data={data}/>
  )
}

export default TaxRatesView
export const taxRates: FormDataType = {
    title: "Add a Tax Rate",
    category: "Tax Rate",
    view: TaxRatesView,
    fields: [
        {
        title: "Name",
        type: "text"
    },
    {
        title: "Percentage",
        type: "text"
    },
    {
        title:"Tax Code",
        type: "text"
    },
    {
        title: "Description",
        type: "text"
    },
    {
        title: "Tax Type",
        type: "radio",
        options: ["Standard", "Combined"]
    }]
}