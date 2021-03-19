import path from 'path';
import dotenv from 'dotenv';

const envFile = path.resolve(process.cwd(), '.env');
dotenv.config({ path: envFile });
