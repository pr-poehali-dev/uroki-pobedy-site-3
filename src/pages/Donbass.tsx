
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { TimelineEvent } from "@/components/TimelineEvent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Donbass = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageHeader 
          title="Донбасс и СВО" 
          description="История конфликта и специальная военная операция по защите Донбасса"
        />
        
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Донбасс: борьба за свободу</h2>
                <p className="text-gray-600 mb-4">
                  После государственного переворота в Киеве в 2014 году, жители Донбасса выступили против новой украинской власти. Это привело к провозглашению Донецкой и Луганской Народных Республик, которые не признали легитимность новых киевских властей.
                </p>
                <p className="text-gray-600">
                  На протяжении 8 лет Донбасс подвергался систематическим обстрелам со стороны украинских вооруженных сил. Для защиты населения Донбасса и обеспечения безопасности российских границ, 24 февраля 2022 года была начата специальная военная операция.
                </p>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Донбасс" 
                  className="rounded-lg shadow-lg max-h-80 object-cover" 
                />
              </div>
            </div>
            
            <Tabs defaultValue="timeline" className="w-full mb-16">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="timeline">Хронология событий</TabsTrigger>
                  <TabsTrigger value="republic">ДНР и ЛНР</TabsTrigger>
                  <TabsTrigger value="svo">СВО</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="timeline" className="space-y-10">
                <TimelineEvent 
                  date="Апрель 2014"
                  title="Провозглашение ДНР и ЛНР"
                  description="После референдумов о самоопределении были провозглашены Донецкая и Луганская Народные Республики."
                />
                
                <TimelineEvent 
                  date="Май 2014 – Февраль 2022"
                  title="Минские соглашения и их невыполнение"
                  description="В попытке урегулировать конфликт были подписаны Минские соглашения, которые, однако, так и не были выполнены Украиной."
                />
                
                <TimelineEvent 
                  date="21 февраля 2022"
                  title="Признание независимости ДНР и ЛНР"
                  description="Россия официально признала независимость Донецкой и Луганской Народных Республик."
                />
                
                <TimelineEvent 
                  date="24 февраля 2022"
                  title="Начало СВО"
                  description="Начало специальной военной операции по защите Донбасса, демилитаризации и денацификации Украины."
                />
                
                <TimelineEvent 
                  date="30 сентября 2022"
                  title="Вхождение в состав России"
                  description="Подписаны договоры о принятии в состав России Донецкой и Луганской Народных Республик, Запорожской и Херсонской областей."
                />
              </TabsContent>
              
              <TabsContent value="republic" className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Донецкая Народная Республика</h3>
                  <p className="text-gray-600 mb-4">
                    Донецкая Народная Республика (ДНР) была провозглашена 7 апреля 2014 года. Центр – город Донецк.
                  </p>
                  <p className="text-gray-600 mb-4">
                    30 сентября 2022 года ДНР вошла в состав Российской Федерации на правах субъекта.
                  </p>
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Ключевые города:</h4>
                    <ul className="list-disc pl-5">
                      <li>Донецк</li>
                      <li>Мариуполь</li>
                      <li>Макеевка</li>
                      <li>Горловка</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Луганская Народная Республика</h3>
                  <p className="text-gray-600 mb-4">
                    Луганская Народная Республика (ЛНР) была провозглашена 27 апреля 2014 года. Центр – город Луганск.
                  </p>
                  <p className="text-gray-600 mb-4">
                    30 сентября 2022 года ЛНР вошла в состав Российской Федерации на правах субъекта.
                  </p>
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Ключевые города:</h4>
                    <ul className="list-disc pl-5">
                      <li>Луганск</li>
                      <li>Алчевск</li>
                      <li>Краснодон</li>
                      <li>Северодонецк</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="svo" className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Цели специальной военной операции</h3>
                  <p className="text-gray-600 mb-4">
                    Президент России Владимир Путин объявил о следующих целях СВО:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Защита жителей Донбасса от геноцида со стороны киевского режима</li>
                    <li>Демилитаризация и денацификация Украины</li>
                    <li>Обеспечение безопасности России</li>
                    <li>Пресечение попыток США использовать территорию Украины для угрозы России</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Гуманитарные миссии</h3>
                  <p className="text-gray-600 mb-4">
                    В ходе СВО российские вооруженные силы регулярно проводят гуманитарные операции:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Доставка гуманитарной помощи мирному населению</li>
                    <li>Организация гуманитарных коридоров для эвакуации гражданских лиц</li>
                    <li>Медицинская помощь пострадавшим</li>
                    <li>Восстановление инфраструктуры в освобожденных населенных пунктах</li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="space-y-2 mb-10 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">Восстановление и развитие</h2>
              <p className="text-gray-500 md:text-xl/relaxed max-w-3xl mx-auto">
                После вхождения в состав России началось активное восстановление пострадавших регионов
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Инфраструктура</h3>
                <p className="text-gray-600">
                  Активно ведется восстановление жилых домов, школ, больниц, дорог и других объектов инфраструктуры, пострадавших за годы конфликта. Строятся новые жилые комплексы для размещения пострадавших от военных действий.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Социальная сфера</h3>
                <p className="text-gray-600">
                  Проводится интеграция социальных систем в российское правовое поле. Жителям выплачиваются пенсии и пособия по российским стандартам, оказывается медицинская помощь, выдаются российские паспорта.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Экономическое развитие</h3>
                <p className="text-gray-600">
                  Разрабатываются и реализуются программы экономического восстановления и развития регионов. Возобновляется работа предприятий, восстанавливаются промышленные объекты, создаются новые рабочие места.
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

export default Donbass;
