import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getCarData as getCarApi } from "../../services/apiCars";
import { CarProps } from "../../interfaces/cars.interface";

export function useCar() {
  const { carId } = useParams();

  const { isLoading, data: carData } = useQuery<CarProps, unknown>({
    queryFn: () => getCarApi(carId!),
    queryKey: [`car-${carId}`],
  });

  return { isLoading, carData };
}
