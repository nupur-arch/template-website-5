import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {articles} from "@/lib/data";
import {sections} from "@/content/site.config";
import {SafeImage} from "@/components/safe-image";
import {Footer} from "@/components/footer-rebuild";

export function generateStaticParams(){return sections.map(({slug})=>({slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const s=sections.find(x=>x.slug===slug);return s?{title:`${s.name}: guias de esporte`,description:`Guias de ${s.name.toLowerCase()} para praticar e acompanhar esportes com informação clara.`}:{title:"Seção não encontrada"}}
export default async function SectionPage({params,searchParams}:{params:Promise<{slug:string}>,searchParams:Promise<{tema?:string}>}){
 const {slug}=await params,{tema}=await searchParams;const section=sections.find(x=>x.slug===slug);if(!section)notFound();
 const all=articles.filter(a=>a.category===section.name);const list=tema?all.filter(a=>a.topic===tema):all;
 return <><main className="sports section-page"><section className="sports-hero"><span className="eyebrow">ESPORTE NO RITMO / SEÇÕES</span><h1>{section.name.toUpperCase()}<br/><i>SEM COMPLICAÇÃO.</i></h1><p className="section-intro">Guias permanentes para decidir melhor, praticar com consistência e acompanhar o esporte no seu ritmo.</p><div className="filter-chips"><Link className={!tema?"active":""} href={`/secoes/${slug}`}>Todos</Link>{section.topics.map(t=><Link className={tema===t?"active":""} href={`/secoes/${slug}?tema=${encodeURIComponent(t)}`} key={t}>{t}</Link>)}</div></section><section className="sports-section"><div className="sports-title"><span>01</span><h2>Guias da seção</h2></div><div className="section-guides">{list.map(a=><Link href={`/artigos/${a.slug}`} className="latest-card" key={a.id}><div className="latest-image"><SafeImage src={a.image} alt={a.title} category={a.category}/></div><div><span>{a.topic} / {a.time}</span><h3>{a.title}</h3><p>{a.dek}</p><strong>Ler guia</strong></div></Link>)}</div></section><Footer/></main></>
}
