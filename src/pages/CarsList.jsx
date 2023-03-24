import { useState, useEffect } from "react";
import CarCard from "../components/CarCard";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";

function CarsList() {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // fetch cars data from the server or API
    const fetchData = async () => {
      const response = await fetch(
        "https://my-json-server.typicode.com/Jmpmen/automotive-test-task/cars"
      );
      const data = await response.json();
      setCars(data);
      setFilteredCars(data);
    };
    fetchData();
  }, []);

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);
  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(filteredCars.length / carsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    const filtered = cars.filter(
      (car) =>
        car.vin.includes(query) ||
        car.year.toString().includes(query) ||
        car.make.toLowerCase().includes(query.toLowerCase()) ||
        car.model.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCars(filtered);
    setCurrentPage(1);
  };

  return (
    <div className="flex-grow">
      <SearchBar value={searchQuery} onChange={handleSearch} />
      {currentCars.map((car) => (
        <CarCard key={car.vin} car={car} />
      ))}
      <Pagination
        itemsPerPage={carsPerPage}
        totalItems={filteredCars.length}
        paginate={paginate}
        currentPage={currentPage}
        previousPage={previousPage}
        nextPage={nextPage}
      />
    </div>
  );
}

export default CarsList;
