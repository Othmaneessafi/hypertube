import React from "react";

const renderField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <div className="flex flex-col  text-left w-2/3 my-2">
    <label for={label} className="group text-secondary text-xl text-left" >{label}</label>
    <input
      helperText={touched && error}
      error={touched && (error ? true : false)}
      fullWidth
      {...input}
      {...custom}
      className="group w-full rounded-lg h-full p-2 bg-secondary focus:outline-secondary focus:text-primaryWhite outline-[0.3] text-bgBlack "
      id={label}
    />
    <span className="text-primaryRed text-xs mt-2">{touched && error}</span>
  </div>
);
export default renderField;
