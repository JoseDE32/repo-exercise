import React, { useState } from 'react';

const ReservationForm = () => {
  const [numPersonas, setNumPersonas] = useState(1);
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleNumPersonasChange = (e) => {
    setNumPersonas(e.target.value);
  };

  const handleFechaChange = (e) => {
    setFecha(e.target.value);
  };

  const handleHoraChange = (e) => {
    setHora(e.target.value);
  };

  const handleDescripcionChange = (e) => {
    setDescripcion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar la reserva
  };

  return (
    <div className="reservation-form-container">
      <div className="reservation-form">
        <h2>Reserva</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Número de personas:</label>
            <input type="number" value={numPersonas} onChange={handleNumPersonasChange} />
          </div>
          <div className="form-group">
            <label>Fecha:</label>
            <input type="date" value={fecha} onChange={handleFechaChange} />
          </div>
          <div className="form-group">
            <label>Hora:</label>
            <input type="time" value={hora} onChange={handleHoraChange} />
          </div>
          <div className="form-group">
            <label>Descripción de la reserva:</label>
            <textarea value={descripcion} onChange={handleDescripcionChange}></textarea>
          </div>
          <button type="submit">Enviar reserva</button>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
