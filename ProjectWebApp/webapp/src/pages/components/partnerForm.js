import React from "react";
import "./form.css";

export default function PartnerForm(data) {
  const [name, setname] = React.useState("");
  const [email, setemail] = React.useState("");
  const [phone, setphone] = React.useState("");
  const [phone2, setphone2] = React.useState("");
  const [bank, setbank] = React.useState("");
  const [IBAN, setIBAN] = React.useState("");
  const [bank2, setbank2] = React.useState("");
  const [IBAN2, setIBAN2] = React.useState("");
  const [bank3, setbank3] = React.useState("");
  const [IBAN3, setIBAN3] = React.useState("");
  



  const handleSubmit = (event) => {
       window.location.reload(false);
       fetch(`http://127.0.0.1:5000/insertPartner`,{
        method: 'POST',
        // headers: {
        //   'Accept': 'application/json',
        //   'Content-Type': 'application/json'
        // },
        body: JSON.stringify({name: name, email: email, phone: phone, phone2: phone2, bank: bank, IBAN: IBAN, bank2: bank2, IBAN2: IBAN2, bank3: bank3, IBAN3: IBAN3 })
      }).then((result)=>{
          result.json().then((resp)=>{
            console.warn(resp)
            
          })
        })

    
    event.preventDefault();

    setname("");
    setemail("");
    setphone("");
    setphone2("");
    setbank("");
    setIBAN("");
    setbank2("");
    setIBAN2("");
    setbank3("");
    setIBAN3("");
  } 



  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Partner</h1>

      <label>
        Όνομα:
        <input
          maxLength="14"
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
          maxLength={10}
          value={phone}
          onChange={e => setphone(e.target.value.replace(/[^\d]/g, '').trim() )}
          />
      </label>  

      <label>
        Τηλέφωνο:
        <input
          name="Τηλέφωνο"
          type="text"
          maxLength={10}
          value={phone2}
          onChange={e => setphone2(e.target.value.replace(/[^\d]/g, '').trim() )}

          />
      </label>
      <div className="banks">
          <label>
            Τράπεζα:
            <select  onChange={e => setbank(e.target.value)}>
                <option valuee=""></option>
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
              maxLength={27}
              value={IBAN}
              onChange={e => setIBAN(e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim() )}
              />
          </label1>

      </div>

      <div className="banks">
          <label>
            Τράπεζα:
            <select onChange={e => setbank2(e.target.value)}>
                <option valuee=""></option>
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
              maxLength={27}
              value={IBAN2}
              onChange={e => setIBAN2(e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim() )}
              />
          </label1>

      </div>

      <div className="banks">
          <label>
            Τράπεζα:
            <select onChange={e => setbank3(e.target.value)}>
                <option valuee=""></option>
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
              maxLength={27}
              value={IBAN3}
              onChange={e => setIBAN3(e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim() )}
              />
          </label1>
     
      </div>
      <button>Submit</button>
    </form>
  );
}
