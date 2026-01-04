export const Card = ({ title, value, color }) => (
  <div
    className="bg-white shadow rounded-xl p-6 border-l-4"
    style={{ borderColor: color }}
  >
    <p className="text-gray-500">{title}</p>
    <h2 className="text-3xl font-bold">{value}</h2>
  </div>
);
