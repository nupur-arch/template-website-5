"use client";
import Link from "next/link";
import {useEffect,useState} from "react";
import {Moon,Sun,Menu,X} from "lucide-react";
import {useTheme} from "next-themes";
import {Logo} from "./logo";
import {Search} from "./search";
export function Header(){const [menu,setMenu]=useState(false);const [mounted,setMounted]=useState(false);const {resolvedTheme,setTheme}=useTheme();useEffect(()=>setMounted(true),[]);const dark=mounted&&resolvedTheme==="dark";return <header><Logo/><nav className={menu?"open":""} data-lenis-prevent><Link href="/">Latest</Link><Link href="/sports">Sports</Link><Link href="/brand">About</Link><Search/></nav><div className="header-actions"><button aria-label="Toggle theme" onClick={()=>setTheme(dark?"light":"dark")}>{dark?<Sun/>:<Moon/>}</button><button className="menu-button" onClick={()=>setMenu(x=>!x)} aria-label="Toggle menu">{menu?<X/>:<Menu/>}</button></div></header>}
