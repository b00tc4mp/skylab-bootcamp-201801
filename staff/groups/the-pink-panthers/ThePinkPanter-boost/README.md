# THE PINK PANTHER IMDB 


### Online Version

http://thepinkpanthers.surge.sh/#/

## INTRO

This is a frontend project SPA that gives another place to discover all those films and TV shows to be always updated.
<br>

### DEVELOPERS

- <a href="https://github.com/JaimeRC">Jaime Rubio</a>
- <a href="https://github.com/Asix94">Carlos Ramos</a>
- <a href="https://github.com/AlexGonRod">Alex González</a>


### KANBAN 

- <a href="https://trello.com/b/dBKU5l7x/themoviedb"> TRELLO</a>

### SOME USEFUL TECHNOLOGIES

- Bootstrap 4
- CSS/Sass
- React, React-router-dom, paginator


### SPA COMPONENTS

``` bh
APP
├── Home
│   ├── Popular films
│   └── Popular TV Seasons
│
├─── FILMS
│      └── Film Info
├─── TV Seasons
      └── Seasons Info
```

**The Landing page** is composed on 3 components: *HEADER, FOOTER* and *MAIN*.

First two are fixed in every page, and main component are routed and rendered separately in 3 more.

**HEADER** has *Search* component within that implements the query and *FOOTER* shows some basic info.

**MAIN** is the complement that render the *homePage* and shows us either popular films and TV shows.

**FILMS and TV Seasons** list every single movie and season that we want with the search button.
It lists using the *Card component* that provide a bit of info using  some Css animations as Flipping.

These lists also give us the chance to see more info about every query and take us to the last component.

**INFO**

This component renders a most extensive info about every element.

Starring, Company, Directing and trailer are some stuff you can see.





### STYLES AND DESIGN

- <a href="https://github.com/JaimeRC/ThePinkPanter/tree/develop/thepinkpanther/public/design">Design </a>

### API
- <a href="https://www.themoviedb.org/documentation/api">TMDB</a>: Community-based movie database


