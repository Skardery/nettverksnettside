import Head from 'next/head';
import Link from 'next/link';

export default function Input() {

  return (
    <main className="w-screen h-screen lg:p-24 p-16">
      <Head>
        <title>Nettverksguiden | Database</title>
      </Head>
      <div className="w-full flex">
        <div className="lg:w-3/4 bg-gray-200 lg:mr-24 mr-0 h-[38.2rem] w-full rounded overflow-x-auto">
        </div>
        <div className="w-1/4 hidden lg:flex flex-col">
          <p className="text-3xl font-bold text-blue-800">NETTVERKSGUIDEN</p>
            <div className="flex mt-8 items-start">
                <Link href="/input" className="mr-4 flex items-center justify-center w-[2.4rem] h-[2.4rem] text-lg border rounded border-blue-800 text-blue-800 font-bold hover:border-gray-100 hover:text-gray-100 hover:bg-blue-800">+</Link>
                <p className="text-lg">Lagre komponent</p>
            </div>
            <div className="flex mt-8 items-start">
                <Link href="/database" className="mr-4 flex items-center justify-center w-[2.4rem] h-[2.4rem]  text-lg border rounded border-blue-800 text-blue-800 font-bold hover:border-gray-100 hover:text-gray-100 hover:bg-blue-800">x</Link>
                <p className="text-lg">Avbryt</p>
            </div>
        </div>
      </div>
    </main>
  );
}
