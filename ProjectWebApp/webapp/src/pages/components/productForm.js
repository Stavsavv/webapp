import React from "react";
import "./form.css";

export default function ProductForm(data) {
  const [name, setname] = React.useState("");
  const [code, setcode] = React.useState("");
  const [size, setsize] = React.useState("");
  const [quantity, setquantity] = React.useState("");
  const [pbf, setpbf] = React.useState("");
  const [paf, setpaf] = React.useState("");
  const [finalprice, setfinalprice] = React.useState("");
  const emailID = localStorage.getItem('emailID');

  

  const handleSubmit = (event) => {
      // window.location.reload(false);
      fetch(`http://127.0.0.1:5000/insertProduct`,{
        method: 'POST',
        // headers: {
        //   'Accept': 'application/json',
        //   'Content-Type': 'application/json'
        // },
        body: JSON.stringify({name: name, code: code, size: size, quantity: quantity, pbf: pbf, paf: paf, finalprice: finalprice, emailID: emailID})
      }).then((result)=>{
          result.json().then((resp)=>{
            console.warn(resp)
            
          })
        })

    console.log(emailID);
    event.preventDefault();

    setname("");
    setcode("");
    setsize("");
    setquantity("");
    setpbf("");
    setpaf("");
    setfinalprice("");
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Product</h1>

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
        Κωδικός:
        <input
          name="Κωδικός"
          type="text"
          value={code}
          onChange={e => setcode(e.target.value)}
          required />
      </label>

      <label>
        Μέγεθος:
        <input
          name="Μέγεθος"
          type="text"
          value={size}
          onChange={e => setsize(e.target.value)}
          />
      </label>

      <label>
        Ποσότητα:
        <input
          name="Ποσότητα"
          type="number"
          value={quantity}
          onChange={e => setquantity(e.target.value)}
          required
          />
      </label>

      <label>
        Τιμή πριν Φ.Π.Α:
        <input
          name=" Τιμή πριν Φ.Π.Α"
          type="number"
          value={pbf}
          onChange={e => setpbf(e.target.value)}
          required
          />
      </label>
      
      <label>
        Τίμή μετα Φ.Π.Α:
        <input
          name="Τίμή μετα Φ.Π.Α"
          type="number"
          value={paf}
          onChange={e => setpaf(e.target.value)}
          required
          />
      </label>

      <label>
        Τελική Τιμή:
        <input
          name=" Τελική Τιμή"
          type="number"
          value={finalprice}
          onChange={e => setfinalprice(e.target.value)}
          required
          />
      </label>

      <button>Submit</button>
    </form>
  );
}
