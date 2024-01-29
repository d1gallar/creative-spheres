import React, { ForwardedRef, forwardRef } from "react";

type TestimonialCardProps = {
  className?: string;
  children?: React.ReactNode;
};

function TestimonialCard(props: TestimonialCardProps) {
  const { className, children } = props;
  return (
    <div
      className={`min-w-full sm:min-w-[40rem] sm:max-w-[80rem] p-8 border-[1px] rounded-md border-[#e2e2e2] flex flex-col gap-4 ${className}`}
    >
      {children}
    </div>
  );
}

const TestimonialCardRef = forwardRef(
  (props: TestimonialCardProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { className, children } = props;
    return (
      <div
        className={`min-w-full sm:min-w-[40rem] sm:max-w-[80rem] p-8 border-[1px] rounded-md border-[#e2e2e2] flex flex-col gap-4 ${className}`}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);
TestimonialCardRef.displayName = "TestimonialCardRef";

export { TestimonialCard, TestimonialCardRef };
