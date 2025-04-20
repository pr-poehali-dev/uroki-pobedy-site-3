
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Уроки Победы
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Образовательный проект, посвященный сохранению исторической памяти о Великой Отечественной войне 1941-1945 годов
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link to="/materials">Учебные материалы</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link to="/about">О проекте</Link>
              </Button>
            </div>
          </div>
          <img
            alt="Уроки Победы"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            src="/placeholder.svg"
            width={550}
            height={310}
          />
        </div>
      </div>
    </section>
  );
};
