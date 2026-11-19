import Link, { LinkProps } from "next/link";

type FooterSocialLinkProps = {
  children: React.ReactNode;
  className?: string;
} & LinkProps;

function FooterSocialLink(props: FooterSocialLinkProps) {
  const { href, className, children, ...rest } = props;

  return (
    <Link
      href={href}
      className={`btn btn-ghost p-2 border border-base-content hover:bg-primary hover:text-primary-content hover:border-primary-content ${className ? className : ""}`}
      {...rest}
    >
      {children}
    </Link>
  );
}

export default FooterSocialLink;
