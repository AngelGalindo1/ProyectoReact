import React, { useState } from 'react';
import './tableAuto.css'; 


const TableAuto = () => {
  
  const [autos, setAutos] = useState([]);

  
  const [auto, setAuto] = useState({ auto: '', color: '' });

 const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAuto({ ...auto, [name]: value });
  };
//agregar auto
  const addAuto = () => {
    if (auto.auto.trim() !== '' && auto.color.trim() !== '') {
      setAutos([...autos, { ...auto, id: Date.now() }]);
      setAuto({ auto: '', color: '' }); 
    }
  };

//eliminar auto
  const deleteAuto = (id) => {
    setAutos(autos.filter((item) => item.id !== id));
  };

  return (
    <>
      <h3>Lista de Autos</h3>
      <div className="form-group">
        <input
          type="text"
          name="auto"
          placeholder="Nombre del auto"
          value={auto.auto}
          onChange={handleInputChange}
          className="form-control"
        />
        <input
          type="text"
          name="color"
          placeholder="Color del auto"
          value={auto.color}
          onChange={handleInputChange}
          className="form-control"
        />
        <button className="btn btn-success" onClick={addAuto}>
          Agregar
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <td>Auto</td>
            <td>Color</td>
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody>
          {autos.length === 0 ? (
            <tr>
              <td colSpan="3">No hay datos</td>
            </tr>
          ) : (
            autos.map((auto, index) => (
              <tr key={index}>
                <td>{auto.auto}</td>
                <td>{auto.color}</td>
                <td>
                  <button
                    className="btn btn-outline-danger mx-1"
                    onClick={() => deleteAuto(auto.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
};

export default TableAuto;
