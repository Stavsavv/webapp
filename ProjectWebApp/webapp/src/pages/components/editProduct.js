import React from "react";
import "./form.css";

export default function EditForm(arg) {
  const [id] = React.useState(arg.id);
  const [name, setname] = React.useState(arg.name);
  const [code, setcode] = React.useState(arg.code);
  const [size, setsize] = React.useState(arg.size);
  const [quantity, setquantity] = React.useState(arg.quantity);
  const [pbf, setpbf] = React.useState(arg.pbf);
  const [paf, setpaf] = React.useState(arg.paf);
  const [finalprice, setfinalprice] = React.useState(arg.finalprice);
  const emailID = localStorage.getItem('emailID');
 
  const handleSubmit = ({getProductData},event) => {
    fetch(`http://127.0.0.1:5000//editProduct`,{
      method: 'PUT',
      // headers: {
      //   'Accept': 'application/json',
      //   'Content-Type': 'application/json'
      // },
      body: JSON.stringify({id: id, name: name, code: code, size: size, quantity: quantity, pbf: pbf, paf: paf, finalprice: finalprice})
    }).then((result)=>{
        result.json().then((resp)=>{
          console.warn(resp)
        })
      })

    event.preventDefault();
    
    setname(name);
    setcode(code);
    setsize(size);
    setquantity(quantity);
    setpbf(pbf);
    setpaf(paf);
    setfinalprice(finalprice);

  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit Product</h1>

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

      <button >Submit </button>
    </form>
  );
}
