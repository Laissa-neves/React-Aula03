import React from "react";
import Nome from "../Nome";

export default function Alunos() {  // exemplo desestruturado com Alunos = ({ nome }) {
  const {nomeAluno, totalAlunos} = useContext(UserContext);
  return (
    <div>
      <h1>Componente Alunos - Nome:{nomeAluno} - Quantidade de alunos:{totalAlunos}</h1>
      <Nome/>
    </div>
  );
}
