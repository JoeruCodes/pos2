import { FormDataType } from "@/components/Forms";

export const categories: FormDataType = 
    {
        title: "Add a Category",
        category: "Category",
        fields: [
            {
                title: "Name",
                type: "text"
            },
            {
                title: "Parent Category",
                type: "radio",
                options: []
            },
            {
                title: "Report Category",
                type: "radio",
                options: []
            },
            {
               title: "Display",
               type: "radio",
               options: [] 
            },
            {
                title: "Wet/Dry Category",
                type: "radio",
                options: ["Wet", "Dry"]
            },
            {
                title: "Till Order",
                type: "text"
            },
            {
                title: "Norminal Code",
                type: "text"
            },
            {
                title: "",
                type: "checkbox",
                options: ["Show on Till"]
            }
        ]
    }