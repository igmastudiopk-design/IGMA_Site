import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonProps = {
  label: string;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "gradient";
  className?: string;
  radius?: number;
  rounded?: string;
} & Omit<ComponentProps<"button">, "className">;

export default function Button({ label, href, variant = "primary", className = "", radius, rounded = "rounded-[19px]", ...rest }: ButtonProps) {
  const base = "inline-flex items-center justify-center px-16 py-4 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent";

  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary: "bg-emerald-500 text-black hover:bg-emerald-400 focus:ring-emerald-300",
    secondary: "bg-white/10 text-white hover:bg-white/20 focus:ring-white/30",
    outline: "border border-white/20 text-white hover:bg-white/10 focus:ring-white/30",
    gradient: "text-white bg-gradient-to-r from-[#0A3D2E] via-[#1BA37A] to-[#0A3D2E] shadow-[0_0_20px_rgba(0,0,0,0.6)] hover:opacity-90",
  };

  const classes = `${base} ${variants[variant]} ${rounded ?? ""} ${className}`;
  const style = radius !== undefined && !rounded ? { borderRadius: radius } : undefined;

  if (href) {
    return (
      <Link href={href} className={classes} style={style}>
        {label}
      </Link>
    );
  }

  return (
    <button className={classes} style={style} {...rest}>
      {label}
    </button>
  );
}
