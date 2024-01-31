import React, { ReactNode, useRef } from "react";

interface Props {
  children: ReactNode;
  copyData: string;
}

export default function CopyToClipboard(props: Props) {
  const { children, copyData } = props;

  const buttonRef = useRef<HTMLButtonElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const [text, setText] = React.useState("Copy card number");

  const onCopy = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(copyData);
    setText("copied");
  };

  return (
    <div
      ref={container}
      onMouseEnter={({ clientX }) => {
        if (!buttonRef.current || !container.current) return;
        const { left } = container.current.getBoundingClientRect();

        buttonRef.current.style.left = clientX - left + "px";
      }}
      onMouseLeave={() => setText("Copy card number")}
      className={`group relative inline-block`}
    >
      {children}
      <button
        onClick={onCopy as any}
        ref={buttonRef}
        className={`invisible group-hover:visible opacity-0 group-hover:opacity-100 transition 
          bg-white text-normal/80 py-1 px-2.5 rounded absolute top-[50%] z-10 w-fit whitespace-nowrap text-sm 
          border border-gray-700 custom-shadow-md cursor-pointer`}
      >
        {text}
      </button>
    </div>
  );
}
