import { SERVICES } from "@/lib/constants/services";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const image = SERVICES.find((service) => service.id === id)?.image;

  return new Response(JSON.stringify({ image }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
