import {register} from 'ts-node';
import 'tsconfig-paths/register.js';

register({
    transpileOnly: true,
    compilerOptions: {
        module: 'ESNext',
    },
});

const {default: config} = await import('./webpack.config.ts');

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

const compiler = webpack(config({mode: 'development', port: 3000}));

const server = new WebpackDevServer({open: true, port: 3000}, compiler);
server.start();