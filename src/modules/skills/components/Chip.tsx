export interface ChipProps {
  label: string;
  color: string;
}

function Chip({ label, color }: ChipProps) {
  return (
    <div
      style={{ borderColor: color }}
      className="test-light border rounded-4xl px-2 py-1.5 text-md font-thin whitespace-nowrap"
    >
      {label}
    </div>
  );
}

export default Chip;
