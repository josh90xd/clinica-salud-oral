type Props = {
  eyebrow: string;
  title: string;
  copy?: string;
  centered?: boolean;
};

export function SectionHeader({ eyebrow, title, copy, centered = false }: Props) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}
