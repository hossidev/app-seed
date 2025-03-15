import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createTicket } from "../actions/create-ticket";

const TicketCreateForm = () => {
  return (
    <form action={createTicket} className="flex flex-col gap-y-2">
      <Label htmlFor="title">Title</Label>
      <Input type="text" name="title" id="title" />

      <Label htmlFor="content">Content</Label>
      <Textarea id="content" name="content" className="resize-none"></Textarea>

      <Button type="submit">Create</Button>
    </form>
  );
};

export { TicketCreateForm };
