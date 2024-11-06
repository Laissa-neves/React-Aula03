import { createContext } from "react";

export const UserContext = createContext({});

function UserProvider({ children }) {
    const [nomeAluno, setNomeAluno] = useState("Gustavo");
    const[totalAlunos, setTotalAlunos] = useState(1000);

    return(
    <UserContext.Provider value={{nomeAluno, setNomeAluno, totalAlunos}}>
        {children}
    </UserContext.Provider>
    )
}

export default UseProvider;