const mix = require('laravel-mix');

if( mix.inProduction() ){
    mix.options({
        terser: {
            terserOptions: {
                compress: {
                    drop_console: true
                }
            }
        },
        uglify: {
            uglifyOptions: {
                compress: false,
                mangle: true,
                output: {
                    comments: false,
                    beautify: false
                }
            },
        }
    });
    //mix.version();
}

mix.webpackConfig({

    module: {
        rules: [
            {
                test:  /\.js$/,
                enforce: 'post',
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                        }
                    },
                ]
            }
        ]
    }

});
mix.setPublicPath( 'styles/dist' )
    .setResourceRoot( '/styles/dist/' )
    .sass( 'assets/scss/index.scss', 'theme-styles.css' )