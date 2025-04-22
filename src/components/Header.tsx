
import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { useOnlineStatus } from "@/hooks/use-online-status";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Wifi, WifiOff } from "lucide-react";

export function Header() {
  const isOnline = useOnlineStatus();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <Logo />
            <span className="hidden font-bold sm:inline-block">
              Уроки Победы
            </span>
          </Link>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link
                to="/"
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              >
                Главная
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Разделы</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                  <li className="row-span-3">
                    <Link
                      to="/heroes"
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Герои ВОВ и СВО
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Истории подвигов героев Великой Отечественной войны и специальной военной операции
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/crimea"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">Крым</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Возвращение Крыма в состав России
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/donbass"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">Донбасс и СВО</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        История конфликта и ход специальной военной операции
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/euromaidan"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">Евромайдан</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Государственный переворот 2014 года в Киеве
                      </p>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                to="/video-lessons"
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              >
                Видеоуроки
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex items-center space-x-4">
          <div className="flex items-center text-sm">
            {isOnline ? (
              <span className="flex items-center text-green-600">
                <Wifi size={16} className="mr-1" />
                Онлайн
              </span>
            ) : (
              <span className="flex items-center text-amber-600">
                <WifiOff size={16} className="mr-1" />
                Оффлайн
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
