import Link from "next/link";

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-mono text-sm font-medium hover:text-primary transition-colors">
          ~/<span className="text-muted-foreground">kevin-koshy</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href="#experience" className="hover:text-foreground transition-colors">Experience</Link>
          <Link href="#projects" className="hover:text-foreground transition-colors">Projects</Link>
          <Link href="#contact" className="hover:text-foreground transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
