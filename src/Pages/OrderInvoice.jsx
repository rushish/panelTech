import React from "react";

const OrderInvoice = () => {
  return (
    <div>
      <img src="panel.png" alt="" align="right" width="80px" />

      <div class="address1">
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
      <div class="address-2">
        <p class="cus-add">
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
        <table class="table">
          <tbody>
            <tr>
              <td>
                {" "}
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
                {" "}
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
        <span>
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
        <table class="table2">
          <thead>
            <tr>
              <th class="t-head">Sr No</th>
              <th class="t-head">Item Description</th>

              <th class="t-head">QTY TOTAL</th>
              <th class="t-head">UNIT PRICE (INR)</th>
              <th class="t-head">Total PRICE (INR)</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="t-body">1</td>
              <td class="t-body">
                <span>
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
              <td class="t-body">
                <b>01</b>
              </td>
              <td class="t-body">
                <b>6,35,000.00</b>
              </td>
              <td class="t-body">
                <b>6,35,000.00</b>
              </td>
            </tr>

            <tr>
              <td class="t-body"></td>
              <td class="t-body">
                <b>( Rs. Six Lacs Thirty Five Thousand Five Hundreds Only)</b>
              </td>

              <td class="t-body"></td>
              <td class="t-body">
                <b>Total Price</b>
              </td>
              <td class="t-body">
                <b>6,35,500.00</b>
              </td>
            </tr>
            <tr>
              <td class="t-body"></td>
              <td class="t-body"></td>
              <td class="t-body"></td>
              <td class="t-body">
                <b>SGST 9%</b>
              </td>
              <td class="t-body">
                <b>57,195.00</b>
              </td>
            </tr>
            <tr>
              <td class="t-body"></td>
              <td class="t-body"></td>
              <td class="t-body"></td>
              <td class="t-body">
                <b>IGST 9%</b>
              </td>
              <td class="t-body">
                <b>57,195.00</b>
              </td>
            </tr>
            <tr>
              <td class="t-body"></td>
              <td class="t-body">
                <b class="price">
                  ( Rs. Seven Lacs Forty Nine Thousand Eight Hundreds & Ninety
                  Only)
                </b>
              </td>
              <td class="t-body"></td>
              <td class="t-body">
                <b>Grand Total </b>
              </td>
              <td class="t-body">
                <b>7,49,890.00 </b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <span>
          {" "}
          <b>Notes & Deviations: </b>
        </span>
        <ol type="1">
          <li>Cable Glands/Plugs not in our scope.</li>
          <li>
            Any changes in the offered specification may lead to any commercial
            implication.
          </li>
        </ol>
      </div>
      <footer>
        Panel Technologies India Private Limited Add: B-2, Osiamatadi Compound,
        Pipeline Road, Kalher, Bhiwandi, Dist. Thane -421302 India
        <br />
        CIN: U31900MH2020PTC344664 GSTIN- 27AALCP3636R1ZL
        <br />
        Email: marketing@paneltechnologies.in / Phone: +91 9987881335
      </footer>
      <div class="image">
        <img src="panel.png" alt="" width="80px" align="right" />
      </div>
    </div>
  );
};

export default OrderInvoice;
