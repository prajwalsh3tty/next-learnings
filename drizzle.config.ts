//import type { Config } from 'drizzle-kit';
//
//export default {
//  schema: './lib/db/schema.ts',
//  driver: 'better-sqlite3',
//  dbCredentials: {
//    url: './sqlite.db',
//  },
//  verbose: true,
//  strict: true,
//} satisfies Config;
//
import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  out: './drizzle',
  schema: './lib/db/schema.ts',
  dialect: 'sqlite',
  dbCredentials: {
     url: './sqlite.db',
  },
});
