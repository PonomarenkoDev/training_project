import path from "path";
import webpack from 'webpack';
import {fileURLToPath} from 'url';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig.ts";
import {BuildEnv, BuildPaths} from "./config/build/types/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    }

    const mode = env.mode || 'development';
    const PORT = env.port || 3000;

    const isDev: boolean = mode === 'development';

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
        target: 'web',
    });

    return config
};