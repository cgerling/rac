import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import cssModules from 'postcss-modules'
import autoprefixer from 'autoprefixer'
import uglify from 'rollup-plugin-uglify'

const cssExportMap = {}

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
    sourcemap: true,
  },
  external: ['react'],
  plugins: [
    resolve(),
    postcss({
      plugins: [
        autoprefixer(),
        cssModules({
          getJSON(id, exportTokens) {
            cssExportMap[id] = exportTokens
          },
          getExportedName: false,
          getExport(id) {
            return cssExportMap[id]
          },
          extract: 'dist/styles.css',
        }),
      ],
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    commonjs(),
    uglify,
  ],
}
