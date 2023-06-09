import React, { useEffect, useState } from "react";
import "../assets/Styles/addQuot.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function AddQuot() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    model_no: "",
    quantity: "",
    hsn_code: "",
    unit_price: "",
    item_description: "",
    delete_item: "",
    itemId: 1,
  });
  const [quotationId, setQuotationId] = useState("");
  const [clientid, setClientid] = useState("");
  const [itemsAdded, setItemsAdded] = useState([]);
  let total = 0;

  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const itemFormData = JSON.parse(localStorage.getItem("itemFormData")) || [];
    itemFormData.push(formData);
    localStorage.setItem("itemFormData", JSON.stringify(itemFormData));
    // location.reload();

    axios({
      method: "post",
      url: "http://localhost:8080/add-item",
      data: {
        model_no: formData.model_no,
        hsn_code: formData.hsn_code,
        quantity: formData.quantity,
        unit_price: formData.unit_price,
        item_description: formData.item_description,
        client_id: clientid,
        quotation_id: quotationId,
        revised_no: 0,
        revised_no_quotation: 0,
        total_quantity_price: formData.quantity * formData.unit_price,
      },
    })
      .then((resp) => {
        console.log(resp);
        getItemsFromDatabase();
      })
      .catch((err) => console.log(err));
  };

  const itemDataArray = JSON.parse(localStorage.getItem("itemFormData")) || [];

  const getItemsFromDatabase = () => {
    axios({
      method: "post",
      url: "http://localhost:8080/get-item-quotation",
      data: {
        client_id: id,
        quotation_id: quotationId,
      },
    })
      .then((resp) => {
        console.log(resp);
        setItemsAdded(resp.data);
      })
      .catch((err) => console.log(err));
  };

  const deleteItemOnClick = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:8080/delete-item/id",
      data: {
        id: formData.delete_item,
      },
    })
      .then((resp) => {
        console.log(resp);
        getItemsFromDatabase();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
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
        setClientid(resp.data[0].client_id);
        console.log(quotationId);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <form className="quot">
      <table>
        <thead>
          <tr>
            <th>Add Item</th>
            <th>Delete Item</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="add">
              <section>
                <label>
                  Item Description <br />
                  <textarea
                    rows="5"
                    name="item_description"
                    value={formData.item_description}
                    onChange={handleChange}
                  />
                </label>
              </section>
              <section>
                <div className="flex-section">
                  <div>
                    <label>
                      Model Number
                      <input
                        type="text"
                        name="model_no"
                        value={formData.model_no}
                        onChange={handleChange}
                      />
                    </label>
                    <label>
                      HSN Code
                      <input
                        type="text"
                        name="hsn_code"
                        value={formData.hsn_code}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      Quantity
                      <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                      />
                    </label>
                    <label>
                      Unit Price
                      <input
                        type="number"
                        name="unit_price"
                        value={formData.unit_price}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                </div>
                <button className="add-item" onClick={handleSubmit}>
                  Add Item
                </button>
              </section>
            </td>
            <td>
              <label>
                Delete Item
                <input
                  type="text"
                  name="delete_item"
                  value={formData.delete_item}
                  onChange={handleChange}
                />
                <button className="delete-item" onClick={deleteItemOnClick}>
                  Delete Item
                </button>
              </label>
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Item Description</th>
            <th>Model Number</th>
            <th>Hsn Code</th>
            <th>Item ID</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {itemsAdded.map((itemData, index) => {
            total += parseInt(itemData.total_quantity_price);
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{itemData.item_description}</td>
                <td>{itemData.model_no}</td>
                <td>{itemData.hsn_code}</td>
                <td>{itemData.id}</td>
                <td>{itemData.quantity}</td>
                <td>{itemData.unit_price}</td>
                <td>{itemData.total_quantity_price}</td>
              </tr>
            );
          })}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
      <Link to={`/notes-add/${id}`}>
        <button>Proceed Next to Add Notes and Deviation</button>
      </Link>
    </form>
  );
}

export default AddQuot;
