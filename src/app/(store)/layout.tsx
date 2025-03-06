import { PropsWithChildren } from "react";
import { PageLayout } from "@/components/PageLayout";

export default function StoreLayout({ children }: PropsWithChildren) {
  return <PageLayout redirectLink="/">{children}</PageLayout>;
}
