var gulp = require("gulp"),
    sass = require("gulp-sass"),
    minifyCSS = require("gulp-minify-css");


gulp.task("sass", function() {
    gulp.src(__dirname + "/assets/sass/main.scss")
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(gulp.dest(__dirname + "/assets/css"));
});

gulp.task("build", ["sass"]);

gulp.task("watch", function() {
    gulp.watch(__dirname + "/assets/sass/**/*.scss", ["sass"]);
});