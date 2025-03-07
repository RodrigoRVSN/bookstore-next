import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { PageLayout } from ".";

describe("<PageLayout />", () => {
  it("should not render back to home button when there is no redirect link prop", () => {
    render(<PageLayout />);
    expect(screen.queryByTestId("page__layout--button-home")).toBeNull();
  });

  it("should render back to home button when there is a redirect link prop", () => {
    render(<PageLayout redirectLink="/" withPaddingTop />);
    expect(screen.getByTestId("page__layout--button-home")).toBeDefined();
  });
});
