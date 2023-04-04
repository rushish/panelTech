import "../assets/Styles/createquotation.css";
import Form from "../Forms/QuotationForm";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function CreateQuotation() {
  return (
    <div className="quot-wrapper">
      <h2>Create Quotation</h2>
      <Form />
    </div>
  );
}

export default CreateQuotation;
