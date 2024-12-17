export const getEveryValue = (rows) => {
  if (!(Array.isArray(rows) && rows.length > 0)) return {};

  const store = {};

  rows.forEach((row) => {
    Object.keys(row).forEach((column) => {
      const value = row[column];

      if (!(column in store)) store[column] = new Set();

      store[column].add(value);
    });
  });

  return Object.fromEntries(Object.entries(store).map(([column, set]) => [column, new Set([...set].sort())]));
};
