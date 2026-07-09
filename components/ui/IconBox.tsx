import { ReactNode } from "react";

interface IconBoxProps {
  children: ReactNode;
}

export default function IconBox({
  children,
}: IconBoxProps) {
  return (
    <div
      className="
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-2xl
        bg-blue-50
        text-blue-600
      "
    >
      {children}
    </div>
  );
}