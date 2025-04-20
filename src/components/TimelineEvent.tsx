
interface TimelineEventProps {
  date: string;
  title: string;
  description: string;
}

export const TimelineEvent = ({ date, title, description }: TimelineEventProps) => {
  return (
    <div className="relative pl-8 sm:pl-12 py-2">
      <div className="flex flex-col sm:flex-row items-start mb-1">
        <div className="absolute left-0 top-2 sm:top-3 flex items-center justify-center">
          <div className="h-4 w-4 rounded-full bg-primary"></div>
          <div className="h-full w-[2px] absolute top-4 left-[7px] bg-primary/20"></div>
        </div>
        <div className="sm:min-w-[120px] font-semibold text-sm sm:text-base text-primary mr-4">
          {date}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-600 ml-0 sm:ml-[120px] sm:mr-4">{description}</p>
    </div>
  );
};
