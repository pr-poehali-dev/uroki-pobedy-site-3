
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row py-8 px-4 md:px-6">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {currentYear} Уроки Победы. Все права защищены.
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <Link to="/about" className="text-sm font-medium hover:underline">
            О проекте
          </Link>
          <Link to="/materials" className="text-sm font-medium hover:underline">
            Материалы
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:underline">
            Контакты
          </Link>
        </nav>
      </div>
    </footer>
  );
};
