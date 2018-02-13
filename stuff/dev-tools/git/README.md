# Resetting local develop with upstream/develop (Dídac)

Toda la magia ocurre así:

El comando reset de Git te permiten descartar el contenido de una rama e igualarla al contenido de una rama en concreto. En este ejemplo, descartamos el contenido de la rama feature/foo y nos bajamos el contenido de la rama develop del remoto que tengamos configurado como upstream.

```sh
$ git checkout feature/foo
$ git fetch --all
$ git reset --hard upstream/develop
```

# Challenges

[Got 15 minutes and want to learn Git?](https://try.github.io/levels/1/challenges/1)

# References

[git - la guía sencilla](http://rogerdudler.github.io/git-guide/index.es.html)

[Mastering Git subtrees](https://medium.com/@porteneuve/mastering-git-subtrees-943d29a798ec)

[Mastering Git submodules](https://medium.com/@porteneuve/mastering-git-submodules-34c65e940407)