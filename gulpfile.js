var gulp = require("gulp"),
    sass = require("gulp-sass"),
    uglify = require("gulp-uglifyjs"),
    concat = require("gulp-concat"),
    minifyCSS = require("gulp-minify-css");

function p(path) {
    return __dirname + (path.charAt(path.length - 1) === "/" ? "" : "/") + path;
}

gulp.task("uglify", function () {
    gulp.src([
        p("assets/js/lib/alertify/alertify.min.js"),
        p("assets/js/lib/sh/shCore.js"),
        p("assets/js/lib/sh/shBrushJScript.js"),
        p("assets/js/lib/sh/shBrushXml.js"),
        p("assets/js/lib/sh/shBrushBash.js"),
        p("assets/js/examples.js")
    ])
        .pipe(concat("main.js"))
        .pipe(uglify())
        .pipe(gulp.dest(p("assets/js")));
});

gulp.task("css", function () {
    gulp.src([
        p("assets/js/lib/sh/shCore.css"),
        p("assets/js/lib/sh/shCoreDefault.css"),
        p("assets/css/examples.css")
    ])
        .pipe(concat("main.css"))
        .pipe(minifyCSS())
        .pipe(gulp.dest(p("/assets/css")));
});

gulp.task("build", ["css", "uglify"]);

gulp.task("watch", function () {
    gulp.watch(p("assets/css/examples.css"), ["css"]);
    gulp.watch(p("assets/js/examples.js"), ["uglify"]);
});