# accordion-menu

Aquí puede verse la [demostración](https://aitorrodriguez990.github.io/accordion-menu/) del menú acordeón.

## Características

* Webpack 4
* ES6
* Babel
* ITCSS
* SASS

## Instalación

```bash
npm install
```


## Iniciar en local

```bash
npm run dev
```


## Generar ficheros de producción

```bash
npm run build
```

### Publicar en GIT (gh-pages)

* Eliminar `dist` del fichero `.gitignore`
* Añadir la carpeta y hacer commit de la carpeta dist `git add dist && git commit -m "Publicar en producción"`
* Hacer push de los cambios en la rama gh-pages: `git subtree push --prefix dist origin gh-pages`
