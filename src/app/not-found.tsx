import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <div className="bg-foreground flex h-[200px] w-full flex-col items-center justify-center text-white lg:absolute lg:top-1/2 lg:left-1/2 lg:h-[400px] lg:-translate-x-1/2 lg:-translate-y-[calc(50%+200px)]">
        <p className="text-primary font-akira text-6xl">404</p>
        <h1 className="text-4xl font-bold">Página no encontrada</h1>
        <Button variant="link" asChild className="px-12 text-lg font-bold">
          <Link href="/">Volver al inicio</Link>
        </Button>
      </div>
    </div>
  );
}
