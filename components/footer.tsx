import Link from "next/link";
import {Stamp} from "./stamp";
export function Footer(){return <footer><div className="footer-top"><Stamp/><p>Independent journalism<br/>for an interconnected world.</p><nav><Link href="/sports">Sports</Link><Link href="/brand">About</Link><Link href="/search">Search</Link></nav></div><div className="footer-word" aria-hidden="true"><span>THE SIGNAL</span><span>THE SIGNAL</span><span>THE SIGNAL</span></div><div className="footer-bottom">© 2026 THE SIGNAL <span>CLARITY IS A PUBLIC SERVICE.</span></div></footer>}
