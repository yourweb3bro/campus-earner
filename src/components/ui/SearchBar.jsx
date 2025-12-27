export default function SearchBar({ placeholder }) {
    return (
        <input
            type="text"
            placeholder={placeholder || "Search..."}
            className="w-50 sm:w-lg 2xl:w-3xl py-2 px-5 text-sm rounded-full bg-black-alt focus:outline-none focus:ring-1"
        />
    );
}