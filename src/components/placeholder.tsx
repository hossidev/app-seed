import { LucideMessageCircleWarning } from "lucide-react";
import { cloneElement } from "react";

type PlaceholderProps = {
  label: string;
  icon?: React.ReactElement<React.SVGProps<SVGSVGElement>, "svg">;
  button?: React.ReactElement<React.ButtonHTMLAttributes<HTMLButtonElement>>;
};

const Placeholder = ({
  label,
  icon = <LucideMessageCircleWarning />,
  button = <div className="h-10" />,
}: PlaceholderProps) => {
  return (
    <div className="flex-1 self-center flex flex-col items-center justify-center gap-2">
      {cloneElement(icon, {
        className: "w16 h16",
      })}
      <h2 className="text-lg text-center">{label}</h2>
      {cloneElement(button, {
        className: "h-10",
      })}
    </div>
  );
};

export { Placeholder };
