export default function Table({ data }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-transparent">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-5xl font-extrabold mb-10 tracking-wide text-center">
          Manager Dashboard
        </h2>
        <table className="w-[800px] bg-white bg-opacity-90 rounded-xl shadow-2xl text-2xl">
          <thead>
            <tr>
              <th className="px-8 py-5 font-bold text-xl text-center">Name</th>
              <th className="px-8 py-5 font-bold text-xl text-center">
                Category
              </th>
              <th className="px-8 py-5 font-bold text-xl text-center">City</th>
              <th className="px-8 py-5 font-bold text-xl text-center">Fee</th>
              <th className="px-8 py-5 font-bold text-xl text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: any, idx: number) => (
              <tr
                key={item.id}
                className={`border-t ${
                  idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-blue-50 transition`}
              >
                <td className="px-8 py-4 text-center">{item.name}</td>
                <td className="px-8 py-4 text-center">{item.category}</td>
                <td className="px-8 py-4 text-center">{item.location}</td>
                <td className="px-8 py-4 font-semibold text-center">
                  ₹{item.price}
                </td>
                <td className="px-8 py-4 text-center">
                  <button className="text-blue-700 font-semibold border border-blue-700 px-4 py-2 rounded-lg hover:bg-blue-100 transition">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
