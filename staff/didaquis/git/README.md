# Resetting local develop with upstream/develop

Toda la magia ocurre así:

El comando reset de Git te permiten descartar el contenido de una rama e igualarla al contenido de una rama en concreto. En este ejemplo, descartamos el contenido de la rama feature/foo y nos bajamos el contenido de la rama develop del remoto que tengamos configurado como upstream.

```sh
$ git checkout feature/foo
$ git fetch --all
$ git reset --hard upstream/develop
$ git push
```

# Como inspeccionar una pull request de manera local

Es posible bajarse una pull request a un repo local para inspeccionar el código.

Averigua el ID de la PR que quieres inspeccionar. Lo encontrarás en la interfaz gráfica de GitHub, al lado del título de la PR (ejemplo: `FIX BUG #67`)

Ahora en el terminal vamos a crear una nueva rama con el contenido de ese PR:
```sh
git fetch origin pull/xx/head:foo_branch
```
NOTA: Puedes seleccionar origin o upstream según necesites. Sustituye “xx” por el id del PR que quieras descargar. Observa que “head” se escribe en minúscula y va seguido de dos puntos ”:”. Detrás de esos dos puntos especifica el nombre de una nueva rama la cual será el destino del código de ese PR.

Ahora ya puedes ir a esa nueva rama:
```sh
git checkout foo_branch
```

Ya puedes revisar el código.  

Una vez revisado tienes diferentes opciones, por ejemplo:
* Aprobar/descartar el PR desde la interfaz de GitHub
* Hacer un merge en tu rama develop y/o master
* Hacer un push y después un PR

# Git alias

### Crear un alias:
Esto es un ejemplo de como crear el alias "lodag". Fíjate que el comando de git se entrecomilla con comilla simple y que el nombre del alias se concatena a "alias."
```sh
git config --global alias.lodag 'log --oneline --decorate --all --graph'
```

### Listar alias creados:
```sh
git config --global --get-regexp alias
```

### Eliminar alias:
Esto es un ejemplo de como eliminar un alias llamado "alias_de_prueba":
```sh
git config --global --unset alias.alias_de_prueba
```
