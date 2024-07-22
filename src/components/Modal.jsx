import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";

import "./Modal.css";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      date: "",
      description: "",
      status: "",
      cantidad:"",
      
    }
  );
  localStorage.setItem("formState", JSON.stringify(formState));
  console.log(formState);
  const [errors, setErrors] = useState("");

 localStorage.setItem("errors", JSON.stringify(errors));
  const validateForm = () => {
    if (formState.date && formState.description && formState.status && formState.cantidad ) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);

    closeModal();
  };

  useEffect(() => {
  // storing input name
  localStorage.setItem("formState", JSON.stringify(formState));
}, [formState]);

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
        <form>


        <div className="form-group">
            <label htmlFor="date">Fecha</label>

          
            <input 
            id="dateRequired" 
            type="date" 
            name="date" 
            onChange={handleChange}
            value={formState.date}
             />

          </div>



          <div className="form-group">
            <label htmlFor="description">Nombre de Productos</label>

            <select
              name="description"
              onChange={handleChange}
              value={formState.description}
            >

               <option value="ice">ice</option>
              <option value="cream">cream</option>
              <option value="happy">happy</option>
              
            </select>
          

          </div>


          <div className="form-group">
            <label htmlFor="status">Caja/UND</label>

            <select
              name="status"
              onChange={handleChange}
              value={formState.status}
            >
              <option value="Caja/UND">Caja/UND</option>
              <option value="Caja">Caja</option>
              <option value="Und">Und</option>
            
            </select>

            <div className="form-group">
            <label className="cantidad" htmlFor="cantidad">Cantidad</label>

            <input type="number" 
            onChange={handleChange}
            alue={formState.cantidad}
            id="tentacles" 
            name="cantidad" 
            min="1" max="100" />
          </div>


          </div>

        



          {errors && <div className="error">{`Please include: ${errors}`}</div>}
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
