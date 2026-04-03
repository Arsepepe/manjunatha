export default function BibliotecaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-32 pb-24 text-center">
      <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">Biblioteca Vivia</h1>
      <p className="text-xl text-muted-foreground font-light mb-12">
        Recursos recomendados, libros de sabiduría ancestral y guías prácticas.
      </p>
      <div className="p-12 border border-primary/20 rounded-2xl bg-white/50">
        <p className="text-muted-foreground italic">Biblioteca en construcción...</p>
      </div>
    </div>
  );
}
