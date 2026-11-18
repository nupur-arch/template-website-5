import type {Metadata} from "next";
import {Archivo_Black,DM_Sans} from "next/font/google";
import "./globals.css";
import {Providers} from "@/components/providers";
import {Header} from "@/components/header";
const display=Archivo_Black({weight:"400",subsets:["latin"],variable:"--font-display"});
const sans=DM_Sans({subsets:["latin"],variable:"--font-sans"});
export const metadata:Metadata={title:{default:"The Signal — Independent news in full colour",template:"%s — The Signal"},description:"Clear, independent reporting on the world, culture and sport."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" id="top" suppressHydrationWarning><body className={`${display.variable} ${sans.variable}`}><Providers><Header/>{children}</Providers></body></html>}
