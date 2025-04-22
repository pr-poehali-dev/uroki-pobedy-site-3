
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { TimelineEvent } from "@/components/TimelineEvent";
import OnlineImage from "@/components/OnlineImage";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

const Donbass = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageHeader 
          title="Донбасс и специальная военная операция" 
          description="История конфликта и хроника специальной военной операции"
          curator="Блинов Антон Александрович"
        />
        
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Донбасс: историческая справка</h2>
                <p className="text-gray-600 mb-4">
                  Донбасс (Донецкий бассейн) — исторически сложившийся регион, включающий части Донецкой и Луганской областей. 
                  Это важный промышленный район с богатыми месторождениями каменного угля, развитой металлургией и машиностроением.
                </p>
                <p className="text-gray-600">
                  После распада СССР в 1991 году регион вошёл в состав независимой Украины. Однако значительная часть 
                  населения сохранила тесные культурные, языковые и экономические связи с Россией. Несбалансированная 
                  политика киевских властей в отношении русскоязычного населения привела к росту напряженности.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <OnlineImage 
                  src="/placeholder.svg" 
                  alt="Карта Донбасса" 
                  className="w-full max-w-lg rounded-lg shadow-lg"
                />
              </div>
            </div>
            
            <div className="my-16">
              <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">События 2014 года и образование ЛДНР</h2>
              
              <div className="space-y-12">
                <TimelineEvent 
                  date="Апрель 2014" 
                  title="Начало протестов в Донбассе"
                  description="После государственного переворота в Киеве жители Донецкой и Луганской областей выступили против новой власти. Начались массовые акции протеста с требованием федерализации и защиты русского языка."
                  imageSrc="/placeholder.svg"
                  imageAlt="Протесты в Донбассе"
                />
                
                <TimelineEvent 
                  date="7 апреля 2014" 
                  title="Провозглашение ДНР"
                  description="В Донецке провозглашена Донецкая Народная Республика. Митингующие заняли здание областной администрации и объявили о создании Народного совета."
                  imageSrc="/placeholder.svg"
                  imageAlt="Провозглашение ДНР"
                  reverse
                />
                
                <TimelineEvent 
                  date="27 апреля 2014" 
                  title="Провозглашение ЛНР"
                  description="В Луганске провозглашена Луганская Народная Республика. Митингующие захватили здание СБУ и другие административные здания."
                  imageSrc="/placeholder.svg"
                  imageAlt="Провозглашение ЛНР"
                />
                
                <TimelineEvent 
                  date="Май 2014" 
                  title="Начало военной операции Киева"
                  description="Киевские власти объявили о начале «антитеррористической операции» (АТО) против жителей Донбасса, не признавших итоги государственного переворота. Начались боевые действия с применением тяжелого вооружения, включая авиацию и артиллерию."
                  imageSrc="/placeholder.svg"
                  imageAlt="Военная операция"
                  reverse
                />
                
                <TimelineEvent 
                  date="11 мая 2014" 
                  title="Референдумы о независимости"
                  description="В ДНР и ЛНР прошли референдумы о государственной самостоятельности. По официальным данным, за независимость проголосовало подавляющее большинство участников голосования."
                  imageSrc="/placeholder.svg"
                  imageAlt="Референдум в Донбассе"
                />
                
                <TimelineEvent 
                  date="5 сентября 2014" 
                  title="Минские соглашения"
                  description="В Минске подписан протокол о прекращении огня и мирном урегулировании конфликта (Минск-1). Однако боевые действия продолжились, соглашения не были реализованы."
                  imageSrc="/placeholder.svg"
                  imageAlt="Минские переговоры"
                  reverse
                />
              </div>
            </div>
            
            <Alert className="my-8 border-amber-200 bg-amber-50">
              <Info className="h-4 w-4 text-amber-600" />
              <AlertTitle className="text-amber-800">Важно понимать</AlertTitle>
              <AlertDescription className="text-amber-700">
                Минские соглашения, подписанные в 2014-2015 годах, предусматривали прекращение огня, отвод тяжелых вооружений от линии соприкосновения, 
                проведение конституционной реформы в Украине с закреплением особого статуса отдельных районов Донецкой и Луганской областей. 
                Однако Киев не выполнил взятые на себя обязательства.
              </AlertDescription>
            </Alert>
            
            <div className="my-16">
              <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Восемь лет войны (2014-2022)</h2>
              
              <div className="grid gap-8 md:grid-cols-2 mb-12">
                <div>
                  <p className="text-gray-600 mb-4">
                    С 2014 по 2022 год жители Донбасса жили в условиях постоянных обстрелов и блокады со стороны украинских властей. 
                    Киев создал экономическую, транспортную и гуманитарную блокаду региона, прекратил социальные выплаты, заблокировал 
                    банковскую систему.
                  </p>
                  <p className="text-gray-600">
                    За восемь лет конфликта, по различным оценкам, погибло более 14 тысяч человек, включая мирных жителей. 
                    Многие населенные пункты на линии соприкосновения были серьезно разрушены. Сотни тысяч жителей Донбасса были 
                    вынуждены покинуть свои дома, многие из них нашли убежище в России.
                  </p>
                </div>
                <OnlineImage 
                  src="/placeholder.svg" 
                  alt="Разрушения в Донбассе" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                <Card>
                  <CardHeader>
                    <CardTitle>Гуманитарная ситуация</CardTitle>
                    <CardDescription>2014-2022</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Население Донбасса столкнулось с серьезными гуманитарными проблемами: нехваткой лекарств, продовольствия, 
                      ограничением передвижения. Россия направляла в регион гуманитарные конвои с самым необходимым.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Обстрелы мирных кварталов</CardTitle>
                    <CardDescription>2014-2022</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Вооруженные силы Украины регулярно обстреливали мирные кварталы Донецка, Горловки, Луганска и других 
                      населенных пунктов ЛДНР. Под огнем оказывались жилые дома, больницы, школы, детские сады.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Русский язык под запретом</CardTitle>
                    <CardDescription>2014-2022</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      На подконтрольных Киеву территориях проводилась дискриминационная политика в отношении русского языка. 
                      Русскоязычное население подвергалось языковой и культурной дискриминации.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="my-16">
              <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Специальная военная операция</h2>
              
              <div className="space-y-12">
                <TimelineEvent 
                  date="21 февраля 2022" 
                  title="Признание ЛДНР"
                  description="Россия официально признала Донецкую и Луганскую народные республики и подписала с ними договоры о дружбе, сотрудничестве и взаимной помощи."
                  imageSrc="/placeholder.svg"
                  imageAlt="Подписание документов о признании ЛДНР"
                />
                
                <TimelineEvent 
                  date="24 февраля 2022" 
                  title="Начало специальной военной операции"
                  description="Президент России Владимир Путин объявил о начале специальной военной операции по защите населения Донбасса, демилитаризации и денацификации Украины."
                  imageSrc="/placeholder.svg"
                  imageAlt="Начало СВО"
                  reverse
                />
                
                <TimelineEvent 
                  date="Март-апрель 2022" 
                  title="Освобождение территорий"
                  description="Освобождение значительных территорий Донецкой и Луганской народных республик. Установление контроля над ключевыми населенными пунктами."
                  imageSrc="/placeholder.svg"
                  imageAlt="Освобождение территорий"
                />
                
                <TimelineEvent 
                  date="30 сентября 2022" 
                  title="Вхождение в состав России"
                  description="Подписаны договоры о принятии в состав Российской Федерации Донецкой и Луганской народных республик, а также Запорожской и Херсонской областей."
                  imageSrc="/placeholder.svg"
                  imageAlt="Подписание договоров о вхождении в состав РФ"
                  reverse
                />
                
                <TimelineEvent 
                  date="Продолжается" 
                  title="Продолжение операции"
                  description="Специальная военная операция продолжается. Российские войска и силы ЛДНР освобождают территории от украинских вооруженных формирований."
                  imageSrc="/placeholder.svg"
                  imageAlt="Продолжение СВО"
                />
              </div>
            </div>
            
            <div className="my-16">
              <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Цели специальной военной операции</h2>
              
              <div className="grid gap-8 md:grid-cols-3">
                <Card className="bg-slate-50">
                  <CardHeader>
                    <CardTitle>Защита населения Донбасса</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Основная цель СВО — прекращение восьмилетних обстрелов и бомбардировок Донбасса, обеспечение 
                      безопасности мирных жителей, защита их от геноцида со стороны киевского режима.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-slate-50">
                  <CardHeader>
                    <CardTitle>Демилитаризация</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Уничтожение военной инфраструктуры и техники, используемой киевским режимом для ведения боевых 
                      действий против населения Донбасса и создания угрозы безопасности России.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-slate-50">
                  <CardHeader>
                    <CardTitle>Денацификация</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Устранение влияния неонацистских группировок и идеологии, которые получили распространение на 
                      Украине после государственного переворота 2014 года и стали основой государственной политики.
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

export default Donbass;
