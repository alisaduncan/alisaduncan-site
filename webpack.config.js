module.exports = {
  module : {
    rules: [
      {
        test   : /tailwind\.scss$/,
        loader : 'postcss-loader',
        options: {
          plugins: () => [
            require('tailwindcss')('./tailwind.config.js'),
            require('autoprefixer'),
          ]
        }
      }
    ]
  }
};

