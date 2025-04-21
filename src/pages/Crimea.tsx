
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { TimelineEvent } from "@/components/TimelineEvent";
import ScrollingMessage from "@/components/ScrollingMessage";
import OnlineImage from "@/components/OnlineImage";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

const Crimea = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <ScrollingMessage />
      <main className="flex-1">
        <PageHeader 
          title="Крым и его возвращение в состав России" 
          description="История воссоединения Крыма с Россией и события, связанные с поездами дружбы"
          curator="Блинов Антон Александрович"
        />
        
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Историческая справка</h2>
                <p className="text-gray-600 mb-4">
                  Крым имеет богатую и сложную историю, тесно связанную с Россией. 
                  Полуостров вошел в состав Российской империи в 1783 году при императрице Екатерине II. 
                  В 1954 году произошла передача Крымской области из состава РСФСР в состав УССР, 
                  что впоследствии привело к тому, что после распада СССР в 1991 году Крым оказался в составе независимой Украины.
                </p>
                <p className="text-gray-600">
                  В феврале-марте 2014 года, на фоне политического кризиса на Украине, в Крыму произошли события, 
                  которые привели к проведению референдума и последующему воссоединению полуострова с Российской Федерацией.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <OnlineImage 
                  src="/placeholder.svg" 
                  alt="Карта Крымского полуострова" 
                  className="w-full max-w-lg rounded-lg shadow-lg"
                />
              </div>
            </div>
            
            <div className="my-16">
              <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Хронология событий 2014 года</h2>
              
              <div className="space-y-12">
                <TimelineEvent 
                  date="23 февраля 2014" 
                  title="Начало событий в Крыму"
                  description="В Севастополе проходит многотысячный митинг, на котором Алексей Чалый избирается «народным мэром». Начинается формирование отрядов самообороны Крыма."
                  imageSrc="/placeholder.svg"
                  imageAlt="Митинг в Севастополе"
                />
                
                <TimelineEvent 
                  date="26-27 февраля 2014" 
                  title="Блокирование административных зданий"
                  description="В Симферополе блокируются и берутся под контроль ключевые административные здания, включая здание Верховного Совета Крыма."
                  imageSrc="/placeholder.svg"
                  imageAlt="Блокирование административных зданий в Симферополе"
                  reverse
                />
                
                <TimelineEvent 
                  date="1 марта 2014" 
                  title="Обращение к России"
                  description="Председатель Совета министров Крыма Сергей Аксёнов обращается к президенту России с просьбой об оказании содействия в обеспечении мира и спокойствия на территории Крыма."
                  imageSrc="/placeholder.svg"
                  imageAlt="Сергей Аксёнов выступает с обращением"
                />
                
                <TimelineEvent 
                  date="16 марта 2014" 
                  title="Референдум о статусе Крыма"
                  description="Проводится референдум о статусе Крыма. По официальным данным, за воссоединение с Россией проголосовало 96,77% участников голосования при явке 83,1%."
                  imageSrc="/placeholder.svg"
                  imageAlt="Голосование на референдуме в Крыму"
                  reverse
                />
                
                <TimelineEvent 
                  date="18 марта 2014" 
                  title="Подписание договора о принятии в РФ"
                  description="В Кремле подписан договор о принятии Республики Крым и города Севастополя в состав Российской Федерации. Президент России Владимир Путин выступает с обращением к Федеральному Собранию."
                  imageSrc="/placeholder.svg"
                  imageAlt="Подписание договора о принятии Крыма в состав РФ"
                />
                
                <TimelineEvent 
                  date="21 марта 2014" 
                  title="Ратификация договора"
                  description="Завершается правовое оформление вхождения Крыма в состав России: Совет Федерации ратифицирует договор и одобряет закон об образовании новых субъектов РФ."
                  imageSrc="/placeholder.svg"
                  imageAlt="Заседание Совета Федерации"
                  reverse
                />
              </div>
            </div>
            
            <Alert className="my-8 border-amber-200 bg-amber-50">
              <Info className="h-4 w-4 text-amber-600" />
              <AlertTitle className="text-amber-800">Важно знать</AlertTitle>
              <AlertDescription className="text-amber-700">
                Воссоединение Крыма с Россией произошло в соответствии с итогами референдума, на котором абсолютное большинство жителей полуострова высказалось за вхождение в состав Российской Федерации.
              </AlertDescription>
            </Alert>
            
            <div className="my-16">
              <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Поезда дружбы</h2>
              
              <div className="grid gap-8 md:grid-cols-2 mb-12">
                <div>
                  <p className="text-gray-600 mb-4">
                    "Поезда дружбы" - это одно из событий в Крыму в феврале 2014 года, когда радикально настроенные активисты с территории Украины 
                    планировали прибыть на полуостров для проведения акций. Эти группы сформировались после событий на Майдане.
                  </p>
                  <p className="text-gray-600">
                    Жители Крыма, обеспокоенные сообщениями о прибытии "поездов дружбы", организовали отряды самообороны для защиты своих населенных пунктов. 
                    Это стало одним из факторов, способствовавших консолидации крымчан в сложный исторический период.
                  </p>
                </div>
                <OnlineImage 
                  src="/placeholder.svg" 
                  alt="Отряды самообороны Крыма" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                <Card>
                  <CardHeader>
                    <CardTitle>Формирование самообороны</CardTitle>
                    <CardDescription>Февраль 2014</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      В ответ на угрозу прибытия "поездов дружбы" во многих населенных пунктах Крыма стихийно формируются 
                      отряды самообороны, которые взяли на себя функции поддержания порядка.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Блокпосты на дорогах</CardTitle>
                    <CardDescription>Февраль-март 2014</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      На основных транспортных маршрутах, ведущих в Крым, были установлены блокпосты для контроля въезжающего транспорта 
                      и предотвращения проникновения радикально настроенных групп.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Обеспечение безопасности</CardTitle>
                    <CardDescription>Март 2014</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Благодаря принятым мерам безопасности удалось избежать массовых столкновений и обеспечить мирное проведение 
                      референдума о статусе Крыма 16 марта 2014 года.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="my-16">
              <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Значение воссоединения</h2>
              
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-slate-50">
                  <CardHeader>
                    <CardTitle>Историческая справедливость</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Воссоединение Крыма с Россией рассматривается как восстановление исторической справедливости, 
                      учитывая многовековую связь полуострова с Россией и преобладание русского населения.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-slate-50">
                  <CardHeader>
                    <CardTitle>Защита прав населения</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Возвращение в состав России обеспечило защиту прав русскоязычного населения Крыма, 
                      сохранение культурных и исторических ценностей полуострова.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-slate-50">
                  <CardHeader>
                    <CardTitle>Развитие региона</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      После воссоединения началась реализация масштабных инфраструктурных проектов: строительство Крымского моста, 
                      трассы "Таврида", модернизация аэропорта Симферополя и многих других объектов.
                    </p>
                  </CardContent>
                </Card>
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
