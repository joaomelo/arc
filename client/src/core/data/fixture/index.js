import { appEnviroment } from '__cli/core/meta';
import { loadFixture } from './load';

if (appEnviroment() === 'dev') loadFixture();
