import { useState, useRef, useEffect } from "react";
import SearchBar from '../ui/SearchBar';
import AuthBtn from '../ui/authBtn';
import NavBtn from '../ui/NavBtn';
import AppLogo from '/favicon.svg';

export default function NavBar() {
    
    const BtnText = {
        nav: [
            {
                title: "Home",
                variant: "default",
                link: "#"
            },
            {
                title: "Wallet",
                variant: "default",
                link: "#"
            }
    ],
    auth: [
            {
                title: "Login",
                variant: "login",
                link: "#"
            },
            {
                title: "Sign Up",
                variant: "signup",
                link: "#"
            }
    ],
}



const [open, setOpen] = useState(false);
const navRef = useRef(null);

const closeMenu = () => setOpen(false);

useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        closeMenu();
      }
    }

    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);
  
    return (
        <>
        {/* Blur overlay */}
            {open && (
                <div
                onClick={() => setOpen(false)}
                className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs xl:hidden"
                />
            )}

        <nav ref={navRef} className="fixed w-full 2xl:w-380 px-4 z-50 bg-black/60 backdrop-blur-sm">
            <div className="tracking-tight flex justify-between items-center w-full py-4">
                <div className="flex min-w-fit items-center gap-0.5">
                    <img src={AppLogo} alt="App Logo" className="w-8 h-8" />
                    <p className="font-semibold  md:text-lg hidden md:block">Campus Earner</p>
                </div>

                <div className="xl:flex hidden min-w-fit items-center xl:gap-1.5">
                    <NavBtn 
                        title={BtnText.nav[0].title}
                        variant={BtnText.nav[0].variant}
                    />
                    <NavBtn
                        title={BtnText.nav[1].title}
                        variant={BtnText.nav[1].variant}
                    />
                </div>

                <div className="w-fit">
                    <SearchBar placeholder="Search tokens, projects, or narratives.." />
                </div>

                <div className="min-w-fit items-center hidden xl:flex">
                    <AuthBtn
                        title={BtnText.auth[0].title}
                        variant={BtnText.auth[0].variant}
                    />
                    <AuthBtn
                        title={BtnText.auth[1].title}
                        variant={BtnText.auth[1].variant}
                    />
                </div>

                {/* Mobile toggle */}
                <button
                onClick={() => setOpen(!open)}
                className="xl:hidden relative w-6 h-6 flex cursor-pointer"
                aria-label="Toggle menu"
                >
                <span
                    className={`absolute h-0.5 w-6 bg-white transition-all duration-300
                    ${open ? "rotate-45 top-3" : "top-1"}`}
                />
                <span
                    className={`absolute h-0.5 w-6 bg-white transition-all duration-300
                    ${open ? "opacity-0" : "top-3"}`}
                />
                <span
                    className={`absolute h-0.5 w-6 bg-white transition-all duration-300
                    ${open ? "-rotate-45 top-3" : "top-5"}`}
                />
                </button>
            </div>

                {/* Mobile menu */}
                <div
                    className={`xl:hidden overflow-hidden transition-all duration-300
                    ${open ? "max-h-125 opacity-100" : "max-h-0 opacity-0"}`}
                >
                    <div className="flex items-center flex-col gap-2 px-6 py-6 bg-background">
                    <NavBtn 
                        title={BtnText.nav[0].title}
                        variant={BtnText.nav[0].variant}
                    />
                    <NavBtn
                        title={BtnText.nav[1].title}
                        variant={BtnText.nav[1].variant}
                    />
                    
                    <div className="flex flex-col w-full gap-2 xl:hidden">
                    <AuthBtn
                        title={BtnText.auth[0].title}
                        variant={BtnText.auth[0].variant}
                    />
                    <AuthBtn
                        title={BtnText.auth[1].title}
                        variant={BtnText.auth[1].variant}
                    />
                    </div>
                    </div>
                </div>
            
        </nav>
        </>
    );
}