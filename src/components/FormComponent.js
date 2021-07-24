import React, { useState } from "react";

const FormComponent = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
  });
  const [inputList, setInputList] = useState([]);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };

  const handleAdd = () => {
    setInputList([...inputList, input]);
    setInput({
      name: "",
      email: "",
    });
    console.log(inputList);
  };

  const handleRemove = (email) => {
    const newInput = inputList.filter((i) => i.email !== email);
    setInputList(newInput);
  };
  return (
    <div>
      <input
        value={input.name}
        onChange={handleChange}
        type="text"
        name="name"
        placeholder="Enter name"
      />
      <input
        onChange={handleChange}
        value={input.email}
        type="email"
        name="email"
        placeholder="Enter email"
      />
      <button onClick={handleAdd}>Add</button>

      {inputList.map((l) => (
        <div>
          <h1>{l.name}</h1>
          <h3>{l.email}</h3>
          <button onClick={() => handleRemove(l.email)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default FormComponent;
