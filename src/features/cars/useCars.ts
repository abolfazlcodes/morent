import { useQuery } from "@tanstack/react-query";
import { getCars as getCarsApi } from "../../services/apiCars";
import { CarProps } from "../../interfaces/cars.interface";

export function useCars() {
  const { isLoading, data: cars } = useQuery<CarProps[], unknown>({
    queryFn: getCarsApi,
    queryKey: ["cars"],
  });

  return { isLoading, cars };
}
