import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '@/components/input';
import Overlay from '@/components/overlay';

export default function Database() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemsRef = ref(database, 'items');

    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      const itemList = [];
      for (let id in data) {
        itemList.push({ id, ...data[id] });
      }
      setItems(itemList);
    });
  }, []);

  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOverlayVisible(true);
  };

  return (
    <main className="w-screen h-screen lg:p-24 p-16">
      <Head>
        <title>Nettverksguiden | Database</title>
      </Head>
      <div className="w-full flex">
        <div className="lg:w-3/4 bg-white border border-blue-800 lg:mr-24 mr-0 h-[28.2rem] w-full rounded overflow-x-auto">
          <ul className="grid lg:grid-cols-4 grid-cols-2 p-2">
            {items.map((item) => (
              <li key={item.id} className='m-4' onClick={() => handleItemClick(item)}>
                <div style={{backgroundImage: `url(${item.imgurl})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',}} className="w-full lg:h-[8rem] h-[6rem] flex justify-center items-center rounded-lg hover:border hover:border-blue-800">
                  <div className='bg-blue-800 px-4 rounded'>
                    <p className='text-white font-bold text-lg'>{item.name}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/4 hidden lg:flex flex-col">
          <p className="text-3xl font-bold text-blue-800">NETTVERKSGUIDEN</p>
            <div className="flex mt-8 items-center">
                <Link href="/input" className="mr-4 flex items-center justify-center w-[2.4rem] h-[2.4rem] text-lg border rounded border-blue-800 text-blue-800 font-bold hover:border-gray-100 hover:text-gray-100 hover:bg-blue-800">+</Link>
                <p className="text-md flex items-center">Legg til en komponent?</p>
            </div>
            <div className="flex mt-8 items-center">
                <Link href="/faq" className="mr-4 flex items-center justify-center w-[2.4rem] h-[2.4rem] text-lg border rounded border-blue-800 text-blue-800 font-bold hover:border-gray-100 hover:text-gray-100 hover:bg-blue-800">?</Link>
                <p className="text-md flex items-center">FAQ</p>
            </div>
        </div>
      </div>
      {isOverlayVisible && selectedItem && (
        <Overlay item={selectedItem} onClose={() => setIsOverlayVisible(false)} />
      )}
    </main>
  );
}
