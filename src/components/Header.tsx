
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
              <Link to="/" className={navigationMenuTriggerStyle()}>
                Главная
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger>История и современность</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4">
                  <div className="px-2">
                    <h3 className="text-lg font-medium leading-none">Разделы</h3>
                    <p className="text-sm text-muted-foreground pt-1 pb-2">
                      Изучите исторические материалы
                    </p>
                  </div>
                  <Link to="/heroes" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                    <div className="text-sm font-medium leading-none">Герои ВОВ и СВО</div>
                    <p className="text-sm leading-snug text-muted-foreground">
                      Истории подвигов и героизма
                    </p>
                  </Link>
                  <Link to="/crimea" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                    <div className="text-sm font-medium leading-none">Крым</div>
                    <p className="text-sm leading-snug text-muted-foreground">
                      Воссоединение Крыма с Россией и Поезда дружбы
                    </p>
                  </Link>
                  <Link to="/donbass" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                    <div className="text-sm font-medium leading-none">Донбасс и СВО</div>
                    <p className="text-sm leading-snug text-muted-foreground">
                      История конфликта и специальная военная операция
                    </p>
                  </Link>
                  <Link to="/euromaidan" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                    <div className="text-sm font-medium leading-none">Евромайдан</div>
                    <p className="text-sm leading-snug text-muted-foreground">
                      События на Украине 2014 года
                    </p>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/materials" className={navigationMenuTriggerStyle()}>
                Материалы
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/contact" className={navigationMenuTriggerStyle()}>
                Контакты
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};
