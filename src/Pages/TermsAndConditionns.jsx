import React, { useEffect, useState } from "react";
import "../assets/Styles/termsandconditions.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const TermsAndConditionns = () => {
  const [price, setPrice] = useState("Ex works Thane");
  const [delivery, setDelivery] = useState(
    "2-3Weeks from date of receipt of Techno commercial clear order/ CODE A approval"
  );
  const [paf, setPaf] = useState("Extra");
  const [freight, setFreight] = useState("Extra At actual");
  const [transitInsurance, setTransitInsurance] = useState(
    "Extra at actual or Buyer scope"
  );
  const [gst, setGst] = useState(
    "18% extra , Prevailing Duty will be applicable"
  );
  const [paymentTerms, setPaymentTerms] = useState(
    "25% advance along with order & balance 75% against Proforma Invoice"
  );
  const [validity, setValidity] = useState("");
  const [penaltyClause, setPenaltyClause] = useState("Not Acceptable");
  const [warranty, setWarranty] = useState(
    "12months from date commissioning or 18 months from date of despatch whichever is earlier. Limited to manufacturing defect or bad workmanship, It does not include any mechanical/ Physical damages due to mishandling at site or wrong installation. Product need to return back to factory for inspection /rectification. Warranty does not include deputation of technician at site for rectification /replacement."
  );
  const [cancellationCharges, setCancellationCharges] = useState(
    "In case of cancellation of PO after 7 days order placement, 25% of po value charges will be applicable. 100% (Standard Products), Cancellation after submission of drawing for approval: 50%, Cancellation after manufacturing clearance: 75%, Cancellation after inspection notice: 100%, commissionSupervision: "
  );
  const [commissionSupervision, setCommissionSupervision] = useState(
    "Commissioning supervision will be extra, Rs 45000/- per day (first day) there after Rs 15000/- per day - per person. "
  );
  const [forex, setForex] = useState(
    "Foreign Exchange Fluctuation clause, Prices are calculated based on today's exchange rate @1 Euro = Rs 85. Any fluctuation beyond 3%( Positive -Upward increase) will attract revision in price during order confirmation by you"
  );
  const [quotationId, setQuotationId] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  const termsandconditionsdone = (e) => {
    e.preventDefault();

    if (validity === "") {
      axios({
        method: "post",
        url: "http://localhost:8080/add-term",
        data: {
          price,
          delivery,
          p_and_f: paf,
          feight: freight,
          transit_insurance: transitInsurance,
          gst,
          payment_terms: paymentTerms,
          validity: null,
          penalty_clause: penaltyClause,
          warrenty: warranty,
          cancellation_charges: cancellationCharges,
          commission_supervision: commissionSupervision,
          forex,
          client_id: id,
          quotation_id: quotationId,
          revised_no: 0,
          revised_no_quotation: 0,
        },
      })
        .then((resp) => {
          console.log(resp);
          alert("Done !!!!");
          window.location.href = "/"
          navigate(`/original-print/${id}`);

        })
        .catch((err) => console.log(err));
    } else {
      axios({
        method: "post",
        url: "http://localhost:8080/add-term",
        data: {
          price,
          delivery,
          p_and_f: paf,
          feight: freight,
          transit_insurance: transitInsurance,
          gst,
          payment_terms: paymentTerms,
          validity,
          penalty_clause: penaltyClause,
          warrenty: warranty,
          cancellation_charges: cancellationCharges,
          commission_supervision: commissionSupervision,
          forex,
          client_id: id,
          quotation_id: quotationId,
          revised_no: 0,
          revised_no_quotation: 0,
        },
      })
        .then((resp) => {
          console.log(resp);
          alert("Done !!!!");
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    console.log(id);
    axios({
      method: "post",
      url: "http://localhost:8080/get-quotation-user",
      data: {
        client_id: id,
      },
    })
      .then((resp) => {
        console.log(resp);
        setQuotationId(resp.data[0].id);
      })
      .catch((err) => console.log(err));
    console.log(quotationId);
  }, []);

  return (
    <div id="termsandcondition_wrapper">
      <div id="termsandconsition_inner_wrapper">
        <h2>Terms and Conditions</h2>
        <form>
          <ol>
            <li>
              <label htmlFor="tacprice">Price</label>
              <textarea
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                id="tacprice"
                rows="1"
              />
            </li>
            <li>
              <label htmlFor="tacdelivery">Delivery</label>
              <textarea
                type="text"
                value={delivery}
                onChange={(e) => setDelivery(e.target.value)}
                id="tacdelivery"
                rows="1"
              />
            </li>
            <li>
              <label htmlFor="tacpaf">P&F</label>
              <textarea
                type="text"
                value={paf}
                onChange={(e) => setPaf(e.target.value)}
                id="tacpaf"
                rows="1"
              />
            </li>
            <li>
              <label htmlFor="tacfreight">Freight</label>
              <textarea
                type="text"
                value={freight}
                onChange={(e) => setFreight(e.target.value)}
                id="tacfreight"
                rows="1"
              />
            </li>
            <li>
              <label htmlFor="tactransitinsurance">Transit Insurance</label>
              <textarea
                type="text"
                value={transitInsurance}
                onChange={(e) => setTransitInsurance(e.target.value)}
                id="tactransitinsurance"
                rows="1"
              />
            </li>
            <li>
              <label htmlFor="tacgst">GST</label>
              <textarea
                type="text"
                value={gst}
                onChange={(e) => setGst(e.target.value)}
                id="tacgst"
                rows="1"
              />
            </li>
            <li>
              <label htmlFor="tacpaymentterms">Payment Terms</label>
              <textarea
                type="text"
                value={paymentTerms}
                onChange={(e) => setPaymentTerms(e.target.value)}
                id="tacpaymentterms"
                rows="1"
              />
            </li>
            <li>
              <label htmlFor="tacvalidity">Validity</label>
              <input
                type="date"
                value={validity}
                onChange={(e) => setValidity(e.target.value)}
                id="tacvalidity"
                rows="1"
              />
            </li>
            <li>
              <label htmlFor="tacpenaltyclause">Penalty Clause</label>
              <textarea
                type="text"
                value={penaltyClause}
                onChange={(e) => setPenaltyClause(e.target.value)}
                id="tacpenaltyclause"
                rows="1"
              />
            </li>
            <li>
              <label htmlFor="tacwarranty">Warranty</label>
              <textarea
                type="text"
                value={warranty}
                onChange={(e) => setWarranty(e.target.value)}
                id="tacwarranty"
                rows="4"
              ></textarea>
            </li>
            <li>
              <label htmlFor="taccancellationcharges">
                Cancellation Charges
              </label>
              <textarea
                type="text"
                value={cancellationCharges}
                onChange={(e) => setCancellationCharges(e.target.value)}
                id="taccancellationcharges"
                rows="5"
              ></textarea>
            </li>
            <li>
              <label htmlFor="taccommissionsupervision">
                Commission Supervision
              </label>
              <textarea
                type="text"
                value={commissionSupervision}
                onChange={(e) => setCommissionSupervision(e.target.value)}
                id="taccommissionsupervision"
                rows="2"
              ></textarea>
            </li>
            <li>
              <label htmlFor="tacforex">Forex</label>
              <textarea
                type="text"
                value={forex}
                onChange={(e) => setForex(e.target.value)}
                id="tacforex"
                rows="2"
              ></textarea>
            </li>
          </ol>
        </form>
        <button onClick={termsandconditionsdone}>DONE</button>
      </div>
    </div>
  );
};

export default TermsAndConditionns;
