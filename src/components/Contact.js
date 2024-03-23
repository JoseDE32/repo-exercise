import React from 'react';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contacto</h2>
      <form className="contact-form">
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" placeholder="Nombre" />
        <label htmlFor="email">Correo electrónico</label>
        <input type="email" id="email" placeholder="Correo electrónico" />
        <label htmlFor="message">Mensaje</label>
        <textarea id="message" placeholder="Mensaje"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
