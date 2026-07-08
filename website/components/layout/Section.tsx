"use client";

import { ReactNode } from "react";
import FadeIn from "../animations/FadeIn";

type SectionProps = {
  children: ReactNode;
};

export default function Section({ children }: SectionProps) {
  return (
    <FadeIn>
      <section className="py-32">{children}</section>
    </FadeIn>
  );
}
