# Resetting local develop with upstream/develop

Toda la magia ocurre así:

El comando reset de Git te permiten descartar el contenido de una rama e igualarla al contenido de una rama en concreto. En este ejemplo, descartamos el contenido de la rama feature/foo y nos bajamos el contenido de la rama develop del remoto que tengamos configurado como upstream.

```sh
$ git checkout feature/foo
$ git fetch --all
$ git reset --hard upstream/develop
$ git push
```
