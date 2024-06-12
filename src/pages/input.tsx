import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { push, ref } from 'firebase/database';
import { database } from '@/components/input';
import { useRouter } from 'next/router';

export default function Input() {
  const [name, setName] = useState('');
  const [imgurl, setImgurl] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/auth/logginn');
      }
    });

    // Clean up the subscription
    return () => unsubscribe();
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const items = {
      name,
      imgurl,
      description
    };
    await push(ref(database, 'items/'), items);
    router.push('/database');
  };

  return (
    <main className="w-screen h-screen lg:p-24 p-16">
      <Head>
        <title>Nettverksguiden | Input</title>
      </Head>
      <form onSubmit={handleSubmit} className="w-full flex">
        <div className="w-3/4 mr-24 h-[28.2rem]">
          <div className='w-full h-[3rem] flex justify-between'>
            <div className='w-1/2 mr-2'>
              <p className='mb-1 text-blue-800'>Navn</p>
              <input
                onChange={(e) => setName(e.target.value)}
                name="name"
                className='w-full py-3 px-3 outline-none border border-blue-800 rounded'
                placeholder="Ruter"
              />
            </div>
            <div className='w-1/2 ml-2'>
              <p className='mb-1 text-blue-800'>Bildeadresse</p>
              <input
                onChange={(e) => setImgurl(e.target.value)}
                name="imgurl"
                className='w-full py-3 px-3 outline-none border border-blue-600 rounded'
                placeholder="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/VSP-9000.jpg/500px-VSP-9000.jpg"
              />
            </div>
          </div>
          <div className='mt-10'>
            <p className='mb-1 text-blue-800'>Beskrivelse</p>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              name="description"
              className='py-3 px-3 h-[18rem] resize-none outline-none w-full border border-blue-600 rounded'
              placeholder="En ruter brukes til å..."
              cols={30}
              rows={10}
            ></textarea>
          </div>
          <button
            type="submit"
            className='mt-4 border border-blue-800 py-4 px-8 rounded text-blue-800 hover:border-gray-100 hover:text-gray-100 hover:bg-blue-800'
          >
            Lagre komponent i database
          </button>
        </div>
        <div className="w-1/4 hidden lg:flex flex-col">
          <p className="text-3xl font-bold text-blue-800">NETTVERKSGUIDEN</p>
          <div className="flex mt-8 items-center">
            <Link href="/database" className="mr-4 flex items-center justify-center w-[2.4rem] h-[2.4rem] text-lg border rounded border-blue-800 text-blue-800 font-bold hover:border-gray-100 hover:text-gray-100 hover:bg-blue-800">x</Link>
            <p className="text-md flex items-center">Avbryt (NB! Lagres ikke)</p>
          </div>
        </div>
      </form>
    </main>
  );
}
