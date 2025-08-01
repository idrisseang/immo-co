import { ArrowBigRight, CalendarDays, MessageSquareText } from "lucide-react";
import { formatDate } from "../lib/utils";
import Tag from "./tag";

export default function PreviewActuCard({actu}){
    return(
        <article className="max-w-[350px] h-full pb-5 border rounded-xl shadow-xl flex flex-col justify-between">
            <div className="p-4">
               <a href={`/blog/article/${actu?._id}`}>
                <img src={`${import.meta.env.VITE_COCKPIT_BASE_ASSET_URL}/${actu?.imageURL.path}`} alt={`${actu?.title} - N2A Expertises`} className="rounded-xl h-[180px] w-full"/>
               </a>
            </div>
            <div className="p-4">
               <div>
                <div className="flex items-center gap-2 mb-4">
                    {
                        actu?.tags?.map((tag, i) => {
                            return <Tag text={tag.tagName} key={i} small={true}/>
                        })
                    }
                </div>
                <h3 className="text-base font-bold hover:underline">
                    <a href={`/blog/article/${actu?._id}`}>{actu?.title}</a>
                </h3>
               </div>
                <div className="text-sm flex items-center space-x-4 mt-4 text-form-green">
                    <div className="flex items-center space-x-1">
                        <CalendarDays size={16}/>
                        <p>{formatDate(actu?._created * 1000)}</p>
                    </div>
                        <div className="flex items-center gap-1">
                            <MessageSquareText size={14}/>
                            <p className="text-xs">{actu?.comments?.length || 0}</p>
                        </div>
                </div>
                <p className="text-sm font-extralight py-2">{actu?.previewText}</p>
            </div>
            <div className="flex items-center px-4 hover:underline">
                <a href={`/blog/article/${actu?._id}`} className="text-sm hover:text-form-green hover:cursor-pointer">Lire l'article</a>
                <ArrowBigRight stroke="#01366b" className="hover:fill-form-green hover:cursor-pointer"/>
            </div>
        </article>
    )
} 