import { useState } from "react";

import emailjs from "@emailjs/browser";

import "./App.css";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  function handleSend(e) {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      message: msg,
      email: email,
    };

    if (name === "" || email === "" || msg === "") {
      alert("Por favor, preecher todos os campos!");
      return;
    }
    emailjs
      .send(
        "service_iw6bol9",
        "template_0wyhffo",
        templateParams,
        "ENTx8oux7Zivn1Ezb"
      )
      .then(
        () => {
          console.log("Deu certo!");
        },
        (err) => {
          console.log(err);
        }
      );

    setName("");
    setEmail("");
    setMsg("");
  }

  return (
    <div className="app">
      <form className="app-container" onSubmit={handleSend}>
        <h2 className="title">Contato</h2>
        <div className="form">
          <input
            className="input"
            type="text"
            placeholder="Digite seu nome..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="input"
            type="email"
            placeholder="Digite seu e-mail..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className="input-msg"
            placeholder="Digite seu mensagem..."
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
        </div>

        <button className="btn-enviar" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}
