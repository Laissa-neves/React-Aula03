import { useContext } from 'react';
import { UserContext } from '../../contexts/user';

export default function Nome() {
    const {nomeAluno} = useContext(UserContext)
  return (
    <div>
        <h1>Bem vindo: {nomeAluno}</h1>
        <button onClick={() => setNomeAluno("Laíssa")}>Trocar Nome</button>
    </div>
  )
}
