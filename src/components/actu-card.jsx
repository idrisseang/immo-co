export default function ActuCard({actu}){
    return(
        <>
            <article className="my-4 w-2/3">
                <a href={`/blog/article/${actu._id}`} className="underline">
                    <h2 className="text-lg xl:text-[32px] font-bold my-2 leading-normal">{actu.title}</h2>
                </a>
                    <p className="font-thin text-xs xl:text-base">Publié le 8 Janvier 2025</p>
                    <div className="w-full h-auto my-4">
                        <img src={`${import.meta.env.VITE_COCKPIT_BASE_ASSET_URL}/${actu.imageURL.path}`} alt="" className="w-full max-h-[545px]"/>
                    </div>
                    <p className="text-sm xl:text-base font-light "> {actu.previewText} </p>
            </article>
        </>
    )
}