import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonProps = {
  label: string;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "gradient";
  className?: string;
  radius?: number;
  rounded?: string;
  target?: string;
  rel?: string;
} & Omit<ComponentProps<"button">, "className">;

export default function Button({ label, href, variant = "primary", className = "", radius, rounded = "rounded-[19px]", ...rest }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-16 py-4 text-sm font-semibold " +
    "transition-all duration-700 ease-[cubic-bezier(.4,0,.2,1)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent " +
    "will-change-transform will-change-shadow relative overflow-hidden group";

  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary:
      "text-white bg-gradient-to-r from-[#0A3D2E] via-[#1BA37A] to-[#0A3D2E] shadow-[0_2px_16px_rgba(32,200,150,0.10)] " +
      "hover:shadow-[0_6px_32px_rgba(32,200,150,0.18)] " +
      "hover:scale-[1.035] active:scale-95 focus:ring-emerald-300 " +
      "before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#1BA37A] before:via-[#0A3D2E] before:to-[#1BA37A] " +
      "before:opacity-0 before:transition-opacity before:duration-700 before:ease-[cubic-bezier(.4,0,.2,1)] " +
      "hover:before:opacity-100",
    
    secondary:
      "bg-white/10 text-white hover:text-white " +
      "hover:shadow-[0_4px_24px_rgba(32,200,150,0.10)] hover:scale-[1.03] active:scale-95 focus:ring-white/30 shadow-none " +
      "before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#1BA37A]/80 before:to-[#0A3D2E]/80 " +
      "before:opacity-0 before:transition-opacity before:duration-700 before:ease-[cubic-bezier(.4,0,.2,1)] " +
      "hover:before:opacity-100",
    
    outline:
      "border border-white/10 text-white bg-transparent hover:text-white " +
      "hover:shadow-[0_2px_16px_rgba(32,200,150,0.10)] hover:scale-[1.03] active:scale-95 focus:ring-white/30 shadow-none " +
      "before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#1BA37A]/20 before:to-[#0A3D2E]/20 " +
      "before:opacity-0 before:transition-opacity before:duration-700 before:ease-[cubic-bezier(.4,0,.2,1)] " +
      "hover:before:opacity-100",
    
    gradient:
      "text-white bg-gradient-to-r from-[#0A3D2E] via-[#1BA37A] to-[#0A3D2E] shadow-[0_0_20px_rgba(0,0,0,0.12)] " +
      "hover:shadow-[0_6px_32px_rgba(32,200,150,0.18)] " +
      "hover:scale-[1.035] active:scale-95 " +
      "before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#1BA37A] before:via-[#0A3D2E] before:to-[#1BA37A] " +
      "before:opacity-0 before:transition-opacity before:duration-700 before:ease-[cubic-bezier(.4,0,.2,1)] " +
      "hover:before:opacity-100",
  };

  const classes = `${base} ${variants[variant]} ${rounded ?? ""} ${className}`;
  const style = radius !== undefined && !rounded ? { borderRadius: radius } : undefined;

  // Wrap label in span for smooth text color transition
  const InnerContent = () => (
    <span className="relative z-10">{label}</span>
  );

  if (href) {
    // External link (starts with http or https)
    if (/^https?:\/\//.test(href)) {
      return (
        <a href={href} className={classes} style={style} target={rest.target} rel={rest.rel}>
          <InnerContent />
        </a>
      );
    }
    // Internal link
    return (
      <Link href={href} className={classes} style={style}>
        <InnerContent />
      </Link>
    );
  }

  return (
    <button className={classes} style={style} {...rest}>
      <InnerContent />
    </button>
  );
}