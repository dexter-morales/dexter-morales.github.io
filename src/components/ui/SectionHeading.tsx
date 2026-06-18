interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  label,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 lg:mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <span className="mb-3 inline-block rounded-full bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-600 dark:text-brand-400">
        {label}
      </span>
      <h2 className="text-3xl font-bold tracking-tight text-surface-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-surface-600 dark:text-surface-400">
          {description}
        </p>
      )}
    </div>
  );
}
