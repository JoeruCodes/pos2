import { FormDataType, FormsProps } from "@/components/Forms";
import Table from "@/components/Table";
import { addEntry, editEntry, getEntries } from "@/utils/sql";
import { title } from "process";
import React, { useCallback, useEffect, useState } from 'react'

export type CustomerTypesView = {
    name: string,
    desc: string,
    discount: number
};
const CustomerTypesView = () => {
    const [data, setData] = useState<CustomerTypesView[]>([]);
    useEffect(() => {
        const fetchData = async () => {
          const entries = await getEntries('CustomerTypes');
          console.log(entries);
          setData(entries as CustomerTypesView[]);
        };
        fetchData();
      }, []);
    const handleData = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const values = Object.values(Object.fromEntries(form.entries()));
        console.log(values);
    
        if (!data) {
          await addEntry("CustomerTypes", ['name', 'description', 'discount'], [...values]);
          console.log("Added data");
        } else {
          await editEntry('CustomerTypes', ['description', 'discount'], values.slice(1), 'name', values[0]);
          console.log("Edited entry");
        }
      }, [data]);
    return (
        <Table headers={["Name", "Description", "Discount"]} data={data.map(obj => Object.values(obj))}/>
    );
  };

export default CustomerTypesView;
export const customerType: FormDataType = 
    {
        category: "Customer Type",
        title: "Add a Customer Type",
        view: CustomerTypesView,
        fields: [
            {
                title: "Name",
                type: "text"
            },
            {
                title: "Desciption",
                type: "text"
            },
            {
                title: "Discount (%)",
                type: "number"
            }
        ]
    }