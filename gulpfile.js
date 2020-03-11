const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const minifyCSS = require('gulp-minify-css');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

// Static server
function bs() {
 serveSass();   
 browserSync.init({
     server: {
         baseDir: "./"
     }
 });
 watch("./*.html").on('change', browserSync.reload);
 watch("./sass/**/*.sass", serveSass);
 watch("./scss/**/*.scss", serveSass);
 watch("./js/*.js").on('change', browserSync.reload);
};


function serveSass() {
    return src("./sass/**/*.sass","./scss/**/*.scss")
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(dest("./css"))
        .pipe(browserSync.stream());
};    
exports.serve = bs;

// Minify-css
// gulp.task('styles', function() {
//     return gulp.src(['css/*.css'])
//     .pipe(concat('styles.min.css'))
//     .pipe(minifyCSS({
//     keepBreaks: true
//     }))
//     .pipe(gulp.dest('production/css'));
//     });