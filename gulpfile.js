var gulp = require('gulp');

gulp.task('pranie', function() {
console.log('robię pranie');

});
//do zmiennych różne paczuszki
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps')


//określamy rodzaj kodu, później ponownie odpalamy watcha
var sassOption = {
    outputStyle: 'compact',
}



var input = 'sass/**/*.scss'; //pliki które wypluwa i kompiluje
var output = 'css/'; //miejsce w rurze gdzie jest wpluwa

gulp.task('sass', function(){
    return gulp
    .src(input)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOption).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(output))
});

gulp.task('watch', function(){
    gulp.watch(input, ['sass'])
});
