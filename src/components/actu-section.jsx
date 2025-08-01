import PreviewActuCard from "./preview-actu-card";


export default function ActusSection({title, desc, actus, isLoading, isError}){
    if (isLoading) return <p>Chargement des actualités...</p>;
    if (isError) return <p>Les actualités ne sont pas disponibles pour le moment.</p>;

    if(actus.length > 0) {
      return (<section className="mt-4 container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
            <h2 className="text-5xl font-light text-[#16539b] mb-6 tracking-tight">
                {title ? title : "Toute l'actualité de l'immobilier."}
            </h2>
            <div className="w-20 h-1 bg-[#7eba29] mb-6"></div>
            <p className="text-lg font-thin text-gray-600"> {desc ? desc : "Retrouvez nos derniers articles sur les tendances et informations clés du marché immobilier." }</p>
            <p className="text-lg font-thin text-gray-600 max-w-2xl">Pour consulter tous les articles, <a href="/blog" className="font-medium cursor-pointer hover:text-form-green transition-all hover:underline ease-in-out duration-200">c'est par ici !</a></p>
        </div>

        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center">
            {
                actus && actus.slice(0,4).map((actu, index) => {
                    return <PreviewActuCard key={index} actu={actu}/>
                })
            }
        </div>
    </section>)
    }
}