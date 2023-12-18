import { useState } from "react";
import { EmailMessage } from "@/types/mail";

interface EmailSenderState {
  loading: boolean;
  error: string | null;
}

interface EmailSender extends EmailSenderState {
  sendEmail: (message: EmailMessage) => Promise<void>;
}

const useEmailSender = (): EmailSender => {
  const [state, setState] = useState<EmailSenderState>({
    loading: false,
    error: null,
  });

  const sendEmail = async (message: EmailMessage): Promise<void> => {
    setState({ loading: true, error: null });

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }
    } catch (error: any) {
      setState({ loading: false, error: error.message });
    } finally {
      setState((prevState) => ({ ...prevState, loading: false }));
    }
  };

  return { ...state, sendEmail };
};

export default useEmailSender;
