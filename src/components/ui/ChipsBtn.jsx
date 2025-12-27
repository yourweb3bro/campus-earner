export default function ChipsBtn( { title = "Chip", hoverVariant = "default", onClick } ) {
    const hoverVariants = {
        default: "hover:bg-btn-bg/80",
        green: "hover:bg-green",
        blue: "hover:bg-blue",
        purple: "hover:bg-purple",
        orange: "hover:bg-orange",
        yellow: "hover:bg-yellow",
        ash: "hover:bg-ash"
  };

    return (
        <button className={`flex w-fit items-center select-none h-fit py-2 px-4 text-sm hover:text-btn-bg rounded-xl bg-btn-bg transition-colors ${hoverVariants[hoverVariant]}`} onClick={onClick}>
            {title}
        </button>
    );
}