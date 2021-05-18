// 1. 引入gulp
const gulp = require('gulp')

// 2. 定义任务
// gulp.task(任务名, 回调函数)
// 当我们在控制台上执行 gulp 任务名 的时候, 对应gulpfile.js中定义的指定任务的回调就会被调用
// 注意: 如果任务名叫做default,那么执行任务的时候,可以不写任务名
// gulp.task('default', async () => {
//   console.log('default 任务执行了')
// })

// 引入jshint插件,对js代码进行规范检查
const jshint = require('gulp-jshint')
// 引入babel插件,对js代码进行编译.将es6模块化的代码编译成commonjs
const babel = require('gulp-babel')
// 引入browserify将commonjs编译成浏览器任务的代码
const browserify = require('gulp-browserify')
// 引入插件,用于修改文件的名称
const rename = require('gulp-rename')
// 引入插件,将js代码进行压缩混淆
const uglify = require('gulp-uglify')
// 引入插件,将less编译成css
const less = require('gulp-less')
// 引入插件,处理css的兼容性问题
const LessAutoprefix = require('less-plugin-autoprefix')
const autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] }) // 所有内核的浏览器往前兼
// 引入插件, 合并css文件
const concat = require('gulp-concat')

// 压缩css文件
const cssmin = require('gulp-cssmin')

// 压缩html
const htmlmin = require('gulp-htmlmin')

// 自动化需要的插件
// 重新刷新的插件
const livereload = require('gulp-livereload')
// 开启服务器的插件
const connect = require('gulp-connect')
// 自动打开浏览器的插件
const opn = require('opn')

// 定义任务
// 定义一个使用jshint检查js语法规范的任务
gulp.task('jshint', function () {
  // 将你的任务的任务代码放在这
  return gulp
    .src('./src/js/*.js') // 读取指定路径下的js文件
    .pipe(
      jshint({
        esversion: 6, //使用es6语法,
        asi: true, //可以不添加分号
        eqeqeq: true, // 必须使用 全等===
      })
    )
    .pipe(jshint.reporter('default')) // gulp插件中查看
})

// 定义任务,编译代码
gulp.task('babel', () =>
  gulp
    .src('./src/js/*.js')
    .pipe(
      babel({
        //进行语法转换
        presets: ['@babel/env'],
      })
    )
    .pipe(gulp.dest('build/js')) //输出到指定目录
    .pipe(livereload())
)

//定义任务,将commonjs编译成浏览器认识的
gulp.task('browserify', function () {
  return gulp
    .src('./build/js/app.js')
    .pipe(browserify()) //将CommonJs语法转换为浏览器能识别的语法
    .pipe(rename('built.js')) //为了防止冲突将文件重命名
    .pipe(gulp.dest('build/js')) //输出到指定位置
    .pipe(livereload())
})

gulp.task('uglify', function () {
  return gulp
    .src('build/js/built.js')
    .pipe(uglify()) //压缩js
    .pipe(rename('dist.min.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(livereload())
})

gulp.task('less', function () {
  return gulp
    .src('./src/less/*.less')
    .pipe(
      less({
        plugins: [autoprefix], //自动扩展前缀
      })
    )
    .pipe(gulp.dest('./build/css'))
    .pipe(livereload())
})

// 用来合并文件(js也可以合并,只是目前不需要)
gulp.task('concat', function () {
  return gulp
    .src('./build/css/*.css')
    .pipe(concat('built.css'))
    .pipe(gulp.dest('./build/css'))
    .pipe(livereload())
})

// 将css文件,进行压缩
gulp.task('cssmin', function () {
  return gulp
    .src('build/css/built.css')
    .pipe(cssmin())
    .pipe(rename('dist.min.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload())
})

gulp.task('htmlmin', () => {
  return gulp
    .src('src/index.html')
    .pipe(
      htmlmin({
        collapseWhitespace: true, //去除空格
        removeComments: true, //去除注释
      })
    )
    .pipe(gulp.dest('dist'))
    .pipe(livereload())
})

// 配置自动化的任务

gulp.task('watch', function () {
  //1. 在所有可能要执行任务后面加上 .pipe(livereload());
  //2. 配置watch任务
  livereload.listen()
  //通过自己服务器打开项目，自动刷新
  connect.server({
    root: 'dist',
    port: 3000,
    livereload: true, // 自动刷新
  })
  //自动打开浏览器
  opn('http://localhost:3000/index.html')
  //监视指定文件（第一个参数），一旦文件发生变化，就自动执行后面的任务（第二个参数）
  gulp.watch('src/less/*.less', gulp.series(['less', 'concat', 'cssmin']))
  gulp.watch(
    './src/js/*.js',
    gulp.series(['jshint', 'babel', 'browserify', 'uglify'])
  )
  gulp.watch('./src/index.html', gulp.series('htmlmin'))
})
// 当在控制台执行了gulp执行. 默认执行default任务.按照书写书序,一次执行jshint任务->babel->browserify任务
gulp.task(
  'default',
  gulp.series(
    'jshint',
    'babel',
    'browserify',
    'uglify',
    'less',
    'concat',
    'cssmin',
    'htmlmin',
    'watch'
  )
)
