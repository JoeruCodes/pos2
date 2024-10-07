// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri_plugin_sql::{Migration, MigrationKind};

fn main() {
  let migration = vec![Migration{
    version: 1,
    description: "Init DB",
    sql: "CREATE TABLE IF NOT EXISTS TaxTypes (value TEXT PRIMARY KEY); INSERT OR IGNORE INTO TaxTypes (value) VALUES ('standard'), ('combined'); CREATE TABLE IF NOT EXISTS DayOfWeek (value TEXT PRIMARY KEY); INSERT OR IGNORE INTO DayOfWeek (value) VALUES ('all_days'), ('monday'), ('tuesday'), ('wednesday'), ('thursday'), ('friday'), ('saturday'), ('sunday'); CREATE TABLE IF NOT EXISTS CompanyInformation (company_information TEXT PRIMARY KEY NOT NULL UNIQUE, tax_number TEXT NOT NULL, show_inc_exc_tax BOOLEAN NOT NULL); CREATE TABLE IF NOT EXISTS CustomerTypes (name TEXT PRIMARY KEY NOT NULL UNIQUE, description TEXT NOT NULL, discount REAL NOT NULL); CREATE TABLE IF NOT EXISTS Discount (reason TEXT PRIMARY KEY NOT NULL UNIQUE, default_value TEXT NOT NULL); CREATE TABLE IF NOT EXISTS NoSaleReason (reason TEXT PRIMARY KEY NOT NULL UNIQUE); CREATE TABLE IF NOT EXISTS OpeningHours (location TEXT PRIMARY KEY NOT NULL UNIQUE, day_of_week TEXT NOT NULL, FOREIGN KEY(day_of_week) REFERENCES DayOfWeek(value)); CREATE TABLE IF NOT EXISTS RefundReason (description TEXT PRIMARY KEY NOT NULL UNIQUE, return_to_stock BOOLEAN NOT NULL); CREATE TABLE IF NOT EXISTS StockMovementReason (reason TEXT PRIMARY KEY NOT NULL UNIQUE); CREATE TABLE IF NOT EXISTS TaxRates (name TEXT PRIMARY KEY NOT NULL UNIQUE, percentage REAL NOT NULL, description TEXT NOT NULL, tax_type TEXT NOT NULL, FOREIGN KEY(tax_type) REFERENCES TaxTypes(value)); CREATE TABLE IF NOT EXISTS TenderTypes (name TEXT PRIMARY KEY NOT NULL UNIQUE, description TEXT NOT NULL, classification TEXT NOT NULL);",
    kind: MigrationKind::Up
  }];
  tauri::Builder::default()
      .plugin(tauri_plugin_sql::Builder::default().add_migrations("sqlite:pos.db", migration).build())
      .run(tauri::generate_context!())
      .expect("error while running tauri application");
}
