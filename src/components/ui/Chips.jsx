import ChipsBtn from "./ChipsBtn";

export default function Chips() {
    return (
        <div className="flex flex-wrap justify-center gap-2 mt-4">
            <ChipsBtn
            title="News"
            hoverVariant="green"
            onClick={() => {}}
            />
            <ChipsBtn
            title="Alpha Calls"
            hoverVariant="blue"
            onClick={() => {}}
            />
            <ChipsBtn
            title="Events"
            hoverVariant="purple"
            onClick={() => {}}
            />
            <ChipsBtn
            title="Testnets"
            hoverVariant="orange"
            onClick={() => {}}
            />
            <ChipsBtn
            title="Web3 jobs"
            hoverVariant="yellow"
            onClick={() => {}}
            />
            <ChipsBtn
            title="Trending"
            hoverVariant="ash"
            onClick={() => {}}
            />
        </div>
    );
}