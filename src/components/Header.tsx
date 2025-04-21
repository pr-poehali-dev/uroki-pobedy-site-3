
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { useOnlineStatus } from "@/hooks/use-online-status";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export const Header = () => {
  const isOnline = useOnlineStatus();
  
  return (
    <header className="bg-white border-b">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Logo />
          <div className="hidden md:flex">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl">
              Уроки Победы
            </Link>
          </div>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              {/* Исправление вложенности тегов <a> - используем span вместо NavigationMenuLink */}
              <Link to="/" className={navigationMenuTriggerStyle()}>
                Главная
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Разделы</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <Link to="/heroes">
                      <div className="text-sm font-medium leading-none">Герои ВОВ и СВО</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Истории героев Великой Отечественной войны и СВО
                      </p>
                    </Link>
                  </li>
                  <li className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <Link to="/crimea">
                      <div className="text-sm font-medium leading-none">Крым и его возвращение</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        История возвращения Крыма в состав России и Поезда дружбы
                      </p>
                    </Link>
                  </li>
                  <li className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <Link to="/donbass">
                      <div className="text-sm font-medium leading-none">Донбасс и СВО</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        История конфликта и специальная военная операция
                      </p>
                    </Link>
                  </li>
                  <li className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <Link to="/euromaidan">
                      <div className="text-sm font-medium leading-none">Евромайдан на Украине</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        События 2014 года на Украине и их последствия
                      </p>
                    </Link>
                  </li>
                  <li className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <Link to="/video-lessons">
                      <div className="text-sm font-medium leading-none">Видеоуроки</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Коллекция видеоуроков о Великой Отечественной войне
                      </p>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span className="text-xs text-gray-500">{isOnline ? 'Онлайн' : 'Оффлайн'}</span>
          </div>
        </div>
      </div>
    </header>
  );
};
