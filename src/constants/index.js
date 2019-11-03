export const UNITS = {
  CUPS: "cups",
  OZ: "oz",
  TSP: "tsp",
  TBSP: "tbsp",
  NA: "n/a"
}

export const UNITS_DROPDOWN = Object.values(UNITS).map(unit => ({ value: unit, label: unit }))
