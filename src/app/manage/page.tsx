"use client"
import Forms, { FormDataType } from "@/components/Forms";
import { categories } from "@/modals/manage/categories";
import { customerForm } from "@/modals/manage/customer";
import { miscProducts } from "@/modals/manage/miscProducts";
import { products } from "@/modals/manage/products";
import { useState } from "react";

const forms: FormDataType[] = [
    categories,
    ...customerForm,
    miscProducts,
    products
];
const Page = () => {
    const [form, setForm] = useState<FormDataType | null>(null);

    // Check if form.view is a component function
    const isComponentView = (view: any): view is React.ComponentType<any> => typeof view === 'function';

    return (
        <div className='space-y-4 px-8'>
            <div className='mt-[1%] w-full flex justify-evenly'>
                {forms.map((f, i) => (
                    <button
                        className="border p-2 px-4 rounded-lg hover:bg-slate-100"
                        onClick={() => setForm(f)}
                        key={i}
                    >
                        {f.category}
                    </button>
                ))}
            </div>
            {/* {form?.view === CompanyDetailsView ? (
                <CompanyDetailsView />
            ) : form &&  form.view ?(
                <>
                <Forms data={form} />
                {<form.view />}
                </>
            ) : (
                <div />
            )} */}
            {form && <Forms data={form} />}
        </div>
    );
};

export default Page;