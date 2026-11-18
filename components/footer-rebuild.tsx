import Link from "next/link";
import {Stamp} from "./stamp";
import {Logo} from "./logo";

export function Footer(){return <footer className="footer-v2"><div className="footer-kicker"><span>THE SIGNAL / INDEPENDENT SINCE 2026</span><span>DHAKA · LONDON · EVERYWHERE</span></div><div className="footer-main"><div className="footer-statement"><Stamp/><h2>THE WORLD IS LOUD.<br/><i>WE FIND THE SIGNAL.</i></h2></div><div className="footer-links"><div><b>SECTIONS</b><Link href="/">Latest</Link><Link href="/sports">Sports</Link><Link href="/search">Search</Link></div><div><b>THE NEWSROOM</b><Link href="/brand">About us</Link><Link href="/brand">Our standards</Link><a href="mailto:desk@thesignal.news">Contact</a></div></div></div><div className="footer-marquee" aria-hidden="true"><span>THE</span><span>SIGNAL</span></div><div className="footer-bottom"><Logo variant="mark"/><span>© 2026 THE SIGNAL NEWSROOM</span><p>CLARITY IS A PUBLIC SERVICE.</p><a href="#top">BACK TO TOP ↑</a></div></footer>}
