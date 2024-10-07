import { FormDataType } from "@/components/Forms";

export const miscProducts: FormDataType = 
    {
        title: "Add a Misc Product",
        category: "Misc Products",
        fields: [
            {
                title: "Name",
                type: "text"
            },{
                title: "Tax Rate",
                type: "radio",
                options: [] // reference the tax rates set
            }
        ]
    }