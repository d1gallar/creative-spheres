import React from "react";

type HorizontalBoxProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function HorizontalBox(props: Readonly<HorizontalBoxProps>) {
  return (
    <div className={`flex flex-row ${props.className}`}>{props.children}</div>
  );
}
