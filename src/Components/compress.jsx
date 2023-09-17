const path = require('path');

module.exports = {
  // ...other Webpack configuration options

  module: {
    rules: [
      // ...other rules

      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader', // or 'url-loader' if you prefer to inline small images as data URLs
            options: {
              name: '[name].[ext]',
              outputPath: 'images/', // Customize the output path for compressed images
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65, // Adjust the compression quality (0-100)
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90], // Adjust the compression quality (0-1)
                speed: 4, // Adjust the compression speed (1-11)
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75, // Adjust the compression quality (0-100)
              },
            },
          },
        ],
      },
    ],
  },
};
