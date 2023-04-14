import React from "react";
import MenuItem from "./MenuItem";

export default function Navbar() {
    return (
        <header className="index relative text-zinc-200">
            <nav className="sticky top-0 flex bg-gradient-to-r from-rose-500 to-pink-500">
                <div className="logo flex items-center gap-2 p-2">
                    <img src="/images/logo-inverted.png" alt="site logo" width="50" />
                    <div className="text-2xl font-bold">
                        tw:<span className="text-sky-900">mf</span>
                    </div>
                </div>

                <div className="hidden flex-1 items-center justify-center md:flex">
                    <MenuItem text={"Home"} subMenus={} />
                    <MenuItem text={"Lineup"} />
                    <MenuItem text={"Ticket"} />
                    <MenuItem text={"Support"} />
                </div>
            </nav>
        </header>
    )
}
