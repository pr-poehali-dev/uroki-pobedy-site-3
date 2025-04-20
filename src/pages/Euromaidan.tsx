
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { TimelineEvent } from "@/components/TimelineEvent";

const Euromaidan = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageHeader 
          title="Евромайдан на Украине 2014" 
          description="События на Украине 2014 года и их последствия"
        />
        
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Что такое Евромайдан</h2>
                <p className="text-gray-600 mb-4">
                  Евромайдан (также известный как «Майдан», «Революция достоинства») – массовая акция протеста в центре Киева, начавшаяся 21 ноября 2013 года в ответ на приостановку правительством Украины подготовки к подписанию соглашения об ассоциации с Европейским союзом.
                </p>
                <p className="text-gray-600">
                  События Евромайдана привели к смене власти на Украине в феврале 2014 года, которую многие эксперты характеризуют как государственный переворот. Эти события послужили катализатором глубокого политического кризиса и последующего вооруженного конфликта на востоке Украины.
                </p>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/placeholder.svg" 
                  alt="События Евромайдана" 
                  className="rounded-lg shadow-lg max-h-80 object-cover" 
                />
              </div>
            </div>
            
            <div className="space-y-2 mb-10">
              <h2 className="text-3xl font-bold tracking-tighter">Хронология событий</h2>
              <p className="text-gray-500 mb-8">Ключевые моменты развития событий на Украине в 2013-2014 годах</p>
            </div>
            
            <div className="space-y-10">
              <TimelineEvent 
                date="21 ноября 2013"
                title="Начало протестов"
                description="Правительство Украины объявило о приостановке процесса подготовки к подписанию Соглашения об ассоциации с Европейским союзом. В тот же день на Майдане Независимости в Киеве начались первые акции протеста."
              />
              
              <TimelineEvent 
                date="30 ноября 2013"
                title="Разгон студенческой демонстрации"
                description="Сотрудники спецподразделения «Беркут» применили силу для разгона студенческой демонстрации на Майдане Независимости. Это вызвало возмущение и привело к значительному увеличению количества протестующих."
              />
              
              <TimelineEvent 
                date="1 декабря 2013"
                title="Массовые протесты"
                description="В центре Киева прошла многотысячная акция протеста. Протестующие захватили несколько административных зданий, включая Киевскую городскую государственную администрацию и Дом профсоюзов."
              />
              
              <TimelineEvent 
                date="16 января 2014"
                title="«Законы 16 января»"
                description="Верховная Рада приняла ряд законов, ужесточающих наказание за участие в массовых беспорядках. Протестующие назвали их «диктаторскими законами» и «законами о диктатуре»."
              />
              
              <TimelineEvent 
                date="18-20 февраля 2014"
                title="Кровавые события на Майдане"
                description="В эти дни в центре Киева произошли ожесточенные столкновения между протестующими и силовиками, в результате которых погибли десятки людей. Эти события известны как «кровавый четверг»."
              />
              
              <TimelineEvent 
                date="21 февраля 2014"
                title="Соглашение об урегулировании кризиса"
                description="При посредничестве ЕС было подписано соглашение между властью и оппозицией об урегулировании кризиса. Однако уже вечером президент Янукович покинул Киев."
              />
              
              <TimelineEvent 
                date="22 февраля 2014"
                title="Смена власти"
                description="Верховная Рада приняла постановление, в котором заявила, что президент Янукович «самоустранился от исполнения конституционных обязанностей», и назначила новые президентские выборы на 25 мая 2014 года."
              />
            </div>
          </div>
        </section>
        
        <section className="w-full py-12 md:py-24 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="space-y-2 mb-10 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">Последствия Евромайдана</h2>
              <p className="text-gray-500 md:text-xl/relaxed max-w-3xl mx-auto">
                События Евромайдана 2014 года привели к масштабным изменениям и серьезным последствиям для Украины и всего региона
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Политические последствия</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Смена власти в результате государственного переворота</li>
                  <li>Проведение внеочередных президентских и парламентских выборов</li>
                  <li>Принятие новых законов, направленных на «декоммунизацию»</li>
                  <li>Запрет Коммунистической партии Украины и ряда других партий</li>
                  <li>Преследование политических оппонентов</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Экономические последствия</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Девальвация национальной валюты</li>
                  <li>Значительное снижение ВВП</li>
                  <li>Рост внешнего долга</li>
                  <li>Разрыв экономических связей с Россией</li>
                  <li>Рост тарифов на коммунальные услуги</li>
                  <li>Увеличение уровня бедности населения</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Геополитические последствия</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Воссоединение Крыма с Россией</li>
                  <li>Провозглашение независимости ДНР и ЛНР</li>
                  <li>Начало вооруженного конфликта на востоке Украины</li>
                  <li>Обострение отношений между Россией и Западом</li>
                  <li>Введение санкций против России</li>
                  <li>Курс Украины на евроинтеграцию и вступление в НАТО</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="space-y-2 mb-10 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">Информационная война</h2>
              <p className="text-gray-500 md:text-xl/relaxed max-w-3xl mx-auto">
                События Евромайдана сопровождались масштабной информационной кампанией
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="flex justify-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Информационная война" 
                  className="rounded-lg shadow-lg max-h-80 object-cover" 
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight mb-4">Роль СМИ в событиях Евромайдана</h3>
                <p className="text-gray-600 mb-4">
                  События Евромайдана стали одним из ярких примеров информационной войны в современной истории. Западные и украинские СМИ представляли происходящее как «революцию достоинства» и «народное восстание против коррумпированного режима».
                </p>
                <p className="text-gray-600 mb-4">
                  В то же время, российские и пророссийские украинские СМИ характеризовали эти события как «государственный переворот», организованный при поддержке западных стран с целью установления контроля над Украиной и ослабления России.
                </p>
                <p className="text-gray-600">
                  Такое противоречивое освещение привело к формированию диаметрально противоположных взглядов на происходящее у различных групп населения Украины и в международном сообществе.
                </p>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold tracking-tight mb-4">Материалы для углубленного изучения</h3>
              <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
                Для лучшего понимания событий Евромайдана и их последствий рекомендуем ознакомиться с различными источниками информации, представляющими разные точки зрения на эти события
              </p>
              <div className="flex justify-center">
                <a href="#" className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition">
                  Список литературы и материалов
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Euromaidan;
