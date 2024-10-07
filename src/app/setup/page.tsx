"use client";
import Forms, { FormDataType, FormsProps, ViewFunctionWithoutProps } from '@/components/Forms';
import CompanyDetailsView, { companyDetails } from '@/modals/setup/companyDetails';
import { customerType } from '@/modals/setup/customerTypes';
import { discountReasons } from '@/modals/setup/discounts';
import { noSaleReasons } from '@/modals/setup/noSaleReasons';
import { refundReasons } from '@/modals/setup/refundReason';
import { stockMovementReasons } from '@/modals/setup/stockMovementReasons';
import { taxRates } from '@/modals/setup/taxRates';
import { tenderTypes } from '@/modals/setup/tenderTypes';
import React, { useState } from 'react';

const forms: FormDataType[] = [
    companyDetails,
    customerType,
    discountReasons,
    noSaleReasons,
    refundReasons,
    stockMovementReasons,
    taxRates,
    tenderTypes
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
            {form?.view === CompanyDetailsView ? (
                <CompanyDetailsView />
            ) : form &&  form.view ?(
                <>
                <Forms data={form} />
                {<form.view />}
                </>
            ) : (
                <div />
            )}
        </div>
    );
};

export default Page;
