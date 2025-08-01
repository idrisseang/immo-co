import { useQuery } from "@tanstack/react-query";
import FAQ from "./faq";
import { getDataFromCockpitModel } from "@/lib/utils";
import { RefreshCcw, RefreshCwOff } from "lucide-react";

export default function FAQSection({title, description}){
    const {data, isLoading, isError} = useQuery({
        queryKey: ['faqs'],
        queryFn: () => getDataFromCockpitModel('collection', 'homepagefaq')
    });

    if (isLoading) return (
        <div className="w-full flex items-center gap-2 justify-center">
            <RefreshCcw size={16} className="animate-spin"/>
            <p className="font-medium text-sm">Chargement de la FAQ...</p>
        </div>
        
    )
    if (isError) return (
        <div className="w-full flex items-center gap-2 justify-center">
            <RefreshCwOff size={16} className="font-bold text-red-500"/>
            <p className="font-medium text-sm">Erreur. La FAQ n'est pas disponible pour le moment.</p>
        </div>
        
    )

    return(
        <section className="container mx-auto px-4">
            <div className="">
            <div className="flex flex-col items-center text-center">
                    <h2 className="text-5xl font-light text-[#16539b] mb-6 tracking-tight mb-4">
                    {title}
                    </h2>
                    <div className="w-20 h-1 bg-[#7eba29] mb-6"></div>
                        <p className="text-lg font-thin text-gray-600 max-w-2xl">
                        {description}
                        </p>
                </div>
            </div>
            <div className="text-center my-8 container mx-auto px-4 xl:w-1/2">
                <FAQ data={data}/>
            </div>
        </section>
    )
}