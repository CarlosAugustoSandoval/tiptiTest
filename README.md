# tiptitest

This template should help get you started developing with Vue 3 in Vite.

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```


## Diseño, Suposiciones del problema y comentarios. 

Se presenta un solo layout básico con app bar, footer, menú principal vertical y la zona de contenido,  se incluyen páginas de contenido estático como son Contacto, quienes somos, error 404; con contenido dinámico está usuarios (trae registros incluidos en un archivo json) y Home la cual contiene el componente donde se Sentra la idea de negocio.

Él proyecto está conformado por las carpetas y archivos generales de su tipo, se agregaron carpetas de:

1. data (colecciones de datos).
2. models para incluir las interfaces, clases o ctos (estos dos últimos no se implementaron).
3. plugins para extender o configurar paquetes de terceros o propios.
4. layouts para crear la vista base de la aplicación (solo se implementó una).
5. modules para separar funcionalidades completas teniendo en cuenta la organización del proyecto y como está pensada la idea de negocios.

Teniendo en cuenta el planteamiento del problema, se entiende que un usuario que ingresa al Home de la aplicación pueda filtrar y encontrar el hotel más económico según las fechas que escoja para reservar y el tipo de cliente (regular o recompenza) y según los valores que están dispuestos para los días entre semana y los días de fines de semana, se genera un resultado de un hotel que tenga el valor mas económico y si llegado el caso hay dos o más hoteles con el mismo valor, se genere el hotel que tenga más estrellas.

Para finalizar, se implementaron los siguientes intems.
1. se utilizó vue3 typeScript, Script Setup, sass, scss, pinia (con plugins de persistencia), vue router.
2. Se realizó el componente listar hoteles y funcionalidad de filrar los mismos mediante TDD (carpeta components/__tests__).
2. Se instaló moment para el manejo de fechas, las funcionalidades usadas, se hicieron en archivo aparte (modules/hoteles/utilities).
3. Se implementaron, componentes, props en componentes, componentes con v-model, slots, props-slots, Transitions, Teleport. 
