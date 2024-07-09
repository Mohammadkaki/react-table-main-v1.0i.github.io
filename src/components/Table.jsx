import React from "react";

import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

import "./Table.css";

export const Table = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th className="expand">Nombre de productos</th>
            <th>Caja/UND</th>
            <th>Cantidad</th>
            <th>Actions</th>
          </tr>
        </thead>


        <tbody>
          {rows.map((row, idx) => {
           

            return (
              <tr key={idx}>
                
                <td>{row.date}</td>
                <td>{row.description}</td>
                <td>{row.status}</td>
                <td>{row.cantidad}</td>
               


                <td className="fit">
                  <span className="actions">
                    <BsFillTrashFill
                      className="delete-btn"
                      onClick={() => deleteRow(idx)}
                    />
                    <BsFillPencilFill
                      className="edit-btn"
                      onClick={() => editRow(idx)}
                    />
                  </span>
                </td>


              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
