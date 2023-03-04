Voici mon rendu pour le projet d'AngularJS à rendre avant le 11/12/2022 à 23h59.


Architecture du site :

/
├── administration ( ADMIN - Homepage )
│ ├── create ( ADMIN - Create )
│ └── {ID}/edit ( ADMIN - Edit )
└── posts
  └── {ID} (post view )


Les seuls outils supplémentaires utilisés sont ceux de Materialize.css, comme vu dans le cours.


Le projet contient toutes les fonctionnalités demandées dans le sujet, à quelques exceptions près :

- Pop-up de confirmation pour supprimer un post manquant
- La page d'admin nécessite un rafraîchissement pour afficher les modifications de posts (création, edit et supression)


NOTE : En raison du temps de réponse de l'API, certains pages peuvent mettre du temps avant d'afficher leur contenu.


Fonctionnalités bonus rajoutées :

- Changement de l'icône du blog par une icône plus réaliste

- La plupart des pages de l'application sont responsive, CSS de l'application travaillé

- Component bloggy-header réutilisable pour les futures pages

- Ajout de boutons supplémentaires sur les différentes pages pour naviguer plus facilement entre celles-ci, sans avoir à modifier l'URL (sauf pour aller vers la page d'admin, car celle-ci ne doit pas être publique)

- Possibilité de consulter les posts depuis la page d'admin en cliquant sur le titre

- Redirection automatique vers la page d'admin après la création ou l'édition d'un post

- Ajout de pages dédiées pour la gestion des erreurs lors de l'affichage d'un post précis, ou de l'édition/suppression des posts, pour pouvoir les réutiliser en cas de besoin

- Amélioration notable des formulaires de post / d'édition d'article :
	> Les données ne sont pas vérifiées lorsque l'utilisateur sauvegarde son article, mais bien en temps réel. Toutes les publications sont donc immédiatement conformes.
	> Le bouton de publication est désactivé en cas d'erreur ou de contenu manquant dans le formulaire. Des messages s'affichent sous l'input correspondant dès que l'utilisateur enfreint une règle.
	> Deux articles ne peuvent pas avoir le même nom, cette condition est également vérifiée en temps réel dans le formulaire et possède son propre message d'erreur. Utiliser le même nom qu'avant la modification de l'article reste valide.
	> Nombre maximum de caractères pour certains champs (titre et résumé) modifiable via une variable dédiée, et affichage en temps réel du nombre de caractères restants
	> Boutons d'annulation du formulaire (retour à la page d'accueil)