import React from "react";
import { FormValues } from "@/types/form";

const useForm = (initialState = {}) => {
  const [formData, setFormData] = React.useState<FormValues>(
    initialState as FormValues
  );

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return { formData, handleInputChange };
};

export default useForm;
