type fieldValue = "category" | "capacity";

export function filterCarsHandler<T>(
  cars: T[] | undefined,
  categoriesToFilter: { field: fieldValue; values: string[] } | undefined
): T[] {
  let filtered: T[] = [];

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
