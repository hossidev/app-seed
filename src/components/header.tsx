import { LucideSprout } from "lucide-react";
import Link from "next/link";
import { homePath } from "@/paths";
import { ticketsPath } from "@/paths";
import { buttonVariants } from "./ui/button";

const Header = () => {
  return (
    <nav
      className="
          supports-backdrop-blur:bg-background/60
          fixed left-0 right-0 top-0 z-20
          border-b bg-background/95 backdrop-blur
          w-full flex py-2.5 px-5 justify-between
        "
    >
      <div>
        <Link
          className={buttonVariants({ variant: "ghost" })}
          href={homePath()}
        >
          <LucideSprout className="size-6" />
          <h1 className="text-xl font-semibold">AppSeed</h1>
        </Link>
      </div>
      <div>
        <Link
          className={buttonVariants({ variant: "default" })}
          href={ticketsPath()}
        >
          Tickets
        </Link>
      </div>
    </nav>
  );
};

export { Header };
