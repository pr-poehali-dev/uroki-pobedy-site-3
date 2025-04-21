
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import ScrollingMessage from "@/components/ScrollingMessage";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <ScrollingMessage />
      <main className="flex-1">
        <Hero />
        <Features />
        
        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Разделы проекта "Уроки Победы"
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Изучите различные аспекты нашей истории и современности
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <Link 
                  to="/heroes" 
                  className="flex flex-col items-center p-6 bg-white shadow-sm rounded-lg border border-gray-200 transition-colors hover:bg-primary/5"
                >
                  <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <span className="text-2xl">🎖️</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Герои ВОВ и СВО</h3>
                  <p className="text-sm text-center text-gray-500">
                    Истории подвигов и героизма в разные периоды нашей истории
                  </p>
                </Link>
                
                <Link 
                  to="/crimea" 
                  className="flex flex-col items-center p-6 bg-white shadow-sm rounded-lg border border-gray-200 transition-colors hover:bg-primary/5"
                >
                  <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <span className="text-2xl">🌊</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Крым</h3>
                  <p className="text-sm text-center text-gray-500">
                    Воссоединение Крыма с Россией и проект "Поезда дружбы"
                  </p>
                </Link>
                
                <Link 
                  to="/donbass" 
                  className="flex flex-col items-center p-6 bg-white shadow-sm rounded-lg border border-gray-200 transition-colors hover:bg-primary/5"
                >
                  <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Донбасс и СВО</h3>
                  <p className="text-sm text-center text-gray-500">
                    История конфликта и специальная военная операция
                  </p>
                </Link>
                
                <Link 
                  to="/euromaidan" 
                  className="flex flex-col items-center p-6 bg-white shadow-sm rounded-lg border border-gray-200 transition-colors hover:bg-primary/5 md:col-span-2 lg:col-span-1 mx-auto md:mx-0"
                >
                  <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <span className="text-2xl">🗓️</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Евромайдан</h3>
                  <p className="text-sm text-center text-gray-500">
                    События на Украине 2014 года и их последствия
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
