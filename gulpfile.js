'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task( 'sass', function()
{
  gulp.src( 'app/scss/main.scss' )
    .pipe( sass().on( 'error', function( error )
      {
        console.log( error );
      } )
    )
    .pipe( gulp.dest( 'app/css' ) );
} );

gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['sass']);
})
