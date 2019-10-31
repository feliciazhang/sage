export const UNITS = {
  CUP: "cups",
  OZ: "oz",
  TSP: "tsp",
  TBSP: "tbsp",
  NA: "n/a"
}

export const UNITS_DROPDOWN = UNITS.values().map(unit => ({ value: unit, label: unit }))
