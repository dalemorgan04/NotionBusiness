"use client";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCallback, useEffect, useState } from "react";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClickOutside = useCallback(
        (e: unknown) => {
            const pe = e as PointerEvent;
            const target = pe.target as HTMLElement;
            const menu = document.getElementById("nav-menu");

            if (!menu?.contains(target)) {
                setIsOpen(false);
            }
        },
        [setIsOpen],
    );

    useEffect(() => {
        const hideMenuClasses: string[] = ["-translate-y-1/2", "scale-y-0", "delay-150"];
        const hideMenuItemsClasses: string[] = ["opacity-0"];
        const showMenuItemsClasses: string[] = ["delay-150"];

        const menu = document.getElementById("nav-menu");
        const menuItems = document.getElementById("nav-menu-items");

        if (isOpen) {
            // First time running, add in the transition class
            menu?.classList.remove("transition-none");
            menu?.classList.add("transition");

            menuItems?.classList.remove(...hideMenuItemsClasses);
            menu?.classList.remove(...hideMenuClasses);
            menuItems?.classList.add(...showMenuItemsClasses);

            document.addEventListener("click", handleClickOutside);
        } else {
            menuItems?.classList.remove(...showMenuItemsClasses);
            menuItems?.classList.add(...hideMenuItemsClasses);
            menu?.classList.add(...hideMenuClasses);

            document.removeEventListener("click", handleClickOutside);
        }
    }, [handleClickOutside, isOpen]);

    return (
        <nav className="sticky top-0 h-10 bg-cyan-600 bg-opacity-90 shadow-md font-serif text-sm z-50 flex flex-row">
            <div
                id="nav-menu"
                className="-translate-y-1/2 scale-y-0 fixed duration-300 delay-150 bg-cyan-500 w-auto top-10 shadow-md ease-out transition-none right-0
                           md:translate-y-0 md:top-0 md:shadow-none md:transition-none md:opacity-100 md:bg-transparent md:scale-y-100 md:relative md:visible md:flex md:w-full md:flex-grow md:justify-end
                           flex flex-row justify-end flex-grow space-x-10 py-3 px-2 text-white"
            >
                <ul
                    id="nav-menu-items"
                    className="flex duration-150 opacity-0 flex-col space-y-2 text-center
                               md:space-y-0 md:top-0 md:transition-none md:opacity-100 md:flex-row md:space-x-8 md:mt-0"
                >
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>

            <div className="flex flex-row flex-grow items-center justify-end md:hidden">
                <button
                    id="nav-toggle"
                    className="flex items-center px-3 py-2 hover:fill-black hover:text-white hover:border-white"
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                >
                    <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff" }} />
                </button>
            </div>
        </nav>
    );
}
