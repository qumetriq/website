"use client";

import { ReactNode } from "react";
import FadeIn from "../animations/FadeIn";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

export default function Section({ children, className = "" }: SectionProps) {
  return (
    <FadeIn>
      <section className={`py-32 ${className}`}>{children}</section>
    </FadeIn>
  );
}
