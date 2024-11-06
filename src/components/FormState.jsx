import React, { useState } from 'react'

export default function FormState() {
    const [nome, setNome] = useState("");
    const[email, setEmail] = useState("");
    const[texto, setTexto] = useState("");

    function cadastrar(e){
        e.preventDefault(); // evita que a página seja recarregada
        console.log(`Dados Funcionário: ${nome} -> ${email}`);
        
    }



  return (
    <div>
        <h1>Dados do Formulário</h1>
        <form onSubmit={cadastrar}>
            <label>Nome:</label>
            <input 
            type="text" 
            placeholder="Preencha o nome" 
            name="nome" 
            onChange={(evento)=>setNome(evento.target.value)} 
            />
            <label>E-mail:</label>
            <input 
            type="text" 
            placeholder="Preencha o email" 
            name="email" 
            onChange={(evento)=>setEmail(evento.target.value)} 
            /> 
            <button type="submit">Enviar</button>
        <hr />
            <input 
            type="text" 
            placeholder="Digite algo" 
            value={texto} 
            onChange={(evento) => setTexto(evento.target.value)}
            />
            <p>Voce Digitou:{texto}</p>
        </form>
     </div>
  );
}
