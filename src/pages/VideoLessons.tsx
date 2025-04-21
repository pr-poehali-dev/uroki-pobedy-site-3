
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import ScrollingMessage from "@/components/ScrollingMessage";
import OnlineImage from "@/components/OnlineImage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle, Info, Bookmark, Share2 } from "lucide-react";
import { useOnlineStatus } from "@/hooks/use-online-status";

interface VideoCardProps {
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  date: string;
  url: string;
}

const VideoCard = ({ title, description, thumbnail, duration, date, url }: VideoCardProps) => {
  const isOnline = useOnlineStatus();
  
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <OnlineImage 
          src={thumbnail} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-0.5 text-xs rounded">
          {duration}
        </div>
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-1">{title}</CardTitle>
        <CardDescription className="text-xs">{date}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button 
          variant="default" 
          size="sm" 
          className="gap-2"
          disabled={!isOnline}
          onClick={() => window.open(url, '_blank')}
        >
          <PlayCircle size={16} />
          {isOnline ? 'Смотреть' : 'Недоступно оффлайн'}
        </Button>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <Info size={16} />
          </Button>
          <Button variant="ghost" size="icon">
            <Bookmark size={16} />
          </Button>
          <Button variant="ghost" size="icon">
            <Share2 size={16} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

const VideoLessons = () => {
  const isOnline = useOnlineStatus();
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <ScrollingMessage />
      <main className="flex-1">
        <PageHeader 
          title="Видеоуроки о Великой Отечественной войне" 
          description="Образовательные видеоматериалы для изучения истории Великой Отечественной войны"
        />
        
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            {!isOnline && (
              <div className="bg-amber-50 border border-amber-200 text-amber-800 px-4 py-3 rounded mb-8">
                <p className="flex items-center gap-2">
                  <Info size={20} />
                  <span>Вы находитесь в режиме оффлайн. Некоторые видеоматериалы могут быть недоступны.</span>
                </p>
              </div>
            )}
            
            <Tabs defaultValue="begin" className="w-full mb-16">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="begin">Начало войны</TabsTrigger>
                  <TabsTrigger value="turning">Коренной перелом</TabsTrigger>
                  <TabsTrigger value="victory">Путь к Победе</TabsTrigger>
                  <TabsTrigger value="memory">Память о войне</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="begin" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <VideoCard 
                    title="Начало Великой Отечественной войны"
                    description="Урок о вероломном нападении нацистской Германии на Советский Союз 22 июня 1941 года."
                    thumbnail="/placeholder.svg"
                    duration="45:20"
                    date="2023-05-09"
                    url="#"
                  />
                  <VideoCard 
                    title="Битва за Москву"
                    description="Первое крупное поражение немецко-фашистских войск в ходе Великой Отечественной войны."
                    thumbnail="/placeholder.svg"
                    duration="38:15"
                    date="2023-07-12"
                    url="#"
                  />
                  <VideoCard 
                    title="Блокада Ленинграда"
                    description="Военная блокада города Ленинграда немецкими и финскими войсками во время Великой Отечественной войны."
                    thumbnail="/placeholder.svg"
                    duration="52:30"
                    date="2023-09-08"
                    url="#"
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="turning" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <VideoCard 
                    title="Сталинградская битва"
                    description="Одно из крупнейших сражений Великой Отечественной войны, положившее начало коренному перелому."
                    thumbnail="/placeholder.svg"
                    duration="50:15"
                    date="2024-02-02"
                    url="#"
                  />
                  <VideoCard 
                    title="Курская битва"
                    description="Крупнейшее танковое сражение в истории и завершение коренного перелома в ходе войны."
                    thumbnail="/placeholder.svg"
                    duration="42:30"
                    date="2024-08-23"
                    url="#"
                  />
                  <VideoCard 
                    title="Прорыв блокады Ленинграда"
                    description="Операция «Искра» по прорыву блокады Ленинграда в январе 1943 года."
                    thumbnail="/placeholder.svg"
                    duration="35:18"
                    date="2024-01-27"
                    url="#"
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="victory" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <VideoCard 
                    title="Операция «Багратион»"
                    description="Одна из крупнейших военных операций за всю историю, освобождение Белоруссии."
                    thumbnail="/placeholder.svg"
                    duration="48:10"
                    date="2023-06-23"
                    url="#"
                  />
                  <VideoCard 
                    title="Берлинская операция"
                    description="Заключительная стратегическая операция Великой Отечественной войны."
                    thumbnail="/placeholder.svg"
                    duration="55:40"
                    date="2023-05-08"
                    url="#"
                  />
                  <VideoCard 
                    title="Капитуляция Германии"
                    description="Подписание Акта о безоговорочной капитуляции германских вооружённых сил."
                    thumbnail="/placeholder.svg"
                    duration="32:15"
                    date="2023-05-09"
                    url="#"
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="memory" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <VideoCard 
                    title="Города-герои"
                    description="Урок о городах-героях, удостоенных высшей степени отличия за массовый героизм и стойкость."
                    thumbnail="/placeholder.svg"
                    duration="40:25"
                    date="2023-10-15"
                    url="#"
                  />
                  <VideoCard 
                    title="Памятники Великой Отечественной войны"
                    description="Обзор главных мемориальных комплексов, посвященных Великой Отечественной войне."
                    thumbnail="/placeholder.svg"
                    duration="38:50"
                    date="2023-11-03"
                    url="#"
                  />
                  <VideoCard 
                    title="Уроки войны для современности"
                    description="Размышление о значении Великой Отечественной войны для современного мира."
                    thumbnail="/placeholder.svg"
                    duration="45:30"
                    date="2023-12-20"
                    url="#"
                  />
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="space-y-2 mb-10 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">Методические материалы</h2>
              <p className="text-gray-500 md:text-xl/relaxed max-w-3xl mx-auto">
                Дополнительные материалы для педагогов и учащихся
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card>
                <CardHeader>
                  <CardTitle>Планы уроков</CardTitle>
                  <CardDescription>Готовые планы занятий для педагогов</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary"></div>
                      <span>Урок мужества "Города-герои"</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary"></div>
                      <span>Урок "Ордена и медали ВОВ"</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary"></div>
                      <span>Классный час "Дети войны"</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Скачать материалы</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Презентации</CardTitle>
                  <CardDescription>Визуальные материалы для уроков</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary"></div>
                      <span>Презентация "Хронология ВОВ"</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary"></div>
                      <span>Презентация "Полководцы Победы"</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary"></div>
                      <span>Презентация "Оружие Победы"</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Скачать презентации</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Тесты и викторины</CardTitle>
                  <CardDescription>Интерактивные задания для проверки знаний</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary"></div>
                      <span>Тест "Даты и события ВОВ"</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary"></div>
                      <span>Викторина "Герои войны"</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary"></div>
                      <span>Кроссворд "Битвы и сражения"</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" disabled={!isOnline}>
                    {isOnline ? 'Пройти онлайн' : 'Требуется подключение'}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default VideoLessons;
