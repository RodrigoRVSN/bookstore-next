import { PropsWithChildren } from "react";
import { PageLayout } from "@/components/PageLayout";

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return <PageLayout>{children}</PageLayout>;
}
