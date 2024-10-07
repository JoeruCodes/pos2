import { FormDataType } from "@/components/Forms";

export const addCustomer: FormDataType = 
    {
        title: "Add a New Customer",
        fields: [
            {
                title: "Title",
                type: "text"
            },
            {
                title: "First Name",
                type: "text"
            },
            {
                title: "Last Name",
                type: "text"
            },
            {
                title: "DNI/CIF/NIE",
                type: "text"
            },
            {
                title: "Business Name",
                type: "text"
            },
            {
                title: "DOB",
                type: "date"
            },
            {
                title: "Contact Number",
                type: "tels"
            },
            {
                title: "Contact Number 2",
                type: "tels"
            },
            {
                title: "Email",
                type: "email"
            },
            {
                title: "Type",
                type: "radio",
                options: [] // from customer type
            },
            {
                title: "Max Credit",
                type: "number"
            },
            {
                title: "Notes",
                type: "text"
            },
        ]
    }

export const addAdditionalMember: FormDataType = {
    title: "Add New Additional Member",
    fields: [
        {
            title: "First Name",
            type: "text"
        },
        {
            title: "Last Name",
            type: "text"
        },
        {
            title: "DOB",
            type: "date"
        }
    ]
}

export const addNewAddress: FormDataType = {
    title: "Add New Address",
    fields: [
        {
            title: "Address Name",
            type: "text"
        },
        {
            title: "Address Line 1",
            type: "text"
        },
        {
            title: "Town",
            type: "text"
        },
        {
            title: "County",
            type: "text"
        },
        {
            title: "Postcode",
            type: "text"
        }
    ]
}

export const customerForm: FormDataType[] = [addCustomer, addAdditionalMember, addNewAddress]; 