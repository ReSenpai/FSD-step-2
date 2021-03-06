const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');


const PATHS = {
   src: path.join(__dirname, '../src'),
   dist: path.join(__dirname, '../dist'),
   assets: 'assets/',
   img: path.join(__dirname, '../src/modules/*')
}


const PAGES_DIR = `${PATHS.src}/pug/`;
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'));
// const pagesUiKit = `${PATHS.src}/pages/`;
// const uiKit = fs.readFileSync(pagesUiKit).filter(fileName => fileName.endsWith('.pug'));


module.exports = {

    externals: {
        paths: PATHS
    },
    entry: {
        app: PATHS.src
        // lk: `${PATHS.src}/lk.js`
    },
    output: {
        // filename: `${PATHS.assets}js/[name].[hash].js`,
        filename: `${PATHS.assets}js/[name].js`,
        path: PATHS.dist,
        publicPath: '/'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendors',
                    test: /node_modules/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },
    module: {
        rules: [{
            test: /\.pug$/,
            loader: 'pug-loader'
        },
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loader: {
                    scss: 'vue-style-loader!css-loader!sass-loader'
                }
            }
        },
        {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]'
            }
        },
        // {
        //     test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        //     loader: 'file-loader',
        //     options: {
        //         name: '[name].[ext]'
        //     }
        // },
        {
            test: /\.scss$/,
            use: [
                "style-loader",
                MiniCssExtractPlugin.loader,
                {
                   loader: 'css-loader',
                   options: { sourceMap: true }
                }, {
                    loader: 'postcss-loader',
                    options: { sourceMap: true, config: { path: `${PATHS.src}/js/postcss.config.js` } }  
                }, {
                    loader: 'sass-loader',
                    options: { sourceMap: true } 
                }
            ]
        },
        {
            test: /\.css$/,
            use: [
                "style-loader",
                MiniCssExtractPlugin.loader,
                {
                   loader: 'css-loader',
                   options: { sourceMap: true }
                }, {
                    loader: 'postcss-loader',
                    options: { sourceMap: true, config: { path: `./postcss.config.js` } }  
                }
            ]
        }]
    },
    resolve: {
        alias: {
            '~' : 'src',
            'vue$' : 'vue/dist/vue.js'
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            // filename: `${PATHS.assets}css/[name].[hash].css`,
            filename: `${PATHS.assets}css/[name].css`,
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            template: `${PATHS.src}/index.html`,
            filename: './index.html'
            // inject: false
        }),
        new HtmlWebpackPlugin({
            template: `${PATHS.src}/pug/colors_type.pug`,
            filename: './pages/colors_type.html'
            // inject: false
        }),
        new CopyWebpackPlugin([
            { from: `${PATHS.img}/*.svg`, to: `${PATHS.assets}img/[name].[ext]` },
            { from: `${PATHS.img}/*.jpg`, to: `${PATHS.assets}img/[name].[ext]` },
            { from: `${PATHS.img}/*.png`, to: `${PATHS.assets}img/[name].[ext]` },
            { from: `${PATHS.img}/*.gif`, to: `${PATHS.assets}img/[name].[ext]` },
            { from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts` },
            { from: `${PATHS.src}/static`, to: '' }
        ]),
        ...PAGES.map(page => new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/${page}`,
            filename: `./${page.replace(/\.pug/,'.html')}`
        })),
        // ...uiKit.map(page => new HtmlWebpackPlugin({
        // template: `${pagesUiKit}/${page}`,
        // filename: `./${page.replace(/\.pug/,'.html')}`
        // }))
    ],
}