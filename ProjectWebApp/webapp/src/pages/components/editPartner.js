import React from "react";
import "./form.css";

export default function EditPartnerForm(arg) {
  const [id] = React.useState(arg.id);
  const [name, setname] = React.useState(arg.name);
  const [email, setemail] = React.useState(arg.email);
  const [phone, setphone] = React.useState(arg.phone);
  const [phone2, setphone2] = React.useState(arg.phone2);
  const [bank, setbank] = React.useState(arg.bank);
  const [IBAN, setIBAN] = React.useState(arg.IBAN);
  const [bank2, setbank2] = React.useState(arg.bank2);
  const [IBAN2, setIBAN2] = React.useState(arg.IBAN2);
  const [bank3, setbank3] = React.useState(arg.bank3);
  const [IBAN3, setIBAN3] = React.useState(arg.IBAN3);

  console.log(arg);
 
  const handleSubmit = ({getPartnersData},event) => {
    fetch(`http://127.0.0.1:5000//editPartner`,{
      method: 'PUT',
      // headers: {
      //   'Accept': 'application/json',
      //   'Content-Type': 'application/json'
      // },
      body: JSON.stringify({id: id, name: name, email: email, phone: phone, phone2: phone2, bank: bank, IBAN: IBAN, bank2: bank2, IBAN2: IBAN2, bank3: bank3, IBAN3: IBAN3 })
    }).then((result)=>{
        result.json().then((resp)=>{
          console.warn(resp)
        })
      })

    event.preventDefault();
    
    setname(name);
    setemail(email);
    setphone(phone);
    setphone2(phone2);
    setbank(bank);
    setIBAN(IBAN);
    setbank2(bank2);
    setIBAN2(IBAN2);
    setbank3(bank3);
    setIBAN3(IBAN3);

  }

   return (
    <form onSubmit={handleSubmit}>
      <h1>Edit Partner</h1>

      <label>
        Όνομα:
        <input
          name="Όνομα"
          type="text"
          required
          value={name}
          onChange={e => setname(e.target.value)}
           />
      </label>

      <label>
        Email:
        <input
          name="Email"
          type="email"
          value={email}
          onChange={e => setemail(e.target.value)}
           />
      </label>

      <label>
        Τηλέφωνο:
        <input
          name="Τηλέφωνο"
          type="text"
          maxlength={10}
          value={phone}
          onChange={e => setphone(e.target.value.replace(/[^\d]/g, '').trim() )}
          />
      </label>  

      <label>
        Τηλέφωνο:
        <input
          name="Τηλέφωνο"
          type="text"
          maxlength={10}
          value={phone2}
          onChange={e => setphone2(e.target.value.replace(/[^\d]/g, '').trim() )}
          />
      </label>
      <div className="banks">
          <label>
            Τράπεζα:
            <select value={bank} onChange={e => setbank(e.target.value)}>
                <option value=""></option>
                <option value="Alpha">Alpha</option>
                <option value="Attica">Attica</option>
                <option value="Eurobank">Eurobank</option>
                <option value="Optima">Optima</option>
                <option value="Εθνική">Εθνική</option>
                <option value="Κύπρου">Κύπρου</option>
                <option value="Πειραιώς">Πειραιώς</option>
              </select>
          </label>
           <label1>
            IBAN:
            <input
              name="IBAN"
              type="text"
              maxlength={27}
              value={IBAN}
              onChange={e => setIBAN(e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim() )}
              />
          </label1>

      </div>

      <div className="banks">
          <label>
            Τράπεζα:
            <select value={bank2} onChange={e => setbank2(e.target.value)}>
                <option value=""></option>
                <option value="Alpha">Alpha</option>
                <option value="Attica">Attica</option>
                <option value="Eurobank">Eurobank</option>
                <option value="Optima">Optima</option>
                <option value="Εθνική">Εθνική</option>
                <option value="Κύπρου">Κύπρου</option>
                <option value="Πειραιώς">Πειραιώς</option>
              </select>
          </label>
           <label1>
            IBAN:
            <input
              name="IBAN2"
              type="text"
              maxlength={27}
              value={IBAN2}
              onChange={e => setIBAN2(e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim() )}
              />
          </label1>

      </div>

      <div className="banks">
          <label>
            Τράπεζα:
            <select value={bank3} onChange={e => setbank3(e.target.value)}>
                <option value=""></option>
                <option value="Alpha">Alpha</option>
                <option value="Attica">Attica</option>
                <option value="Eurobank">Eurobank</option>
                <option value="Optima">Optima</option>
                <option value="Εθνική">Εθνική</option>
                <option value="Κύπρου">Κύπρου</option>
                <option value="Πειραιώς">Πειραιώς</option>
              </select>
          </label>
           <label1>
            IBAN:
            <input
              name="IBAN3"
              type="text"
              maxlength={27}
              value={IBAN3}
              onChange={e => setIBAN3(e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim() )}
              />
          </label1>
     
      </div>
      <button>Submit</button>
    </form>
  );
}
