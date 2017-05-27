// ////////////////////////////////////////////////
//
// Included taskes
//
// // /////////////////////////////////////////////


var gulp            = require('gulp'),
    minifycss       = require('gulp-minify-css'),
    sass            = require('gulp-sass'),
    browserSync     = require('browser-sync'),
    reload          = browserSync.reload,
    autoprefixer    = require('gulp-autoprefixer'),
    plumber         = require('gulp-plumber'),
    del             = require('del'),
    rename          = require('gulp-rename'),
    sourcemaps      = require('gulp-sourcemaps');



// ////////////////////////////////////////////////
//
// Configuration variables
// Set paths
//
// // /////////////////////////////////////////////

var config = {
                scss    :[ 'src/scss/**/*.scss' ],
                css     :[ 'src/css/' ],
                html    :[ 'src/**/*.html' ],
                js      :[ 'src/js/*.js'],
                build   :[ 'build/' ],
                src     :[ 'src/' ]
            };



// ////////////////////////////////////////////////
//
// Styles / Sass Tasks
//
// // /////////////////////////////////////////////

gulp.task('app',function(){

 return gulp.src(config.scss)
            .pipe(sourcemaps.init())
            .pipe(sass()
            .on('error', sass.logError))
            .pipe(autoprefixer('last 3 versions'))
            .pipe(minifycss())
            .pipe(rename({suffix: '.min'}))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(''+config.css+''))
            .pipe(reload({stream:true}));
            

});





// ////////////////////////////////////////////////
//
// HTML Tasks
//
// // /////////////////////////////////////////////

gulp.task('html', function(){
    return gulp.src(config.html)
               .pipe(reload({stream:true}));
});





// ////////////////////////////////////////////////
//
// Browser-Sync Tasks
//
// // /////////////////////////////////////////////

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: config.src
        }
    });
});



// ////////////////////////////////////////////////
//
// Build Tasks
// Create build, clean un-neccesary files and folders
//
// // /////////////////////////////////////////////

// create build
gulp.task('build:create', function(){
    return gulp.src(config.src+'**/*')
               .pipe(gulp.dest(''));
});

// Clean build folder
gulp.task('build:clean',['build:create'], function(){
    return del(['bower_components/',
                'scss/',
                'css/!(*.min.css)',
                'js/!(*.min.js)'
              ]);
});


// preview build app Tasks
gulp.task('build:start', function() {
    browserSync({
        server: {
            baseDir: config.build
        }
    });
});

// remove build folder
gulp.task('build:delete', function(res){
    return del([config.build+'/**'], res);
});

 // build task
 gulp.task('build', ['build:create', 'build:clean']);




// ////////////////////////////////////////////////
//
// Watch Tasks
// Watch any changes of the css, scripts, and html
//
// // /////////////////////////////////////////////

gulp.task ('watch', function(){

  gulp.watch(config.scss, ['app']);

  gulp.watch(config.html, ['html']);


});





// ////////////////////////////////////////////////
//
// Move Font-awesome
//
// // /////////////////////////////////////////////
gulp.task('icons', function() {
    return gulp.src('bower_components/components-font-awesome/fonts/**.*')
        .pipe(gulp.dest('src/fonts'));
});





// ////////////////////////////////////////////////
//
// Move jQuery
//
// // /////////////////////////////////////////////
gulp.task('jquery', function() {
    return gulp.src('bower_components/jquery/dist/jquery.min.js')
        .pipe(gulp.dest('src/js'));
});




// ////////////////////////////////////////////////
//
// Move Pogo Slider
//
// // /////////////////////////////////////////////
gulp.task('pogo-slider', function() {
    return gulp.src('bower_components/pogo-slider/jquery.pogo-slider.min.js')
        .pipe(gulp.dest('src/js'));
});




// ////////////////////////////////////////////////
//
// Move Lightbox
//
// // /////////////////////////////////////////////
gulp.task('lightbox2', function() {
    return gulp.src('bower_components/featherlight/src/featherlight.js')
        .pipe(gulp.dest('src/js'));
});

gulp.task('lightbox', function() {
    return gulp.src('bower_components/featherlight/src/featherlight.gallery.js')
        .pipe(gulp.dest('src/js'));
});


gulp.task('counterup', function() {
    return gulp.src('bower_components/jquery.counterup/jquery.counterup.min.js')
        .pipe(gulp.dest('src/js'));
});






// ////////////////////////////////////////////////
// Gulp Default task
// ///////////////////////////////////////////////
gulp.task('default', ['watch', 'icons', 'jquery', 'browserSync','pogo-slider','lightbox2', 'lightbox', 'counterup', 'app','html']);