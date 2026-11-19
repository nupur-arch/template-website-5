"use client";
import Link from "next/link";
import {useEffect,useState} from "react";
import {Moon,Sun,Menu,X} from "lucide-react";
import {useTheme} from "next-themes";
import {Logo} from "./logo";
import {sections} from "@/content/site.config";
import {Search} from "./search";
export function Header(){const [menu,setMenu]=useState(false);const [mounted,setMounted]=useState(false);const {resolvedTheme,setTheme}=useTheme();useEffect(()=>setMounted(true),[]);const dark=mounted&&resolvedTheme==="dark";return <header><Logo/><nav className={menu?"open":""} data-lenis-prevent>{sections.map(s=><Link key={s.slug} href={`/secoes/${s.slug}`} onClick={()=>setMenu(false)}>{s.name}</Link>)}<Link href="/sobre" onClick={()=>setMenu(false)}>Sobre</Link><Search/></nav><div className="header-actions"><button aria-label={dark?"Usar tema claro":"Usar tema escuro"} onClick={()=>setTheme(dark?"light":"dark")}>{dark?<Sun/>:<Moon/>}</button><button className="menu-button" onClick={()=>setMenu(x=>!x)} aria-label={menu?"Fechar menu":"Abrir menu"}>{menu?<X/>:<Menu/>}</button></div></header>}
