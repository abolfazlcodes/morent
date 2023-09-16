import { CarProps } from "../interfaces/cars.interface";

type fieldValue = "category" | "capacity";

export function filterCarsHandler(
  cars: CarProps[] | undefined,
  categoriesToFilter: { field: fieldValue; values: string[] } | undefined
): CarProps[] {
  let filtered: CarProps[] = [];

  if (categoriesToFilter && cars) {
    filtered = cars?.filter((carItem) =>
      categoriesToFilter.values.some(
        (filterValue) =>
          filterValue.toLowerCase() ===
          carItem[categoriesToFilter.field].toString().toLowerCase()
      )
    );
  }

  return filtered!;
}
