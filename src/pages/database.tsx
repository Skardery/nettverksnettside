import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ref, onValue, getDatabase } from 'firebase/database';
import app from '@/components/firebase';

export default function Database() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const database = getDatabase(app, "https://nettverksguiden-default-rtdb.europe-west1.firebasedatabase.app");
    const itemsRef = ref(database, 'items');

    onValue(itemsRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        const itemList = [];
        for (let id in data) {
          itemList.push({ id, ...data[id] });
        }
        setItems(itemList);
      });
  }, []);

  return (
    <main className="w-screen h-screen lg:p-24 p-16">
      <Head>
        <title>Nettverksguiden | Database</title>
      </Head>
      <div className="w-full flex">
        <div className="lg:w-3/4 bg-gray-200 lg:mr-24 mr-0 h-[38.2rem] w-full rounded overflow-x-auto">
          <ul className="grid lg:grid-cols-4 grid-cols-2 p-2">
            {items.map((item) => (
              <li key={item.id} className='m-4'>
                <div className="w-full bg-[url('/pc.png')] lg:h-[11rem] h-[9rem] flex justify-center items-center rounded-lg bg-cover hover:bg-gray-100 ">
                  <p className='text-blue-200 font-bold text-lg'>{item.name}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/4 hidden lg:flex flex-col">
          <p className="text-3xl font-bold text-blue-800">NETTVERKSGUIDEN</p>
            <div className="flex mt-8 items-start">
                <Link href="/input" className="mr-4 flex items-center justify-center w-[2.4rem] h-[2.4rem] text-lg border rounded border-blue-800 text-blue-800 font-bold hover:border-gray-100 hover:text-gray-100 hover:bg-blue-800">+</Link>
                <p className="text-lg">Legg til en komponent?</p>
            </div>
            <div className="flex mt-8 items-start">
                <Link href="/hjelp" className="mr-4 flex items-center justify-center w-[2.4rem] h-[2.4rem]  text-lg border rounded border-blue-800 text-blue-800 font-bold hover:border-gray-100 hover:text-gray-100 hover:bg-blue-800">?</Link>
                <p className="text-lg">Hvordan bruke databasen?</p>
            </div>
        </div>
      </div>
    </main>
  );
}
