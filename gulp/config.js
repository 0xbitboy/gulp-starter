var src = './';
var pro = 'assets';
var dev = 'src';

module.exports = {
  browsersync: {
    dev: {
      server: {
        baseDir: src,
        directory: true,
        index: "index.html",
        routes: {
          "/index": "./"
        }
      },
      startPath: "/index",
      
      open: "external",
      host: "127.0.0.1",
      port: 9999,
      files: [
        dev + '/css/*.css',
        dev + '/js/*.js',
        dev + '/images/**',
        dev + '/fonts/*'
      ]
    },
    production: {
      server: {
        baseDir: [pro]
      },
      port: 9998
    }
  },
  compass: {
    src:  dev + '/sass/**/*.{sass,scss}',
    dest: dev + '/css',
    options: {
      css: dev + '/css',
      sass: dev + '/sass',
      image: dev + '/img',
      style: 'expanded'
    }
  },
  autoprefixer: {
    browsers: [
      'Chrome >= 20',
      'Firefox >= 24',
      'Explorer >= 8',
      'Safari >= 6',
      'Opera >= 12',
      "Android 2.3",
      'Android >= 4',
      "iOS >= 6"
    ],
    cascade: true,
    remove: true
  },
  images: {
    src:  dev + '/img/**/*',
    dest: pro + '/img'
  },
  del: {
    src: [pro]
  },
  webp: {
    src: pro + '/img/**/*.{jpg,jpeg,png}',
    dest: pro + '/img/',
    options: {}
  },
  copy: {
    fonts: {
      src:  dev + '/fonts/*',
      dest: pro + '/fonts'
    },
    css: {
      src:  dev + '/css/*',
      dest: pro + '/css'
    }
  },
  base64: {
    src: dev + '/css/*.css',
    dest: dev + '/css',
    options: {
      baseDir: dev,
      extensions: ['png'],
      maxImageSize: 20 * 1024, // bytes
      debug: false
    }
  },
  watch: {
    sass: dev + '/sass/**/*.{sass,scss}',
    js: dev + '/js/**/*.js',
    images:  dev + '/img/**/*'
  },
  jshint: {
    src: dev + '/js/*.js'
  },
  optimize: {
    css: {
      src:  dev + '/scss/**/*.{sass,scss}',
      dest: pro + '/css/',
      options: {
        css: pro + '/css',
        sass: dev + '/sass',
        image: pro + '/img',
        style: 'compressed',
        sourcemap: false
      }
    },
    js: {
      src:  dev + '/js/**/*.js',
      dest: pro + '/js/',
      options: {
        mangle: { except: ['require'] },
        compress: {
          drop_console: true
        }
      }
    },
    images: {
      src:  dev + '/img/**/*.{jpg,jpeg,png,gif}',
      dest: pro + '/img/',
      options: {
        optimizationLevel: 9,
        progessive: true,
        interlaced: true
      }
    },
    html: {
      src: src + '/**/*.html',
      dest: src,
      options: {
        collapseWhitespace: true
      }
    }
  },
  upload: {
    src: [pro + '/**/*.{html,jsp,js,css,jpg,jpeg,png,gif,eot,svg,ttf,woff,woff2}', 'views/**/*.{html,jsp,htm}'],
    options: {
      host: '10.28.133.28',
      port: '58022',
      user: 'root',
      pass: '!@#$&*()',
      remotePath: '/opt/hermes/resin_webmail_8888/webapps/apollo/testupload/'
    }
  }
};
