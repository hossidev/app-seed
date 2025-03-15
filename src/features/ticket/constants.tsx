import { LucideCircleCheck, LucideFileText, LucidePencil } from "lucide-react";

const TICKET_ICONS = {
  OPEN: <LucideFileText className="h-5 w-5" />,
  IN_PROGRESS: <LucidePencil className="h-5 w-5" />,
  DONE: <LucideCircleCheck className="h-5 w-5" />,
};

export { TICKET_ICONS };
