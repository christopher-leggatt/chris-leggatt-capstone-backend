const knex = require("knex")(require("../knexfile"));

// async function getColumnsForTable(tableName, excludeColumns = []) {
//   const columns = await knex
//     .select("COLUMN_NAME")
//     .from("INFORMATION_SCHEMA.COLUMNS")
//     .where("TABLE_NAME", "=", tableName)
//     .andWhereNotIn("COLUMN_NAME", excludeColumns);

//   return columns.map((column) => `${tableName}.${column.COLUMN_NAME}`);
// }

async function getColumnsForTable(tableName, excludeColumns = []) {
  try {
    const columns = await knex
      .select("COLUMN_NAME")
      .from("INFORMATION_SCHEMA.COLUMNS")
      .where("TABLE_NAME", "=", tableName)
      .andWhereNotIn("COLUMN_NAME", excludeColumns);

    const mappedColumns = columns.map(
      (column) => `${tableName}.${column.COLUMN_NAME}`
    );
    // To include prefixes
    console.log(mappedColumns.map((mappedColumn) => `${tableName}.${mappedColumn}`));

    return mappedColumns.map((mappedColumn) => `${tableName}.${mappedColumn}`);
  } catch (err) {
    console.log(err);
  }
}

module.exports = { getColumnsForTable };
