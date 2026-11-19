"use client";
import Image from "next/image";
import {useState} from "react";
export function SafeImage({src,alt,category,priority=false}:{src?:string;alt:string;category:string;priority?:boolean}){const [bad,setBad]=useState(false);return <div className="safe-image">{src&&!bad?<Image src={src} alt={alt} fill sizes="(max-width:768px) 92vw, 50vw" priority={priority} loading={priority?undefined:"lazy"} onError={()=>setBad(true)}/>:<div className="image-fallback"><b>ER</b><span>{category}</span></div>}</div>}
