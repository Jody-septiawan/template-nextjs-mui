import Head from "next/head";
import * as React from "react";

type Props = React.PropsWithChildren<{
  title?: string;
}>;

export const Layout = ({ children, title }: Props) => {
  const webName = "Template";
  const pageTitle = title ? `${title} | ${webName}` : webName;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      {children}
    </>
  );
};
