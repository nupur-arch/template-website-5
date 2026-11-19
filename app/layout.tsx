import type {Metadata} from "next";
import {Archivo_Black,DM_Sans} from "next/font/google";
import "./globals.css";
import {Providers} from "@/components/providers";
import {Header} from "@/components/header";
const display=Archivo_Black({weight:"400",subsets:["latin"],variable:"--font-display"});
const sans=DM_Sans({subsets:["latin"],variable:"--font-sans"});
export const metadata:Metadata={metadataBase:new URL("https://esportenoritmo.com"),title:{default:"Esportes: notícias e guias | Esporte no Ritmo",template:"%s | Esporte no Ritmo"},description:"Guias claros e notícias selecionadas para adultos que praticam ou acompanham esportes no Brasil.",openGraph:{type:"website",locale:"pt_BR",siteName:"Esporte no Ritmo",title:"Esportes: notícias e guias | Esporte no Ritmo",description:"Guias claros e notícias selecionadas para adultos que praticam ou acompanham esportes no Brasil.",images:[{url:"/og-image.svg",width:1200,height:630,alt:"Esporte no Ritmo"}]},twitter:{card:"summary_large_image"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR" id="top" suppressHydrationWarning><body className={`${display.variable} ${sans.variable}`}><Providers><Header/>{children}</Providers></body></html>}
