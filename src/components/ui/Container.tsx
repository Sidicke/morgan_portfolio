import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  id,
}) => {
  return (
    <div
      id={id}
      className={`mx-auto w-full max-w-container px-5 sm:px-8 lg:px-12 xl:px-16 ${className}`}
    >
      {children}
    </div>
  );
};
