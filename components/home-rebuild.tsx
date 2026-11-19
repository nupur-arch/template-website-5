"use client";

import {useEffect,useRef,useState} from "react";
import Link from "next/link";
import {articles} from "@/lib/data";
import {SafeImage} from "./safe-image";
import {Stamp} from "./stamp";
import {Newsletter} from "./newsletter";

export function Breaking(){
  const [n,setN]=useState(0);
  useEffect(()=>{const id=setInterval(()=>setN(x=>(x+1)%4),3600);return()=>clearInterval(id)},[]);
  return <section className="breaking"><b>EM DESTAQUE</b><div className="flap" key={n}>{articles[n].title}</div><span>{String(n+1).padStart(2,"0")} / 04</span></section>
}

export function AnchorSync(){useEffect(()=>{const sync=()=>{const id=location.hash.slice(1);if(id)document.getElementById(id)?.scrollIntoView({block:"start"})};const first=requestAnimationFrame(()=>requestAnimationFrame(sync));const timer=setTimeout(sync,700);return()=>{cancelAnimationFrame(first);clearTimeout(timer)}},[]);return null}

export function HeroTunnel(){
  const shell=useRef<HTMLElement>(null);
  const cards=useRef<(HTMLElement|null)[]>([]);
  const [active,setActive]=useState(0);
  useEffect(()=>{
    const root=shell.current;
    if(!root||innerWidth<700||matchMedia("(prefers-reduced-motion: reduce)").matches)return;
    let frame=0;
    const render=()=>{
      frame=0;
      const stage=root.querySelector<HTMLElement>(".tunnel-stage");
      if(!stage)return;
      const header=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h"))||76;
      const start=root.offsetTop-header;
      const distance=Math.max(1,root.offsetHeight-stage.offsetHeight);
      const progress=Math.max(0,Math.min(1,(scrollY-start)/distance));
      const position=progress*19;
      const next=Math.min(19,Math.max(0,Math.round(position)));
      setActive(current=>current===next?current:next);
      root.style.setProperty("--hero-progress",String(progress));
      cards.current.forEach((card,index)=>{
        if(!card)return;
        const delta=index-position;
        const lane=(index%2?1:-1)*(10+(index%3)*6);
        const opacity=delta<0?Math.max(0,1+delta*7):Math.max(.035,Math.min(1,1-delta*.26));
        card.style.transform=`translate3d(${lane}px, ${(index%4-1.5)*5}px, ${-delta*430}px) rotateY(${index%2?-1.8:1.8}deg)`;
        card.style.opacity=String(opacity);
        card.style.pointerEvents=Math.abs(delta)<.55?"auto":"none";
      });
    };
    const request=()=>{if(!frame)frame=requestAnimationFrame(render)};
    render();addEventListener("scroll",request,{passive:true});addEventListener("resize",request);
    return()=>{removeEventListener("scroll",request);removeEventListener("resize",request);cancelAnimationFrame(frame)}
  },[]);
  return <section className="tunnel-shell hero-v2" ref={shell}><div className="tunnel-stage"><div className="hero-grid" aria-hidden="true"/><div className="tunnel-intro"><span className="eyebrow">GUIAS / EDIÇÃO INICIAL</span><h1>VINTE<br/><i>GUIAS.</i><br/>SEU RITMO.</h1><p>Informação prática para escolher, começar e continuar.<br/>Um guia claro de cada vez.</p></div><Stamp/><div className="tunnel-space">{articles.map((a,i)=><article className="tunnel-card" ref={node=>{cards.current[i]=node}} style={{transform:`translate3d(${(i%2?1:-1)*(34+(i%3)*17)}px, ${(i%4-1.5)*10}px, ${-i*560}px) rotateY(${i%2?-3.5:3.5}deg)`,opacity:i<5?Math.max(.06,1-i*.18):.06,zIndex:30-i}} key={a.id}><SafeImage src={a.image} alt={a.title} category={a.category} priority={i<2}/><div className="card-copy"><span>{String(i+1).padStart(2,"0")} / {a.category} / {a.time}</span><h2>{a.title}</h2><Link href={`/artigos/${a.slug}`} aria-label={`Ler ${a.title}`}>Ler guia ↗</Link></div></article>)}</div><div className="tunnel-meta"><b>{String(active+1).padStart(2,"0")}<small>/20</small></b><div><i style={{width:`${(active+1)*5}%`}}/></div><span>{active===19?"CONTINUE PARA OS GUIAS":"ROLE PARA EXPLORAR"}</span></div></div></section>
}

function LatestWall(){
  const section=useRef<HTMLElement>(null);
  useEffect(()=>{const root=section.current;if(!root||matchMedia("(prefers-reduced-motion: reduce)").matches)return;let frame=0;const update=()=>{frame=0;const rect=root.getBoundingClientRect();const p=Math.max(0,Math.min(1,(innerHeight-rect.top)/(innerHeight+rect.height)));root.style.setProperty("--latest-shift",`${(p-.5)*150}px`)};const request=()=>{if(!frame)frame=requestAnimationFrame(update)};update();addEventListener("scroll",request,{passive:true});return()=>{removeEventListener("scroll",request);cancelAnimationFrame(frame)}},[]);
  return <section className="section latest latest-v2" ref={section}><SectionHead n="02" title="Guias recentes"/><div className="latest-lead"><p>Conteúdo permanente, organizado para facilitar sua próxima decisão.</p><span>LEITURA CLARA E DIRETA</span></div><div className="latest-wall"><div className="latest-column latest-column-a">{articles.slice(4,8).map((a,i)=><LatestCard article={a} n={i+1} key={a.id}/>)}</div><div className="latest-column latest-column-b">{articles.slice(8,12).map((a,i)=><LatestCard article={a} n={i+5} key={a.id}/>)}</div></div></section>
}

function LatestCard({article:a,n}:{article:(typeof articles)[number];n:number}){return <Link href={`/artigos/${a.slug}`} className="latest-card"><div className="latest-image"><SafeImage src={a.image} alt={a.title} category={a.category}/><b>{String(n).padStart(2,"0")}</b></div><div><span>{a.category} / {a.time}</span><h3>{a.title}</h3><p>{a.dek}</p><strong>Ler guia ↗</strong></div></Link>}

export function NewsSections(){return <><LatestWall/><section className="section trending"><SectionHead n="03" title="Comece por aqui"/><div className="trend-list">{articles.slice(0,10).map((a,i)=><Link href={`/artigos/${a.slug}`} key={a.id}><b>{String(i+1).padStart(2,"0")}</b><span>{a.category}</span><h3>{a.title}</h3><em>↗</em></Link>)}</div></section><section className="section picks"><SectionHead n="04" title="Escolhas da redação"/><div className="pick-stack">{articles.slice(10,14).map((a,i)=><Link href={`/artigos/${a.slug}`} key={a.id} style={{"--i":i} as React.CSSProperties}><SafeImage src={a.image} alt={a.title} category={a.category}/><span>{a.category}</span><h3>{a.title}</h3></Link>)}</div></section><Newsletter/></>}

function SectionHead({n,title}:{n:string;title:string}){return <div className="section-head"><span>{n}</span><h2>{title}</h2><i/></div>}
