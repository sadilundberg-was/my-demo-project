import Link from "next/link";

export default function Applink({ href, className, prefetch = false, children }) {
  return (
    <Link href={href} className={className} prefetch={prefetch}>
      {children}
    </Link>
  );
};