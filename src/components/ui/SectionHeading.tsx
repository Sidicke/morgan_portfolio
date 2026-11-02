import React from "react";
import { Badge } from "./Badge";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = "left",
  className = "",
}) => {
  const alignmentStyles =
    align === "center" ? "text-center mx-auto items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col max-w-3xl mb-12 sm:mb-16 ${alignmentStyles} ${className}`}>
      {badge && (
        <div className="mb-4">
          <Badge variant="accent">{badge}</Badge>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-content-primary tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-content-secondary leading-relaxed font-sans">
          {subtitle}
        </p>
      )}
    </div>
  );
};
