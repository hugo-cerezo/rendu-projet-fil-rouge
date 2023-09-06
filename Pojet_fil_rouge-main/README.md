README - Projet React avec Docker et Kubernetes
Ce guide vous explique comment construire, taguer, pousser vos images Docker et ensuite déployer votre application React sur Kubernetes.

Prérequis
Assurez-vous d'avoir Docker installé et lancé avec les droits d'administration.
Assurez-vous d'avoir kubectl installé (ou minikube sous Linux).
Connectez-vous à votre Docker Hub ou à tout autre registre Docker où vous souhaitez pousser vos images.
Configurez kubectl pour pointer vers le bon cluster Kubernetes.
Construction des Dockerfiles
Naviguez vers le répertoire contenant votre Dockerfile pour votre application React :

bash
cd path/to/your/react/project
Construisez l'image Docker :

bash
docker build -t votre_nom_dutilisateur/nom_de_limage:tag .
Où :

votre_nom_dutilisateur est votre nom d'utilisateur sur Docker Hub ou le nom du registre que vous utilisez.
nom_de_limage est le nom que vous souhaitez donner à votre image.
tag est la version ou le tag de votre image, par exemple latest ou v1.
Taguer et pousser l'image Docker
Une fois que vous avez construit votre image, vous pouvez la taguer (si vous ne l'avez pas déjà fait pendant la construction) et la pousser vers votre registre :

bash
docker tag votre_nom_dutilisateur/nom_de_limage:tag votre_nom_dutilisateur/nom_de_limage:nouveau_tag
docker push votre_nom_dutilisateur/nom_de_limage:nouveau_tag

Déploiement avec Kubernetes
Après avoir poussé votre image Docker, vous pouvez la déployer sur Kubernetes en utilisant kubectl :

bash
kubectl apply -f ./k8s

Après avoir effectuer toutes ces actions vous pouvez vous connecter sur :

http://localhost
