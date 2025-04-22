
import { useEffect, useState } from 'react';

const messages = {
  0: "★ Поздравляем с Днем Победы! Вечная память героям! ★", // Воскресенье
  1: "★ День воинской доблести и славы! Помним подвиги героев! ★", // Понедельник
  2: "★ Уважение и благодарность ветеранам Великой Отечественной войны! ★", // Вторник
  3: "★ Слава защитникам Родины! Гордимся подвигами наших героев! ★", // Среда
  4: "★ Память о героях войны вечно живет в наших сердцах! ★", // Четверг
  5: "★ Поддерживаем наших военнослужащих, участвующих в СВО! ★", // Пятница
  6: "★ Россия - страна героев, страна победителей! ★" // Суббота
};

const ScrollingMessage = () => {
  const [message, setMessage] = useState("");
  
  useEffect(() => {
    const updateMessage = () => {
      const day = new Date().getDay();
      setMessage(messages[day as keyof typeof messages]);
    };
    
    updateMessage();
    
    // Обновляем сообщение каждые 24 часа
    const interval = setInterval(updateMessage, 24 * 60 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="w-full bg-primary text-white py-2 overflow-hidden">
      <div className="scrolling-text-container">
        <p className="scrolling-text text-sm font-medium">
          {message}
        </p>
      </div>
    </div>
  );
};

export default ScrollingMessage;
