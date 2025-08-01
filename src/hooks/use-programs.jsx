import { useQuery, gql } from "@apollo/client";
import { useContext, createContext } from "react";


const GET_PROGRAMS = gql`
    query GetPrograms {
        programs(filter: {soldOnCatalog: true}){
            id
            name
            image{url}
            cpf
            capacity{
            max,
            min
            }
            steps{sourceId, text}
            publicRegistrationUrl
            durationInHours
            durationInDays
        }
    }
`

const ProgramsContext = createContext(null);

export const ProgramsProvider = ({children}) => {
    const {data, loading, error} = useQuery(GET_PROGRAMS);

    return <ProgramsContext.Provider value={{data, loading, error}}>
        {children}
    </ProgramsContext.Provider>
}

export const usePrograms = () => useContext(ProgramsContext);
