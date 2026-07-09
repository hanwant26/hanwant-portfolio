interface Props {
  label: string;
  title: string;
  highlight?: string;
  subtitle?: string;
}

export default function SectionTitle({
  label,
  title,
  highlight,
  subtitle,
}: Props) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
        {label}
      </p>

      <h2 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
        {title}
        {highlight && (
          <span className="text-blue-600"> {highlight}</span>
        )}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}