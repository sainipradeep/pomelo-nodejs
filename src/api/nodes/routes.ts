import * as Hapi from '@hapi/hapi';
import NodesController from './controller';
import validate from './validate';
import Logger from '../../helper/logger';
import IRoute from '../../helper/route';
import * as Joi from 'joi';


export default class UserRoutes implements IRoute {
    public async register(server: Hapi.Server): Promise<any> {
        return new Promise(resolve => {
            Logger.info('NodesRoutes - Start adding routes');

            const controller = new NodesController();
            server.route([
                {
                    method: 'POST',
                    path: '/api/nodes/parser',
                    handler: controller.childParsing,
                    options: {
                        validate: <object>validate.formatChildren(),
                        description: 'Method return formatted child nodes.',
                        tags: ['api'],
                        auth: false,
                    }
                }
            ]);

            Logger.info('NodesRoutes - Finish adding routes');

            resolve(1);
        });
    }
}
