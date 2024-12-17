export const describeColumns = (rows) => {
  const lookup = {};

  if (!(Array.isArray(rows) && rows.length > 0)) return lookup;

  rows.forEach((row) => {
    Object.keys(row).forEach((field) => {
      const value = row[field];

      const type = typeof value;

      if (!(field in lookup)) lookup[field] = { values: new Set(), types: {}, field };

      const { values, types } = lookup[field];

      values.add(value);

      if (!(type in types)) types[type] = 0;

      types[type]++;
    });
  });

  const getType = (types) =>
    Object.entries(types).sort(([, a], [, b]) => b - a)[0][0] === "number" ? "numericColumn" : null;

  return Object.values(lookup).map(({ values, types, ...rest }) => ({
    values: new Set([...values].sort()),
    type: getType(types),
    types,
    ...rest,
  }));
};
