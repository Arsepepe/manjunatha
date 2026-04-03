import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, BookOpen, Compass, Sparkles, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-20">
      {/* Hero Section */}
      <section className="relative px-4 pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden flex items-center min-h-[85vh]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background -z-10" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000 order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary">
              <Sparkles className="h-4 w-4 mr-2" />
              <span className="font-medium tracking-wide">Despierta a tu verdadera naturaleza</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
              La quietud te <span className="text-primary italic font-light font-serif">espera.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Un refugio digital inspirado en la sabiduría de Antonio Manjunatha. 
              Explora enseñanzas que disuelven la confusión y te guían de vuelta a tu paz inherente.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Button asChild size="lg" className="w-full sm:w-auto text-base shadow-lg shadow-primary/20">
                <Link href="#enseñanzas">
                  Explorar enseñanzas
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-base bg-white/5 backdrop-blur-sm border-primary/10 hover:bg-primary/5 transition-all">
                <Link href="/asistente">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Conversar con el asistente
                </Link>
              </Button>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative order-1 lg:order-2 animate-in fade-in zoom-in-95 duration-1000">
            <div className="relative aspect-[4/5] w-full max-w-[400px] mx-auto lg:ml-auto">
              <div className="absolute inset-0 bg-primary/10 rounded-[3rem] -rotate-6 scale-95 blur-2xl opacity-50" />
              <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border-[12px] border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">
                <Image 
                  src="/manjunatha.jpg" 
                  alt="Antonio Manjunatha" 
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative detail */}
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl border border-primary/5 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] font-bold text-muted-foreground tracking-[0.2em] uppercase">Estado de Presencia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qué encontrarás aquí */}
      <section className="px-4 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">¿Qué encontrarás aquí?</h2>
          <div className="h-1 w-12 bg-primary/40 mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Enseñanzas Profundas",
              description: "Textos y reflexiones que disuelven la mente y señalan directamente a la verdad.",
              icon: BookOpen,
            },
            {
              title: "Asistencia Virtual",
              description: "Un guía entrenado con toda la sabiduría de Manjunatha para responder tus dudas existenciales.",
              icon: MessageCircle,
            },
            {
              title: "Rutas de Práctica",
              description: "Caminos estructurados para llevar la teoría a tu experiencia directa y cotidiana.",
              icon: Compass,
            },
          ].map((item, i) => (
            <Card key={i} className="bg-transparent border-primary/10 shadow-none hover:bg-white/50 transition-colors duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription className="text-base font-light text-muted-foreground leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Enseñanzas Destacadas */}
      <section id="enseñanzas" className="px-4 max-w-7xl mx-auto w-full bg-primary/5 rounded-3xl py-16 md:py-24">
        <div className="px-4 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Enseñanzas Destacadas</h2>
              <p className="text-muted-foreground font-light text-lg">Píldoras de sabiduría para el momento presente.</p>
            </div>
            <Button variant="link" asChild className="hidden text-base">
              <Link href="/ensenanzas">Ver toda la biblioteca <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "La Alquimia de la Quietud",
                excerpt: "Detente y abraza una quietud radical para confrontar tu propia reactividad. La verdadera alquimia espiritual transmuta lo negativo mediante la atención amorosa.",
                tag: "Meditación",
              },
              {
                title: "La Liberación por el Vacío",
                excerpt: "Comprende la insustancialidad de la existencia. Como un arcoíris, todo surge condicionado. Desmantela el miedo del ego que te mantiene atrapado.",
                tag: "Despertar",
              },
              {
                title: "El Renacer del Bodhicitta",
                excerpt: "Transita de una mente reactiva a una creativa. Una búsqueda de la iluminación que cesa de ser un esfuerzo narcisista y se vuelve compasivo.",
                tag: "Transformación",
              },
            ].map((post, i) => (
              <Card key={i} className="group cursor-pointer hover:shadow-md transition-all duration-300 border-none bg-white">
                <CardContent className="p-8">
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">{post.tag}</div>
                  <CardTitle className="mb-4 text-2xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <div className="font-medium text-primary flex items-center text-sm">
                    Leer más <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 md:hidden flex justify-center">
             <Button variant="outline" asChild>
              <Link href="/ensenanzas">Ver toda la biblioteca</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Frases / Citas */}
      <section className="px-4 py-16 md:py-24 text-center max-w-4xl mx-auto flex flex-col items-center">
        <div className="mb-8 relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary/10 shadow-xl shadow-primary/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/manjunatha.jpg" alt="Antonio Manjunatha" className="object-cover w-full h-full" />
        </div>
        <blockquote className="font-serif text-2xl md:text-3xl leading-tight text-foreground/90 font-light italic">
          "La alquimia espiritual es... quedarse quieto, contener la negatividad y darle sus gotitas de atención sabia con toda la aceptación... transformando lo negativo en positivo."
        </blockquote>
        <p className="mt-8 text-primary font-medium tracking-wide">― Antonio Manjunatha</p>
      </section>

      {/* Invitación Final */}
      <section className="px-4 max-w-5xl mx-auto w-full text-center">
        <div className="bg-stone-900 text-stone-50 rounded-3xl p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center gap-12 justify-between text-left">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:24px_24px]" />
          <div className="relative z-10 flex-1">
            <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-6">Sigue tu camino</h2>
            <p className="text-stone-300 font-light text-lg mb-8 leading-relaxed max-w-md">
              La búsqueda hacia tu interior no necesita pausa. Escanea el código para llevar al Asistente GPT contigo a cualquier parte y resolver dudas vitales desde tu bolsillo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-stone-900 hover:bg-stone-200">
                <a href="https://chatgpt.com/g/g-6991dd205c9c8191a5a64fd8065edb41-ensenanzas-de-manjunatha" target="_blank" rel="noopener noreferrer">
                  Conversar Ahora
                </a>
              </Button>
            </div>
          </div>
          <div className="relative z-10 shrink-0 bg-white/5 p-4 md:p-6 rounded-2xl backdrop-blur-md border border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-300">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/qr-asistente.png" alt="QR del Asistente" className="w-40 h-40 md:w-56 md:h-56 rounded-lg blend-multiply bg-white" />
          </div>
        </div>
      </section>
    </div>
  );
}
