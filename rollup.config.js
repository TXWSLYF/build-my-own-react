// import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'

const plugins = [
  typescript({
    tsconfig: 'tsconfig.json',
    removeComments: true,
    useTsconfigDeclarationDir: true,
  }),
//   terser({
//     include: ['fre.js'],
//   }),
]

export default {
  input: 'src/index.tsx',
  output: [
    { file: 'dist/my-own-react.umd.js', format: 'umd', name: 'myOwnReact', sourcemap: true },
    // { file: 'dist/fre.js', format: 'esm', sourcemap: true },
    // { file: 'dist/fre.esm.js', format: 'esm', sourcemap: true },
  ],
  plugins,
}
