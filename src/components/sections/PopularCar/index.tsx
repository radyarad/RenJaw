import ProductCard from "../ProductCard";
import { cars } from "./cars";

export default function PopularCar() {
  return (
    <div>
      <div className="container pt-16 text-center">
        <h2 className="font-medium text-2xl text-[#D80032] pb-4">
          POPULAR CAR
        </h2>
        <h1 className="text-5xl font-bold leading-tight text-[#737373]">
          Choose Your Suitable Car
        </h1>
        <p className="inline-block w-max text-lg text-[#A6A6A6] mt-5 whitespace-nowrap">
          We present popular cars that are rented by customers to maximize your
          comfort on long trips.
        </p>
        <div
          className="grid gap-x-[50px] gap-y-[50px]
             grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3
             place-items-center sm:place-items-start"
        >
          {cars.map((car) => (
            <ProductCard key={car.id} {...car} />
          ))}
        </div>
      </div>
    </div>
  );
}
