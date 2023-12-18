import { useState, useEffect } from "react";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { FormValues } from "@/types/form";

const SPREADSHEET_ID: string = process.env.NEXT_PUBLIC_SPREADSHEET_ID || "";
const SHEET_ID: number = parseInt(process.env.NEXT_PUBLIC_SHEET_ID || "0", 10);
const GOOGLE_CLIENT_EMAIL: string =
  process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL || "";
const GOOGLE_SERVICE_PRIVATE_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_SERVICE_PRIVATE_KEY || "";

const useGoogleSheet = (initialState = {}) => {
  const [columData, setColumData] = useState<FormValues>(
    initialState as FormValues
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

    const appendSpreadsheet = async (row: any) => {
      try {
        setIsLoading(true);
        await doc.useServiceAccountAuth({
          client_email: GOOGLE_CLIENT_EMAIL,
          private_key: GOOGLE_SERVICE_PRIVATE_KEY.replace(/\\n/g, "\n"),
        });

        await doc.loadInfo();

        const sheet = doc.sheetsById[SHEET_ID];
        await sheet.addRow(row);
        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);
        console.error("Error: ", e);
      }
    };

    const postDataToGoogleSheet = async () => {
      if (columData.name !== "" && columData.email !== "") {
        const newRow = {
          Name: columData.name,
          Email: columData.email,
          Company: columData.company,
          PhoneNumber: columData.phonenumber,
        };

        await appendSpreadsheet(newRow);
      }
    };

    postDataToGoogleSheet();
  }, [columData]);

  return { columData, setColumData, isLoading };
};

export default useGoogleSheet;
