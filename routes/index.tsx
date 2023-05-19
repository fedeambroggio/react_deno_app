import { Head } from "$fresh/runtime.ts";
import ColorForm from "../islands/ColorForm.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Colores App</title>
      </Head>
      <div>
        <h1 style={{color: 'purple'}}>
         Agregue colores a continuación:
        </h1>
        <ColorForm/>
      </div>
    </>
  );
}
