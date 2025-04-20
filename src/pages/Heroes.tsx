
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { HeroCard } from "@/components/HeroCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Heroes = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageHeader 
          title="Герои ВОВ и СВО" 
          description="Истории подвигов и героизма в Великой Отечественной войне и специальной военной операции"
        />
        
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="vov" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="vov">Герои ВОВ</TabsTrigger>
                  <TabsTrigger value="svo">Герои СВО</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="vov" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <HeroCard
                    name="Георгий Константинович Жуков"
                    photo="/placeholder.svg"
                    period="1896-1974"
                    achievement="Маршал Советского Союза"
                    description="Командовал фронтами в ключевых сражениях Великой Отечественной войны. Принял капитуляцию нацистской Германии."
                  />
                  <HeroCard
                    name="Александр Матросов"
                    photo="/placeholder.svg"
                    period="1924-1943"
                    achievement="Герой Советского Союза"
                    description="Совершил подвиг — закрыл своим телом амбразуру немецкого дзота, чтобы обеспечить успешное наступление своего подразделения."
                  />
                  <HeroCard
                    name="Зоя Космодемьянская"
                    photo="/placeholder.svg"
                    period="1923-1941"
                    achievement="Герой Советского Союза"
                    description="Первая женщина, удостоенная звания Героя Советского Союза во время Великой Отечественной войны."
                  />
                </div>
                <div className="flex justify-center mt-8">
                  <a href="#" className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition">
                    Показать больше героев
                  </a>
                </div>
              </TabsContent>
              
              <TabsContent value="svo" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <HeroCard
                    name="Нурмагомед Гаджимагомедов"
                    photo="/placeholder.svg"
                    period="1985-2022"
                    achievement="Герой России"
                    description="Проявил мужество и героизм во время выполнения боевых задач. Посмертно удостоен звания Героя Российской Федерации."
                  />
                  <HeroCard
                    name="Владимир Жога"
                    photo="/placeholder.svg"
                    period="1993-2022"
                    achievement="Герой России"
                    description="Командир батальона, погиб при эвакуации мирных жителей. Посмертно удостоен звания Героя Российской Федерации."
                  />
                  <HeroCard
                    name="Алексей Панкратов"
                    photo="/placeholder.svg"
                    period="1990-2022"
                    achievement="Герой России"
                    description="Совершил подвиг при защите мирных жителей. Посмертно удостоен звания Героя Российской Федерации."
                  />
                </div>
                <div className="flex justify-center mt-8">
                  <a href="#" className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition">
                    Показать больше героев
                  </a>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 mb-8">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Материалы для изучения
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Документальные фильмы, книги и статьи о подвигах героев
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold">Книги о героях</h3>
                  <ul className="mt-4 space-y-2 text-left">
                    <li>• "Маршал Жуков. Воспоминания и размышления"</li>
                    <li>• "Повесть о Зое и Шуре" Л. Космодемьянской</li>
                    <li>• "Герои нашего времени: СВО"</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold">Документальные фильмы</h3>
                  <ul className="mt-4 space-y-2 text-left">
                    <li>• "Великая война" - документальный сериал</li>
                    <li>• "Битва за Севастополь"</li>
                    <li>• "Защитники Донбасса"</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold">Образовательные ресурсы</h3>
                  <ul className="mt-4 space-y-2 text-left">
                    <li>• Виртуальный музей Великой Отечественной войны</li>
                    <li>• Архив документов о героях СВО</li>
                    <li>• Методические материалы для учителей</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Heroes;
