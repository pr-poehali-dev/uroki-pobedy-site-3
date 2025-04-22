
import OnlineImage from './OnlineImage';

interface TimelineEventProps {
  date: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

export const TimelineEvent = ({
  date,
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false
}: TimelineEventProps) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
      <div className="w-full md:w-1/2">
        <div className="space-y-3">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            {date}
          </div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <OnlineImage
          src={imageSrc}
          alt={imageAlt}
          className="w-full rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};
