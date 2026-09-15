import { drizzle } from 'drizzle-orm/singlestore/driver';
import { openDatabaseSync } from 'expo-sqlite';
import * as schema from './schemas';

const expoDb = openDatabaseSync('FinGestDb.db')

export const db = drizzle(expoDb, {schema})
