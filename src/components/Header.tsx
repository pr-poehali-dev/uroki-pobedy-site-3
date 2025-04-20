
import { Link } from "react-router-dom";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <Logo className="h-10 w-auto" />
          <span className="font-bold text-xl text-primary">Уроки Победы</span>
        </Link>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              {/* Исправлено: заменен Link компонент на NavigationMenuLink */}
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/">Главная</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>О проекте</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4">
                  <div className="px-2">
                    <h3 className="text-lg font-medium leading-none">О проекте</h3>
                    <p className="text-sm text-muted-foreground pt-1 pb-2">
                      Изучите нашу миссию и историю проекта
                    </p>
                  </div>
                  <Link to="/about" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                    <div className="text-sm font-medium leading-none">Миссия проекта</div>
                    <p className="text-sm leading-snug text-muted-foreground">
                      Узнайте о целях образовательного проекта
                    </p>
                  </Link>
                  <Link to="/history" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                    <div className="text-sm font-medium leading-none">История победы</div>
                    <p className="text-sm leading-snug text-muted-foreground">
                      Узнайте о важных событиях и датах
                    </p>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              {/* Исправлено: заменен Link компонент на NavigationMenuLink */}
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/materials">Материалы</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              {/* Исправлено: заменен Link компонент на NavigationMenuLink */}
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/contact">Контакты</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};
