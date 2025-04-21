
import { useEffect, useState } from 'react';

interface ScrollingMessageProps {
  className?: string;
}

export const ScrollingMessage = ({ className }: ScrollingMessageProps) => {
  const [message, setMessage] = useState<string>('');
  
  useEffect(() => {
    // Массив поздравлений на каждый день недели
    const dailyMessages = [
      "С Днем Победы! Помним и гордимся подвигом наших героев!", // Воскресенье
      "Великие подвиги не забываются! Честь и слава героям!", // Понедельник
      "Помним и чтим: история нашей Родины – история мужества и стойкости!", // Вторник
      "Урок памяти и благодарности: гордимся нашей историей!", // Среда
      "Страницы истории: неразрывная связь времен и поколений!", // Четверг
      "Память о героях объединяет наши сердца!", // Пятница
      "Наши предки – наша гордость! Помним о подвигах и чтим традиции!" // Суббота
    ];
    
    // Определяем текущий день недели (0 - воскресенье, 6 - суббота)
    const today = new Date().getDay();
    
    // Устанавливаем сообщение соответствующее дню недели
    setMessage(dailyMessages[today]);
    
    // Обновляем сообщение каждые 24 часа
    const intervalId = setInterval(() => {
      const newDay = new Date().getDay();
      setMessage(dailyMessages[newDay]);
    }, 86400000); // 24 часа в миллисекундах
    
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div className={`bg-primary text-white py-2 overflow-hidden ${className}`}>
      <div className="animate-marquee whitespace-nowrap">
        <span className="text-sm md:text-base font-medium mx-4">★</span>
        <span className="text-sm md:text-base font-medium">{message}</span>
        <span className="text-sm md:text-base font-medium mx-4">★</span>
        <span className="text-sm md:text-base font-medium">{message}</span>
        <span className="text-sm md:text-base font-medium mx-4">★</span>
        <span className="text-sm md:text-base font-medium">{message}</span>
      </div>
    </div>
  );
};

export default ScrollingMessage;
