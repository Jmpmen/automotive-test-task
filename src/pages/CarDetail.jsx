import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Gallery from '../components/Gallery'
import History from '../components/History'

function CarDetail() {
    const [car, setCar] = useState(null);
    const { vin } = useParams();

    useEffect(() => {
        // fetch car data from the server or API
        const fetchData = async () => {
          const response = await fetch("https://my-json-server.typicode.com/Jmpmen/automotive-test-task/cars");
          const data = await response.json();
          const carData = data.filter(car => car.vin === vin)
          setCar(carData[0]);
        };
        fetchData();
      }, []);

    if (!car) {
      return <div>Loading...</div>;
    }
    
    return (
      <div className="flex-grow">
        <h2 className="text-2xl font-semibold text-gray-900 my-10 mx-10">{car.year} {car.make} {car.model}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-10">
          {car.gallery.map((image, index) => (
            <Gallery key={index} src={image} alt={car.make + " " + car.model} />
          ))}
        </div>
        <p className="text-md text-gray-900 px-10">VIN: {car.vin}</p>
        <h3 className="text-md font-semibold text-gray-900 mt-10 mx-10">Ownership History</h3>
        <ol className="relative border-l border-gray-200 mx-10">
          {car.ownershipHistory.map((owner, index) => (
            <History key={index} date={`${owner.from} - ${owner.to}`} title={owner.owner}/>
        ))}
        </ol>
        <h3 className="text-md font-semibold text-gray-900 mt-10 mx-10">Accident History</h3>
        <ol className="relative border-l border-gray-200 mx-10">
          {car.accidentHistory.map((accident, index) => (
            <History key={index} date={accident.date} title={accident.description}/>
        ))}
        </ol>
        <p className="text-lg font-semibold text-gray-900 mt-10 mx-10">Price: {car.price}</p>
      </div>
    );
  };

  export default CarDetail;
