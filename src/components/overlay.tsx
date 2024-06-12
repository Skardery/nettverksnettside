const Overlay = ({ item, onClose }) => (
    <div className="fixed z-100 right-0 top-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="w-2/3 h-2/3 bg-white rounded-lg p-4">
        <h2 className="text-3xl font-bold text-blue-800">{item.name}</h2>
        <div className="w-full flex justify-between">
            <p className="mt-2 w-1/2">{item.description}</p>
            <div style={{backgroundImage: `url(${item.imgurl})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',}} className="w-1/2 h-[24rem] mb-4"></div>
        </div>
        <button className="bg-blue-800 px-10 py-2 font-bold text-white rounded hover:bg-white hover:text-blue-800" onClick={onClose}>Lukk</button>
      </div>
    </div>
  );

export default Overlay;