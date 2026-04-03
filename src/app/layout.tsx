import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Enseñanzas de Manjunatha",
  description: "Un espacio espiritual y educativo para buscadores de sabiduría práctica y transformación interior.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${lora.variable}`}>
      <body className="antialiased flex flex-col min-h-screen">
        <header className="py-6 px-4 md:px-8 max-w-7xl mx-auto w-full flex justify-between items-center">
          <div className="font-serif text-xl tracking-tight text-primary font-semibold">
            Enseñanzas de Manjunatha
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
            <a href="/" className="hover:text-foreground transition-colors">Inicio</a>
            <a href="/ensenanzas" className="hover:text-foreground transition-colors">Enseñanzas</a>
            <a href="/biblioteca" className="hover:text-foreground transition-colors">Biblioteca</a>
            <a href="/asistente" className="hover:text-foreground transition-colors">Habla con el Asistente</a>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="py-12 border-t border-muted/20 text-center text-muted-foreground text-sm mt-12">
          <div className="max-w-7xl mx-auto px-4">
            <p className="font-serif mb-4 text-accent/80 italic">"La transformación exterior comienza en el templo interior."</p>
            <p>© {new Date().getFullYear()} Enseñanzas de Manjunatha. Todos los derechos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
