import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type = "button",
  icon,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2.5 font-sans font-semibold text-sm tracking-wide transition-all duration-base ease-out-custom min-h-[48px] px-6 py-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dominant active:scale-[0.98]";

  const variantStyles = {
    primary:
      "bg-accent text-accent-contrast hover:bg-accent-hover shadow-sm hover:shadow-md",
    secondary:
      "bg-surface text-content-primary hover:bg-surface-hover border border-surface-border",
    outline:
      "bg-transparent text-content-primary hover:text-accent border border-surface-border hover:border-accent",
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    return (
      <Link
        href={href}
        className={combinedStyles}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        <span>{children}</span>
        {icon && <span className="transition-transform duration-fast group-hover:translate-x-1">{icon}</span>}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      <span>{children}</span>
      {icon && <span>{icon}</span>}
    </button>
  );
};
