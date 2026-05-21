"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface SectionLabelProps extends HTMLAttributes<HTMLDivElement> {
  index: string;
  title: string;
}

export default function SectionLabel({ index, title, className, ...props }: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-4 text-section-label", className)} {...props}>
      <span className="text-[var(--champagne)]">[{index}]</span>
      <div className="w-8 h-[1px] bg-[var(--champagne)] opacity-50" />
      <span className="tracking-[0.2em]">{title}</span>
    </div>
  );
}
