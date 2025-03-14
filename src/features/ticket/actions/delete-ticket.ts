"use server";

import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/paths";

export const deleteTicket = async (ticketId: string) => {
  "use server";
  await prisma.ticket.delete({
    where: {
      id: ticketId,
    },
  });

  redirect(ticketsPath());
};
