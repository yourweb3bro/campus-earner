import placeholderImg from "../../assets/img/layer-2-protocols.jpg";

export default function PostCard( {
    img = placeholderImg, 
    title = "Loading Card Title...", 
    description = "Loading the description of the card content. It provides an overview of what to expect when you read more.", 
    source = "Post Source", 
    postedSince = "2h ago", 
    category = "Trending", 
    buttonText = "Read More",
    showMetaData = true,
    showCategory = true,
    } ) {
    
    return (
        <div className="flex flex-col gap-2.5 bg-black-alt rounded-3xl min-w-74 p-3 select-none transition-all">
            <div className="w-full min-h-40 bg-cover bg-center rounded-2xl overflow-hidden"
                style={{ backgroundImage: `url(${img})`}}></div>

            <h2 className="font-semibold text-lg">{title}</h2>
            <div className="h-full"> <p className="font-normal text-sm text-white-alt">{description}</p> </div>
            { showMetaData && source && postedSince && (<p className="font-medium text-sm">{source} • {postedSince}</p>)}
            
            <div className={`flex w-full gap-2 items-center text-sm ${showCategory ? "justify-between" : "justify-end"}`}>
                { showCategory && category && (<p className="px-4 py-2.5 rounded-full bg-black/20 text-card-category-green">{category}</p>)}
                <button className="px-4 py-2.5 rounded-full bg-black hover:underline cursor-pointer">{buttonText}</button>
            </div>
        </div>
    );
}