import { useEffect, useState } from "react";
import Header from "./header";
import ActuCard from "./actu-card";
import { ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { HashLink } from "react-router-hash-link";
import axios from "axios";

export default function Blog(){

    const [actus, setActus] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTags, setSelectedTags] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const ARTICLES_PER_PAGE = 10;

    useEffect( () => {
        const getActus = async () => {
            try {
                const {data} = await axios.get(`${import.meta.env.VITE_COCKPIT_API_ENDPOINT}/content/items/actus`, {
                    headers: {'api-key' : import.meta.env.VITE_COCKPIT_API_KEY}
                });
                setActus(data)
            } catch (error) {
                console.log("il y'a eu une erreur lors de la récupération des actus disponibles.")
            }
        }
        getActus();
    }, [actus]);

    const allTags = Array.from(new Set(actus.flatMap((article) => article.tags)));

    /* articles filtrés par tag ou terme de recherche*/
    const filteredArticles = actus.filter(
        (article) =>
          article.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (selectedTags.length === 0 || selectedTags.every((tag) => article.tags && article.tags.includes(tag))),
      )

    const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);

    const paginatedArticles = filteredArticles.slice((currentPage - 1) * ARTICLES_PER_PAGE, currentPage * ARTICLES_PER_PAGE);

    const toggleTag = (tag) => {
        setSelectedTags((prev) => prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]);
        setCurrentPage(1);
    }

    const handleSearch = (value) => {
        setSearchTerm(value);
        setCurrentPage(1);
    }

    return <>
        <Header />
        <main className="mt-[130px] flex items-center justify-center flex-col xl:mt-0">
            <div className="bg-[#16539b] p-6 xl:px-10 xl:pb-20 pt-4 w-full text-center flex flex-col justify-center items-center" id="actus">
                <h1 className="text-white font-semibold text-3xl mb-5">Retrouvez nos articles d'actualité sur les métiers émergents !</h1>
                <p className="text-sm font-light text-center text-white mb-5">Immo&Co vous guide afin de trouver votre voie dans les métiers d'avenir du bâtiment. 🏠</p>
                <div className="h-2 w-2/3 border-t border-white self-center"></div>
                <div className="w-2/3 mt-5 text-white flex items-center gap-4">
                    <div className="relative flex-grow">
                        <Input
                            type="text"
                            placeholder="Rechercher des articles..."
                            value={searchTerm}
                            onChange={(e) => handleSearch(e.target.value)}
                            className="pl-10 text-white"
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                    {searchTerm && (
                        <Button variant="ghost" onClick={() => handleSearch("")}>
                            <X size={20} />
                        </Button>
                    )}
                </div>
                <div className="flex flex-wrap gap-2 mt-6">
                    {allTags.length > 0 && <p className="text-white text-sm xl:pr-10">Filtrer par tag : 👉</p>}
                    {allTags.map((tag, i) => (
                     tag &&   <Badge
                            key={`${tag.tagName}-${i}`}
                            variant={"default"}
                            className={`cursor-pointer text-black bg-white hover:bg-slate-500 ${selectedTags.includes(tag) && 'border border-emerald-500 bg-custom-black text-white'}`}
                            onClick={() => toggleTag(tag)}
                        >
                            {tag.tagName}
                        </Badge>
                    ))}
                </div>
            </div>
            <div className="flex flex-col ">
            <div className="grid place-items-center justify-items-center xl:grid-cols-2 gap-4 p-4">
                    {paginatedArticles.map((article) => (
                    <ActuCard key={article._id} actu={article} />
                    ))}
                </div>

                {filteredArticles.length === 0 && <p className="text-center text-gray-500">Aucun article trouvé</p>}

                {filteredArticles.length > ARTICLES_PER_PAGE && (
                    <div className="flex text-sm justify-between items-center my-4 w-full px-3 xl:w-2/3 self-center">
                    <HashLink smooth to={"/blog/#actus"}>
                        <Button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
                            <ChevronLeft size={20} />
                            Précédent
                        </Button>
                    </HashLink>
                    <span>
                        Page {currentPage} sur {totalPages}
                    </span>
                    <Button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                    >
                        Suivant
                        <ChevronRight size={20} />
                    </Button>
                    </div>
                )}
            </div>
        </main>
    
    </>
}