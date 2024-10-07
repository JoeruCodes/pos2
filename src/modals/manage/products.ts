import { FormDataType } from "@/components/Forms";

export const products: FormDataType = 
    {
        title: "Add a Product",
        category: "Product",
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
                title: "Cost Price (excl Tax)",
                type: "number"
            },
            {
                title: "Selling Price (excl Tax)",
                type: "number"
            },
            {
                title: "Tax Rate",
                type: "radio",
                options: [] //  tax rate panel
            },
            {
                title: "",
                type: "checkbox",
                options: ["Tax Exempt / EBT Eligible"]
            },
            {
                title: "Cost Price (incl Tax)",
                type: "number"
            },
            {
                title: "Sale Price (incl Tax)",
                type: "number"
            },
            {
                title: "",
                type: "checkbox",
                options: ["Variable Price: Set the Price upon sale"]
            },
            {
                title: "Margin (%)",
                type: "number"
            },
            {
                title: "Take Away/Delivery Price: (excluding Tax) (this is only used to calculate Take Away/Delivery inc. Tax)",
                type: "number"
            },
            {
                title: "Take Away/Delivery Tax Rate",
                type: "radio",
                options: [] // from tax rate
            },
            {
                title: "Take Away/Delivery Price (incl Tax)",
                type: "number"
            },
            {
                title: "Recommended Retail Price (RRP)",
                type: "number"
            },
            {
                title: "Category",
                type: "radio",
                options: [] // category
            },
            {
                title: "Product Orde Code",
                type: "text"
            },
            {
                title: "Article Code",
                type: "text"
            },
            {
                title: "Unit of sale",
                type: "radio",
                options: ["cm", "ml", "l", "ft", "oz", "kg", "g", "pints", "half pint"]
            },
            {
                title: "Volume of sale",
                type: "number"
            },
        ]
    }