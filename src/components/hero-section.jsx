import { Button } from "./ui/button";
import webinaire from "../assets/webinaire.png";

export default function HeroSection({heroContent}){
    return(
        <section className="mx-auto py-6 max-w-7xl flex items-start px-8 gap-20">
            <div className="w-1/2 flex flex-col justify-between h-[300px]">
                <h1 className="font-medium text-[#16539b] text-4xl">{heroContent.title}</h1>
                <p className="text-base text-black">{heroContent.description}</p>
                <div className="flex gap-4 mt-4">
                    <button className="cursor-pointer w-1/2 bg-[#86a628] px-4 py-2 text-white font-medium rounded-sm">Démarrer ma formation</button>
                    <button className="cursor-pointer w-1/2 px-4 py-2 border border-[#16539b]  font-medium text-[#16539b] rounded-sm">Découvrir nos formations</button>
                </div>
            </div>

            <div className="w-1/2">
                {/* Image principale */}
                <img
                  src={webinaire}
                  alt="Formation aux métiers émergents - PEMD et économie circulaire"
                  className="rounded-md w-full h-full object-contain"
                />
              </div>
        </section>
    )
}