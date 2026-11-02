import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "accent" | "surface" | "neutral";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "accent",
  className = "",
}) => {
  const styles = {
    accent:
      "bg-accent/10 text-accent border-accent/25",
    surface:
      "bg-surface/60 text-content-secondary border-surface-border",
    neutral:
      "bg-dominant-light text-content-muted border-surface-border/50",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${styles[variant]} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
      {children}
    </span>
  );
};
