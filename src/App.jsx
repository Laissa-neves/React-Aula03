import Alunos from "./components/Alunos";
import UseProvider from "./contexts/user";

export default function App() {
  return (
    <UserProvider>
    <div>
      <h1>Escola</h1>
      <hr />
      <Alunos />
    </div>
    </UserProvider>
  );
}
