// import React, { HTMLInputTypeAttribute } from 'react';

// export type FormDataType = {
//     title: string;
//     category?: string;
//     fields: {
//         title: string;
//         type: HTMLInputTypeAttribute;
//         options?: string[];
//     }[];
//     view?: ViewFunctionWithProps | ViewFunctionWithoutProps;
// };

// export type FormsProps = {
//     data: FormDataType;
//     disabledData?: {
//         isdisabled: boolean,
//         data?: (string| number | boolean)[]
//     };
// };

// export type ViewFunctionWithProps = ({ data }: FormsProps) => React.JSX.Element;
// export type ViewFunctionWithoutProps = () => React.JSX.Element;

// const Forms = ({ data, disabledData }: FormsProps) => {
//     return (
//         <div className='space-y-6 p-6 bg-white rounded-lg'>
//             <h1 className='text-2xl font-bold text-gray-800 mb-4'>{data.title}</h1>
//             <form className='space-y-4'>
//                 {data.fields.map((field, index) => (
//                     <div key={index} className={`flex ${field.type === "radio" || field.type === "checkbox" ? "flex-col space-y-2" : "flex flex-col space-y-2"}`}>
//                         <label className='text-gray-600 font-medium'>{field.title}</label>
//                         {field.options ? (
//                             <div className='space-y-2'>
//                                 {field.options.map((opt, i) => (
//                                     <div key={i} className='flex items-center space-x-2'>
//                                         <input 
//                                             type={field.type} 
//                                             name={field.title} 
//                                             value={opt}
//                                             defaultChecked={disabledData?.isdisabled && disabledData.data ? disabledData.data.includes(opt) : false}
//                                             disabled={disabledData?.isdisabled}
//                                             checked={disabledData?.isdisabled && disabledData.data ? disabledData.data[index] as boolean : undefined}
//                                             className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
//                                         />
//                                         <label className='text-gray-600'>{opt}</label>
//                                     </div>
//                                 ))}
//                             </div>
//                         ) : (
//                             <input 
//                                 type={field.type} 
//                                 value={disabledData?.isdisabled && disabledData.data ? disabledData.data[index] as string : ''}
//                                 defaultChecked={disabledData?.isdisabled && disabledData.data ? disabledData.data[index] as boolean : false}
//                                 disabled={disabledData?.isdisabled}
//                                 className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
//                             />
//                         )}
//                     </div>
//                 ))}
//                 {!disabledData?.isdisabled && <button 
//                     type='submit' 
//                     className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200'
//                 >
//                     Save
//                 </button>}
//             </form>
//         </div>
//     );
// };

// export default Forms;


import React, { HTMLInputTypeAttribute } from 'react';

export type FormDataType = {
    title: string;
    category?: string;
    fields: {
        title: string;
        type: HTMLInputTypeAttribute;
        options?: string[];
    }[];
    view?:  ViewFunctionWithoutProps;
    forms?: FormDataType[]
};

export type FormsProps = {
    data: FormDataType;
    injectedData?: {
        onChangeSave: (e:  React.FormEvent<HTMLFormElement>) => void,
        data?: (string | number | boolean)[]
    }
};
export type ViewFunctionWithoutProps = () => React.JSX.Element;



const Form = ({ data, injectedData }: FormsProps) => {
  return (
    <>
    <h1 className='text-2xl font-bold text-gray-800 mb-4'>{data.title}</h1>
    <form className='space-y-4' onSubmit={(e) => injectedData?.onChangeSave(e)}>
        {data.fields.map((field, index) => (
            <div key={index} className={`flex ${field.type === "radio" || field.type === "checkbox" ? "flex-col space-y-2" : "flex flex-col space-y-2"}`}>
                <label className='text-gray-600 font-medium'>{field.title}</label>
                {field.options ? (
                    <div className='space-y-2'>
                        {field.options.map((opt, i) => (
                            <div key={i} className='flex items-center space-x-2'>
                                <input 
                                    type={field.type} 
                                    name={field.title} 
                                    defaultValue={opt}
                                    defaultChecked={injectedData?.data ? injectedData.data[index] as boolean : undefined}
                                    className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                                />
                                <label className='text-gray-600'>{opt}</label>
                            </div>
                        ))}
                    </div>
                ) : (
                    <input 
                        type={field.type}
                        name={field.title}
                        defaultValue={injectedData?.data ? injectedData.data[index] as string : ''}
                        className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                    />
                )}
            </div>
        ))}
        <button 
            type='submit' 
            className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200'
        >
            Save
        </button>
    </form>
    </>
  )
}

const Forms = ({ data, injectedData }: FormsProps) => {

    return (
        <div className='space-y-6 p-6 bg-white rounded-lg'>
            <Form data={data} injectedData={injectedData}/>
            {
                data.forms && data.forms.map((f) => (
                    <Form data={f}/>)
                )
            }
        </div>
    );
};

export default Forms;
