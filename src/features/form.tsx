import { Input, Button } from "@/components";
import useForm from "@/hooks/useForm";
import useGoogleSheet from "@/hooks/useGoogleSheet";
import { Package } from "@/types/package";
import { InitialFormValues } from "@/types/form";
import { EmailMessage } from "@/types/mail";
import { useEffect } from "react";
import useEmailSender from "@/hooks/useEmailSender";

interface FormProps {
  action?: (...args: any[]) => void;
  packageItem: Package;
}

const Form: React.FC<FormProps> = ({ action, packageItem }) => {
  const { formData, handleInputChange } = useForm(InitialFormValues);
  const { columData, setColumData, isLoading } =
    useGoogleSheet(InitialFormValues);
  const { sendEmail, loading, error } = useEmailSender();

  const handleSendEmail = () => {
    const emailMessage: EmailMessage = {
      name: formData.name,
      prices: packageItem.prices as number,
      phonenumber: formData.phonenumber,
      email: formData.email,
    };
    sendEmail(emailMessage);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // handleSendEmail()
    if (!isLoading) {
      setColumData(formData);
    }
  };

  const handleCancel = () => {
    if (!isLoading && action) {
      action();
    }
  };

  useEffect(() => {
    if (action && !isLoading && columData.name != "") {
      action();
    }
  }, [isLoading]);

  return (
    <form className="max-w-sm mx-auto ">
      {packageItem &&
        packageItem.fieldForm.map((fieldFormItem, indexFieldFormItem) => {
          return (
            <Input
              label={fieldFormItem.label}
              type={fieldFormItem.type}
              key={indexFieldFormItem}
              name={fieldFormItem.name}
              onAction={handleInputChange}
            />
          );
        })}

      <div className="flex gap-10 justify-between">
        <Button
          content={isLoading ? "Sending" : "Submit"}
          type="submit"
          action={handleSubmit}
          isPrimary={!isLoading}
          isDisable={isLoading}
        />
        <Button
          content="Cancel"
          type="button"
          action={handleCancel}
          isOutlet
          isSecondary
        />
      </div>
    </form>
  );
};

export default Form;
