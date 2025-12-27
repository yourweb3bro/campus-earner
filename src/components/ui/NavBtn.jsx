export default function NavBtn( { title = "Button", variant = "filled", link = "#" } ) {
    const variants = {
        default: "bg-transparent",
        filled: "bg-btn-bg"
  };

    return (
        <a className={`flex min-w-fit items-center justify-center h-fit m-3 text-sm hover:text-white/60 transition-colors ${variants[variant]}`} href={link}>
            {title}
        </a>
    );
}