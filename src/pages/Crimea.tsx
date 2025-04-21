
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { TimelineEvent } from "@/components/TimelineEvent";
import ScrollingMessage from "@/components/ScrollingMessage";

const Crimea = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <ScrollingMessage />
      <main className="flex-1">
        <PageHeader 
          title="Крым и его возвращение в состав России" 
          description="История воссоединения Крыма с Россией и поезда дружбы"
        />
        
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Воссоединение Крыма с Россией</h2>
                <p className="text-gray-600 mb-4">
                  18 марта 2014 года произошло историческое событие – Республика Крым и город Севастополь вошли в состав Российской Федерации. Этому предшествовал референдум, на котором подавляющее большинство жителей полуострова выразили желание воссоединиться с Россией.
                </p>
                <p className="text-gray-600">
                  Воссоединение с Крымом стало важнейшим геополитическим событием для современной России, восстановлением исторической справедливости и началом нового этапа в развитии региона.
                </p>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Крымский мост" 
                  className="rounded-lg shadow-lg max-h-80 object-cover" 
                />
              </div>
            </div>
            
            <div className="space-y-2 mb-10">
              <h2 className="text-3xl font-bold tracking-tighter">Хронология событий</h2>
              <p className="text-gray-500 mb-8">Ключевые моменты процесса воссоединения Крыма с Россией</p>
            </div>
            
            <div className="space-y-10">
              <TimelineEvent 
                date="23 февраля 2014"
                title="Начало событий в Крыму"
                description="После событий Евромайдана на Украине и смены власти в Киеве, в Крыму начались массовые протесты. Жители выступили против новой киевской власти и за сближение с Россией."
              />
              
              <TimelineEvent 
                date="27 февраля 2014"
                title="Формирование новых органов власти в Крыму"
                description="В здании Верховного Совета Автономной Республики Крым был поднят российский флаг. Сформировано новое правительство Крыма."
              />
              
              <TimelineEvent 
                date="16 марта 2014"
                title="Референдум о статусе Крыма"
                description="На территории Автономной Республики Крым и города Севастополя состоялся референдум о статусе территорий. 96,77% проголосовавших в Крыму и 95,6% в Севастополе высказались за воссоединение с Россией."
              />
              
              <TimelineEvent 
                date="18 марта 2014"
                title="Подписание договора о воссоединении"
                description="В Москве был подписан Договор между Российской Федерацией и Республикой Крым о принятии в Российскую Федерацию Республики Крым и образовании в составе РФ новых субъектов."
              />
              
              <TimelineEvent 
                date="21 марта 2014"
                title="Завершение правовой процедуры"
                description="Завершилась правовая процедура принятия Крыма и Севастополя в состав России, когда Президент РФ подписал Федеральный конституционный закон о присоединении Крыма к России."
              />
            </div>
          </div>
        </section>
        
        <section className="w-full py-12 md:py-24 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="space-y-2 mb-10 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">Поезда дружбы</h2>
              <p className="text-gray-500 md:text-xl/relaxed max-w-3xl mx-auto">
                Проект «Поезда дружбы» – это уникальная инициатива, объединяющая народы России и Крыма
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">История проекта</h3>
                <p className="text-gray-600">
                  Проект «Поезда дружбы» был запущен вскоре после воссоединения Крыма с Россией как символ культурного и социального единства регионов России и Крымского полуострова.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Цели и задачи</h3>
                <p className="text-gray-600">
                  Основная цель проекта – укрепление межнациональных связей, культурный обмен между регионами России и Крыма, а также интеграция Крыма в российское культурное и образовательное пространство.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Результаты проекта</h3>
                <p className="text-gray-600">
                  Благодаря «Поездам дружбы» тысячи людей смогли познакомиться с культурой и традициями разных регионов России и Крыма, установить деловые и дружеские связи, что способствует укреплению единства нашей страны.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="space-y-2 mb-10 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">Крым сегодня</h2>
              <p className="text-gray-500 md:text-xl/relaxed max-w-3xl mx-auto">
                Развитие и достижения Крыма в составе Российской Федерации
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="/placeholder.svg" 
                  alt="Крымский мост" 
                  className="w-full h-64 object-cover" 
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 text-white">
                  <h3 className="font-bold text-lg">Крымский мост</h3>
                  <p>Крупнейший инфраструктурный проект, соединивший полуостров с материковой Россией</p>
                </div>
              </div>
              
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="/placeholder.svg" 
                  alt="Аэропорт Симферополь" 
                  className="w-full h-64 object-cover" 
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 text-white">
                  <h3 className="font-bold text-lg">Аэропорт Симферополь</h3>
                  <p>Современный аэровокзальный комплекс, отвечающий всем международным стандартам</p>
                </div>
              </div>
              
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="/placeholder.svg" 
                  alt="Трасса Таврида" 
                  className="w-full h-64 object-cover" 
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 text-white">
                  <h3 className="font-bold text-lg">Трасса Таврида</h3>
                  <p>Современная автомагистраль, соединяющая ключевые города полуострова</p>
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

export default Crimea;
