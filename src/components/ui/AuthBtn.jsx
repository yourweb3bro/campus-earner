export default function AuthBtn( { title = "Sign Up", variant = "signup", onClick } ) {
    const variants = {
        login: "bg-transparent",
        signup: "bg-btn-bg hover:bg-btn-bg/80"
  };

    return (
        <button className={`flex items-center justify-center min-w-fit h-fit py-2 px-4 rounded-full hover:text-white/60 transition-colors ${variants[variant]}`} onClick={onClick}>
            {title}
        </button>
    );
}