export function createColumnDefs(rows) {
  if (!(Array.isArray(rows) && rows.length > 0)) return [];

  return Object.keys(rows[0]).map((field) => ({ field }));
}
