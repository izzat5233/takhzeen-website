import FormHandler from "../../utils/form/FormHandler";
import forms from "./Form.module.css";
import React from "react";
import {DefaultLoader} from "../special/Progress";

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

