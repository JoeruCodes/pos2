import React, { useState, useEffect, useCallback } from 'react';
import Forms, { FormDataType, FormsProps } from "@/components/Forms";
import { getOrderedValues } from "@/utils/misc";
import { addEntry, editEntry, getEntries } from "@/utils/sql";

type DataSchema = {
  company_information: string;
  tax_number: string;
  show_inc_exc_tax: boolean;
}

const CompanyDetailsView = () => {
  const [data, setData] = useState<DataSchema>({
    company_information: "",
    tax_number: "",
    show_inc_exc_tax: false
  });

  useEffect(() => {
    const fetchData = async () => {
      const entries = await getEntries('CompanyInformation');
      console.log(entries);
      setData((entries as DataSchema[])[0]);
    };
    fetchData();
  }, []);

  const handleData = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const values = Object.values(Object.fromEntries(form.entries()));
    console.log(values);

    if (!data) {
      await addEntry("CompanyInformation", ['company_information', 'tax_number', 'show_inc_exc_tax'], [...values, true]);
      console.log("Added data");
    } else {
      await editEntry('CompanyInformation', ['tax_number', 'show_inc_exc_tax'], [...values, true].slice(1), 'company_information', values[0]);
      console.log("Edited entry");
    }
  }, [data]);

  return (
    <Forms data={companyDetails} injectedData={{
      onChangeSave: handleData,
      data: getOrderedValues(data, ['company_information', 'tax_number', 'show_inc_exc_tax'])
    }}/>
  );
}

export const companyDetails: FormDataType = {
  title: "Company Information",
  category: "Company Information",
  view: CompanyDetailsView,
  fields: [
    {
      title: "Company Name",
      type: "text"
    },
    {
      title: "Tax Number",
      type: "text"
    },
    {
      title: "",
      type: "checkbox",
      options: ["Show Inc/Exc Tax Option"]
    }
  ]
}

export default CompanyDetailsView;
