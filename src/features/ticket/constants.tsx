import { LucideCircleCheck, LucideFileText, LucidePencil } from "lucide-react";

const TICKET_ICONS = {
  OPEN: <LucideFileText className="size-5" />,
  IN_PROGRESS: <LucidePencil className="size-5" />,
  DONE: <LucideCircleCheck className="size-5" />,
};

export { TICKET_ICONS };
