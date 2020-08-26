import React from "react"

import {Controller, useForm, UseFormMethods} from "react-hook-form"

// type FormTypes = {
//     className?: string,
//     children: (methods: UseFormMethods<TFormValues>) => React.ReactNode,
//     submitHandler: (data: string) => void
// }
type FormProps<TFormValues> = {
    submitHandler: (data: string) => void;
    children: (methods: UseFormMethods<TFormValues>, isValidInput: (name: string) => void, Controller: any) => React.ReactNode;
    className?: string
};
const Form = <TFormValues extends Record<string, any> = Record<string, any>>({submitHandler, children, className}: FormProps<TFormValues>) => {
    const useFormAPI = useForm({mode: "onChange"});
    const {handleSubmit, formState, errors} = useFormAPI;

    const onSubmit = (data: any) => submitHandler(data);

    const isValidInput = (name: string) => (
        formState.dirtyFields.hasOwnProperty(name) && errors && errors[name] === undefined
    );

    return (
        <form
            className={className ? className : undefined}
            onSubmit={handleSubmit(onSubmit)}>
            {/*  pass methods from react-hook-form & controller & fields validation information and render the props*/}
            {
                children(useFormAPI as UseFormMethods<TFormValues>, isValidInput, Controller)
            }
        </form>
    );
};
export default Form
