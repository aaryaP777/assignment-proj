export default function ArtistCard({ name, category, location, price }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-200">
      <h3 className="text-xl font-bold mb-2 text-gray-800">{name}</h3>
      <p className="text-gray-600 mb-1">
        {category} - {location}
      </p>
      <p className="text-gray-700 mb-4">Fee: ₹{price}</p>
      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Ask for Quote
      </button>
    </div>
  );
}
