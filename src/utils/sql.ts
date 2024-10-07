import Database from "tauri-plugin-sql-api";

export const DATABASE = Database.load('sqlite:pos.db');

export async function addEntry(table: string, columns: string[], values: any[]) {
    const placeholders = columns.map((_, index) => `$${index + 1}`).join(', ');
    const query = `INSERT INTO ${table} (${columns.join(', ')}) VALUES (${placeholders})`;
    await (await DATABASE).execute(query, values);
}

export async function editEntry(table: string, setColumns: string[], setValues: any[], conditionColumn: string, conditionValue: any) {
    const setClause = setColumns.map((col, index) => `${col} = $${index + 1}`).join(', ');
    const query = `UPDATE ${table} SET ${setClause} WHERE ${conditionColumn} = $${setColumns.length + 1}`;
    console.log(query, setClause)
    console.log(await (await DATABASE).execute(query, [...setValues, conditionValue]));
}

export async function getEntries(table: string) {
    const query = `SELECT * FROM ${table}`;
    const rows = await (await DATABASE).select(query);
    return rows;
}
