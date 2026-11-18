"use client";

import { Toaster, ToasterProps } from "react-hot-toast";

function ToasterProvider(props: ToasterProps) {
  const { ...rest } = props;

  return <Toaster {...rest} />;
}

export default ToasterProvider;
