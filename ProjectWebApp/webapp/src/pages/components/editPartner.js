import React, { useState } from "react";
import "./form.css";

export default function EditPartnerForm({ id, name, email, phone, phone2, bank, IBAN, bank2, IBAN2, bank3, IBAN3 }) {
  const [state, setState] = useState({ id, name, email, phone, phone2, bank, IBAN, bank2, IBAN2, bank3, IBAN3 });

  const handleChange = event => {
    const { name, value } = event.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    fetch(`http://127.0.0.1:5000//editPartner`, {
      method: "PUT",
      body: JSON.stringify(state)
    })
      .then(result => result.json())
      .then(resp => {
        console.warn(resp);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit Partner</h1>

      <label>
        Όνομα:
        <input
          name="name"
          type="text"
          required
          value={state.name}
          onChange={handleChange}
        />
      </label>

      <label>
        Email:
        <input
          name="email"
          type="email"
          value={state.email}
          onChange={handleChange}
        />
      </label>

      <label>
        Τηλέφωνο:
        <input
          name="phone"
          type="text"
          maxLength={10}
          value={state.phone}
          onChange={handleChange}
        />
      </label>

      <label>
        Τηλέφωνο:
        <input
          name="phone2"
          type="text"
          maxLength={10}
          value={state.phone2}
          onChange={handleChange}
        />
      </label>
      <div className="banks">
        <label>
          Τράπεζα:
          <select value={state.bank} name="bank" onChange={handleChange}>
            <option value=""></option>
            <option value="Alpha">Alpha</option>
            <option value="Attica">Attica</option>
            <option value="Eurobank">Eurobank</option>
            <option value="Optima">Optima</option>
            <option value="Piraeus">Piraeus</option>
            <option value="Probank">Probank</option>
            <option value="TT">TT</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label>
          IBAN:
          <input
            name="IBAN"
            type="text"
            value={state.IBAN}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="banks">
        <label>
                  Τράπεζα:
        <select value={state.bank2} name="bank2" onChange={handleChange}>
          <option value=""></option>
          <option value="Alpha">Alpha</option>
          <option value="Attica">Attica</option>
          <option value="Eurobank">Eurobank</option>
          <option value="Optima">Optima</option>
          <option value="Piraeus">Piraeus</option>
          <option value="Probank">Probank</option>
          <option value="TT">TT</option>
          <option value="Other">Other</option>
        </select>
      </label>

      <label>
        IBAN:
        <input
          name="IBAN2"
          type="text"
          value={state.IBAN2}
          onChange={handleChange}
        />
      </label>
    </div>
    <div className="banks">
      <label>
        Τράπεζα:
        <select value={state.bank3} name="bank3" onChange={handleChange}>
          <option value=""></option>
          <option value="Alpha">Alpha</option>
          <option value="Attica">Attica</option>
          <option value="Eurobank">Eurobank</option>
          <option value="Optima">Optima</option>
          <option value="Piraeus">Piraeus</option>
          <option value="Probank">Probank</option>
          <option value="TT">TT</option>
          <option value="Other">Other</option>
        </select>
      </label>

      <label>
        IBAN:
        <input
          name="IBAN3"
          type="text"
          value={state.IBAN3}
          onChange={handleChange}
        />
      </label>
    </div>

    <button type="submit">Αποθήκευση</button>
  </form>
  );
}
