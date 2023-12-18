export interface FormValues {
  name: string;
  email: string;
  phonenumber?: string;
  company?: string;
}

const InitialFormValues: FormValues = {
  name: "",
  email: "",
  phonenumber: "",
  company: "",
}

export { InitialFormValues }