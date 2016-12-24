var gulp = require('gulp');
var shell = require('gulp-shell');

// Tarea para la construcción libro
gulp.task('build', function(){
  return gulp.src('').pipe(shell(['./scripts/generate-gitbook']));
});

gulp.task('deploy', ['build'], function(){
  return gulp.src('').pipe(shell(['./scripts/deploy-gitbook']));
});


gulp.task('wikibuild', function() {
   return gulp.src('').pipe(shell(['./scripts/generate-wiki']));
});

gulp.task('wikideploy',['wikibuild'], function() {
   return gulp.src('').pipe(shell(['./scripts/deploy-wiki']));
});
