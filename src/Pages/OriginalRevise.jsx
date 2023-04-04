import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function OriginalRevise() {

    let { id } = useParams();

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        enquiryno: "",
        enquirydate: "",
        contactperson: "",
        contactpersonphone: "",
        contactpersonemail: "",
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };


    const [quotationNumber, setQuotationNumber] = useState(1);
    const [quotations, setQuotations] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();

        setQuotationNumber((prevNumber) => prevNumber + 1);

        const year = new Date().getFullYear().toString().substr(-2);
        const paddedNumber = quotationNumber.toString().padStart(3, "0");
        const newQuotationNumber = `PTPL-Q-${paddedNumber}-${year}`;

        localStorage.setItem("quotationNumber", newQuotationNumber);

        const newQuotation = { id: quotationNumber, number: newQuotationNumber };
        setQuotations((prevQuotations) => [...prevQuotations, newQuotation]);

        if (
            formData.enquiryno == "" ||
            formData.enquirydate == "" ||
            formData.contactperson == "" ||
            formData.contactpersonemail == "" ||
            formData.contactpersonphone == ""
        ) {
            alert("Please fill all the fields");
            return;
        }

        const quotationFormData =
            JSON.parse(localStorage.getItem("quotationFormData")) || [];
        quotationFormData.push(formData);
        localStorage.setItem(
            "quotationFormData",
            JSON.stringify(quotationFormData)
        );
        // window.location.href = "/add-quotation";

        axios({
            method: "post",
            url: "http://localhost:8080/add-quotation",
            data: {
                customer_enquiry_no: formData.enquiryno,
                enquiry_date: formData.enquirydate,
                contact_person: formData.contactperson,
                contact_person_phone: formData.contactpersonphone,
                contact_person_email: formData.contactpersonemail,
                client_id: id,
                revised_no: 0,
            },
        })
            .then((resp) => {
                console.log(resp);
                navigate(`/add-quotation/${id}`);
            })
            .catch((err) => console.log(err));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Customer Enquiry no.:
                    <input
                        type="number"
                        name="enquiryno"
                        value={formData.enquiryno}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Enquiry Date:
                    <input
                        type="date"
                        name="enquirydate"
                        value={formData.enquirydate}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Contact person:
                    <input
                        type="text"
                        name="contactperson"
                        value={formData.contactperson}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Contact person Phone no.:
                    <input
                        type="tel"
                        name="contactpersonphone"
                        value={formData.contactpersonphone}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Contact Person Email:
                    <input
                        type="email"
                        name="contactpersonemail"
                        value={formData.contactpersonemail}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Quotation Number</th>
                    </tr>
                </thead>
                <tbody>
                    {quotations.map((quotation) => (
                        <tr key={quotation.id}>
                            <td>{quotation.id}</td>
                            <td>{quotation.number}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default OriginalRevise;
