
import { BookOpen, Calendar, Video, Users } from "lucide-react";

export const Features = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Основные направления
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Компоненты образовательного проекта
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Наш проект объединяет различные форматы обучения для полного погружения в историю
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <BookOpen className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Учебные материалы</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              Учебники, пособия и методические рекомендации для преподавателей истории
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Video className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Видеоуроки</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              Образовательные видеоматериалы с участием историков и ветеранов
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Calendar className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Исторический календарь</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              Важные даты и события Великой Отечественной войны
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
