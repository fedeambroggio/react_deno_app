import { HandlerContext } from "$fresh/server.ts";

// Array para almacenar los colores
const colorsArray: string[] = [];

export const addColorHandler = async (req: Request, _ctx: HandlerContext): Promise<Response> => {
  try {
    // Obtener el cuerpo de la solicitud como un objeto JSON
    const body = await req.json();

    if (!body.color) {
      return new Response("No se proporcionó un color.", { status: 400 });
    }

    const color = body.color;
    // Agregar el color al array
    colorsArray.push(color);

    return new Response("Color agregado correctamente.", { status: 200 });
  } catch (error) {
    console.error("Error al procesar la solicitud:", error);
    return new Response("Error interno.", { status: 500 });
  }
};

export const getColorsHandler = (_req: Request, _ctx: HandlerContext): Response => {
    const body = JSON.stringify(colorsArray);
    return new Response(body, {
      headers: { "Content-Type": "application/json" },
    });
};
