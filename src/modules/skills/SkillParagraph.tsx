export interface SkillPragraphProps {
  label: string;
  list: string[];
  className?: string;
}

export default function SkillPragraph({
  label,
  list,
  className = "",
}: SkillPragraphProps) {
  return (
    <div className={className}>
      <p className="text-light body1 text-center lg:text-left">
        {label}:{" "}
        {list.map((skill, i) => (
          <span key={skill}>
            <span className="text-secondary">{skill}</span>
            {i < list.length - 1 && ", "}
          </span>
        ))}
        .
      </p>
    </div>
  );
}
