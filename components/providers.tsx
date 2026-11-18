"use client";
import {ThemeProvider} from "next-themes";
import {useEffect} from "react";
export function Providers({children}:{children:React.ReactNode}){useEffect(()=>{if(matchMedia("(pointer:fine)").matches&&!matchMedia("(prefers-reduced-motion:reduce)").matches){let lenis:{raf:(t:number)=>void;destroy:()=>void}|undefined;let raf=0;import("lenis").then(({default:Lenis})=>{lenis=new Lenis({duration:1.05});const loop=(t:number)=>{lenis?.raf(t);raf=requestAnimationFrame(loop)};raf=requestAnimationFrame(loop)});return()=>{cancelAnimationFrame(raf);lenis?.destroy()}}},[]);return <ThemeProvider attribute="class" defaultTheme="system">{children}</ThemeProvider>}
