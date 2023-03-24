import { Link } from "react-router-dom";

function CarCard({ car }) {
  const { image, vin, year, make, model, price } = car;

  return (
    <Link
      to={`/cars/${vin}`}
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-screen hover:bg-gray-100 my-5"
    >
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={image}
        alt={`${year} ${make} ${model}`}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{`${year} ${make} ${model}`}</h5>
        <p className="mb-3 font-normal text-gray-700">VIN: {vin}</p>
        <p className="mb-3 font-normal text-gray-700">Price: {price}</p>
      </div>
    </Link>
  );
}

export default CarCard;
