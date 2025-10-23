import { datas } from "./db";

function Cards() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 flex flex-col items-center p-10">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-purple-700 mb-3">
          🍕 Free Foods Menu
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Dadlı yeməklərimizi kəşf edin — hər zövqə uyğun seçimlər burada! 💜
        </p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {datas.map((data) => (
          <div
            key={data.id}
            className="bg-white rounded-2xl overflow-hidden border border-purple-300 shadow-lg hover:shadow-2xl hover:shadow-purple-300/60 hover:-translate-y-2 transition-all duration-300 cursor-pointer w-64 flex flex-col"
          >
            <img
              src={data.img}
              alt={data.name}
              onError={(e) =>
                (e.target.src =
                  "https://www.shutterstock.com/image-vector/error-404-page-pizza-vector-260nw-383987212.jpg")
              }
              className="w-full h-40 object-cover"
            />
            <div className="flex flex-col justify-between flex-1 p-4">
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-1 truncate">
                  {data.name}
                </h2>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {data.dsc}
                </p>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-purple-600 font-bold text-lg">
                  ${data.price}
                </span>
                <button className="bg-purple-500 text-white px-3 py-1 rounded-lg hover:bg-purple-600 transition">
                  Sifariş et
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <footer className="mt-16 text-center text-gray-500 text-sm">
        © 2025 Delicious Menu — Bütün hüquqlar qorunur.
      </footer>
    </div>
  );
}

export default Cards;
