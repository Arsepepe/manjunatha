import { Button } from "@/components/ui/button";

export default function ContactoPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 pt-32 pb-24 text-center">
      <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">Contacto</h1>
      <p className="text-xl text-muted-foreground font-light mb-12">
        Escríbenos si tienes alguna inquietud sobre tu práctica o acceso.
      </p>
      <form className="flex flex-col gap-4 text-left p-8 border border-primary/20 rounded-2xl bg-white/50">
        <div>
          <label className="block text-sm font-medium mb-1">Nombre</label>
          <input type="text" className="w-full border rounded-md p-2" placeholder="Tu nombre" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Mensaje</label>
          <textarea className="w-full border rounded-md p-2 h-32" placeholder="Tu mensaje..." />
        </div>
        <Button className="mt-4">Enviar Mensaje</Button>
      </form>
    </div>
  );
}
