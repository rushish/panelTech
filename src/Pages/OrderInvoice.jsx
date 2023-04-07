import React, { useEffect, useState } from "react";
import "../assets/Styles/orderInvoice.css";
import panelImg from "../assets/Images/panel.png";
import axios from "axios";
import { useParams } from "react-router-dom";

const OrderInvoice = () => {
  // const [quotationID, setQuotationID] = useState("");
  const [clientData, setClientData] = useState([]);
  const [quotationData, setQuotationData] = useState([]);
  const [itemsData, setItemsData] = useState([]);
  const [notesData, setNotesData] = useState([]);
  const [termsData, setTermsData] = useState([]);
  const [percentCalculated, setPercentCalculated] = useState("");
  const { id } = useParams();
  let quotationID;
  let total = 0;

  useEffect(() => {
    console.log(id);
    axios({
      method: "post",
      url: "http://localhost:8080/get-client",
      data: {
        id,
      },
    })
      .then((res) => {
        console.log("client");
        console.log(res);
        setClientData(res.data);
      })
      .catch((err) => console.log(err));

    axios({
      method: "post",
      url: "http://localhost:8080/get-quotation",
      data: {
        client_id: id,
        revised_no: 0,
      },
    })
      .then((res) => {
        console.log("quotationid");
        console.log(res.data[0].id); //Quotation ID
        // setQuotationID(res.data[0].id);
        quotationID = res.data[0].id;
        setQuotationData(res.data);

        axios({
          method: "post",
          url: "http://localhost:8080/get-item-quotation",
          data: {
            client_id: id,
            quotation_id: quotationID,
          },
        })
          .then((res) => {
            console.log("itemquotation");
            console.log(res);
            setItemsData(res.data);
          })
          .catch((err) => console.log(err));

        axios({
          method: "post",
          url: "http://localhost:8080/get-note-quotation",
          data: {
            client_id: id,
            quotation_id: quotationID,
          },
        })
          .then((res) => {
            console.log("Notes");
            console.log(res);
            setNotesData(res.data);
          })
          .catch((err) => console.log(err));

        axios({
          method: "post",
          url: "http://localhost:8080/get-term-quotation-revised",
          data: {
            client_id: id,
            quotation_id: quotationID,
            revised_no_quotation: 0,
          },
        })
          .then((res) => {
            console.log("terms and condition");
            console.log(res);
            setTermsData(res.data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));

    // axios({
    //   method: "post",
    //   url: "http://localhost:8080/get-quotation",
    //   data: {
    //     client_id: id,
    //     revised_no: 0,
    //   },
    // })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => console.log(err));

    setPercentCalculated((total * 9) / 100);
    console.log("Percent");
    console.log(percentCalculated);
  }, [id]);

  return (
    <div className="invoice-wrap">
      <img src={panelImg} alt="" align="right" width="70px" />

      <div className="address1">
        <p>
          <b>
            Panel Technologies India Private Limited
            <br />
            B-2,Osiamatadi Compound, Pipeline
            <br />
            Road, Kalher,Bhiwandi, Dist. Thane -
            <br />
            421302, Maharashtra.
            <br />
            Email:marketing@paneltechnologies.in
            <br />
            Phone: +91 9987881335
            <br />
            CIN :U31900MH2020PTC344664
            <br />
            GSTIN- 27AALCP3636R1ZL
          </b>
        </p>
      </div>
      <center>
        <b>Order Acknowledgement</b>
      </center>
      <div className="address-2">
        <p className="cus-add">
          <b>
            Customer <br />
            HONEYWELL AUTOMATION INDIA LIMITED
          </b>
          <br />
          56 & 57 Hadapsar Industrial Estate
          <br />
          <b>
            411013 PUNE
            <br />
            Kind Attn: Mr Omkar Ansare
            <br />
            Phone No:+91 9762322581
            <br />
            Email id: Omkar.Ansare@Honeywell.Compound
            <br />
            Fax No:
          </b>
        </p>
        <table className="table">
          <tbody>
            <tr>
              <td>
                <b>OA No :</b>
              </td>
              <td>
                <b>PTPL-OA-037-00 Date: 24-12-2022</b>
              </td>
            </tr>
            <tr>
              <td>
                <b> Amend Date:</b>
              </td>
              <td>
                <b>Nil</b>
              </td>
            </tr>
            <tr>
              <td>
                <b> PO Number:</b>
              </td>
              <td>
                <b>4418894828</b>
              </td>
            </tr>
            <tr>
              <td>
                <b>PO Date:</b>
              </td>
              <td>
                <b>23-12-2022</b>
              </td>
            </tr>
            <tr>
              <td>
                <b>Contact Person:</b>
              </td>
              <td>
                <b>4418894828</b>
              </td>
            </tr>
            <tr>
              <td>
                <b>Email id:</b>
              </td>
              <td>
                <b> Santosh@paneltechnologies.in</b>
              </td>
            </tr>
            <tr>
              <td>
                <b>Contact Number: </b>
              </td>
              <td>
                <b> +91 9987881335</b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <span className="span-1">
          Dear Sir /
          <br />
          Madam,
          <br />
          We thankfully acknowledge receipt of your valued Purchase order, We
          are pleased to confirm order
          <br />
          acknowledgement as below
        </span>
      </div>
      <br />
      <div>
        <table className="table2">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Item Description</th>

              <th>QTY TOTAL</th>
              <th>UNIT PRICE (INR)</th>
              <th>Total PRICE (INR)</th>
            </tr>
          </thead>

          <tbody>
            {itemsData.map((item, index) => {
              total += parseInt(item.total_quantity_price);
              console.log(total);
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.item_description}</td>
                  <td>{item.quantity}</td>
                  <td>{item.unit_price}</td>
                  <td>{item.total_quantity_price}</td>
                </tr>
              );
            })}
            <tr>
              {/* <td>1</td>
              <td>
                <span className="span-1">
                  HSN code 84716090 ET-436-A-TX-7309100000W-000000000000
                  ET-436-A-TX-BT-R3-TFT-128GBM-PES STAHL HMI Panel PC Ex Series
                  xx6, configured Zone 1 Panel PC, 15", 1024 x 768 - Format 4:3,
                  Standard TFT 10/100BaseTX - Copper Ethernet ATOM E3845, 4 GB
                  RAM, 128 GB SSD MLC Analogue resistive touch; No optional
                  interfaces 2, Polyester foil on aluminium 24 VDC WIN10
                  Enterprise 2019 LTSC 104261 KBDi-TB50-PS2-QY (Keyboard with
                  integrated Trackball) SS316 Enclosure with Pedestal stand
                </span>
              </td>
              <td>
                <b>01</b>
              </td>
              <td>
                <b>6,35,000.00</b>
              </td>
              <td>
                <b>6,35,000.00</b>
              </td> */}
            </tr>

            <tr>
              <td></td>
              <td></td>

              <td></td>
              <td>
                <b>Total Price</b>
              </td>
              <td>
                <b>{total}</b>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <b>SGST 9%</b>
              </td>
              <td>
                <b>{percentCalculated}</b>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <b>IGST 9%</b>
              </td>
              <td>
                <b>{percentCalculated}</b>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>
                <b>Grand Total </b>
              </td>
              <td></td>
              <td>
                <b>{total + percentCalculated * 2}</b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <span className="span-1">
          {" "}
          <b>Notes & Deviations: </b>
        </span>
        <ol type="1">
          <b>
            <li>Cable Glands/Plugs not in our scope.</li>
            <li>
              Any changes in the offered specification may lead to any
              commercial implication.
            </li>
          </b>
        </ol>
      </div>

      <footer className="footer-1">
        <b>
          Panel Technologies India Private Limited Add: B-2, Osiamatadi
          Compound, Pipeline Road, Kalher, Bhiwandi, Dist. Thane -421302 India
          <br />
          CIN: U31900MH2020PTC344664 GSTIN- 27AALCP3636R1ZL
          <br />
          Email: marketing@paneltechnologies.in / Phone: +91 9987881335
        </b>
      </footer>

      <div>
        <img src={panelImg} alt="" align="right" width="70px" />
        <center>
          <h2 className="term-heading">Terms & Conditions</h2>
        </center>
        <div>
          <ol type="1">
            <b>
              <li>Price - Ex works Thane.</li>
            </b>
            <b>
              <li>
                Delivery-8-10 Weeks from date to receipt of Techno commercial
                clear order/ CODE A approval
              </li>
            </b>
            <table className="term-table">
              <tbody>
                <tr>
                  <td className="term-data" id="add1">
                    <b>Invoice address</b>
                    <br />
                    Honeywell Automation India Limited
                    <br />
                    56 & 57 Hadapsar Industrial Estate
                    <br />
                    411013 PUNE
                    <br />
                    India
                    <br />
                    <br />
                    <br />
                    <br />
                  </td>

                  <td className="term-data">
                    <b>
                      Delivery address-
                      <br />
                      Bharat Petroleum Corp Ltd
                      <br />
                      1265 RADHAGAON
                      <br />
                      POL DEPOT
                      <br />
                      Radhanagar Village
                      <br />
                      827010 BOKARO-BOKARO , Jharkhand
                      <br />
                      India
                      <br />
                      GSTIN : 20AAACB2902M1Z7
                    </b>
                  </td>
                </tr>
              </tbody>
            </table>

            <b>
              {" "}
              <li>P&F - Extra</li>
            </b>
            <b>
              <li>Freight - Extra At actual</li>
            </b>
            <b>
              <li>Transit Insurance - Extra at actual or Buyer scope</li>
            </b>
            <b>
              <li>GST- 18% extra, Prevailing Duty will be applicable.</li>
            </b>
            <b>
              <li>Payment Terms - Within 45 days From date of Invoice</li>
            </b>
            <b>
              <li>
                Bank Details -
                <br />
                <span className="b-details">HDFC Bank Vartak Nagar Branch</span>
                <br />
                <span className="b-details"> A/C number- 50200052408037</span>
                <br />
                <span className="b-details"> IFSC: HDFC0000488.</span>
              </li>
            </b>
            <b>
              <li>Penalty clause- Not Acceptable.</li>
            </b>
            <b>
              <li>
                Warranty - 12months from date commissioning or 18 months from
                date of despatch whichever is earlier. Limited to manufacturing
                defect or bad workmanship, it does not include any mechanical/
                Physical damages due to mishandling at site or wrong
                installation. Product need to return to factory for inspection
                /rectification. Warranty does not include deputation of
                technician at site for rectification / replacement.
              </li>
            </b>

            <b>
              <li>
                Cancellation charges - In case of cancellation of PO after 7
                days order placement, 25% of po value charges will be
                applicable. 100% (Standard Products)
                <br />
                <br />
                Cancellation after submission of drawing for approval: 50%,
                <br />
                Cancellation after manufacturing clearance: 75%,
                <br />
                Cancellation after inspection notice: 100%
              </li>
            </b>
            <br />
            <b>
              <li>
                Commissioning supervision will be extra, Rs 45000/- per day
                (first day) there after Rs 10000/- per day - per person.
              </li>
            </b>
            <b>
              <li>
                Forex-Foreign Exchange Fluctuation clause, Prices are calculated
                based on today's exchange rate @1 Euro = Rs 88. Any fluctuation
                beyond 3%( Positive -Upward increase) will attract revision in
                price during order confirmation by your
              </li>
            </b>
          </ol>
        </div>
        <div>
          <h3>For Panel Technologies India Private Limited</h3>
          <br />
          <br />

          <b>Authorized Signatory</b>
        </div>
        <footer className="footer-2">
          <b>
            Panel Technologies India Private Limited Add: B-2, Osiamatadi
            Compound, Pipeline Road, Kalher, Bhiwandi, Dist. Thane -421302 India
            <br />
            CIN: U31900MH2020PTC344664 GSTIN- 27AALCP3636R1ZL
            <br />
            Email: marketing@paneltechnologies.in / Phone: +91 9987881335
          </b>
        </footer>
      </div>
    </div>
  );
};

export default OrderInvoice;
