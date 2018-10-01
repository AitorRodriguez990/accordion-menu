# accordion-menu

Aquí puede verse la [demostración](https://aitorrodriguez990.github.io/accordion-menu/) del menú acordeón.

## Características

* Webpack 4
* ES6
* Babel
* ITCSS
* SASS

## Instalación

```
git clone https://github.com/AitorRodriguez990/accordion-menu.git
cd accordion-menu
npm install
```


## Iniciar en local

```
npm run dev
```


## Generar ficheros de producción

```
npm run build
```

### Publicar en GIT (gh-pages)

* Eliminar la línea `dist` del fichero `.gitignore` para que git detecte cambios en esta carpeta.
* Añadir la carpeta y hacer commit de la carpeta dist: `git add dist && git commit -m "Publicar en producción"`.
* Hacer push de los cambios en la rama gh-pages: `git subtree push --prefix dist origin gh-pages`.
