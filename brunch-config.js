exports.config = {
  npm: {
    enabled: true
  },

  files: {
    javascripts: {
      joinTo: 'app.js'
    },
    stylesheets: {
      joinTo: {
        'app.css': /^app\/styles/
      }
    }
  },

  plugins: {
    postcss: {
      processors: [
        require('autoprefixer')(['last 8 versions'])
      ]
    },

    sass: {
      options: {
        includePaths: ['node_modules']
      }
    },

    static: {
      processors: [
        require('html-brunch-static')({
          handlebars: {
            enableProcessor: true,
            helpers: {
              updated_time() {
                return new Date().toISOString();
              },
              join(context, block) {
                return context.join(block.hash.delimiter);
              }
            }
          }
        })
      ]
    }
  }
}