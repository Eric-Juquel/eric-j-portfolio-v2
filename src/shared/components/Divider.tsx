interface DividerProps {
  direction?: "horizontal" | "vertical";
  thickness?: number;
  color?: string;
  margin?: number | string;
}

function Divider({
  direction = "horizontal",
  thickness,
  color,
  margin,
}: DividerProps) {
  const style: React.CSSProperties = {
    backgroundColor: color,
    width:
      direction === "horizontal"
        ? undefined
        : thickness
          ? `${thickness}px`
          : undefined,
    height:
      direction === "horizontal"
        ? thickness
          ? `${thickness}px`
          : undefined
        : undefined,
    margin:
      margin !== undefined
        ? typeof margin === "number"
          ? direction === "horizontal"
            ? `${margin}px 0`
            : `0 ${margin}px`
          : margin
        : undefined,
  };

  const className =
    direction === "horizontal"
      ? "my-6 h-px bg-gray-600 w-2/3"
      : "mx-6 w-px h-2/3 bg-gray-600";

  return <div className={className} style={style} />;
}

export default Divider;
