# REFLEXION.md : à compléter

1. `robots.txt` empêche-t-il, à lui seul, le duplicate content entre
   `/produits?tri=prix` et `/produits?tri=prix-asc` ? Pourquoi ?

   non il bloque le crawl pas l’indexation

2. Pourquoi la balise canonique est-elle l'outil adapté ici, plutôt que
   `robots.txt` ou une meta `noindex` ?

   elle indique à Google l’URL à considérer comme principale
   robots.txt ne choisit pas de version et noindex retire la page de l’index

3. Si demain `/admin` existe sur ce site et ne doit jamais être exploré par
   Google, quelle ligne ajoutes-tu dans `robots.txt` ?

   `Disallow: /admin`