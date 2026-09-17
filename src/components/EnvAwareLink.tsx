import Link from "next/link";

export default function EnvAwareLink({
  href,
  children,
  ...props
}: React.ComponentProps<typeof Link>) {
  const pageUrl =
    process.env.NODE_ENV === "production" &&
    !(href as string).endsWith(".html") &&
    !(href as string).endsWith("/")
      ? `${href}.html`
      : (href as string);

  return (
    <a href={pageUrl} {...props}>
      {children}
    </a>
  );
}
