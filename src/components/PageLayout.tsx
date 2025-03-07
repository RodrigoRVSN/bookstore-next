import { PropsWithChildren } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";
import { bookstore } from "@/../public/bookstore.json";

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
      <header
        className={`fixed w-full flex flex-col-reverse sm:flex-row items-center py-4 px-4 sm:px-16 bg-white ${redirectLink ? "justify-between" : "justify-center"}`}
      >
        {redirectLink && (
          <Button
            variant="ghost"
            asChild
            data-testid="page__layout--button-home"
          >
            <Link href="/">
              <ChevronLeftIcon aria-label="Redirect to home" />
            </Link>
          </Button>
        )}
        <div className="flex flex-col items-center">
          <span className="text-lg text-bold">{bookstore.name}</span>
          <span className="text-sm text-gray-500">{bookstore.description}</span>
          <address className="flex gap-2 not-italic text-sm items-center text-gray-600">
            <MapPinIcon /> {bookstore.location}
          </address>
        </div>
        {redirectLink && <span className="w-10" />}
      </header>
      <main className={withPaddingTop ? "pt-36 sm:pt-16" : ""}>{children}</main>
    </>
  );
};
