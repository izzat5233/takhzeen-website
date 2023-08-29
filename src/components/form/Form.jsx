import FormHandler from "../../utils/form/FormHandler";
import {SyncLoader} from "react-spinners";
import forms from "./Form.module.css";
import React from "react";

export default function SimpleForm({name, initialValues, onSubmit, loader, title, children, className, ...rest}) {
    return (
        <FormHandler
            name={name}
            initialValues={initialValues}
            onSubmit={onSubmit}
            loader={loader || <DefaultLoader/>}
            {...rest}
        >
            <div className={`${forms.simpleForm} ${className}`}>
                {title && <h2 className={forms.simpleTitle}>{title}</h2>}
                {children}
            </div>
        </FormHandler>
    );
}

export const DefaultLoader = ({color = "white", size = 14}) => (
    <div className="flex justify-center">
        <SyncLoader color={color} size={size}/>
    </div>
);
