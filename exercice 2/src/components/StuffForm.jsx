import { useState } from "react";

export default function StuffForm({ onAdd }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
     if (!name || !price) return; // don't add if fields are empty
    onAdd(name, Number(price)); // send data UP to App
    setName("");  // reset fields
    setPrice("");
    // Handle form submission
  };


  return (
    <form className="stuff-form" onSubmit={handleSubmit}> 
      <p>Stuff name</p>
      <input type="search" placeholder="Banana"
       value={name} 
       onChange={(e) => setName(e.target.value)} />


      <p>Stuff price</p>
      <input type="search" placeholder="15"
       value={price}
        onChange={(e) => setPrice(e.target.value)} />

      <button type="submit">Add Stuff</button>
    </form>
  );
}
