import React from "react";

export default function ImageSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="w-full h-fit">{children}</section>;
}