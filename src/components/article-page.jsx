import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import axios from "axios";
import { Facebook, Linkedin, MessageSquareText, MoveLeft } from "lucide-react";

import { Separator } from "./ui/separator";
import CommentsForm from "./comments-form";
import CommentCard from "./comment-card";
import Tag from "./tag";
import { Helmet } from "react-helmet";

export default function ArticlePage(){

    const [articles, setArticles] = useState([]);

    useEffect( () => {
        const fetchActus = () => {
            axios.get(`${import.meta.env.VITE_COCKPIT_API_ENDPOINT}/content/items/actus`, {
                headers: {
                    "api-key": import.meta.env.VITE_COCKPIT_API_KEY
                }
            })
            .then( ({data}) => setArticles(data) )
            .catch(err => console.log(err))
        };
        fetchActus();
    }, [articles]);

    
    const location = useLocation();
    const articleId = location.pathname.split('/').pop();
    const navigate = useNavigate();
    const article = articles && articles.find(article => article._id === articleId);

    useEffect( () => {
        if(articles){
            if(!article && articles.length > 0){
                navigate('/error');
            }
        }
    },[article, articles, navigate])

    const activeComments = article && article.comments.filter(comment => comment.approved === true);
    return(
        <>{ article && <>
            <Helmet>
                <title>
                    {article.title} - Le Blog Officiel N2A Expertises
                </title>
                <meta property="og:title" content={article.title} />
                <meta property="og:image" content={article.imageURL}/>
                <meta property="og:url" content={`${window.location.hostname}${window.location.pathname}`} />
                <meta property="og:type" content="article" />
            </Helmet>
            <Header />
        <main className="container mx-auto px-4 w-full flex flex-col items-center justify-center">
            <a href="/blog" className="self-start flex items-center space-x-2 my-4">
                <MoveLeft />
                <span className="text-sm font-medium hover:underline">Retour aux articles</span>
            </a>
            <article className="bg-white flex flex-col items-center w-full md:max-w-[730px]">
                <img src={`${import.meta.env.VITE_COCKPIT_BASE_ASSET_URL}/${article.imageURL.path}`} alt={article.title} loading="lazy" className="h-auto w-full"/>
                <div className="p-4 md:p-10 flex flex-col space-y-4">
                    <h1 className="text-4xl text-main font-bold">{article.title}</h1>
                    <div className="flex items-center gap-4">
                        <p className=" text-sm font-light text-zinc-400">Publié le 10/01/2025</p>
                        <span className="flex items-center gap-1">
                            <MessageSquareText size={14}/>
                            <p className="text-xs">{activeComments ? activeComments.length : 0}</p>
                        </span>
                        <div className="flex items-center gap-2">
                            {
                                article.tags && article.tags.map((tag, i) => {
                                    return <Tag text={tag.tagName} key={i} />
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-4 p-4 md:px-10 md:py-4 text-justify" dangerouslySetInnerHTML={{ __html: article.content }} />
            </article>

            <div className="w-full self-start">
                <p className="text-form-green mb-2 font-bold text-xl">{activeComments ? activeComments.length : 0} {activeComments.length > 1 ? 'commentaires' : 'commentaire'}</p>
                <div className="w-full"><Separator /></div>
                <CommentsForm articleId={article._id} previousComments={article.comments || []}/>
            </div>
            <div className="w-full"><Separator /></div>
            <div className="self-start space-y-4 py-2">
                <h3 className="text-xl font-bold text-form-green italic">« Le savoir ne vaut que s'il est partagé »</h3>
                <div className="flex items-center gap-2">
                    <p className="font-medium">Partager sur Facebook : </p>
                    <span className="p-2 bg-form-green rounded-full cursor-pointer">
                        <a href={`https://www.facebook.com/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer">
                            <Facebook fill="white" stroke=""/>
                        </a>
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <p className="font-medium">Partager sur LinkedIn : </p>
                    <span className="p-2 bg-form-green rounded-full cursor-pointer">
                        <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(article.title)}`} target="_blank" rel="noopener noreferrer">
                            <Linkedin fill="white" stroke=""/>
                        </a>
                    </span>
                </div>
            </div>
            <div className="w-full"><Separator /></div>
            <div className="flex flex-col space-y-4 self-start">
                {activeComments.map((comment, key) => {
                    return <CommentCard comment={comment} key={key}/>
                })}
            </div>
        </main>
      <Footer /> 
      </>
        }</> 
    )
}