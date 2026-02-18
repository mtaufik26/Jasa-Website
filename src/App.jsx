function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="rounded-2xl bg-white p-8 shadow-xl text-center">
        <h1 className="text-4xl font-bold text-red-800 mb-4 ">
          Tailwind v4 Berhasil! 🚀
        </h1>
        <p className="text-gray-600">
          Kalau tulisan ini berwarna cokelat kopi dan berada di tengah, 
          berarti instalasi kamu sudah aman tanpa file config.
        </p>
        <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all shadow-md hover:shadow-lg">
          Mantap!
        </button>
      </div>
    </div>
  )
}

export default App

