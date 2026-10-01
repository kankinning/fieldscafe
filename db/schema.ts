import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
export const menus = sqliteTable("menus", {
  kind: text("kind").primaryKey(),
  objectKey: text("object_key").notNull(),
  filename: text("filename").notNull(),
  updatedAt: integer("updated_at").notNull(),
});
export const attempts = sqliteTable("login_attempts", {
  key: text("key").primaryKey(),
  count: integer("count").notNull(),
  until: integer("until").notNull(),
});
