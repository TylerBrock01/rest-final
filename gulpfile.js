import {src, dest,watch} from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass)
// default para compilar igual que package.json L8
export function css(done){
    src('src/scss/app.scss')
        .pipe(sass())
        .pipe(dest('build/css'))
    done()
}
//termina compilacion

//crear watch
export function dev(){
    watch('src/scss/**/*.scss', css)
}