import React from 'react';

type VerticalBoxProps = {
  className?: string;
  children?: React.ReactNode;
}

export default function VerticalBox(props: VerticalBoxProps) {
  const {className, ...rest} = props;
  return (
    <div className={`flex flex-col ${props.className}`} {...rest}>{props.children}</div>
  )
}
