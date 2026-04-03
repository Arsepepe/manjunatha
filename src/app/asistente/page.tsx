import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ExternalLink, Sparkles, AlertCircle, HelpCircle, MessagesSquare } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { ChatInterface } from "@/components/chat-interface";

export const metadata: Metadata = {
  title: "Habla con Enseñanzas Manjunatha",
  description: "Conversa con un asistente entrenado en la sabiduría de Manjunatha para guiar tu búsqueda interior.",
};

export default function AsistentePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 pb-32">
      {/* Encabezado */}
      <div className="text-center mb-16 space-y-6">
        <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
          <MessagesSquare className="w-8 h-8" />
        </div>
        <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Habla con <span className="text-primary">Enseñanzas Manjunatha</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
          Un guía digital entrenado en toda la sabiduría, textos y reflexiones de Antonio Manjunatha. 
          Diseñado para ofrecerte claridad, consuelo espiritual y perspectivas profundas en tu camino de transformación.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Qué tipo de preguntas puedes hacer */}
        <Card className="border-none shadow-sm bg-stone-50">
          <CardHeader>
            <div className="h-10 w-10 rounded bg-white shadow-sm flex items-center justify-center mb-4 text-primary">
              <HelpCircle className="h-5 w-5" />
            </div>
            <CardTitle className="text-xl">¿Qué puedes preguntar?</CardTitle>
            <CardDescription className="text-base font-light">
              Úsalo como un compañero para tu indagación personal.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 text-sm text-foreground/80 font-medium">
              <li className="flex items-start">
                <Sparkles className="h-4 w-4 mr-3 text-primary shrink-0 mt-0.5" />
                <span>"¿Cómo manejo la ansiedad desde la consciencia plena testificadora?"</span>
              </li>
              <li className="flex items-start">
                <Sparkles className="h-4 w-4 mr-3 text-primary shrink-0 mt-0.5" />
                <span>"Explícame el concepto de soltar el ego de manera práctica."</span>
              </li>
              <li className="flex items-start">
                <Sparkles className="h-4 w-4 mr-3 text-primary shrink-0 mt-0.5" />
                <span>"Tengo un conflicto familiar, ¿qué consejo me daría la enseñanza?"</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Qué límites tiene */}
        <Card className="border-none shadow-sm bg-stone-50">
          <CardHeader>
            <div className="h-10 w-10 rounded bg-white shadow-sm flex items-center justify-center mb-4 text-stone-500">
              <AlertCircle className="h-5 w-5" />
            </div>
            <CardTitle className="text-xl">Límites del Asistente</CardTitle>
            <CardDescription className="text-base font-light">
              Entendiendo la naturaleza de esta herramienta.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 text-sm text-foreground/80 font-medium">
              <li className="flex items-start">
                <div className="h-1.5 w-1.5 rounded-full bg-stone-400 mr-3 shrink-0 mt-2" />
                <span>No sustituye la ayuda psicológica o médica profesional.</span>
              </li>
              <li className="flex items-start">
                <div className="h-1.5 w-1.5 rounded-full bg-stone-400 mr-3 shrink-0 mt-2" />
                <span>Es una inteligencia artificial interpretando textos, no el propio autor en vida.</span>
              </li>
              <li className="flex items-start">
                <div className="h-1.5 w-1.5 rounded-full bg-stone-400 mr-3 shrink-0 mt-2" />
                <span>La verdadera respuesta siempre reside en tu propio silencio interior.</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Acción Principal */}
      <div className="flex flex-col md:flex-row gap-8 mb-16">
        <div className="flex-1 flex flex-col items-center justify-center p-8 bg-white rounded-3xl border border-stone-100 shadow-sm text-center">
          <h2 className="font-serif text-2xl font-semibold mb-4 text-stone-800">Versión Externa Oficial</h2>
          <p className="text-muted-foreground font-light mb-8 max-w-sm mx-auto">
            Alojado en ChatGPT para su máxima capacidad. <br/><br/>
            <strong className="text-stone-700">Nota:</strong> Si ves un error de <code className="bg-stone-100 px-1 rounded">auth/error</code>, es un fallo común de sesión de OpenAI. <strong>Prueba copiando y pegando este enlace en una Ventana de Incógnito:</strong>
            <span className="block mt-4 mb-2 p-3 bg-stone-100 border border-stone-200 rounded-lg text-xs break-all select-all text-primary font-mono cursor-text text-left">
              https://chatgpt.com/g/g-6991dd205c9c8191a5a64fd8065edb41-ensenanzas-de-manjunatha
            </span>
          </p>
          <Button asChild size="lg" className="h-14 px-8 text-base shadow-md hover:shadow-lg transition-shadow">
            <a 
              href="https://chatgpt.com/g/g-6991dd205c9c8191a5a64fd8065edb41-ensenanzas-de-manjunatha" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Abrir Asistente Oficial
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
        
        <div className="flex-1 bg-stone-100/50 rounded-3xl p-6 border border-stone-200/60">
           <h2 className="font-serif text-xl font-semibold mb-2 text-stone-800">Prueba Integrada (Simulación)</h2>
           <p className="text-sm font-light text-muted-foreground mb-4">
             Debido a fuertes políticas de seguridad, ChatGPT bloquea los <code>&lt;iframe&gt;</code>. Así es como se verá nuestra herramienta cuando integremos la API directamente:
           </p>
           <ChatInterface />
        </div>
      </div>
    </div>
  );
}
