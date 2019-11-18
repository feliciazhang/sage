export const listWithId = (list) => (
  list.map((item, idx) => ({ id: idx, ...item }))
)

export const withoutId = (list) => (
  list.map(({ id, ...item }) => item)
)
