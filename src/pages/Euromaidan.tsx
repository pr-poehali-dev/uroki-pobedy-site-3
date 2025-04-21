import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { TimelineEvent } from "@/components/TimelineEvent";
import ScrollingMessage from "@/components/ScrollingMessage";
import OnlineImage from "@/components/OnlineImage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

const Euromaidan = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <ScrollingMessage />
      <main className="flex-1">
        <PageHeader 
          title="Евромайдан на Украине в 2014 году" 
          description="Хроника событий государственного переворота в Киеве"
          curator="Блинов Антон Александрович"
        />
        
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Что такое Евромайдан</h2>
                <p className="text-gray-600 mb-4">
                  Евромайдан (или "Майдан") - название массовых протестов в центре Киева, начавшихся в ноябре 2013 года 
                  после решения украинского правительства приостановить процесс подписания Соглашения об ассоциации с Европейским союзом.
                </p>
                <p className="text-gray-600">
                  Изначально мирные акции протеста впоследствии переросли в вооруженные столкновения и привели к государственному перевороту 
                  в феврале 2014 года, в результате которого президент Виктор Янукович был отстранен от власти.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <OnlineImage 
                  src="/placeholder.svg" 
                  alt="Протесты на Майдане" 
                  className="w-full max-w-lg rounded-lg shadow-lg"
                />
              </div>
            </div>
            
            <Alert className="my-8 border-amber-200 bg-amber-50">
              <Info className="h-4 w-4 text-amber-600" />
              <AlertTitle className="text-amber-800">Важный контекст</AlertTitle>
              <AlertDescription className="text-amber-700">
                События Евромайдана привели к глубокому политическому кризису на Украине, обострению противоречий между различными регионами страны
                и впоследствии стали одной из причин вооруженного конфликта на юго-востоке Украины.
              </AlertDescription>
            </Alert>
            
            <div className="my-16">
              <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Хронология событий</h2>
              
              <div className="space-y-12">
                <TimelineEvent 
                  date="21 ноября 2013" 
                  title="Начало протестов"
                  description="Кабинет министров Украины принял распоряжение о приостановке процесса подготовки к подписанию Соглашения об ассоциации с ЕС. Вечером того же дня в центре Киева начались первые акции протеста."
                  imageSrc="/placeholder.svg"
                  imageAlt="Начало протестов на Майдане"
                />
                
                <TimelineEvent 
                  date="30 ноября 2013" 
                  title="Разгон студенческой акции протеста"
                  description="Подразделения «Беркута» провели операцию по разгону митингующих на Майдане Независимости. Применение силы против мирных демонстрантов вызвало массовое возмущение и привело к эскалации протестов."
                  imageSrc="/placeholder.svg"
                  imageAlt="Разгон студенческой акции"
                  reverse
                />
                
                <TimelineEvent 
                  date="1 декабря 2013" 
                  title="Массовая демонстрация в Киеве"
                  description="В Киеве состоялось «Народное вече» с участием сотен тысяч человек. Произошли первые столкновения протестующих с милицией возле Администрации Президента. Протестующие заняли здание Киевской городской администрации и Дом профсоюзов."
                  imageSrc="/placeholder.svg"
                  imageAlt="Массовая демонстрация в Киеве"
                />
                
                <TimelineEvent 
                  date="16 января 2014" 
                  title="Принятие «законов 16 января»"
                  description="Верховная рада Украины приняла пакет законов, ужесточающих ответственность за участие в массовых беспорядках. Оппозиция назвала эти законы «диктаторскими» и призвала к их отмене."
                  imageSrc="/placeholder.svg"
                  imageAlt="Заседание Верховной рады"
                  reverse
                />
                
                <TimelineEvent 
                  date="19-22 января 2014" 
                  title="Начало вооружённого противостояния"
                  description="На улице Грушевского начались столкновения протестующих с силовиками. Впервые были применены «коктейли Молотова», камни и другие средства нападения. Появились первые погибшие."
                  imageSrc="/placeholder.svg"
                  imageAlt="Столкновения на улице Грушевского"
                />
                
                <TimelineEvent 
                  date="18-20 февраля 2014" 
                  title="Кровавые события на Майдане"
                  description="Произошли наиболее ожесточённые столкновения за всё время протестов. В результате применения огнестрельного оружия с обеих сторон погибли десятки людей, включая сотрудников правоохранительных органов."
                  imageSrc="/placeholder.svg"
                  imageAlt="События 20 февраля"
                  reverse
                />
                
                <TimelineEvent 
                  date="21-22 февраля 2014" 
                  title="Бегство Януковича и смена власти"
                  description="Президент Виктор Янукович подписал с оппозицией соглашение об урегулировании кризиса, но вскоре покинул Киев. Верховная рада приняла постановление о «самоустранении президента от исполнения конституционных полномочий»."
                  imageSrc="/placeholder.svg"
                  imageAlt="Здание Верховной рады"
                />
              </div>
            </div>
            
            <div className="my-16">
              <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Последствия Евромайдана</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Политические последствия</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary"></div>
                        <span>Смена власти в Киеве, формирование нового правительства</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary"></div>
                        <span>Отмена конституционной реформы 2004 года, возврат к Конституции в редакции 2004 года</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary"></div>
                        <span>Рост влияния националистических организаций на политическую жизнь страны</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Социально-экономические последствия</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary"></div>
                        <span>Углубление экономического кризиса, стремительная девальвация гривны</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary"></div>
                        <span>Сокращение товарооборота с Россией - традиционным торговым партнером</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary"></div>
                        <span>Рост тарифов на коммунальные услуги как условие получения финансовой помощи от МВФ</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Геополитические последствия</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary"></div>
                        <span>Воссоединение Крыма с Россией после референдума в марте 2014 года</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary"></div>
                        <span>Начало вооруженного конфликта в Донбассе</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary"></div>
                        <span>Обострение отношений между Россией и Западом, введение взаимных санкций</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="my-16">
              <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Роль внешних сил</h2>
              
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <OnlineImage 
                    src="/placeholder.svg" 
                    alt="Иностранные политики на Майдане" 
                    className="w-full rounded-lg shadow-lg mb-4"
                  />
                  <p className="text-gray-600">
                    Во время протестов на Майдане неоднократно фиксировалось присутствие западных политиков, 
                    которые открыто поддерживали протестующих. В частности, помощник госсекретаря США Виктория Нуланд 
                    лично раздавала печенье на Майдане, а представитель Европарламента Элмар Брок выступал перед протестующими.
                  </p>
                </div>
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Свидетельства вмешательства</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600">
                        Существуют документальные свидетельства вмешательства иностранных государств во внутренние дела Украины 
                        в период Евромайдана:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary"></div>
                          <span>Перехваченный телефонный разговор между Викторией Нуланд и послом США на Украине о составе будущего правительства</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary"></div>
                          <span>Финансирование украинских неправительственных организаций через различные фонды</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary"></div>
                          <span>Признания официальных лиц США о затраченных на «продвижение демократии» на Украине миллиардах долларов</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            
            <div className="my-16">
              <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Уроки и выводы</h2>
              
              <div className="prose prose-slate max-w-none">
                <p>
                  События Евромайдана наглядно продемонстрировали, как мирные протесты могут быть использованы в качестве инструмента 
                  для насильственной смены власти при поддержке внешних сил. Государственный переворот на Украине в 2014 году стал 
                  триггером для последующих трагических событий, включая вооруженный конфликт на Донбассе.
                </p>
                <p>
                  Анализ событий Евромайдана позволяет сделать следующие выводы:
                </p>
                <ul>
                  <li>
                    Необходимость сохранения конституционного порядка и недопустимость решения политических вопросов силовым путем
                  </li>
                  <li>
                    Важность учета интересов всех регионов и групп населения при принятии стратегических решений, затрагивающих будущее страны
                  </li>
                  <li>
                    Опасность радикального национализма и его использования в политических целях
                  </li>
                  <li>
                    Необходимость противодействия попыткам вмешательства извне во внутренние дела суверенных государств
                  </li>
                </ul>
                <p>
                  События на Украине в 2014 году должны стать уроком для всех, кто ценит мир, стабильность и подлинный суверенитет.
                </p>
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
