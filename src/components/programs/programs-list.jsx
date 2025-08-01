import { usePrograms } from "@/hooks/use-programs"
import { RefreshCcw, RefreshCwOff } from "lucide-react";
import ProgramCard from "./program-card";

export default function ProgramsList() {
    const {data, loading, error} = usePrograms();
    if (loading) return (
        <div className="w-full flex items-center gap-2 justify-center">
            <RefreshCcw size={16} className="animate-spin"/>
            <p className="font-medium text-sm">Chargement des formations disponibles...</p>
        </div>
        
    )
    if (error) return (
        <div className="w-full flex flex-col items-center gap-2 justify-center">
            <div className="flex items-center gap-2">
                <RefreshCwOff size={16} className="font-bold text-red-500"/>
                <p className="font-medium text-sm">Erreur. Les formations ne sont pas disponibles pour le moment.</p>   
            </div>
            <p className="font-medium text-sm">Vous pouvez tout de même consulter notre <a href={`${import.meta.env.VITE_DIGIFORMA_CATALOG_URL}`} className="hover:underline text-blue-900">catalogue ici.</a>
            </p>
        </div>
        
    )
    return (
        <div className="grid grid-cols-4 gap-5 place-items-center mx-auto w-fit">
            {data.programs.map(program => <ProgramCard program={program} key={program.id}/>)}
        </div>
    )
}