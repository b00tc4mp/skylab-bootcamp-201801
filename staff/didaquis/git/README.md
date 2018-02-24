# Resetting local develop with upstream/develop

Toda la magia ocurre así:

El comando reset de Git te permiten descartar el contenido de una rama e igualarla al contenido de una rama en concreto. En este ejemplo, descartamos el contenido de la rama feature/foo y nos bajamos el contenido de la rama develop del remoto que tengamos configurado como upstream.

```sh
$ git checkout feature/foo
$ git fetch --all
$ git reset --hard upstream/develop
$ git push
```

----------

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

