import * as Hapi from '@hapi/hapi';
import Server from '../src/server';

export const startServer = async (): Promise<Hapi.Server> => {
  return await Server.start();
};

export const stopServer = async (): Promise<void | Error> => {
  return await Server.stop();
};

