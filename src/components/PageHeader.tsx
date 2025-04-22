
interface PageHeaderProps {
  title: string;
  description: string;
  curator?: string;
}

export const PageHeader = ({ title, description, curator }: PageHeaderProps) => {
  return (
    <section className="w-full bg-slate-50 py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {description}
            </p>
            {curator && (
              <p className="text-sm text-gray-500 mt-2">
                Куратор раздела: {curator}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
