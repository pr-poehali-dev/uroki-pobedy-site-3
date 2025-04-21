
interface PageHeaderProps {
  title: string;
  description?: string;
  curator?: string;
}

export const PageHeader = ({
  title,
  description,
  curator
}: PageHeaderProps) => {
  return (
    <section className="w-full py-12 md:py-24 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {description}
            </p>
          )}
          {curator && (
            <p className="text-sm text-gray-600 mt-4">
              <span className="font-semibold">Куратор: </span>{curator}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
