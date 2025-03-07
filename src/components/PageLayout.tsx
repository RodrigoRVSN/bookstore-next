import { PropsWithChildren } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";

type PageLayoutProps = PropsWithChildren & {
  redirectLink?: string;
  withPaddingTop?: boolean;
};

export const PageLayout = ({
  children,
  redirectLink,
  withPaddingTop,
}: PageLayoutProps) => {
  return (
    <>
      <header className="fixed w-full h-16 flex items-center p-4">
        {redirectLink && (
          <Button variant="ghost" asChild>
            <Link href="/">
              <ChevronLeftIcon aria-label="Redirect to home" />
            </Link>
          </Button>
        )}
      </header>
      <main className={withPaddingTop ? "pt-16" : ""}>{children}</main>
    </>
  );
};
