import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[calc(100vh-57px)]">
      <div className="flex flex-col items-center justify-center  bg-foreground text-white w-full h-[340px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%+170px)]">
        <p className="text-primary text-6xl font-akira">404</p>
        <h1 className="text-4xl font-bold">Página no encontrada</h1>
        <Button variant="link" asChild className="text-lg font-bold px-12">
          <Link href="/">Volver al inicio</Link>
        </Button>
      </div>
    </div>
  );
}
