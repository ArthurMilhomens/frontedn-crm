import Head from "next/head";
import ThreeComponent from "../components/ThreeComponent";

export default function Three() {

  return (
    <>
      <Head>
        <title>Card 3D - MTGL</title>
      </Head>
      <main>
        <ThreeComponent />
      </main>
    </>
  );
}