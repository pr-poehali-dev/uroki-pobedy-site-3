
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeroCardProps {
  name: string;
  photo: string;
  period: string;
  achievement: string;
  description: string;
}

export const HeroCard = ({ name, photo, period, achievement, description }: HeroCardProps) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-48 bg-gradient-to-r from-primary/20 to-primary/10">
          <Avatar className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 h-24 w-24 border-4 border-white">
            <AvatarImage src={photo} alt={name} />
            <AvatarFallback className="text-xl">{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
        </div>
      </CardHeader>
      <CardContent className="pt-16 pb-6 text-center">
        <CardTitle className="text-xl font-bold">{name}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground mt-1">{period}</CardDescription>
        <h4 className="mt-4 font-medium text-primary">{achievement}</h4>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};
