import Head from "next/head";
import Link from "next/link";
import Threejs from "@/components/model";

export default function Home() {

  // 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

  // next react react-dom

  return (
    <main className="w-screen h-screen">
      <Head>
        <title>Nettverksguiden | Hjem</title>
      </Head>
      <div className="flex items-center lg:h-screen h-3/4">
        <div className="lg:w-1/2 lg:ml-24 mx-24">
            <p className="text-3xl font-bold text-blue-800">NETTVERKSGUIDEN</p>
            <p className="text-lg lg:mt-6 mt-8">Nettsiden inneholder informasjon om hvordan forskjellige nettverks-komponenter fungerer. Her kan du for eksempel finne informasjonen du søker om <span className="text-gray-800 italic">Routere</span>, <span className="text-gray-800 italic">Switcher</span> og andre sentrale deler av et nettverk</p>
            <div className="lg:mt-12 mt-20">
              <Link href="/database" className="text-lg border lg:px-8 px-[5.6rem] py-6 rounded border-blue-800 text-blue-800 font-bold hover:border-gray-100 hover:text-gray-100 hover:bg-blue-800">Til databasen</Link>
            </div>
        </div>
        <div className="w-1/2 h-[30rem] mt-38 mr-24 justify-center lg:flex hidden">
          <Threejs />
        </div>
      </div>
    </main>
  );
}
