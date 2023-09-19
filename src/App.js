export default function App(){
  return (
    <div className="bg-slate-500 grid place-content-center snap-center h-screen">

    <h1 className="text-yellow-500 text-4xl m-6">CSS Card</h1>
    {/* first card */}
    <div >
      <div className="p-6 max-w-sm mx-auto  hover:bg-slate-200 cursor-pointer  bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
        <img className="h-12 w-12" src="https://upload.wikimedia.org/wikipedia/commons/7/76/Physics_wallah_logo.jpg?20211017183441" alt="" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">
          Tailwind CSS
          <p className="text-slate-500 text-base">By Hitesh Sir</p>
          </div>
        </div>
        </div>
    </div>
    {/* second card */}
    {/* <div className="mt-2">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl">
        <div className=" flex justify-center items-center pb-2">
          <img className="h-12 w-12 items-center" src="https://upload.wikimedia.org/wikipedia/commons/7/76/Physics_wallah_logo.jpg?20211017183441" alt="" />
        </div>
        <div className="">
          <div className="flex justify-center  text-xl font-medium text-black">Tailwind CSS</div>
          <p className="text-center">By Hitesh Sir</p>
        </div>

      </div>
    </div> */}

    <button className="bg-sky-500 text-center mt-2 text-white text-base p-2 rounded-xl dark:bg-red-600 hover:bg-white hover:text-black">Buy now</button>

    <div className="text-center my-4 bg-yellow-500 rounded-xl">
      <p className="text-white md:text-green-500 sm:text-red-600">Lorem ipsum dolor sit amet.</p>
    </div>

    <div className="mt-3">
      <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl">
        <div className="md:flex">
        <div>
          <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://images.pexels.com/photos/10172972/pexels-photo-10172972.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div className="p-8">
          <div className="h-12 uppercase tracking-widest text-sm text-center text-indigo-500 font-semibold">An Awensome Card</div>
          <a className="block mt-1 text-lg font-medium text-black hover:text-blue-700" href="#"> Tailwind CSS is amazing once you understand the <span className="bg-yellow-500 p-[2px] px-[14px]">power</span> of it</a>
          <p className="mt-2 text-slate-500">Lorem ipsum dolor sit amet.</p>
        </div>
        </div>
      </div>
    </div>

    </div>
  )
}