
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { TimelineEvent } from "@/components/TimelineEvent";
import ScrollingMessage from "@/components/ScrollingMessage";
import OnlineImage from "@/components/OnlineImage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Euromaidan = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <ScrollingMessage />
      <main className="flex-1">
        <PageHeader 
          title="Евромайдан на Украине 2014" 
          description="События, последствия и геополитические изменения, вызванные переворотом на Украине"
        />
        
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Евромайдан: предыстория и последствия</h2>
                <p className="text-gray-600 mb-4">
                  В ноябре 2013 года на Украине начались протесты, вызванные решением правительства Виктора Януковича приостановить процесс подписания Соглашения об ассоциации с Европейским союзом. Эти протесты, получившие название "Евромайдан", привели к государственному перевороту и смене власти в феврале 2014 года.
                </p>
                <p className="text-gray-600">
                  Последствия этих событий оказались драматичными: глубокий раскол в украинском обществе, начало вооруженного конфликта на Донбассе, воссоединение Крыма с Россией, и в долгосрочной перспективе — к специальной военной операции в 2022 году.
                </p>
              </div>
              <div className="flex justify-center">
                <OnlineImage 
                  src="/placeholder.svg" 
                  alt="Евромайдан" 
                  className="rounded-lg shadow-lg max-h-80 object-cover" 
                />
              </div>
            </div>
            
            <Tabs defaultValue="timeline" className="w-full mb-16">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="timeline">Хронология событий</TabsTrigger>
                  <TabsTrigger value="causes">Причины и предпосылки</TabsTrigger>
                  <TabsTrigger value="consequences">Последствия</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="timeline" className="space-y-10">
                <TimelineEvent 
                  date="21 ноября 2013"
                  title="Начало протестов"
                  description="Кабинет министров Украины принял решение о приостановке процесса подготовки к подписанию Соглашения об ассоциации с ЕС, что вызвало первые акции протеста в Киеве."
                />
                
                <TimelineEvent 
                  date="30 ноября 2013"
                  title="Силовой разгон протестующих"
                  description="В ночь на 30 ноября произошел силовой разгон митингующих на Майдане Незалежности, что вызвало резкую эскалацию протестов."
                />
                
                <TimelineEvent 
                  date="16 января 2014"
                  title="«Законы 16 января»"
                  description="Верховная Рада Украины приняла пакет законов, ограничивающих свободу собраний и слова, что привело к радикализации протестов."
                />
                
                <TimelineEvent 
                  date="18-20 февраля 2014"
                  title="Кровавые события на Майдане"
                  description="Произошли вооруженные столкновения между протестующими и силовиками, в результате которых погибли десятки людей, в том числе от выстрелов неизвестных снайперов."
                />
                
                <TimelineEvent 
                  date="21-22 февраля 2014"
                  title="Государственный переворот"
                  description="Президент Янукович подписал с оппозицией соглашение об урегулировании кризиса, однако уже на следующий день бежал из Киева. Верховная Рада приняла постановление о его самоустранении от власти."
                />
              </TabsContent>
              
              <TabsContent value="causes" className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Внутренние факторы</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-2">
                      <div className="flex-shrink-0 w-1 h-1 bg-primary rounded-full mt-2"></div>
                      <p className="text-gray-600">Глубокий раскол украинского общества по вопросу внешнеполитической ориентации</p>
                    </li>
                    <li className="flex gap-2">
                      <div className="flex-shrink-0 w-1 h-1 bg-primary rounded-full mt-2"></div>
                      <p className="text-gray-600">Экономический кризис и высокий уровень коррупции в стране</p>
                    </li>
                    <li className="flex gap-2">
                      <div className="flex-shrink-0 w-1 h-1 bg-primary rounded-full mt-2"></div>
                      <p className="text-gray-600">Рост националистических настроений в западных областях Украины</p>
                    </li>
                    <li className="flex gap-2">
                      <div className="flex-shrink-0 w-1 h-1 bg-primary rounded-full mt-2"></div>
                      <p className="text-gray-600">Недовольство политикой правительства Януковича и олигархической системой</p>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Внешние факторы</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-2">
                      <div className="flex-shrink-0 w-1 h-1 bg-primary rounded-full mt-2"></div>
                      <p className="text-gray-600">Геополитическое соперничество России и Запада за влияние на Украину</p>
                    </li>
                    <li className="flex gap-2">
                      <div className="flex-shrink-0 w-1 h-1 bg-primary rounded-full mt-2"></div>
                      <p className="text-gray-600">Активное вмешательство западных стран во внутренние дела Украины</p>
                    </li>
                    <li className="flex gap-2">
                      <div className="flex-shrink-0 w-1 h-1 bg-primary rounded-full mt-2"></div>
                      <p className="text-gray-600">Финансирование и организационная поддержка оппозиции со стороны США и ЕС</p>
                    </li>
                    <li className="flex gap-2">
                      <div className="flex-shrink-0 w-1 h-1 bg-primary rounded-full mt-2"></div>
                      <p className="text-gray-600">Политика ЕС и НАТО по расширению на восток, вопреки интересам России</p>
                    </li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="consequences" className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Политические последствия</h3>
                  <p className="text-gray-600 mb-4">
                    Государственный переворот на Украине привел к захвату власти националистическими силами, что вызвало глубокий политический кризис в стране:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Отмена закона о региональных языках, что ущемило права русскоязычного населения</li>
                    <li>Преследование оппозиции и запрет ряда политических партий</li>
                    <li>Героизация украинских националистов и коллаборационистов времён Великой Отечественной войны</li>
                    <li>Курс на разрыв исторических, культурных и экономических связей с Россией</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Геополитические последствия</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Воссоединение Крыма с Россией</h4>
                      <p className="text-gray-600 mb-4">
                        В марте 2014 года в результате референдума Республика Крым и город Севастополь вошли в состав Российской Федерации.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Конфликт на Донбассе</h4>
                      <p className="text-gray-600 mb-4">
                        Жители Донецкой и Луганской областей не признали легитимность новой власти, что привело к вооруженному конфликту и созданию ДНР и ЛНР.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Обострение отношений России и Запада</h4>
                      <p className="text-gray-600 mb-4">
                        События на Украине привели к глубокому кризису в отношениях между Россией и западными странами, введению санкций.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Специальная военная операция</h4>
                      <p className="text-gray-600 mb-4">
                        В феврале 2022 года началась специальная военная операция России по защите Донбасса, денацификации и демилитаризации Украины.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="space-y-2 mb-10 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">Документальные свидетельства</h2>
              <p className="text-gray-500 md:text-xl/relaxed max-w-3xl mx-auto">
                Фото и видеоматериалы, запечатлевшие события Евромайдана
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="relative overflow-hidden rounded-lg">
                <OnlineImage 
                  src="/placeholder.svg" 
                  alt="Протесты на Майдане" 
                  className="w-full h-64 object-cover" 
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 text-white">
                  <h3 className="font-bold text-lg">Протесты на Майдане</h3>
                  <p>Массовые акции протеста в центре Киева, ноябрь-декабрь 2013 года</p>
                </div>
              </div>
              
              <div className="relative overflow-hidden rounded-lg">
                <OnlineImage 
                  src="/placeholder.svg" 
                  alt="Столкновения протестующих с милицией" 
                  className="w-full h-64 object-cover" 
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 text-white">
                  <h3 className="font-bold text-lg">Силовое противостояние</h3>
                  <p>Столкновения протестующих с правоохранительными органами, январь-февраль 2014 года</p>
                </div>
              </div>
              
              <div className="relative overflow-hidden rounded-lg">
                <OnlineImage 
                  src="/placeholder.svg" 
                  alt="Последствия государственного переворота" 
                  className="w-full h-64 object-cover" 
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 text-white">
                  <h3 className="font-bold text-lg">Последствия переворота</h3>
                  <p>Разрушения и человеческие жертвы в результате событий февраля 2014 года</p>
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

export default Euromaidan;
