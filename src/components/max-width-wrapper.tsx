import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className="h-full mx-auto w-full overflow-hidden">
      <div className={cn("w-full h-full", className)}>{children}</div>
    </div>
  );
};

export default MaxWidthWrapper;
