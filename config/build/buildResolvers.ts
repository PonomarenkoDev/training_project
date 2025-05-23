import {createRequire} from 'module';

const require = createRequire(import.meta.url);
import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFields: ['index'],
        alias: {},
        fallback: {
            events: require.resolve('events/'),
            cookie: false,
            'set-cookie-parser': false,
            'cross-fetch': false,
        },

    }
}