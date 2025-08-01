import DefaultPP from "../assets/default-pp.png";

export default function CommentCard({comment}){
    return(
        <div>
            <div className="flex items-center gap-2">
                <img src={DefaultPP} alt="" className="w-10 h-10 rounded-full"/>
                <div className="flex flex-col space-y-1">
                    <span className="font-bold text-base">{comment.authorName}</span>
                    <span className="text-sm">7 Février 2025</span>
                </div>
            </div>
            <div className="p-2 italic">{comment.comment}</div>
        </div>
    )
}