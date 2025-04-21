import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import ScrollingMessage from "@/components/ScrollingMessage";
import OnlineImage from "@/components/OnlineImage";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { BookOpen, Medal, Users } from "lucide-react";

interface HeroCardProps {
  name: string;
  description: string;
  achievements: string;
  imageSrc: string;
  dates?: string;
  operation?: string;
}

const HeroCard = ({ name, description, achievements, imageSrc, dates, operation }: HeroCardProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <OnlineImage 
          src={imageSrc} 
          alt={name} 
          className="w-full h-64 object-cover"
        />
        {operation && (
          <div className="absolute top-2 right-2 bg-black bg-opacity-75 text-white px-2 py-0.5 text-xs rounded">
            {operation}
          </div>
        )}
      </div>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        {dates && <CardDescription>{dates}</CardDescription>}
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-sm text-gray-600">{description}</p>
        <div className="pt-2">
          <p className="text-sm font-medium">Подвиг:</p>
          <p className="text-sm text-gray-600">{achievements}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">Подробнее</Button>
      </CardFooter>
    </Card>
  );
};

const Heroes = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <ScrollingMessage />
      <main className="flex-1">
        <PageHeader 
          title="Герои Великой Отечественной войны и СВО" 
          description="Люди, совершившие подвиги во имя Родины"
          curator="Блинов Антон Александрович"
        />
        
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="vov" className="w-full mb-12">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="vov" className="flex items-center gap-2">
                    <Medal size={16} />
                    <span>Герои ВОВ</span>
                  </TabsTrigger>
                  <TabsTrigger value="svo" className="flex items-center gap-2">
                    <Medal size={16} />
                    <span>Герои СВО</span>
                  </TabsTrigger>
                  <TabsTrigger value="units" className="flex items-center gap-2">
                    <Users size={16} />
                    <span>Героические части</span>
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="vov" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-2">Герои Великой Отечественной войны</h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Великая Отечественная война стала временем массового героизма советских людей. За подвиги в боях 
                    более 11 600 человек были удостоены звания Героя Советского Союза.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <HeroCard 
                    name="Александр Матросов"
                    dates="1924 - 1943"
                    description="Стрелок-автоматчик 2-го отдельного батальона 91-й отдельной Сибирской добровольческой бригады имени И.В. Сталина."
                    achievements="27 февраля 1943 года закрыл своим телом амбразуру немецкого дзота, обеспечив успешное выполнение боевой задачи подразделением."
                    imageSrc="/placeholder.svg"
                  />
                  
                  <HeroCard 
                    name="Зоя Космодемьянская"
                    dates="1923 - 1941"
                    description="Красноармеец диверсионно-разведывательной группы штаба Западного фронта."
                    achievements="При выполнении боевого задания в тылу врага была схвачена немцами. Несмотря на пытки, не выдала военной тайны и была казнена 29 ноября 1941 года."
                    imageSrc="/placeholder.svg"
                  />
                  
                  <HeroCard 
                    name="Николай Гастелло"
                    dates="1907 - 1941"
                    description="Командир эскадрильи 207-го дальнебомбардировочного авиационного полка."
                    achievements="26 июня 1941 года направил горящий самолёт на механизированную колонну врага, уничтожив значительное количество техники противника."
                    imageSrc="/placeholder.svg"
                  />
                  
                  <HeroCard 
                    name="Алексей Маресьев"
                    dates="1916 - 2001"
                    description="Лётчик-истребитель, после ампутации обеих ног вернулся в строй и продолжал летать."
                    achievements="Несмотря на ампутацию ног, вернулся в авиацию и сбил 7 самолётов противника, доведя свой личный счёт до 11 вражеских машин."
                    imageSrc="/placeholder.svg"
                  />
                  
                  <HeroCard 
                    name="Иван Кожедуб"
                    dates="1920 - 1991"
                    description="Лётчик-истребитель, трижды Герой Советского Союза."
                    achievements="Самый результативный лётчик-истребитель среди союзников во Второй мировой войне, сбивший 62 самолёта противника."
                    imageSrc="/placeholder.svg"
                  />
                  
                  <HeroCard 
                    name="Зина Портнова"
                    dates="1926 - 1944"
                    description="Член подпольной комсомольской организации «Юные мстители», разведчица партизанского отряда."
                    achievements="Участвовала в диверсиях против врага, распространяла листовки, вела разведку. Будучи схваченной, не выдала товарищей даже под пытками."
                    imageSrc="/placeholder.svg"
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="svo" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-2">Герои специальной военной операции</h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    В ходе специальной военной операции многие российские военнослужащие проявили мужество и героизм, 
                    за что были удостоены высоких государственных наград, включая звание Героя Российской Федерации.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <HeroCard 
                    name="Нурмагомед Гаджимагомедов"
                    description="Заместитель командира батальона. Гвардии старший лейтенант."
                    achievements="В бою с превосходящими силами противника проявил мужество и героизм. Будучи раненым, подорвал себя вместе с окружившими его украинскими националистами гранатой."
                    imageSrc="/placeholder.svg"
                    operation="СВО"
                  />
                  
                  <HeroCard 
                    name="Антон Старостин"
                    description="Заместитель командира артиллерийской батареи."
                    achievements="Организовал эвакуацию раненых сослуживцев из зоны обстрела. Прикрывая отход товарищей, принял бой с превосходящими силами противника."
                    imageSrc="/placeholder.svg"
                    operation="СВО"
                  />
                  
                  <HeroCard 
                    name="Денис Шишов"
                    description="Командир танковой роты."
                    achievements="При штурме укреплённого пункта обнаружил засаду и, несмотря на многочисленные повреждения техники, продолжал выполнять боевую задачу, уничтожив несколько огневых точек."
                    imageSrc="/placeholder.svg"
                    operation="СВО"
                  />
                  
                  <HeroCard 
                    name="Алексей Левкин"
                    description="Военный врач."
                    achievements="Под огнём противника оказал медицинскую помощь более 20 раненым бойцам. Организовал пункт медицинской помощи в зоне активных боевых действий."
                    imageSrc="/placeholder.svg"
                    operation="СВО"
                  />
                  
                  <HeroCard 
                    name="Дамир Ахметов"
                    description="Разведчик-снайпер."
                    achievements="В ходе разведывательной операции обнаружил крупную группировку противника, что позволило избежать потерь своего подразделения и нанести противнику упреждающий удар."
                    imageSrc="/placeholder.svg"
                    operation="СВО"
                  />
                  
                  <HeroCard 
                    name="Павел Кузнецов"
                    description="Командир стрелкового взвода."
                    achievements="Руководил подразделением при штурме городских кварталов. Лично уничтожил несколько огневых точек противника, обеспечив продвижение основных сил."
                    imageSrc="/placeholder.svg"
                    operation="СВО"
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="units" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-2">Героические воинские части</h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    За проявленные мужество и героизм многие воинские части были удостоены почётных наименований и государственных наград.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Панфиловская дивизия</CardTitle>
                      <CardDescription>316-я стрелковая дивизия</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <OnlineImage 
                        src="/placeholder.svg" 
                        alt="Панфиловская дивизия" 
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <p className="text-gray-600">
                        В ноябре 1941 года в боях под Москвой бойцы дивизии проявили массовый героизм. Особенно известен 
                        подвиг 28 панфиловцев, которые в бою у разъезда Дубосеково ценой своих жизней остановили продвижение немецких танков.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Севастопольская морская бригада</CardTitle>
                      <CardDescription>Черноморский флот</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <OnlineImage 
                        src="/placeholder.svg" 
                        alt="Севастопольская морская бригада" 
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <p className="text-gray-600">
                        Моряки-черноморцы героически обороняли Севастополь на протяжении 250 дней. Они отражали 
                        массированные атаки врага с суши, с моря и с воздуха, проявляя небывалую стойкость и мужество.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Гвардейские танковые корпуса</CardTitle>
                      <CardDescription>Танковые войска СССР</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <OnlineImage 
                        src="/placeholder.svg" 
                        alt="Танковый корпус" 
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <p className="text-gray-600">
                        Танковые соединения играли ключевую роль в крупнейших операциях Великой Отечественной войны. 
                        За мужество и героизм многие танковые корпуса и дивизии получили гвардейские знамёна и почётные наименования.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>15-я бригада специального назначения</CardTitle>
                      <CardDescription>Современная Россия</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <OnlineImage 
                        src="/placeholder.svg" 
                        alt="Бригада специального назначения" 
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <p className="text-gray-600">
                        Подразделения специального назначения выполняют наиболее сложные и ответственные задачи 
                        в ходе специальной военной операции, демонстрируя высочайший уровень подготовки и боевого мастерства.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="mt-20 space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">О подвигах и героях</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Сохранение памяти о подвигах защитников Отечества является важной частью патриотического воспитания молодежи.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-50 text-primary-900 mb-2">
                      <BookOpen size={24} />
                    </div>
                    <CardTitle>Книги о героях</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary"></div>
                        <span>"Молодая гвардия" А. Фадеев</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary"></div>
                        <span>"Повесть о настоящем человеке" Б. Полевой</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary"></div>
                        <span>"А зори здесь тихие..." Б. Васильев</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Список литературы</Button>
                  </CardFooter>
                </Card>
                
                <Card className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-50 text-primary-900 mb-2">
                      <Users size={24} />
                    </div>
                    <CardTitle>Музеи и мемориалы</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary"></div>
                        <span>Музей Победы на Поклонной горе</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary"></div>
                        <span>Мамаев курган в Волгограде</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary"></div>
                        <span>Пискарёвское мемориальное кладбище</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Виртуальные экскурсии</Button>
                  </CardFooter>
                </Card>
                
                <Card className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-50 text-primary-900 mb-2">
                      <Medal size={24} />
                    </div>
                    <CardTitle>Награды и знаки отличия</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary"></div>
                        <span>Звезда Героя Советского Союза</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary"></div>
                        <span>Звезда Героя Российской Федерации</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary"></div>
                        <span>Орден Славы трёх степеней</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Галерея наград</Button>
                  </CardFooter>
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

export default Heroes;
