import './style.css';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

const app = document.querySelector('#app');

// Minimalist SVG Icons (Feather-like style)
const SVGIcons = {
  docker: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7"/><path d="M7 8h10M7 12h10M7 16h4"/></svg>`,
  shield: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  flow: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h20M15 5l7 7-7 7"/></svg>`,
  server: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
  automation: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  linux: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a5 5 0 0 1 5 5v3a5 5 0 0 1-5 5 5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z"/><path d="M7 10a4 4 0 0 0-4 4 11 11 0 0 0 18 0 4 4 0 0 0-4-4"/><path d="M12 15v4"/></svg>`,
  windows: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"/></svg>`,
  network: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  cloud: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
  container: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
  refresh: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 4v6h-6"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`,
  clipboard: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>`,
  users: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  message: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  person: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  home: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  briefcase: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  code: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  mail: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`
};

// Personalized Data
const projectData = {
  1: {
    title: "Projet DockStock",
    icon: SVGIcons.docker,
    desc: "Mise en place d'une infrastructure redondée et sécurisée pour l'hébergement de conteneurs Docker.",
    relatedSkills: [
      { type: 'techniques', id: 4 },
      { type: 'techniques', id: 5 },
      { type: 'humaines', id: 1 },
      { type: 'humaines', id: 3 }
    ],
    fullContent: `
      <h3>Introduction</h3>
      <p>Cette réalisation a été effectuée durant ma seconde année de Bachelor AIS (Administrateur d’Infrastructures Sécurisées) au sein du Groupe AEN à Agen (47). Pour chaque semestre des deux premières années, des projets informatiques étaient confiés à des groupes d’étudiants, afin de les professionnaliser à délivrer une solution technique correspondant à un cahier des charges donné par un commanditaire, ainsi que pour appliquer les connaissances apprises pendant le semestre.</p>
      <p>Durant tout le semestre S4 de la formation, c’est-à-dire entre mars et juillet 2023, le projet informatique confié à mon groupe était de concevoir, installer et configurer une infrastructure virtualisée permettant de créer, héberger et détruire rapidement des conteneurs applicatifs Docker. Nous devions mettre en place toutes nos connaissances afin de répondre au besoin, mais aussi afin de concevoir une infrastructure aussi résiliente que possible.</p>

      <h3>Objectifs</h3>
      <p>Ce projet avait plusieurs objectifs principaux. Le premier était de maîtriser les différentes étapes de la mise en place d’une infrastructure virtualisée, de la conception réseau à la configuration d’hyperviseurs. Le deuxième était de maîtriser le déploiement et la gestion de conteneurs Docker. Le dernier était la formation des étudiants à répondre à un cahier des charges malgré des contraintes de temps.</p>

      <h3>Contexte humain</h3>
      <p>Pour réaliser ce projet, je faisais partie d’un groupe de 5 étudiants. Mes partenaires dans ce projet étaient Yannick CONTI-LIGNAC, Gaëlle FOLIO, Valentin LHUISSIER et Baptiste RIVA. Ici, Valentin n’était pas présent sur le site d’Agen mais sur celui de Dax, ce qui a apporté une difficulté supplémentaire au niveau de la communication entre nous.</p>
      <p>Le rôle de commanditaire du projet était assuré par un enseignant de l’école. C’est lui qui nous a expliqué ses besoins et qui nous a apporté des réponses à nos questions en cas de blocage technique. Le rôle de suiveur était aussi assuré par un enseignant de l’école. Son rôle était de relire nos réalisations administratives, telles que des e-mails, des comptes-rendus et des documentations pour que ces derniers soient les plus appropriés possible.</p>
      
      <h3>Contexte technique</h3>
      <p>Lors de ce projet, nous n’avions que deux véritables contraintes. La première est que nous devions utiliser Docker dans le projet, puisque c’était l’une des technologies principales du semestre, ainsi que VMware pour le cluster d’hyperviseurs, ce qui était une des demandes de notre commanditaire, et dont les licences étaient fournies par l’école. La seconde était d’utiliser uniquement des solutions gratuites en dehors de VMware.</p>
      
      <h3>Enjeux</h3>
      <p>Ce projet avait une grande part de réussite dans notre seconde année de Bachelor. Ce projet informatique était le quatrième que nous réalisions, donc nous savions l’importance qu’il avait dans la validation de notre seconde année.</p>

      <h3>Risques</h3>
      <p>Dans le cadre du projet DockStock, le principal risque concernait de potentiels incidents physiques ou logiciels qui auraient pu nous empêcher de présenter l’infrastructure réalisée lors de nos différents jalons. Nous devions aussi faire très attention à ne pas commettre d’incident sur le réseau de l’école, puisque notre infrastructure devait être connectée directement au réseau du site d’Agen. </p>

      <h3>Organisation</h3>
      <p>Dans les projets informatiques, plusieurs étapes non liées à la mise en place de l’infrastructure étaient à réaliser.</p>
      <p>Le mois de mars était consacré à l’avant-projet. Pendant cette période, nous avons créé l’identité visuelle du groupe, avec un nom, un slogan, un logo et une charte graphique. Nous mettons aussi en place tous les éléments de la méthode Agile, qui est utilisé pour tous les projets informatiques à partir de la deuxième année. Nous avons donc créé un « product backlog », composé de thèmes généraux et « d’user stories » représentant les différentes fonctionnalités de notre infrastructure. La préparation de sprints, session d’un temps défini où les user stories sont réalisées a dû aussi être faite pendant l’avant-projet.</p>
      <p>De nombreuses réunions ont aussi eu lieu avec l’école afin de présenter notre avancement au fur et à mesure du semestre. Une présentation d’avant-projet était réalisée afin de valider les composants de la méthode Agile et l’identité de groupe créée, et nous autorisait à commencer le travail de mise en place de l’infrastructure. Une présentation de point d’étape a eu lieu un mois plus tard, et permettait de montrer aux différents professeurs l’avancement du projet après un premier sprint, et de corriger de possibles problèmes de compréhension du cahier des charges. Une présentation de recette a eu lieu environ un mois après le point d’étape, et incluait une démonstration du travail réalisé jusque-là. Une présentation finale du projet était réalisée devant les autres promotions de l’école afin de montrer la réalisation du projet terminée dans son ensemble. Finalement, une journée « Techday » était organisée par l’école quelques semaines plus tard. Pendant cette journée, nous devions mettre en place un stand et mettre en valeur notre projet et nos réalisations devant des visiteurs, d’autres étudiants et des informaticiens. Cela nous permettait de construire notre réseau professionnel, et de nous aider dans la recherche d’une alternance pour la troisième année de Bachelor.</p>
      <p>Afin de mettre en place la méthode Agile de manière efficace, nous avions décidé de réaliser un « Daily Scrum », ou mêlée journalière au début de chaque créneau dédié aux projets informatique. Cela nous permettait de dire ce que chacun avait réalisé au dernier créneau, ce qu’on allait faire pendant ce créneau et les possibles difficultés rencontrées sur nos tâches. Afin de s’attribuer les différentes user stories, nous avions mis en place un tableau Trello, où chacun pouvait s’attribuer la tâche qu’il souhaitait faire, et faire évoluer son avancement, jusqu’à sa clôture. Finalement, une équipe Teams avait été créé afin de pouvoir stocker tous les documents du projet, des documents administratifs telles que la convention de projet signée par le commanditaire, aux documents techniques, en passant par nos supports de présentation.</p>

      <h3>Interaction avec les parties prenantes</h3>
      <p>Les interactions avec notre client étaient des réunions physiques sur le site d’Agen, puisque nous avions la chance d’avoir un commanditaire qui enseignait sur le campus. Nous mettions en place tout de même une visioconférence Teams puisque Valentin LHUISSIER était en distanciel. Nous organisions une réunion par semaine afin d’avoir ses retours sur l’avancement du projet, et pour pouvoir intégrer tout changement du cahier des charges rapidement.</p>
      <p>Nous avions aussi de nombreuses interactions avec notre suiveur. Nous utilisions notamment l’équipe Teams pour lui envoyer des documents administratifs tels que des comptes-rendus, des e-mails, ou nos supports de présentations, pour qu’il corrige toute faute majeure dans ces derniers.</p>

      <h3>Étapes du projet</h3>
      <p>Une fois l’avant-projet validé, nous nous sommes réunis afin de réaliser un schéma réseau de notre infrastructure. Nous avons souhaité passer du temps pour le réaliser afin que tous les choix techniques soient mûrement réfléchis. Nous devions ensuite commander du matériel en envoyant un e-mail au directeur du campus, donc nous étions restreints par le nombre de machines que nous pouvions utiliser. Nous avons donc dû faire des compromis au niveau de la redondance de certains équipements.</p>
      <p>Notre infrastructure allait donc être composé de :</p>
      <ul>
        <li>Un ordinateur personnel ayant pour rôle de pare-feu PFSense. Son but allait être de faire une séparation physique et réseau entre notre infrastructure et le réseau de l’école, que nous considérions comme un réseau WAN non sécurisé.</li>
        <li>Deux ordinateurs personnels ayant pour rôle d’hyperviseurs VMware ESXi. Leur but allait être d’héberger une machine virtuelle qui portera tous les conteneurs Docker créés dans le futur.</li>
        <li>Un ordinateur personnel sous Windows Server 2019 Standard ayant pour rôle de porter l’applicatif VMware VCenter. Son but allait être de créer un cluster avec les deux ESXi et donner à l’infrastructure de la Haute Disponibilité (HA).</li>
        <li>Un switch 5 ports afin d’interconnecter les différents équipements physiques entre eux.</li>
        <li>Des câbles RJ45 afin de créer l’infrastructure réseau et la connecter au réseau de l’école.</li>
      </ul>

      <p>Une fois le matériel reçu, nous avons rapidement mis en place l’infrastructure. Nous nous sommes ensuite réparti les tâches pour que chaque personne configure un équipement. J’étais en binôme sur la mise en place des hyperviseurs ESXi et de l’applicatif VCenter.</p>
      <p>Nous avons commencé par créer des clés USB bootables avec les fichiers .iso de VMware ESXi 6.7 et Windows Server 2019 Standard. Nous avons ensuite réalisé une configuration réseau simple, avec un adressage réseau statique. Nous avons demandé au préalable à notre commanditaire et à notre référent de promotion si le sous-réseau que nous souhaitions utiliser n’interférait pas avec les réseaux de l’école, ce qu’ils nous ont confirmé.</p>
      <p>Une fois la configuration réseau des hyperviseurs ESXi réalisés, nous avons confirmé leur fonctionnement en nous connectant à leur interface web de management. Nous avons ensuite créé une machine virtuelle Debian 11 sur chacun des hyperviseurs afin de vérifier qu’ils soient bien configurés.</p>
      <p>Mon binôme et moi sommes ensuite passés sur la mise en place de l’applicatif VCenter. Nous avons utilisé la clé USB bootable créée précédemment pour installer Windows Server 2019. L’installation comportait une configuration réseau statique, ainsi que l’installation d’un serveur DNS (Domain Name Server). Le but de ce serveur est de lier un nom de domaine, tel que google.fr, à une adresse IP.</p>
      <p>Nous avons ensuite copié le fichier .iso de VMware VCenter sur la machine, puis nous l’avons monté et lancé l’installateur graphique inclus. Nous avons créé un déploiement VCenter de type « Tiny », car nous n’avons que deux hôtes ESXi et qu’un nombre très faible de VM allaient être créées, et que les ressources matérielles demandées ne pouvaient pas être satisfaites par l’ordinateur. Nous avons vérifié notre installation en nous connectant à l’interface web du VCenter, ce qui nous donnait une infrastructure vierge.</p>
      <p>Nous avons ensuite appliqué une licence VCenter 6.7 Enterprise Plus, qui nous a été fournie par notre référent de promotion, afin d’avoir accès aux fonctionnalités avancées telles que la Haute Disponibilité ou les règles DRS (Distributed Resource Scheduler), qui permettent de faire basculer une VM d’un hyperviseur vers un autre de manière automatique et sans interruption de service.</p>
      <p>Dans l’interface de VCenter, nous avons créé un commutateur virtuel ou vSwitch, puis nous avons activé la HA entre nos deux hyperviseurs.  Nous avons ensuite activé le DRS en mode « Fully Automated », c’est-à-dire automatique, donc la bascule des VM ne demandera pas d’intervention humaine. Finalement, nous avons réalisé une vérification en réutilisant notre machine Debian 11 et en éteignant l’hyperviseur sur laquelle elle tournait. Nous la voyions effectivement basculer vers le second hyperviseur, sans l’éteindre.</p>
      <p>En parallèle, je me suis occupé de l’installation du pare-feu PFSense. L’ordinateur qui nous avait été confié ne pouvant pas avoir une seconde carte réseau, j’ai utilisé un adaptateur USB vers RJ45 pour notre carte réseau LAN. J’ai ensuite utilisé une clé USB bootable avec le fichier .iso PFSense 2.6.0. J’ai configuré l’interface LAN avec une IP statique, et j’ai connecté l’interface WAN au réseau de l’école pour qu’elle récupère une adresse via DHCP (Dynamic Host Configuration Protocol).</p>
      <p>Nous avons ensuite mis en place des règles de filtrage sur le pare-feu. Ces dernières permettaient d’autoriser ou bloquer certains flux transitant par le pare-feu. Cela ajoutait une couche de sécurité entre notre infrastructure et le réseau de l’école. Nous avons mis en place le principe du moindre privilège, en ne cherchant qu’à ouvrir les flux nécessaires et bloquer tous les autres. Par exemple, nous avons bloqué les flux entre le WAN, les hyperviseurs et le VCenter, pour éviter que l’on puisse prendre la main sur ces derniers et causer une interruption de service.  Les seuls flux ouverts étaient les flux vers la machine hébergeant les conteneurs.</p>
      <p>Une fois l’infrastructure mise en place, nous nous sommes attelés à la partie hébergement des conteneurs Docker. Nous avons créé une machine Debian 11 à partir de l’interface VCenter, puis nous avons installé docker et docker-compose. Docker est une plateforme logicielle permettant de faire tourner certains applicatifs sous forme de conteneurs isolés. Comparé à une machine virtuelle, les conteneurs Docker sont plus efficients au niveau de l’utilisation des ressources de calcul car ils n’incluent pas de système d’exploitation, donc ils sont plus légers. Docker-compose est un outil additionnel de Docker, qui permet la création de plusieurs conteneurs en simultané à partir d’un fichier .yaml. Ce dernier nous permet de construire des infrastructures conteneurisées à partir d’un seul fichier et une seule commande.</p>
      <p>Une fois Docker et docker-compose installés, j’ai participé à la mise en place d’un autre outil : Portainer. C’est un outil permettant de centraliser la gestion de conteneurs Docker ou Kubernetes dans une interface web. Pour ce projet, il nous permettait de gérer des volumes ou réseaux sans aucune commande, et d’apporter un élément de gestion des conteneurs graphique lors des démonstrations de l’infrastructure. Une fois le conteneur Portainer créé, nous avons créé un compte personnel pour chacun, afin de pouvoir travailler à plusieurs depuis l’interface. Nous nous sommes ensuite répartis pour créer plusieurs conteneurs de différents types. Une stack LAMP (Linux, Apache, MySQL, PHP) a été mise en place, avec un conteneur Apache servant de site web et un conteneur MySQL fournissant la base de données. Nous souhaitions que cette stack se crée en même temps que le conteneur Portainer, dons nous l’avons ajoutée dans le fichier .yaml utilisé par docker-compose.</p>
      <p>Dans une réunion durant les dernières semaines du projet, notre commanditaire nous a proposé d’ajouter des fonctionnalités en plus. La principale était de transformer notre infrastructure pour lui ajouter des VLAN (Virtual Local Area Network). C’est un réseau informatique logique et indépendant, qui permet de séparer des flux passant sur la même interface physique. Dans notre infrastructure, cela permettait de séparer les flux de management des flux de production, améliorant la sécurité. Nous avions même imaginé une infrastructure où les hyperviseurs, le serveur VCenter et la machine Debian hébergeant les conteneurs soient dans des VLAN séparés, avec une passerelle par défaut portée par une interface virtuelle sur le pare-feu. Il s’avère que les VLAN n’étaient pas une technologie que nous avions apprise en cours, et que, par notre manque de compréhension de leur implémentation, nous n’avons pas été en mesure de les mettre en place sur l’infrastructure avant la livraison du projet.</p>
      <p>Nous avons ensuite réalisé des documentations qui étaient à livrer à notre commanditaire. La documentation technique détaillait l’infrastructure que nous avions mis en place, avec un schéma réseau, les différents rôles des machines, et les technologies utilisées. La documentation administrateur décrivait les procédures pour administrer toutes les machines de l’infrastructure, et contenait les mots de passe administrateur de ces dernières. Finalement, la documentation utilisateur décrivait toutes les procédures pour utiliser l’infrastructure, comme pour se connecter à l’interface Portainer, créer des conteneurs, des volumes, etc. Ces documentations ont aussi été imprimées et reliées, et faisaient partie intégrante de notre stand du Techday comme livrable lisible par les jurés et visiteurs.</p>

      <h3>Lendemains du projet</h3>
      <p>Ce projet s’est terminé lorsque nous avons livré l’infrastructure à notre commanditaire. Cette infrastructure aurait pu être réutilisée après la fin du semestre, puisque les mots de passe de toutes les machines étaient notés dans la documentation administrateur, mais elle était vouée depuis la genèse du projet à être éphémère. En effet, l’infrastructure a été démantelée afin que les ordinateurs physiques soient réutilisés, probablement par d’autres étudiants dans leurs projets informatiques.</p>

      <h3>Regard critique</h3>
      <p>Ce projet est le premier où j’ai pu mettre en place une infrastructure physique complète. J’ai énormément amélioré mes compétences en termes de conception de réseaux et de gestion de logiciels VMware. J’ai aussi pu grandement approfondir ma compréhension de la méthodologie Agile, et mes compétences humaines telles que ma prise de responsabilités et ma capacité à répondre aux besoins d’un client. Avec le recul, j’aurais aimé connaître les VLAN plus tôt dans ce projet. En les intégrant dans la conception de l’infrastructure depuis le début, nous aurions pu améliorer la segmentation et la sécurité de notre infrastructure.</p>
      <p>Je suis très fier d’avoir pu présenter ce projet à des professionnels de l’informatique lors du Techday, et je remercie sincèrement l’ensemble des enseignants qui nous ont encadrés et ont pu rendre ce projet possible.</p>
    `
  },
  2: {
    title: "Projet Walltesters",
    icon: SVGIcons.shield,
    desc: "Réalisation d'une série de tests de résilience sur le pare-feu opensource BunkerWeb.",
    relatedSkills: [
      { type: 'techniques', id: 3 },
      { type: 'techniques', id: 5 },
      { type: 'humaines', id: 2 },
      { type: 'humaines', id: 3 },
      { type: 'humaines', id: 4 }
    ],
    fullContent: `
      <h3>Introduction</h3>
      <p>Cette réalisation a été effectuée durant ma troisième année de Bachelor AIS (Administrateur d’Infrastructures Sécurisées) au sein du Groupe ESIEA à Agen (47). Pour cette troisième année, un projet informatique était confié à notre promotion, afin de nous professionnaliser à délivrer une solution technique correspondant à un cahier des charges donné par un commanditaire, ainsi que pour appliquer les connaissances apprises pendant l’année.</p>
      <p>Durant une période de sept mois, entre décembre 2023 et juin 2024, le projet informatique qui nous était confié était de réaliser un test de résistance et analyser les vulnérabilités sur le WAF (Web Application Firewall) Bunkerweb. Un WAF est un type de pare-feu utilisé pour protéger des applications web contre diverses attaques. Bunkerweb est un WAF open-source créé par l’entreprise Bunkerity, fondé par Monsieur Florian PITANCE, un ancien auditeur en cybersécurité pour le Ministère des Armées, en 2021.</p>

      <h3>Objectifs</h3>
      <p>Ce projet avait trois objectifs principaux. Le premier était de maîtriser les étapes de la réalisation d’un test de résistance et d’une analyse de vulnérabilités sur un produit open-source. Le deuxième était de réaliser une configuration du pare-feu émulant une infrastructure web plausible d’une véritable entreprise. Le dernier était la formation des étudiants à répondre à un cahier des charges malgré des contraintes de temps.</p>

      <h3>Contexte humain</h3>
      <p>Pour réaliser ce projet, je faisais partie d’un groupe de 9 étudiants. Ayant travaillé sur différents projets dans des groupes de 3 à 5 étudiants, ce fut la première fois que j’ai eu à travailler avec une équipe si grande. De plus, ce projet a eu lieu en parallèle de notre alternance, ce qui nous a demandé une organisation particulière pour allier les disponibilités de chacun en dehors des heures ouvrées. </p>
      <p>Le rôle de commanditaire du projet était assuré par Monsieur Théophile DIOT, ingénieur logiciel chez Bunkerity. C’est lui qui nous a expliqué ses besoins et qui nous a apporté des réponses à nos questions lors de nos réunions avec lui. Le rôle d’encadrant était aussi assuré par nos référents de promotion.</p>

      <h3>Contexte technique</h3>
      <p>Lors de ce projet, nous devions émuler une infrastructure sécurisant les serveurs web d’une entreprise. Pour cela, nous avons utilisé une machine virtuelle hébergée dans un cloud, fournie par notre commanditaire. Cela nous permettait de centraliser tous nos déploiements sur une machine, accessible depuis le réseau de l’école et depuis nos domiciles, facilitant le travail en dehors des créneaux de cours.</p>

      <h3>Enjeux</h3>
      <p>Ce projet avait une grande part de réussite dans notre troisième et dernière année de Bachelor. Ce projet informatique était le cinquième que nous réalisions, donc nous savions l’importance qu’il avait dans la validation de cette année. Un autre enjeu était que notre projet pouvait améliorer la résilience et l’expérience d’utilisation de Bunkerweb, en permettant de corriger des vulnérabilités si certaines étaient trouvées et de changer certaines parties de l’installation, de l’interface web ou de la documentation si elles venaient à être peu compréhensibles.</p>

      <h3>Risques</h3>
      <p>Dans le cadre du projet Walltesters, le risque principal était de causer un plantage de la machine fournie par le commanditaire. Cela aurait empêché toute l’équipe de réaliser des modifications sur l’infrastructure ou des tests de résistance sur le pare-feu, mais aussi aurait demandé une intervention manuelle de la part de notre commanditaire afin de redémarrer la machine.</p>

      <h3>Organisation</h3>
      <p>Dans les projets informatiques, plusieurs étapes non liées à la mise en place de l’infrastructure étaient à réaliser.</p>
      <p>Les mois de décembre 2023 à février 2024 étaient consacré à l’avant-projet. Pendant cette période, nous avons créé l’identité visuelle du groupe, avec un nom, un slogan, un logo et une charte graphique. Nous mettons aussi en place tous les éléments de la méthode Agile, qui est utilisé pour tous les projets informatiques à partir de la deuxième année. Nous avons donc créé un « product backlog », composé de thèmes généraux et « d’user stories » représentant les différentes fonctionnalités de notre infrastructure. La préparation de sprints, session d’un temps défini où les user stories sont réalisées a dû aussi être faite pendant l’avant-projet.</p>
      <p>De nombreuses réunions ont aussi eu lieu avec l’école afin de présenter notre avancement au fur et à mesure du semestre. Une présentation d’avant-projet était réalisée afin de valider les composants de la méthode Agile et l’identité de groupe créée, et nous autorisait à commencer le travail de mise en place de l’infrastructure. Une présentation de point d’étape a eu lieu deux mois plus tard, et permettait de montrer aux différents professeurs l’avancement du projet après un premier sprint, et de corriger de possibles problèmes de compréhension du cahier des charges. Une présentation de recette a eu lieu environ un mois après le point d’étape, et incluait une démonstration du travail réalisé jusque-là. Une présentation finale du projet était réalisée devant les autres promotions de l’école afin de montrer la réalisation du projet terminée dans son ensemble. Finalement, une journée « Techday » était organisée par l’école quelques semaines plus tard. Pendant cette journée, nous devions mettre en place un stand et mettre en valeur notre projet et nos réalisations devant des visiteurs, d’autres étudiants et des informaticiens. Cela nous permettait de construire notre réseau professionnel, et de nous aider dans la recherche d’une alternance pour les deux années suivantes. Toutes ces réunions, outre le Techday, devaient être réalisées en anglais pour ce semestre.</p>
      <p>Afin de mettre en place la méthode Agile de manière efficace, nous avions décidé de réaliser un « Weekly Scrum », ou mêlée hebdomadaire chaque lundi soir, ainsi que pendant . Cela nous permettait de dire ce que chacun avait réalisé au dernier créneau, ce qu’on allait faire pendant ce créneau et les possibles difficultés rencontrées sur nos tâches. Afin de s’attribuer les différentes user stories, nous avions mis en place un tableau Trello, où chacun pouvait s’attribuer la tâche qu’il souhaitait faire, et faire évoluer son avancement, jusqu’à sa clôture. Finalement, une équipe Teams avait été créé afin de pouvoir stocker tous les documents du projet, des documents administratifs telles que la convention de projet signée par le commanditaire, aux documents techniques, en passant par nos supports de présentation.</p>

      <h3>Interaction avec les parties prenantes</h3>
      <p>Les interactions avec notre client étaient au début du projet des réunions physiques sur le site d’Agen, puisque nous avions la chance d’avoir un commanditaire qui enseignait sur le campus. Nous organisions une réunion par mois, en fin de sprint, afin d’avoir ses retours sur l’avancement du projet. Vers la fin du projet, les réunions sont devenues des visioconférences via le logiciel Teams.</p> 
      <p>Nous avions aussi de nombreuses interactions avec notre professeure d’anglais sur le campus d’Agen. Nous lui avons souvent demandé une relecture de nos livrables et présentations en anglais afin de corriger toute faute d’orthographe présente dans ces derniers.</p>

      <h3>Étapes du projet</h3>
      <p>Une fois l’avant-projet validé, nous nous sommes réunis afin de réaliser un schéma réseau de notre infrastructure. Nous avons souhaité passer du temps pour le réaliser afin que tous les choix techniques soient mûrement réfléchis. Nous nous sommes basés sur les expériences de chaque membre pendant notre alternance afin d’émuler au mieux l’infrastructure web d’une petite entreprise. Une information qui nous a été fournie par notre commanditaire était que le moyen d’installation le plus utilisé par les utilisateurs de Bunkerweb est l’installation via Docker et docker-compose. Nous nous sommes donc logiquement orientés vers une infrastructure complètement conteneurisée.</p>
      <p>Notre infrastructure était séparée en trois parties :</p>
      <ul>
        <li>Une partie supervision et administration, permettant de remonter toutes les métriques des différents conteneurs, pour avoir des données tangibles pour les tests de résistance.</li>
        <li>Une partie hébergement web, avec plusieurs stacks LAMP plus ou moins protégées et une page d’administration des bases de données.</li>
        <li>Une partie pare-feu, avec tous les conteneurs nécessaire au bon fonctionnement de Bunkerweb.</li>
      </ul>
      <p>Une fois l’infrastructure dessinée, nous nous sommes répartis en trois trinômes. Le premier, dont je faisais partie, s’est chargé de l’installation de Docker et docker-compose, puis d’une première configuration de Bunkerweb. Le deuxième trinôme s’est occupé de la mise en place de la partie supervision, ainsi que du travail préliminaire sur la partie hébergement web. Le dernier trinôme s’est focalisé sur la préparation des différents tests de résistance, puis a repris la partie hébergement web pour la terminer.</p>
      <p>De mon côté, j’ai pu me connecter en SSH à la machine Ubuntu fournie par notre commanditaire, avant d’installer Docker et docker-compose. Nous avons ensuite exploré la documentation de Bunkerweb afin de faire un choix entre les trois installations possibles : Docker, Docker Autoconf, et Docker Swarm. La différence entre Docker et Docker Autoconf est que, dans le mode Autoconf, un conteneur bw-autoconf est ajouté. Ce dernier permet d’appliquer des configurations sur des services tels que des applications web à partir de labels ajoutés dans le fichier docker-compose. Notre commanditaire nous avait aussi recommander de ne pas utiliser l’installation Docker Swarm, car elle n’était que très rarement utilisée. Nous avons donc choisi l’installation Docker Autoconf.</p>
      <p>Nous avons utilisé le fichier docker-compose fourni dans la documentation de Bunkerweb pour vérifier notre installation de Docker et docker-compose, ainsi que pour nous familiariser avec la structure du pare-feu avant d’ajouter des fonctionnalités. Ce dernier est composé de plusieurs conteneurs :</p>
      <ul>
        <li>Le conteneur BunkerWeb est le cœur du pare-feu.</li>
        <li>Le conteneur bw-autoconf est le conteneur permettant l’autoconfiguration des services web en fonction des labels qui leur sont assignés dans le fichier docker-compose.</li>
        <li>Le conteneur bw-scheduler est le conteneur permettant l’orchestration de tous les conteneurs de la stack Bunkerweb.</li>
        <li>Le conteneur bw-ui est le conteneur permettant d’administrer Bunkerweb via une interface web.</li>
        <li>Le conteneur bw-db est le conteneur permettant de stocker les données de configuration du pare-feu</li>
        <li>Le conteneur bw-docker est le conteneur protégeant le socket Docker pour éviter l’utilisation de Docker depuis un réseau extérieur.</li>
      </ul>
      <p>Une fois la première installation de Bunkerweb validée, nous avons pu utiliser une licence payante PRO fournie par notre commanditaire. Cela nous a permis d’ajouter au fur et à mesure toutes les fonctionnalités de sécurité souhaitées. Un CAPTCHA a été mis en place afin de bloquer l’accès à l’interface web aux robots présents sur Internet. La création d’un certificat SSL autosigné a été implémentée, qui fut remplacée par l’utilisation d’un module Let’s Encrypt intégré, ainsi qu’un proxy inversé afin de ne pas exposer directement les adresses IP des futurs serveurs web. La mise en place d’une protection anti-DDoS et d’un compte administrateur a aussi été incluse dans l’autoconfiguration.</p>
      <p>Après la mise en place de Bunkerweb, nous nous sommes attelés à la création de la stack de supervision. Nous avions l’avantage qu’une partie de l’équipe avait réalisé un projet informatique en semestre 4 qui incluait une infrastructure de supervision conteneurisée. Nous avons pu réutiliser les technologies mises en place dans ce projet, afin de créer une stack de supervision permettant de récupérer toutes les métriques de l’infrastructure docker globale, tout en étant protégée par le pare-feu Bunkerweb. La supervision est assurée par plusieurs conteneurs :</p>
      <ul>
        <li>Le conteneur grafana permettait d’utiliser une interface web pour visualiser les métriques collectées avec différents graphiques.</li>
        <li>Le conteneur prometheus permettait de stocker les métriques collectées dans un volume permanent sur la machine hôte.</li>
        <li>Le conteneur cadvisor permettait de collecter toutes les métriques de conteneurs Docker.</li>
        <li>Le conteneur node_exporter permettait de collecter les métriques de la machine hébergeant toute l’infrastructure Docker.</li>
        <li>Le conteneur pushgateway permettait d’envoyer à Prometheus toutes les métriques éphémères, comme les résultats de tâches périodiques.</li>
      </ul>
      <p>Nous avions mis en place cette stack de supervision en local, sur des machines virtuelles avec Bunkerweb installé. Cela nous permettait d’adapter la configuration des conteneurs à Bunkerweb sans causer de possible incident de production sur la machine fournie par notre commanditaire. Une fois la configuration stable et fonctionnelle, nous avons ajouté la stack de supervision au fichier docker-compose existant. Nous avons validé cette partie en nous connectant à l’interface web de Grafana, en créant un dashboard permettant de visualiser les métriques des conteneurs telles que la consommation de processeur, de mémoire et de stockage, puis en notant que les métriques étaient bien collectées et affichées. Cependant, le stockage de toutes ces métriques consommait beaucoup de stockage sur la machine hôte que prévu, saturant le disque au bout d’une semaine. Nous avions dû écrire un e-mail à notre commanditaire afin d’obtenir une extension de disque importante, et limiter notre rétention des métriques à trente jours maximum pour garder un historique sans saturer le stockage à nouveau.</p>
      <p>En parallèle de la supervision, nous avons commencé la mise en place d’une série de serveurs web. Puisque le rôle principal d’un WAF est de protéger des installations web, nous souhaitions mettre en place plusieurs serveurs web, avec des niveaux de protections variés, afin de vérifier la résistance du pare-feu aux attaques de type DDoS et XSS (Cross-Side Scripting). Nous avons décidé d’utiliser deux conteneurs par stack web, un serveur web Apache2 et une base de données PostgreSQL contenant un jeu de données fictif. Les stacks web mises en place étaient les suivantes :</p>
      <ul>
        <li>La stack web-1 était entièrement protégée par Bunkerweb contre les attaques DDoS et XSS, et ne possédait pas de vulnérabilités dans sa page web. Cela permettait de simuler le meilleur cas possible.</li>
        <li>La stack web-2 n’était pas protégée par Bunkerweb, mais ne possédait pas de vulnérabilités dans sa page web. Cela permettait de simuler un cas où la configuration du pare-feu n’était pas adéquate.</li>
        <li>La stack web-3 était entièrement protégée par Bunkerweb contre les attaques DDoS et XSS mais possédait des vulnérabilités XSS dans sa page web. Cela permettait de simuler un cas où le pare-feu protège un serveur mal configuré.</li>
        <li>La stack web-4 n’était pas protégée par Bunkerweb et possédait des vulnérabilités XSS dans sa page web. Cela permettait de simuler un cas sans aucune protection.</li>
      </ul>
      <p>Comme pour la supervision, la création des stacks web s’est réalisée en local, pour éviter tout incident sur la machine fournie par notre commanditaire. Une fois les serveurs prêts, nous avons ajouté le fichier docker-compose créé pour ces derniers au fichier docker-compose existant. Afin de gérer les quatre bases de données de manière simple, nous avons ajouté un conteneur PgAdmin, qui est un outil d’administration des bases de données PostgreSQL via une interface web. Nous avons vérifié notre installation en nous connectant à chaque serveur depuis nos postes de travail. Pour terminer, nous avons dû modifier notre dashboard Grafana en y ajoutant les nouveaux conteneurs créés.</p>
      <p>La dernière partie était la réalisation de tests de résistance et d’analyses de vulnérabilités. Nous nous sommes particulièrement concentrés sur les tests de résistance, puisque nous savions que nos connaissances en termes de pentesting et de chasse aux vulnérabilités étaient limitées. De plus, notre commanditaire nous avait informé à la fin du deuxième sprint qu’il souhait plutôt que nous nous focalisions sur les tests de résistance, ainsi que sur la réalisation d’un retour d’expérience utilisateur.</p>
      <p>Nous avons utilisé l’outil OWASP ZAP afin de réaliser nos tests. C’est un scanner de sécurité d’application web open-source développé par l’OWASP (Open Web Application Security Project), qui est une communauté travaillant sur la sécurité des applications web. Nous l’avons choisi puisqu’il nous permettait de centraliser tous nos tests sur un seul outil. Avec OWASP ZAP, nous avons testé la protection anti-DDoS sur toutes les pages web accessibles, c’est-à-dire la page d’administration de Bunkerweb, l’interface web de Grafana, et les quatre sites web. Sur les sites web, nous avons aussi testé la protection contre les attaques XSS, en essayant d’injecter du code JavaScript dans un formulaire.</p>
      <p>Nous avons finalement rédigé un rapport complet du projet, détaillant la mise en place de l’infrastructure de test, les différents labels utilisés pour activer les fonctionnalités choisies dans l’autoconf, les résultats de nos tests de résistance, ainsi que des recommandations pour les développeurs de Bunkerweb. Concernant les résultats, la protection anti-DDoS s’est révélée très efficace, bloquant toutes nos tentatives d’attaque en bannissant l’IP publique de la personne lançant l’attaque pendant vingt-quatre heures. Nous l’avons cependant trouvé trop sensible, car nous nous sommes retrouvés plusieurs fois banni car nous changions trop rapidement de page lors de la configuration de Bunkerweb. Nous avons donc recommandé aux développeurs d’ajouter une option permettant de réduire la sensibilité de l’anti-DDoS. Nous avions aussi remarqué que la documentation de Bunkerweb était plutôt légère, et cela nous avait causé une certaine perte de temps lors de la première configuration, ce que nous avons mentionné dans le rapport.</p>

      <h3>Lendemains du projet</h3>
      <p>Ce projet s’est terminé lorsque nous avons livré le rapport à notre commanditaire. Un an et demi après la fin de ce projet, Bunkerweb est en version 1.6.7, et a incorporé certains de nos retours, notamment <a href="https://docs.bunkerweb.io/latest/">une documentation bien plus fournie</a>. Quant à l’infrastructure qui a été créé pour ce projet, elle a été supprimée puisque la machine était hébergée dans un cloud publique, aux frais de notre commanditaire.</p>

      <h3>Regard critique</h3>
      <p>Ce projet était l’un des plus compliqués que j’ai eu à réaliser en termes d’organisation, puisque je n’avais jamais travaillé avec autant de camarades sur un projet, et c’était mon premier projet d’école à réaliser pendant une période d’alternance. Grâce à ce projet, j’ai énormément approfondi mes connaissances de Docker et en cybersécurité, mais aussi renforcé mes compétences relationnelles et d’organisation. Je suis très fier d’avoir pu présenter ce projet à des professionnels de l’informatique lors du Techday, et je remercie sincèrement Messieurs Florian PITANCE et Théophile DIOT pour nous avoir fait confiance pour la réalisation de ce projet, ainsi que l’ensemble des enseignants qui nous ont encadrés et ont pu rendre ce projet possible.</p>
      `
  },
  3: {
    title: "Projet Netflow",
    icon: SVGIcons.flow,
    desc: "Installation d'un collecteur Netflow pour la surveillance réseau.",
    relatedSkills: [
      { type: 'techniques', id: 1 },
      { type: 'techniques', id: 5 },
      { type: 'humaines', id: 2 },
      { type: 'humaines', id: 4 },
      { type: 'humaines', id: 5 }
    ],
    fullContent: `
      <h3>Avant-propos</h3>
      <p>Cette réalisation a été réalisée dans le cadre d’un environnement de datacenter. Certaines informations ont été volontairement supprimées afin de préserver la confidentialité des individus et des technologies employés sur le datacenter.</p>

      <h3>Introduction</h3>
      <p>Dans le cadre de mon Bachelor Administrateur d’Infrastructures Sécurisées à INTECH Agen devenu ESIEA débuté en septembre 2021, j’ai travaillé pendant un an en alternance en tant qu’Administrateur d’Infrastructures pour le compte de l’entreprise <a href="https://www.berger-levrault.com/fr">Berger-Levrault.</a></p>
      <p>Le groupe Berger-Levrault est une entreprise spécialisée dans l’édition de solutions logicielles SaaS (Software as a Service) pour les collectivités françaises, les établissements sanitaires, sociaux et médico-sociaux, ainsi que de l’hébergement libre IaaS (Infrastructure as a Service).</p>
      <p>J’ai intégré l’entreprise an tant qu’Administrateur d’Infrastructures sur le datacenter principal du groupe. Mon métier consiste à assurer le Maintien en Condition Opérationnelle (MCO) du datacenter. La MCO est la liste des opérations prises afin de garantir le bon fonctionnement de l’infrastructure en place. Ces mesures sont détaillées dans la réalisation : « <a href="#/realisations/4">MCO d’un datacenter</a> ».</p>

      <h3>Le protocole NetFlow</h3>
      <p>NetFlow est une architecture propriétaire développée en 1996 par l’entreprise américaine <a href="https://www.cisco.com/">Cisco Systems</a> qui permet de collecter des informations variées sur les flux IP transitant par une interface d’un équipement tel qu’un routeur, un pare-feu ou un routeur.</p>
      <p>De nombreuses versions de NetFlow sont disponibles, mais les plus communes sont :</p>
      <ul>
        <li>Le NetFlow v5 : Déjà disponible sur de nombreux routeurs à partir de 2009, c’est une version de NetFlow qui ne gère que les flux IPv4. De plus, les informations données sur les flux sont basiques et se limitent à l’interface par laquelle passe le flux, les adresses IP et port source et destination, ainsi que le numéro de protocole encapsulé par le datagramme IP.</li>
        <li>Le NetFlow v9 : Défini dans la RFC 3954 en octobre 2004, c’est une version améliorée du NetFlow v5, supportant l’IPv6 et même des technologies telles que le MPLS. Les informations données sont aussi plus conséquentes, car elles sont régies par des « modèles » créés par les équipementiers (Cisco, Juniper, Huawei, etc.).</li>
        <li>L’IPFIX (Internet Protocol Flow Information eXport) : C’est un protocole créé par l’IETF (Internet Engineering Task Force) basé sur le NetFlow v10</li>
      </ul>
      <p>Les informations sont envoyées sur un serveur spécialisé appelé collecteur. Il est ensuite possible d’analyser ces informations en ligne de commande ou via une interface graphique afin de les corroborer avec un serveur Syslog ou un serveur de supervision. Cela permet d’accélérer l’identification de problèmes réseaux comme de la congestion ou des intrusions dans une infrastructure réseau.</p>

      <h3>Objectifs</h3>
      <p>Cette réalisation a été mise en place au cours d’une alternance d’une durée de 10 mois. De nombreux objectifs, à la fois humains et techniques, étaient attendus.</p>
      <p>Humainement, j’ai pu développer mes compétences relationnelles avec les différentes parties prenantes du projet. Cette alternance était ma première expérience du monde professionnel, et j’ai pu renforcer mes capacités de collaboration et d’organisation déjà acquises au cours des projets étudiants réalisés entre 2021 et 2023. J’ai aussi pu travailler avec les différentes équipes techniques de Berger-Levrault, ce qui m’a permis de mieux découvrir la manière de travailler dans l’entreprise.</p>
      <p>Techniquement, l’objectif principal était de renforcer le degré de visualisation des flux réseaux entre le datacenter et l’Internet. Sur une infrastructure réseau, il est critique de savoir quels types de flux entrent et sortent, afin de réagir au plus vite en cas de problème réseau ou de cyberattaque. L’objectif secondaire était de m’acclimater à l’infrastructure existante du datacenter. L’infrastructure sur laquelle je travaillais contenant plus d’un millier de VLAN et de nombreux équipements réseaux et pares-feux, ce projet m’a permis de me familiariser avec tous les composants du datacenter, ce qui a grandement approfondi ma compréhension des tâches de MCO que je réalisais.</p>

      <h3>Contexte humain</h3>
      <p>Ce projet est le premier projet en entreprise sur lequel je réalisais l’intégralité de la partie technique et organisationnelle. Cependant, j’étais sous la tutelle de plusieurs de mes collègues afin que le projet se déroule dans les meilleures conditions.</p>
      <p>Mon manager, qui était aussi le responsable du datacenter, a pris le rôle de client. Il a pu m’expliquer ses besoins, et était toujours présent pour répondre à mes questions quant au projet. Mon maître de formation, qui était l’un de mes collègues, m’a permis d’obtenir tous les accès nécessaires aux équipements, afin que je puisse réaliser toutes les opérations pour mettre en place la solution technique. J’ai aussi pu recevoir l’aide de toute l’équipe « Infrastructure & Cloud Operations » dont je faisais partie, et j’ai grandement bénéficié de leur expertise technique. Grâce à eux, j’ai pu m’épanouir dans ce projet et le réaliser dans les meilleures conditions possibles.</p>

      <h3>Contexte technique</h3>
      <p>Ce projet est aussi le premier où l’on m’a donné carte blanche sur la solution technique. Avec ce degré de liberté offert, j’ai donc pu expérimenter avec différentes technologies pour réaliser le collecteur NetFlow. Je n’avais que deux règles pour le choix de la solution :</p>
      <ul>
        <li>La solution technique sera installée sur un serveur physique. Je devais donc définir une architecture et une solution qui ne soit pas trop gourmande au niveau matériel.</li>
        <li>La solution technique choisie doit avoir un impact minime sur le budget annuel du datacenter puisque ce dernier a été décidé sans que ce projet soit imaginé.</li>
      </ul>
      <p>Ces contraintes ont influencé grandement mon choix des technologies pour ce projet.</p>

      <h3>Enjeux</h3>
      <p>Dans cette réalisation, les enjeux étaient la satisfaction des besoins du client, le respect des délais de livraison et la validation des enseignements de mon bachelor.</p>
      <p>Le premier enjeu a été de travailler sur un projet avec des implications dans le datacenter. J’étais responsable de livrer une solution technique correspondant aux besoins du responsable du datacenter. Ce projet allait ensuite être utilisé pendant plusieurs années au sein du datacenter et allait avoir une importance au sein du processus de détection et d’identification des incidents au sein de l’équipe de gestion du datacenter.</p>
      <p>Le second enjeu a été de respecter un délai de livraison de la solution. La contrainte temporelle a été l’élément moteur du projet, car le responsable du datacenter souhaitait que la solution technique soit mise en place devait être mise en production avant un audit annuel dans le cadre de la certification des Hébergeurs de Données de Santé (HDS).</p>
      <p>L’enjeu final était de valider les enseignements de mon bachelor, car j’avais choisi de rédiger un dossier de projet sur cette réalisation, retraçant tous les éléments du projet, ainsi qu’une présentation orale devant un jury composé de professionnels du métier, afin de valider le Bachelor Administrateur d’Infrastructures Sécurisées.</p>

      <h3>Risques</h3>
      <p>Les risques principaux rencontrés au cours du projet étaient de proposer une solution ne correspondant pas aux besoins du client. Il fallait aussi répondre aux besoins avec des coûts financiers limités, tout en délivrant une solution technique adaptée aux certifications ISO 27001 et HDS.</p>

      <h3>Interaction avec les parties prenantes</h3>
      <p>Afin de garder un cap précis et un avancement continu, j’ai organisé des réunions hebdomadaires avec le client et mon maître de formation. Ces réunions m’ont permis de m’adapter à tout changement venant du client. J’ai aussi pu en profiter pour expliquer mes différents blocages techniques, et de recevoir de l’aide là-dessus.</p>
      <p>J’ai aussi organisé avec eux une réunion mensuelle où j’ai pu montrer mon avancement par le biais d’une présentation. Cela m’a permis de recevoir un retour du client sur la solution technique et sa mise en place, car malgré son rôle de responsable du datacenter, il ne se situait pas sur le site du datacenter.</p>

      <h3>Étapes du projet</h3>
      <p>Comme le cahier des charges du client me donnait une grande liberté au niveau des technologies utilisées, j’ai réalisé un benchmarking des différentes solutions techniques possibles, mais aussi des protocoles de surveillance des flux IP possible. J’ai donc comparé les protocoles NetFlow v5 et v9 entre eux, mais aussi avec l’IPFIX et un quatrième protocole, le SFlow. Le SFlow (Sampled Flow), est un protocole similaire au NetFlow v5 en fonctionnement, sauf qu’il réalise un échantillonnage des flux IP afin de réduire la charge matérielle sur les équipements réseaux. Cependant, en ne récupérant qu’un flux sur 5, 10, ou même 20, la solution technique perd en précision.</p>
      <p>Le choix déterminant du protocole a été fait en fonction de la compatibilité avec notre marque de pare-feu périmétrique. NetFlow v9 étant compatible contrairement à l’IPFIX, c’est devenu le protocole utilisé dans la solution technique.</p>
      <p>J’ai ensuite réalisé un Proof Of Concept (POC) afin de démontrer la faisabilité de la solution technique choisie. J’ai décidé d’utiliser la stack Elastic, car c’est une technologie déjà utilisée sur d’autres sites du groupe Berger-Levrault en tant que collecteur Syslog.</p>
      <p>La stack Elastic (souvent appelée stack ELK) est une série de composants applicatifs permettent de collecter, formater et afficher une grande variété de données. Elle est composée de quatre éléments majeurs :</p>

      <ul>
        <li>Elasticsearch : C’est un moteur de recherche basé sur Apache Lucene qui permet le stockage, l’indexation et la recherche de données. C’est le cœur de la stack ELK.</li>
        <li>Logstash : C’est un outil de collecte, d’analyse et d’ingestion des données. Il permet aussi de réaliser un formatage sur les données entrantes, avant de les envoyer vers Elasticsearch.</li>
        <li>Kibana : C’est un outil de visualisation de données. Il permet de visualiser graphiquement une grande quantité d’informations stockée par Elasticsearch sous formes de courbes, graphiques et tableaux.</li>
        <li>Filebeat : C’est un module détaché de Logstash qui permet d’appliquer des formatages spécifiques sur des protocoles particuliers, comme le Syslog ou le NetFlow.</li>
      </ul>

      <p>Afin de réaliser ce POC, j’ai décidé d’utiliser une machine virtuelle Ubuntu 22.04. J’ai opté pour un système d’exploitation Linux car les licences Windows Server 2022 Datacenter sont couteuses, et un système d’exploitation Linux sans interface graphique consomme moins de ressources matérielles. J’ai placé la machine dans un réseau spécial du datacenter dédié aux machines de test et aux POC. J’ai ensuite récupéré la stack Elastic via la commande wget pour avoir un fichier compressé avec tous les composants du stack.</p>
      <p>La configuration de la stack Elastic a été réalisé en mode « standalone ». Chaque instance d’Elasticsearch est appelé un nœud, et peut avoir un rôle spécifique dans l’ingestion et la recherche de données. Les nœuds peuvent être mis en cluster afin d’apporter de la redondance et de la répartition de charge au collecteur. Ici, comme chaque nœud Elasticsearch demande une grande allocation de processeur et mémoire, il n’y en a qu’un seul. Cela permet de tester le fonctionnement de la stack dans un environnement où la tolérance aux pannes n’est pas nécessaire, car c’est un environnement de test.</p>
      <p>Le collecteur de POC configuré, j’ai commencé à ouvrir les flux sur les différents pares-feux internes et périphériques du datacenter, pour que les flux NetFlow qui utilisent le port 2055 en UDP puissent circuler des équipements source vers le collecteur dans le réseau de test. En effet, j’ai eu l’autorisation de configurer l’envoi de flux NetFlow sur un pare-feu périmétrique où l’on ne trouve aucun flux de production. Cela permet de tester la solution entière, de l’envoi des flux à l’affichage des données collectées, sans risque de causer un incident majeur sur un équipement de production.</p>
      <p>Une fois la configuration de l’exportateur de flux NetFlow et l’ouverture des flux réalisées, la solution a pu être testée et validée.</p>
      <p>Pour m’atteler à la mise en production, je me suis servi d’un ancien serveur de sauvegarde décommissionné. Le responsable du datacenter a considéré que la réutilisation du serveur et l’achat d’un support de plusieurs années auprès d’une entreprise spécialisée était un meilleur choix que d’héberger la solution sur notre infrastructure virtualisée, demandant une allocation de ressources extrême. Le serveur a des caractéristiques matérielles excellentes, avec 20 cœurs de processeur, 128 Go de mémoire vive, deux disques systèmes de 1 To chacun en redondance RAID 1, et 24 disques de données de 10 To chacun.</p>
      <p>Je me suis attelé d’abord à la configuration des cartes RAID des disques de données. Le collecteur de test n’ayant fonctionné que pendant deux jours, avec un seul pare-feu avec des flux réduits en tant qu’exportateur, nous n’avons pas pu estimer la quantité de stockage nécessaire afin d’avoir une rétention des données d’un an pour tous les pares-feux périmétriques du datacenter. J’ai donc décidé de prévoir un stockage important. J’ai découpé les 24 disques en quatre groupes RAID 5 de six disques :</p>

      <ul>
        <li>Les trois premiers groupes RAID seront utilisés par un nœud Elasticsearch chacun. Ainsi, chaque nœud aura 50 To de stockage à sa disposition. L’équivalent d’un disque (10 To) est utilisé par les partitions de contrôle du RAID qui sont écrites sur chaque disque.</li>
        <li>Le dernier groupe est laissé inutilisé, en attente. Si le stockage alloué aux nœuds n’est pas suffisant, alors jusqu’à deux disques pourront être ajoutés à chaque groupe RAID. Aussi, si un des disques alloués vient à subir une panne, nous pourrons rapidement remplacer le disque par un inutilisé afin de ne pas attendre que le support nous en envoie un autre pour recréer le RAID.</li>
      </ul>

      <p>Après la configuration du RAID, j’ai installé le système d’exploitation Ubuntu 22.04, comme pour le POC. Comme le serveur avait deux ports Ethernet 10Gb, j’ai configuré un agrégat des ports, ou LAG (Link Aggregation Group). Cela permet aux deux ports de partager la même adresse IP. De plus, en mode LACP (Link Aggregation Control Protocol), les deux ports sont actifs en même temps, doublant la bande passante. Cet agrégat de lien va servir pour la collecte des flux NetFlow. Un autre agrégat, cette fois de ports Ethernet 1Gb, est créé pour la partie management du serveur.</p>
      <p>J’ai ensuite dû modifier la configuration de la stack de switches sur lesquels le serveur est raccordé. J’ai dû renommer les PortChannels (agrégats de lien entre switches Cisco) pour qu’ils correspondent au rôle du collecteur, et modifier le VLAN des ports pour correspondre à la nouvelle assignation IP du collecteur.</p>
      <p>Pour installer la stack Elastic en mode « clustering », j’ai décidé d’utiliser une autre technologie : Docker. C’est une technologie qui permet de créer des environnements logiciels isolés appelés « conteneurs ». Docker est assez peu utilisé sur le datacenter, et c’était une technologie que je ne maîtrisais que peu avant ce projet.</p>
      <p>Pour créer l’architecture du collecteur souhaitée, j’ai dû utiliser un outil de docker appelé docker-compose. Il permet, à partir de ficher YAML, d’automatiser la création de plusieurs conteneurs avec des configurations spécifiques. En me basant sur le fichier YAML créé par Elastic, j’ai créé l’architecture suivante :</p>

      <ul>
        <li>Un conteneur « setup » : Ce conteneur Elasticsearch est le premier à se lancer et ne sert qu’à créer les certificats SSL pour chaque nœud de l’architecture, ainsi que configurer les mots de passe pour les comptes de service de la stack.</li>
        <li>Trois conteneurs « nœud » : Numérotés de 1 à 3, ce sont les trois instances d’Elasticsearch. Configurés en mode « Cluster », ils peuvent se répartir les tâches et aussi survivre à la panne d’un d’entre eux sans que le collecteur tombe.</li>
        <li>Un conteneur Kibana : Ce conteneur est directement connecté au cluster Elasticsearch. Il permet de visualiser toutes les données via des tableaux de bord modifiables. Il est ouvert vers l’extérieur sur le port 5601 en TCP.</li>
        <li>Un conteneur Filebeat : Ce conteneur gère l’ingestion des données grâce à son module « NetFlow ». Les données ingérées sont directement envoyées vers le cluster Elasticsearch.</li>
      </ul>

      <p>Après l’installation de la stack sur Docker, j’ai entamé la configuration de l’exportation NetFlow des différents pares-feux périmétriques. Le test sur le POC nous a montré que l’ajout de l’exportateur de flux NetFlow n’augmente pas de manière significative la consommation de ressources du pare-feu. J’ai tout de même décidé de réaliser les opérations pendant la pause déjeuner pour réduire les perturbations sur la production. Cette configuration a été implémentée sur tous les pares-feux périmétriques, ainsi que les pares-feux sur lesquels des tunnels VPN sont créés. Une fois la solution mise en place, j’ai modifié les tableaux de bords existants sur le Kibana afin de supprimer les éléments non supportés ou nécessaires.</p>
      <p>Finalement, j’ai rédigé deux documentations afin que d’autres membres de l’équipe « Infrastructure & Cloud Operations » puissent prendre en main l’outil :</p>

      <ul>
        <li>La première est un DAT (Document d’Architecture Technique) : elle retrace la création du projet, les benchmarks réalisés, un schéma de l’infrastructure interne du collecteur, ainsi que les éléments de configuration par défaut du collecteur et des pares-feux.</li>
        <li>La seconde est un DEX (Document d’Exploitation) : elle contient toutes les informations relatives à l’utilisation du collecteur, de la connexion au Kibana à la procédure de mise à jour de la stack.</li>
      </ul>

      <h3>Résultats</h3>
      <p>Le projet a été considéré un succès par le client et mon tuteur de formation. Ce projet a permis au datacenter de se doter d’une solution de collecte NetFlow à coût réduit, fiable (aucun incident majeur relevé sur une année) et adaptée à nos besoins. Actuellement, le collecteur est toujours utilisé afin de corréler des informations venant de nos pares-feux internes.</p>
      <p>Personnellement, ce projet est le premier projet de grande envergure que j’ai réalisé seul pendant mon alternance. C’est aussi grâce à ce projet et aux dossier projet réalisé au cours de mon alternance que j’ai pu valider mon Bachelor Administrateur d’Infrastructures Sécurisées et poursuivre mon alternance en Master Expert en ingénierie des systèmes d’information.</p>

      <h3>Lendemains du projet</h3>
      <p>Bien que le projet soit terminé, nous avons décidé de consacrer un temps supplémentaire à l’amélioration du collecteur. Certains petits problèmes sont remontés avec l’utilisation de l’outil, notamment au niveau des tableaux de bord, et ont été résolus rapidement. Nous avons aussi décidé de rajouter plus de pares-feux au collecteur, avec les pares-feux protégeant les applications web client. La configuration des exportateurs de flux NetFlow a été réalisé en début 2025. Un projet d’ajout des pares-feux internes au collecteur est en cours, mais de par sa basse priorité, il est à l’arrêt, supplanté par les projets majeurs du datacenter.</p>

      <h3>Regard critique</h3>
      <p>Ce projet reste, en 2025, le projet le plus imposant que j’ai pu réaliser seul en entreprise. Mes compétences techniques et humaines se sont fortement renforcées au cours des sept mois de ce projet, et j’ai pu m’exercer à tous les niveaux d’un datacenter, ce que je n’ai jamais pu faire pendant mes projets étudiants. Grâce à ce projet, j’ai pu m’intégrer dans l’équipe « Infrastructure & Cloud Operations » de Berger-Levrault et m’épanouir dans un environnement que je venais à peine de découvrir. Je suis extrêmement reconnaissant envers toutes les équipes de Berger-Levrault qui m’ont apporté tout le soutien et les compétences nécessaires à la bonne réalisation de ce projet.</p>
    `
  },
  4: {
    title: "MCO d'un datacenter",
    icon: SVGIcons.server,
    desc: "Réalisation du Maintien en Condition Opérationnelle d'un datacenter certifié HDS et ISO 27001.",
    relatedSkills: [
      { type: 'techniques', id: 1 },
      { type: 'techniques', id: 2 },
      { type: 'techniques', id: 3 },
      { type: 'techniques', id: 4 },
      { type: 'humaines', id: 1 },
      { type: 'humaines', id: 4 },
      { type: 'humaines', id: 5 }
    ],
    fullContent: `
      <h3>Avant-propos</h3>
      <p>Cette réalisation a été réalisée dans le cadre d’un environnement de datacenter. Certaines informations ont été volontairement supprimées afin de préserver la confidentialité des individus et des technologies employés sur le datacenter.</p>

      <h3>Introduction</h3>
      <p>Dans le cadre de mon Bachelor Administrateur d’Infrastructures Sécurisées à INTECH Agen devenu ESIEA débuté en septembre 2021, j’ai travaillé pendant un an en alternance en tant qu’Administrateur d’Infrastructures pour le compte de l’entreprise <a href="https://www.berger-levrault.com/fr">Berger-Levrault.</a></p>
      <p>Le groupe Berger-Levrault est une entreprise spécialisée dans l’édition de solutions logicielles SaaS (Software as a Service) pour les collectivités françaises, les établissements sanitaires, sociaux et médico-sociaux, ainsi que de l’hébergement libre IaaS (Infrastructure as a Service).</p>
      <p>J’ai intégré l’entreprise an tant qu’Administrateur d’Infrastructures sur le datacenter principal du groupe. Mon métier consiste à assurer le Maintien en Condition Opérationnelle (MCO) du datacenter. La MCO est la liste des opérations prises afin de garantir le bon fonctionnement de l’infrastructure en place, ainsi que son évolution dans le temps.

      <h3>Objectifs</h3>
      <p>Cette réalisation a été mise en place au cours d’une alternance d’une durée de trois ans. De nombreux objectifs, à la fois humains et techniques, étaient attendus.</p>
      <p>Humainement, j’ai pu développer mes compétences relationnelles avec les différentes équipes de Berger-Levrault, ainsi qu’avec des clients et prestataires. L’équipe dont je faisais partie était l’équipe « Infrastructure & Cloud Operations », et est répartie sur plusieurs sites, ce qui rendait plus compliqué le transfert d’informations et la communication avec certains collègues.</p>
      <p>Techniquement, l’objectif était divisé en trois parties : la première consistait en la maîtrise de l’infrastructure du datacenter. Le datacenter étant d’une taille et d’une complexité plutôt importante, il m’a fallu comprendre le rôle de chaque zone de l’infrastructure, ainsi que les différents équipements utilisés. La seconde partie était d’être capable d’administrer les différents équipements afin de les maintenir en fonctionnement et gérer leur obsolescence. La dernière partie était d’être capable d’identifier et résoudre différents problèmes à l’échelle du datacenter. Cela signifie de traiter les différents incidents ou arrêts de production liés à l’infrastructure du site, ainsi que d’intégrer les équipes de support de niveau 3.</p>

      <h3>Contexte humain</h3>
      <p>L’organisation des effectifs des équipes informatiques de Berger-Levrault a évolué tout au long de mon alternance. Les équipes sont réparties en Business Units (BU), qui sont basées sur un axe majeur du groupe, comme une catégorie de produits. L’équipe « Infrastructure & Cloud Operations » dont je suis membre fait partie de la Business Unit « Technologie ». Cette BU gère tous les hébergements du groupe, les interconnexions entre les sites physiques, et d’autres.</p>
      <p>Mon équipe est présente sur trois sites différents, et est séparée en deux groupes majeurs : le premier est l’équipe « SRO - Delivery », qui gère le déploiement de nouvelles machines d’administration et client. Le second est l’équipe « Infra Engineering », qui gère les hébergements. Les deux groupes se chargent aussi du support au niveau infrastructure, à un niveau N2 pour le groupe SRO - Delivery et N3 pour le groupe Infra Engineering.</p>
      <p>En tant que membre du groupe Infra Engineering, j’ai fréquemment l’occasion d’échanger avec des clients de Berger-Levrault. Les échanges peuvent être directs ou indirects et se réaliser par e-mail ou en visioconférence, et dans de très rares cas en physique. J’ai aussi eu souvent l’occasion de communiquer avec les équipes des chefs de projets, du support et de la livraison des applicatifs, et des développeurs de la BU « Médico-social », qui étaient basés sur le même site.</p>
      <p>Des échanges réguliers ont aussi eu lieu avec les membres de l’équipe « Cybersécurité », notamment dans la transmission de vulnérabilités.</p>

      <h3>Contexte technique</h3>
      <p>Pour des raisons de confidentialité, je ne pourrais pas détailler ici l’infrastructure du datacenter, mais je peux dire que c’est une infrastructure complexe hébergeant plusieurs gammes de produits Berger-Levrault. Ces produits sont mis en place de manière isolée, et totalisent des centaines de machines, ainsi que de nombreux pares-feux et autres solutions de sécurité, des infrastructures virtualisées, de sauvegarde et de connexion à l’Internet.</p>
      <p>J’ai donc eu l’occasion de travailler sur un nombre important de technologies, et de diversifier mes compétences sur les trois ans de mon alternance.</p>

      <h3>Enjeux</h3>
      <p>Dans cette réalisation, les enjeux étaient la satisfaction des clients, le maintien de niveaux de disponibilité hauts et le respect des normes d’hébergement de données.</p>
      <p>La satisfaction des clients est un enjeu majeur en entreprise. En tant que membre d’une équipe intervenant sur des demandes de support de niveau N3, je suis amené à devoir diagnostiquer et résoudre des incidents complexes, entraînant des dégradations ou des interruptions de service sur des produits importants utilisés par des établissements médicaux. La résolution rapide de ces incidents est l’un des facteurs influençant positivement la satisfaction des clients, et permet de renforcer les partenariats entre eux et Berger-Levrault.</p>
      <p>Un autre enjeu est de maintenir des niveaux de disponibilités élevés. Lors de la signature des contrats des produits Berger-Levrault, un niveau de disponibilité annuel est inclus, ainsi que des garanties quant au temps de prise en charge et de résolution des incidents, ce qu’on appelle des SLA (Service Level Agreement). Il est critique que ces SLA soient respectés, car ils sont un gage de confiance pour un client (par exemple, une disponibilité de 99,98% signifie une interruption de service de seulement 1h35min par an).</p>

      <h3>Risques</h3>
      <p>Le risque principal rencontré au cours du projet était de créer une interruption de service sur des machines clientes en cas de mauvaise manipulation. Le Maintien en Condition Opérationnelle regroupe de nombreuses opérations (certaines seront décrites dans la partie « Réalisations ») visant à faire évoluer l’infrastructure du datacenter dans le temps. Certaines des opérations les plus risquées sont le remplaçant des machines, réseaux ou équipements entiers, souvent à des fins de lutte contre l’obsolescence ou contre les vulnérabilités. Des interruptions de service peuvent être nécessaires, mais elles sont planifiées pendant des heures creuses ou non ouvrées avec le client afin d’impacter le moins d’utilisateurs possible. Cependant, une opération de routine peut, en cas de mauvaise manipulation, entraîner une interruption de service imprévue. Cela pourrait impacter la satisfaction des clients, ainsi que dépasser les SLA inclus dans les contrats, ce qui pourrait causer des pertes financières ainsi qu’une perte de confiance des clients envers Berger-Levrault.</p>

      <h3>Organisation</h3>
      <p>Pendant mon alternance, de nombreuses réunions récurrentes ont lieu afin d’organiser les différentes tâches à réaliser. L’une d’entre elles est une réunion hebdomadaire qui a lieu tous les lundis matin, avec mon manager, mon maître de formation et un ingénieur systèmes et réseaux qui travaille sur le datacenter. Dans cette réunion, nous échangeons sur les tâches à réaliser pendant la semaine, ainsi que sur les possibles évènements qui ont pu se dérouler pendant le weekend. Une autre réunion suit cette dernière, cette fois avec certains membres de l’équipe Delivery, mais aussi avec des développeurs, des membres des équipes de support logiciel, et autres. Cette réunion nous permet de savoir les différentes opérations en cours sur le datacenter, comme par exemple la mise en place de nouveaux environnements clients ou un futur audit sur un produit hébergé. Une troisième réunion est organisée toutes les deux semaines par mon manager. Cette réunion permet d’informer l’équipe des différentes décisions prises par les échelons supérieurs de la BU Technologie, ainsi que des nouvelles venant du Comité Exécutif de Berger-Levrault.</p>

      <h3>Travail réalisé</h3>
      <p>Pour cette réalisation, je vais présenter trois opérations que j’ai réalisé dans le cadre global de la MCO du datacenter.</p>

      <h4>1. Ouverture de flux et gestion des accès</h4>
      <p>Le datacenter est souvent amené à réaliser des audits de sécurité sur différents produits hébergés, ou des opérations sur une partie de l’infrastructure, afin d’être conforme aux normes ISO 27001 et HDS. Bien que ces audits soient organisés par d’autres équipes que la mienne, nous sommes souvent consultés puisque des flux doivent être ouverts aux prestataires. Ces ouvertures de flux se font sous la forme de demandes internes dans notre outil de ticketing. Ces derniers sont automatiquement catégorisés comme étant de niveau N3 et transférés à notre équipe puisqu’elles concernent une gestion des accès.</p>
      <p>Lorsque je prends en charge une de ces demandes, je commence par créer des comptes utilisateurs sur un serveur Active Directory spécifique. Cet AD est lié à un portail VPN SSL, qui permet aux prestataires, ainsi qu’à certains clients et collaborateurs hors-site de Berger-Levrault de se connecter soit à une machine de rebond, soit directement à des serveurs via une connexion SSH ou RDP. J’ajoute ensuite un nouveau groupe utilisateur dans le portail VPN SSL, qui est lié au groupe de sécurité créé dans l’AD. Je crée aussi une règle liant le groupe utilisateur à des connexions SSH ou RDP vers une ou plusieurs machines. Dans le cas d’un prestataire, c’est une machine de rebond qui leur est dédiée. Je configure ensuite un compte sur une solution d’authentification à deux étapes (2FA), afin de sécuriser l’accès. Ce dernier est lui aussi lié au même AD que le portail VPN SSL. Je finis par ouvrir les flux nécessaires entre la machine de rebond et le serveur visé par l’audit ou l’opération. Ces flux peuvent passer par plusieurs pares-feux, donc il est important que je reste organisé pour ne pas avoir d’incident de production ou de mauvais flux d’ouvert. Finalement, j’envoie un e-mail au prestataire avec son mot de passe de compte sous le format d’un lien sécurisé, ainsi qu’avec la documentation pour se connecter au portail VPN SSL. Un e-mail d’activation de la 2FA est envoyé automatiquement au bout de douze heures. Quelques jours suivant la création des accès, je réalise une visioconférence avec le prestataire pour tester les accès en direct et répondre à ses questions.</p>

      <h4>2. Mise à jour d’équipements</h4>
      <p>La lutte contre l’obsolescence est extrêmement importante. Un équipement non mis à jour peut contenir des vulnérabilités susceptibles de causer un incident de sécurité majeur au niveau du datacenter. Il est aussi possible qu’un équipement obsolète cause des problèmes de compatibilité avec d’autres machines ou logiciels. Un équipement physique qui est proche de sa fin de vie peut subir des pannes de manière plus fréquente qu’un équipement plus récent, et aussi causer une dégradation ou interruption de service.</p>
      <p>Tout au long de mon alternance, j’ai participé ou réalisé la mise à jour des équipements du datacenter, ainsi que de certaines machines. J’ai par exemple recréé notre serveur de supervision Zabbix de l’infrastructure car les machines Ubuntu le composant étaient proche de leur date d’arrêt des mises à jour. J’ai demandé à l’équipe Delivery de créer deux machines avec un système d’exploitation Ubuntu plus récent, puis j’ai installé Zabbix et le système de base de données PostgreSQL dans les mêmes versions que le serveur en production. J’ai ensuite organisé une migration des données vers le nouveau serveur et une mise à jour de Zabbix et PostgreSQL vers des versions récentes. Cette migration avait pour impact principal d’interrompre l’utilisation de l’interface de supervision, donc le temps d’interruption devait être minime, et aussi avoir lieu pendant des heures creuses afin d’impacter le moins possible les équipes.</p>
      <p>J’ai aussi pu réaliser des mises à jour sur les équipements de sécurité et de sauvegarde du datacenter. Les équipements de sécurité, tels que des pares-feux, ont demandé une grande organisation afin de causer le moins de désagréments possible pour les clients et les équipes travaillant sur le datacenter. Les mises à jour des pares-feux ne causent que peu de perturbations grâce à leur disposition en clusters, assurant une continuité de service. Un autre équipement que j’ai pu mettre à jour est l’équipement permettant les sauvegardes et l’externalisation de ces dernières sur des sites distants. En suivant les recommandations du manufacturier, j’ai réalisé une mise à jour de l’équipement physique dans le datacenter et des équipements sur les sites distants deux fois par an pour changer de version majeure. Pour ces mises à jour, je décidais d’ouvrir un ticket chez le manufacturier afin d’avoir un ingénieur de disponible au moment de la mise à jour. Cela nous permettait, en cas de problème lors de la mise à jour, de pouvoir directement le remonter à une personne compétente et de commencer les opérations de rétablissement au plus vite.</p>

      <h4>3. Remplacement de PDU</h4>
      <p>Dans le cadre de la lutte contre l’obsolescence, j’ai pu réaliser un mini-projet pendant environ six mois. Un type d’équipement qui est sujet à l’obsolescence mais qui est souvent oublié est les PDU (Power Distribution Unit). Ce sont les équipements permettant l’alimentation en électricité des différents équipements présent dans les racks d’un datacenter. Si ces PDU tombent en panne, cela peut couper l’alimentation à des serveurs et entraîner une interruption de service sévère.</p>
      <p>J’ai commencé par mettre en place un PDU à des fins de test. Je l’ai utilisé pour découvrir comment configurer la carte réseau, les envois de logs à un serveur Syslog, et la gestion des flux SNMP vers la supervision. Lorsque la configuration globale du PDU est devenue satisfaisante, j’ai fait un plan de tous les racks du datacenter. Dans ce plan, j’ai noté tous les serveurs de chaque rack, en mentionnant sur quel PDU ils sont branchés. J’ai aussi noté si les PDU existants seraient faciles à retirer du rack ou non, et si la place derrière le rack permet une installation facile du PDU. J’ai ensuite réalisé une procédure pour le remplacement des PDU, avant d’organiser un planning de remplacement sur six mois. Au rythme de deux racks par semaine, puis un par semaine à partir de la reprise des cours, j’ai remplacé l’intégralité des PDU du datacenter avec mon maître de formation. J’ai commencé par des racks avec des équipements entièrement redondés, afin de ne pas causer d’arrêt de service sur les premières opérations en cas de mauvaise manipulation. Une fois les racks redondés effectués, j’ai réalisé les opérations des racks non redondés. Cela a entraîné une communication aux clients, puisque certains d’entre eux possèdent des équipements permettant l’interconnexion entre le datacenter et leurs sites (comme des accès à une grappe MPLS par exemple).</p>
      <p>Au final, tous les PDU ont été remplacés. Aucun incident de production imprévu n’a été noté lors des opérations.</p>

      <h3>Lendemains du projet</h3>
      <p>La MCO d’un datacenter ne se termine jamais. Au fur et à mesure, il y a toujours des équipements approchant leur fin de vie, de nouvelles mises à jour poussées pour des logiciels, et de nouveaux flux à ouvrir et à refermer. C’est une tâche liée au cycle de vie du datacenter.</p>

      <h3>Regard critique</h3>
      <p>Je retiendrai de cette alternance la grande satisfaction d’avoir pu travailler sur une infrastructure si complexe et passionnante. La grande variété de technologies et de situations m’auront permis de renforcer fortement mes connaissances techniques et humaines. J’ai pu rapidement m’intégrer au sein de l’équipe Infrastructure & Cloud Operations de l’entreprise et m’épanouir dans un environnement que je venais à peine de découvrir. Je suis extrêmement reconnaissant envers toutes les équipes de Berger-Levrault qui m’ont apporté tout le soutien et les compétences nécessaires en matière d’administration systèmes et réseaux, de cybersécurité et de relation client.</p>
      `
  },
  5: {
    title: "Déploiement de supervision automatisé",
    icon: SVGIcons.automation,
    desc: "Déploiement d'une solution de supervision avec Ansible.",
    relatedSkills: [
      { type: 'techniques', id: 2 },
      { type: 'techniques', id: 3 },
      { type: 'humaines', id: 1 },
      { type: 'humaines', id: 3 }
    ],
    fullContent: `
      <h3>Introduction</h3>
      <p>Dans le cadre de mon Bachelor Administrateur d’Infrastructures Sécurisées à INTECH Agen devenu ESIEA débuté en septembre 2021, j’ai travaillé pendant un an en alternance en tant qu’Administrateur d’Infrastructures pour le compte de l’entreprise <a href="https://www.berger-levrault.com/fr">Berger-Levrault.</a></p>
      <p>Le groupe Berger-Levrault est une entreprise spécialisée dans l’édition de solutions logicielles SaaS (Software as a Service) pour les collectivités françaises, les établissements sanitaires, sociaux et médico-sociaux, ainsi que de l’hébergement libre IaaS (Infrastructure as a Service).</p>
      <p>J’ai intégré l’entreprise an tant qu’Administrateur d’Infrastructures sur le datacenter principal du groupe. Mon métier consiste à assurer le Maintien en Condition Opérationnelle (MCO) du datacenter. Cela, dans certains cas, pouvait se traduire par des grands projets de mise en place ou de migration d’outils ou d’équipements.</p>

      <h3>Objectifs</h3>
      <p>L’objectif principal de ce projet était de remplacer des solutions de supervision obsolètes sur le datacenter. Une supervision obsolète, c’est des failles de sécurité qui peuvent apparaître à tout moment sur un équipement critique d’une infrastructure. C’est aussi des données possiblement manquantes, car une infrastructure complexe évolue sans cesse, et une machine ajoutée ou supprimée demande une action dans la supervision pour collecter les métriques ou éviter de remonter des alertes logiques.</p>

      <h3>Contexte humain</h3>
      <p>Ce projet était le premier que je réalise où je collabore avec des équipes qui n’étaient pas sur le même site que moi. J’ai aussi eu l’occasion de travailler avec de nombreuses équipes différentes, telles que l’équipe Automatisation, l’équipe des chefs de projet, ainsi que des techniciens travaillant sur l’outil que nous allions mettre en place.</p>
      <p>Ce projet est aussi spécial car j’ai dû le prendre en cours de route. Originellement, c’était mon maître de formation qui devait s’en occuper, et qui a réalisé une infrastructure de Proof of Concept (POC). Cependant, à la suite de son départ de l’entreprise en décembre 2024, j’ai dû prendre le relais et m’intégrer immédiatement avec les équipes pour réaliser les déploiements de production.</p>

      <h3>Contexte technique</h3>
      <p>Sur le datacenter, les machines clientes étaient supervisées par plusieurs systèmes de supervision. Le premier était un serveur Zabbix hébergé sur une machine Ubuntu 20.04 supervisant la majorité des machines. Le deuxième est un serveur Nagios obsolète depuis des années, qui servait à superviser une gamme de produit migré en dehors du datacenter depuis des années. Le dernier était une supervision RG System, qui était plutôt couteux et arrivait proche de sa date d’obsolescence. Il fallait donc un nouveau système de supervision, permettant de centraliser le rôle des trois outils originaux, et de réduire les coûts.</p>
      <p>L’outil utilisé pour remplacer la supervision des machines clientes était la plateforme Dynatrace. <a href="https://www.dynatrace.com/">Dynatrace</a> est une entreprise américaine fondé en 2005 et est spécialisée dans l’édition de logiciels d’observabilité des infrastructures et applicatifs. Le Dynatrace Hub est une plateforme disponible en SaaS, permettant de réaliser de la supervision de machines, applicatifs et infrastructures, ainsi que de réaliser des dashboards via des extensions téléchargeables. Combiné à l’agent de supervision OneAgent, à installer sur des machines Windows et Linux, la plateforme Dynatrace est capable de collecter des métriques de performance, découvrir les différents processus en cours et leurs états, et s’intégrer aux outils de gestion des incidents pour automatiser la création de tickets. Elle permet également de créer des dashboards permettant d’afficher des KPI (Key Performance Indicators) pour les managers des différentes Business Units.</p>

      <h3>Enjeux</h3>
      <p>Dans ce projet, les enjeux étaient multiples. Du côté technique, l’enjeu principal était de simplifier l’accès aux informations de supervision à l’échelle du groupe. Certaines gammes de produits hébergé sur un datacenter pouvait rentrer dans le giron des employés travaillant sur un site différent. Ouvrir des flux vers différents sites pouvait vite devenir un cauchemar. L’utilisation d’une plateforme SaaS, avec toutes les métriques directement envoyées dessus permet de simplifier les accès des employés, car il ne suffisait plus qu’à lier leur compte AD d’entreprise pour qu’ils aient accès aux données.</p>
      <p>L’autre enjeu majeur était l’amélioration de la sécurité. Puisque des employés extérieurs au datacenter devaient se connecter aux outils de supervision hébergés en interne, cela entraînait des ouvertures de flux nombreuses, les plus anciennes étant obsolètes et parfois intraçables à cause d’une mauvaise documentation des demandes de flux. L’implémentation d’une supervision en SaaS réduit le nombre de flux ouverts sur les pares-feux. De plus, la suppression de systèmes d’exploitation obsolètes réduit les vulnérabilités présentes sur le datacenter.</p>

      <h3>Risques</h3>
      <p>Dans le cadre de ce projet, le risque principal était de causer des perturbations ou même une interruption de service lors des différents déploiements des agents. Le datacenter possède une grande variété de machines clients, avec différents applicatifs et systèmes d’exploitation présents. Les POC réalisés ont pu vérifier la compatibilité de l’agent avec différents systèmes d’exploitation, mais une part d’incertitude restait présente pendant le projet. Puisque les déploiements se faisaient pendant des heures ouvrées, un incident encourrait le risque d’interrompre le service des différents clients utilisant une gamme de produits. Les clients étant en majorité des établissements médicaux et médico-sociaux, cela renforçait le caractère critique d’un incident possible.</p>

      <h3>Organisation</h3>
      <p>Lors de ce projet, l’organisation était gérée par un chef de projet engagé en tant que prestataire. Il a décidé d’organiser des sessions de travail appelés ateliers lors des phases initiales du projet, afin de rassembler les différentes parties prenantes pour élaborer le POC, ainsi que l’infrastructure finale. Une réunion hebdomadaire était aussi mise en place afin de discuter sur les actions réalisées lors de la semaine, ainsi que ce qu’il restait à faire.</p>

      <h3>Étapes du projet</h3>
      <p>Le projet a débuté sur plusieurs réunions avec les techniciens de Dynatrace. Mon ancien maître de formation, avec les architectes techniques, ont pu s’accorder sur une infrastructure à mettre en place. Ils ont décidé d’ajouter un nouvel outil de Dynatrace afin de simplifier l’ouverture des flux sur le datacenter : les ActiveGate. C’est un proxy permettant de centraliser l’envoi des métriques remontées par les agents OneAgent. En configurant les agents OneAgent pour qu’ils envoient leurs métriques aux ActiveGates, cela permet de réduire le nombre de flux ouverts sur les pares-feux du datacenter.</p>
      <p>Le choix s’est porté sur l’implémentation de quatre ActiveGates : deux réservés aux machines de management et d’infrastructure, et deux réservés aux machines clientes. Les agents étant capables de choisir l’ActiveGate de leur choix, cela permet d’avoir une certaine redondance en cas de panne de l’un de ces derniers, ainsi que de séparer les flux des machines clientes de celles de management.</p>
      <p>Deux serveurs de plus ont été créés, afin de servir non seulement aux déploiements des agents, mais aussi à l’automatisation du datacenter dans le futur. Ces serveurs Ubuntu 24.04 étaient dédiés à Ansible, qui est un outil d’automatisation. Comme pour les ActiveGates, nous faisions une distinction entre les machines de management et les machines clientes, qui avaient chacune leur serveur Ansible.</p>
      <p>Un POC a ensuite été réalisé. Il nous a permis de confirmer les choix techniques fait dans les premiers ateliers, ainsi que de tester la compatibilité des agents avec les différents systèmes d’exploitation présents sur le datacenter. Et en effet, il nous a permis d’apprendre que les agents n’étaient pas compatibles avec les serveurs Windows Server 2008 et 2012, ainsi que les CentOS 5. De plus, les serveurs CentOS 6 se sont montrés incompatibles avec une installation de l’agent avec Ansible. Cela est un problème, car beaucoup d’anciens serveurs du datacenter utilisent ce système d’exploitation.</p>
      <p>C’est à la suite de ce POC que j’ai remplacé mon ancien maître de formation. Lors d’une réunion de préparation des déploiements de production, nous nous sommes décidés sur l’organisation des playbooks. Un playbook Ansible est un fichier .yaml qui permet de configurer le déploiement d’applications sur une ou plusieurs machines. Ici, nous utilisions Ansible afin de pousser la même configuration de l’agent sur les machines d’une même gamme de produits. Pour s’organiser sur les déploiements par gamme, nous avons utilisé un outil interne appelé VMOutput. C’est un fichier Excel généré tous les jours, contenant toutes les informations nécessaires sur les machines virtuelles présentes sur les infrastructures virtualisées VMware du groupe Berger-Levrault. Un export de ces informations via l’outil RVTools est combiné dans un script PowerShell à un fichier SharePoint rempli par les différentes Business Units du groupe. Certaines informations, telles qu’un identifiant de l’offre auquel la machine appartient, ou le nom du client sont ajoutées. Cela nous permet d’avoir un fichier combinant les configurations techniques des machines virtuelles, tout en ayant les informations des BU pour organiser les déploiements.</p>
      <p>Nous avons planifié les déploiements un mois en avance. Cela nous laissait le temps de prévenir les différentes BU pour que les équipes puissent réaliser les communications aux clients. Le déploiement de l’agent ne causait pas de perturbations sur les activités clients lors du POC, nous avons souhaité tout de même réaliser une communication afin de les prévenir si quelque chose venait à se passer. Les déploiements étaient organisés les lundis, mardis, et plus rarement les jeudis en début d’après-midi. Chacune de ces réunions servait au déploiement de l’agent OneAgent sur environ une vingtaine de machines maximum. Pour des gammes de produits plus petites, nous avons fait le choix de les combiner pour gagner du temps. Pour les gammes les plus importantes, nous réalisions les déploiements par lots, souvent triés par système d’exploitation.</p>
      <p>Dans l’ensemble, les déploiements, qui se sont déroulés de janvier à avril 2025, n’ont pas causé d’interruption majeure, sauf pour une gamme de produits. En février, lors du déploiement de l’agent sur des machines du produit ATAL, qui est un logiciel de gestion des services techniques pour les collectivités françaises, un incident s’est produit. Sur la douzaine de machines Windows Server 2016 du produit, cinq ne répondaient plus après l’installation de l’agent OneAgent. Après une demi-heure de troubleshooting, nous avons décidé de réaliser un rollback, afin de restaurer l’accès au produit pour les clients. Dans la foulée, j’ai été chargé de mener l’enquête de ces interruptions de service. J’ai cloné les machines incriminées et je les ai isolées derrière un pare-feu de remédiation. Ce pare-feu PFSense me permettait de garder la configuration réseau des machines, tout en évitant qu’elles communiquent avec l’extérieur. Je pouvais alors me connecter à elles via une console d’administration dédiée à cet effet, sans opérer de manipulation sur la production. J’ai ensuite essayé à plusieurs reprises de réinstaller l’agent OneAgent sur les machines manuellement, puis avec Ansible. À chaque fois, les machines ne répondaient plus, et certaines redevenaient disponibles après un redémarrage. Avec l’aide du support Dynatrace, j’ai pu extraire les logs système et de l’agent lors de l’installation, afin de déterminer la cause de l’incident.</p>
      <p>Nous avons découvert que l’un des pilotes intégrés au fichier d’installation de l’agent, dont le rôle était de remonter les métriques de la carte réseau des machines virtuelles Windows, causait une erreur d’incompatibilité. Le support m’a conseillé de tester une installation de l’agent avec une configuration choisissant un autre pilote, qui était utilisé dans des versions plus anciennes de OneAgent. Selon eux, il était possible que le pilote soit trop récent pour le système d’exploitation. Après un test sur toutes les machines clonées, l’installation s’est déroulée sans problème. La semaine suivante, un second déploiement a été organisé sur toutes les machines ATAL, en utilisant l’ancien pilote dans la configuration. Aucun problème n’avait été détecté, ce qui nous a permis de reprendre les déploiements sur les machines Windows Server 2016. Ce qui nous a surpris le plus, c’est que l’incident ne s’était pas déclaré pendant le POC, malgré le test sur des machines Windows Server 2016, mais que nous n’avions plus détecté le problème sur le restant du parc informatique, dont plus d’une centaine de machines utilisaient ce système d’exploitation.</p>

      <h3>Lendemains du projet</h3>
      <p>Ce projet s’est terminé pendant l’été 2025 avec la finalisation des déploiements sur d’autres datacenters. Ce projet a permis de simplifier les accès au datacenter, puisque nous n’avions plus de demandes intempestives des autres sites de Berger-Levrault demandant un nouvel accès à la supervision client, ni de demandes de création de compte sur cette dernière. L’infrastructure mise en place s’est montrée très résiliente, avec aucun incident remonté depuis la fin du projet. Les différents composants de la supervision initiale sont en cours d’arrêt ou déjà supprimé, avec uniquement le serveur Zabbix rarement utilisé par mon équipe afin d’obtenir une première idée sur la cause d’un problème sur une machine client.</p>

      <h3>Regard critique</h3>
      <p>Ce projet était particulier puisque j’ai dû rejoindre l’équipe en cours de route. Cela m’a demandé de faire face à de nombreux challenges, notamment de m’intégrer dans un groupe composé de personnes de plusieurs équipes et réparties sur différents sites physiques. J’ai pu découvrir la suite Dynatrace et ses différents composants, ainsi que renforcer mes compétences sur Ansible et dans la résolution d’incidents complexes. Je suis très heureux du résultat du projet et d’avoir pu assurer sa réussite.</p>
    `
  }
};

const skillData = {
  techniques: {
    1: {
      title: "Gestion des systèmes Linux",
      icon: SVGIcons.linux,
      desc: "Je suis à l'aise avec les systèmes Linux et j'aime les faire évoluer.",
      fullContent: `
        <h3>Ma définition</h3>
        <p>La gestion et l’évolution des environnements Linux représentent toutes les compétences et réalisations nécessaires à la création et la sécurisation des environnements basés sur Linux, ainsi que leur évolution dans le temps.</p>
        <p>Linux est un système d’exploitation open source basé sur Unix créé en 1991 par Linus Torvalds. Son noyau, aussi appelé « kernel », est aujourd’hui la base de nombreux systèmes d’exploitation appelés « distributions », comme par exemple Ubuntu, Debian, Arch Linux, et autres. Les distributions Linux sont reconnues pour leur architecture open-source, leur légèreté et stabilité dans des environnements serveur, ainsi que par leur communauté extrêmement vaste et active.</p>
        <p>Linux est aujourd’hui fortement populaire dans les entreprises, comme le décrit cet article de <a href="https://www.developpez.com/actu/78674/La-croissance-de-Linux-se-fait-au-detriment-de-Windows-en-entreprise-selon-un-rapport-de-la-fondation-Linux/">Développez.com</a>. En 2014, les trois quarts des serveurs des grandes entreprises étaient sous un système d’exploitation Linux. La même proportion des entreprises considérait aussi que Linux est plus sécurisé que les autres plateformes sur le marché, notamment Windows.</p>
        <p>Aujourd’hui, Linux est incontournable dans les entreprises possédant un service informatique. Leur omniprésence rend les compétences de gestion de ces environnements nécessaires sur le marché du travail aujourd’hui.</p>

        <h3>Mes éléments de preuve</h3>
        <p>Mon apprentissage de la gestion et de l’évolution des environnements Linux s’est déroulé tout au long de ma scolarité et de mon alternance.</p>
        <p>Je vais vous présenter mon expérience dans cette compétence à travers deux réalisations :</p>
        <ul>
          <li>La <a href="#/realisations/4">MCO d’un datacenter</a>, réalisé tout au long de mon alternance au sein de l’entreprise Berger-Levrault, entre 2023 et 2026.</li>
          <li>Le <a href="#/realisations/3">projet Netflow</a>, réalisé pendant la première année de mon alternance chez Berger-Levrault, entre 2023 et 2024.</li>
        </ul>
        <p>Au cours de <a href="#/realisations/4">mon alternance</a>, j’ai eu l’occasion d’effectuer diverses tâches de maintenance sur les nombreux environnements Linux de Berger-Levrault. J’ai pu notamment me familiariser aux distributions Ubuntu et CentOS, ainsi qu’à la gestion des nombreux services hébergés sur Linux dans le datacenter de Berger-Levrault, comme les serveurs DNS et NTP, les serveurs de supervision, ainsi que les serveurs de base de données et la majorité des serveurs applicatifs que nous livrons à nos clients, et autres. Cela m’a permis d’approfondir mes connaissances apprises au sein de mes deux premières années de bachelor. J’ai notamment réalisé des opérations de remplacement des systèmes d’opération Linux obsolètes, ce qui m’a permis de me perfectionner sur la création des partitions systèmes, découvrir la gestion des adressages IP via l’outil netplan que je n’avais jamais utilisé auparavant, ainsi qu’installer de nombreux paquets et services tels que Kerberos, Syslog et Zabbix.</p>
        <p>Lors du <a href="#/realisations/3">projet Netflow</a>, je devais mettre en place un collecteur de flux Netflow afin de surveiller les flux transitant par les pares-feux du datacenter. J’ai décidé d’installer le système d’exploitation Ubuntu 22.04 sur un serveur physique, puisque la légèreté et le coût était des critères principaux de la solution. Pendant cette phase, j’ai pu me perfectionner sur la création de partitions customisées pour les différentes parties de mon collecteur, ainsi que sur la création d’agrégats de liens pour redonder les connexions réseaux du serveur. J’ai ensuite pu installer différents paquets tels que Kerberos et Docker, ainsi que préparer différents répertoires dédiés aux différents composants du collecteur. J’ai ensuite du utiliser le service Iptables afin de gérer les règles du pare-feu interne à Ubuntu, afin de bloquer certains flux entre l’extérieur et les conteneurs du collecteur.</p>

        <h3>Mon autocritique</h3>
        <p>Grâce à mon parcours scolaire et mon alternance effectuée chez Berger-Levrault, j’ai pu apprendre à gérer et faire évoluer différents environnements Linux. J’estime mon niveau dans cette compétence comme étant « confirmé » mais pas expert, car je considère que je ne maîtrise pas encore certaines facettes de l’environnement Linux, comme par exemple la gestion des tables de partition. J’estime aussi manquer d’expérience dans la gestion de distributions Linux qui ne sont pas basées sur Debian, telles que CentOS, puisque je me retrouve souvent perdu à cause des différences non-négligeables avec Ubuntu ou Debian.</p>
        <p>J’ai vite compris les principes de base de la gestion d’un environnement Linux tels que la gestion des adressages IP, l’architecture du noyau Linux et la configuration des paquets et services basiques (DNS, NTP, SSH) grâce aux cours et projets de l’ESIEA pour le bachelor Administrateur d’Infrastructures Sécurisées. Grâce à cette formation, j’ai eu l’occasion de vite apprendre les bases de cette compétence essentielle en entreprise et je suis en mesure de mettre en place et gérer une petite infrastructure basée sur des serveurs sous Linux.</p>
        <p>Mon alternance au sein de Berger-Levrault m’a permis d’approfondir énormément ces compétences. J’ai pu découvrir des paquets tels que Kerberos, pour s’authentifier via un Active Directory, et Iptables pour gérer des règles de pare-feu interne à un serveur Linux. J’ai aussi pu découvrir la gestion des partitions, ainsi que l’outil d’édition de fichier VI, qui est présent sur toutes les distributions Linux, mais qui est plus complexe à prendre en main que Nano, que j’utilisais avant.</p>

        <h3>Mon évolution dans la compétence</h3>
        <p>Ayant pour projet professionnel de devenir architecte réseau, cette compétence est importante pour moi car aujourd’hui, la grande majorité des infrastructures de toute taille possèdent des serveurs Linux. Après tout, ces derniers sont tout aussi important que les équipements réseaux pour sécuriser une infrastructure, mais aussi pour la fiabiliser et la pérenniser.</p>
        <p>Pour approfondir mes connaissances sur Linux, je souhaite pouvoir réaliser différentes opérations de maintenance et de gestion sur d’autres distributions Linux que les trois auxquelles j’ai eu régulièrement affaire, afin de plus m’habituer aux différences entre les différents types de distributions. J’ai aussi commencé à parcourir la <a href="https://wiki.archlinux.org/title/Main_page">documentation officielle de la distribution Arch Linux</a>, qui est considéré comme l’une des plus complètes de tout l’écosystème Linux, et qui est même applicable aux autres distributions.
      `
    },
    2: {
      title: "Gestion des systèmes Windows",
      icon: SVGIcons.windows, desc: "Je suis habile dans la gestion des systèmes et services Windows.",
      fullContent: `
      <h3>Ma définition</h3>
      <p>La gestion et l’évolution des environnements Windows représentent toutes les compétences et réalisations nécessaires à la création et la sécurisation des environnements basés sur Windows, ainsi que leur évolution dans le temps.</p>
      <p>Windows est une série de systèmes d’exploitation créée par Microsoft depuis 1985. Ils sont depuis plus de 20 ans les systèmes d’exploitation les plus répandus dans le monde. Les versions nommés « Windows Server » sont des variantes des différentes versions de Windows, qui sont optimisés pour les entreprises de toutes tailles. Les serveurs Windows Server sont reconnus pour leur interface graphique intuitive, ainsi que pour leurs fonctionnalités avancées telles que l’Active Directory, qui est un service d’annuaire permettant de centraliser l’authentification des utilisateurs sur un domaine. </p>
      <p>Windows Server est aujourd’hui le deuxième système d’exploitation le plus utilisé dans les serveurs d’entreprise. Un <a href="https://www.mordorintelligence.com/industry-reports/enterprise-servers-market">article de Mordor Intelligence</a> montre qu’en 2024, les serveurs sous Windows Server comptent pour 45.1% des parts du marché, derrière Linux à 54.9%. Windows Server est encore plébiscité pour l’hébergement d’applications basées sur le Framework .NET, ainsi que pour les Active Directory.</p>
      <p>Aujourd’hui, Windows Server est omniprésent dans les services informatiques des entreprises. C’est pourquoi les compétences de gestion de ces environnements nécessaires sur le marché du travail aujourd’hui.</p>

      <h3>Mes éléments de preuve</h3>
      <p>Mon apprentissage de la gestion et de l’évolution des environnements Windows s’est déroulé tout au long de ma scolarité et de mon alternance.</p>
      <p>Je vais vous présenter mon expérience dans cette compétence à travers deux réalisations :</p>
      <ul>
        <li>La <a href="#/realisations/4">MCO d’un datacenter</a>, réalisé tout au long de mon alternance au sein de l’entreprise Berger-Levrault, entre 2023 et 2026.</li>
        <li>Le <a href="#/realisations/5">projet de déploiement d’un système de supervision de manière automatisée</a>, réalisé au sein de mon alternance au sein de l’entreprise Berger-Levrault, entre octobre 2024 et février 2025.</li>
      </ul>
      <p>Au cours de <a href="#/realisations/4">mon alternance</a>, j’ai eu l’occasion d’effectuer diverses tâches de maintenance sur les nombreux environnements Windows de Berger-Levrault. J’ai pu notamment me familiariser aux différentes versions de Windows Server, de la version 2008 R2 à la plus récente, Windows Server 2025. J’ai pu découvrir la gestion des nombreux services hébergés sur Windows dans le datacenter de Berger-Levrault, comme les serveurs Active Directory, les serveurs WSUS (Windows Server Update Service) qui gèrent les mises à jour du parc Windows, les différentes consoles d’administration du datacenter, ainsi que les serveurs applicatifs que nous livrons à nos clients, et autres. Cela m’a permis d’approfondir mes connaissances apprises au sein de mes deux premières années de bachelor. J’ai notamment réalisé des opérations de remplacement des systèmes d’opération Windows obsolètes, adapté un modèle de machine Windows Server 2022 applicatives pour qu’elles pointent vers un nouveau serveur WSUS, réalisé des scripts d’automatisation en PowerShell, et géré les flux de bureaux à distance (RDP) pour les clients de Berger-Levrault.</p>
      <p>Lors du <a href="#/realisations/5">projet de déploiement d’un système de supervision de manière automatisée</a>, j’ai dû intervenir sur des serveurs de production sous Windows Server 2016 afin de résoudre un problème découvert lors du déploiement de l’agent de supervision, qui a conduit à une coupure de service pour des clients. J’ai pu isoler la demi-douzaine de machines affectées en modifiant leur adressage IP, puis j’ai observé les logs système via l’observateur d’évènements afin de trouver la source du problème. J’ai découvert que le problème venait d’une incompatibilité de pilotes de carte réseaux dans l’agent, et j’ai donc réalisé une batterie de tests avec les différents pilotes proposés par les éditeurs de l’agent. J’ai ensuite réalisé à la main le déploiement de l’agent avec un pilote valide sur toutes les machines Windows Server touchées.</p>
      
      <h3>Mon autocritique</h3>
      <p>Grâce à mon parcours scolaire et mon alternance effectuée chez Berger-Levrault, j’ai pu apprendre à gérer et faire évoluer différents environnements Windows Server. J’estime mon niveau dans cette compétence comme étant « confirmé » mais pas expert, car je considère que je ne maîtrise pas encore certaines facettes de l’environnement Windows, comme par exemple la configuration d’un WSUS.</p>
      <p>J’ai vite compris les principes de base de la gestion d’un environnement Windows tels que la gestion d’un Active Directory, la mise en place de GPO (Group Policy Objects) et la configuration des services de base (AD, DNS, RDS, IIS) grâce aux cours et projets de l’ESIEA. Grâce à cette formation, j’ai eu l’occasion de vite apprendre les bases de cette compétence essentielle en entreprise et je suis en mesure de mettre en place et gérer une petite infrastructure basée sur des serveurs sous Windows Server.</p>
      <p>Mon alternance au sein de Berger-Levrault m’a permis d’approfondir énormément ces compétences. J’ai pu m’améliorer dans le scripting PowerShell afin d’automatiser des tâches de routine sur des serveurs critiques ainsi que réaliser de l’analyse de logs sur des serveurs ayant planté. J’ai aussi pu approfondir mes connaissances au niveau des services RDS et WSUS, ainsi que sur les fonctionnalités des GPO et de l’Active Directory.</p>

      <h3>Mon évolution dans la compétence</h3>
      <p>Ayant pour projet professionnel de devenir architecte réseau, cette compétence est importante pour moi car aujourd’hui, les serveurs Windows portent une importance critique dans la grande majorité des infrastructures mises en place. Les Active Directory sont après tout beaucoup plus populaires que les solutions d’annuaire présentes sur Linux, notamment grâce à sa facilité d’utilisation.</p>
      <p>Pour approfondir mes connaissances sur Windows Server, je souhaiterais pouvoir réaliser plus de projets de déploiement et de renouvellement de services Windows critiques, qui sont nombreux dans le datacenter de Berger-Levrault. J’ai aussi pu réaliser entre mars et juillet 2025 avec l’ESIEA une formation de Microsoft Security appelé « Sécurité Windows », permettant d’apprendre comment sécuriser et analyser une machine Windows Server.</p>
      `
    },
    3: {
      title: "Gestion de réseaux sécurisés",
      icon: SVGIcons.network,
      desc: "J'aime concevoir et maintenir des infrastructures réseaux complexes.",
      fullContent: `
        <h3>Ma définition</h3>
        <p>L’implémentation et la gestion de réseaux de manière sécurisée représentent toutes les compétences et réalisations nécessaires à la mise en place et à l’administration de la partie réseau d’une infrastructure, ainsi qu’à sa sécurisation.</p>
        <p>Cette couche rassemble de nombreux protocoles et technologies à lier ensemble afin de prévenir et éliminer différents vecteurs d’attaque que des hackers de tout type pourraient utiliser afin de perturber un accès à un service, ou même voler ou détruire des données d’entreprise ou personnelles. Elle inclut des équipements tels que les pares-feux, les routeurs, les bastions, les VPN et les serveurs AAA, et d’autres.</p>
        <p>Selon un <a href="https://cybersecurite.orange.fr/la-cybersecurite/protection-des-donnees/securite-numerique-protection-cnil.html">article publié par Orange Cybersécurité en mai 2025</a>, 5 629 violations de données ont été signalées à la CNIL en 2024, soit une augmentation de 20% comparé à 2023. Ces attaques sont signalées par tous les secteurs d’activité, mais celui particulièrement visée est celui des télécommunications, du web et des réseaux sociaux.</p>
        <p>Aujourd’hui, les réseaux sont omniprésents dans toutes les entreprises, et leur sécurisation est un point critique qui peut avoir des répercussions sévères si elle est incomplète ou absente. C’est pourquoi la compréhension et la manipulation des équipements ci-dessus est très recherchée sur le marché du travail.</p>
        
        <h3>Mes éléments de preuve</h3>
        <p>Mon apprentissage de la gestion et de l’implémentation de réseaux sécurisés s’est déroulé tout au long de ma scolarité et de mon alternance.</p>
        <p>Je vais vous présenter mon expérience dans cette compétence à travers trois réalisations :</p>
        <ul>
          <li>Le <a href="#/realisations/2">projet Walltesters</a>, réalisé au sein de l’ESIEA lors de ma 3ème année de bachelor Administrateur d’Infrastructures Sécurisées en 2024.</li>
          <li>La <a href="#/realisations/4">MCO d’un datacenter</a>, réalisé tout au long de mon alternance au sein de l’entreprise Berger-Levrault, entre 2023 et 2026.</li>
          <li>Le <a href="#/realisations/5">projet de déploiement d’un système de supervision de manière automatisée</a>, réalisé au sein de mon alternance au sein de l’entreprise Berger-Levrault, entre octobre 2024 et février 2025.</li>
        </ul>
        <p>Lors du <a href="#/realisations/2">projet Walltesters</a>, mes camarades et moi devions réaliser un audit des vulnérabilités de la solution de pare-feu d’application (WAF) open source Bunkerweb, développée par l’entreprise Bunkerity. Afin de réaliser cela, nous avions décidé de créer une infrastructure type contenant plusieurs applicatifs web Apache et bases de données PostgreSQL, tous derrière le pare-feu Bunkerweb. Des outils de supervision tels que Grafana et Prometheus étaient aussi présents dans un autre sous-réseau. J’ai pu apprendre comment configurer Bunkerweb afin de n’autoriser que les flux de supervision SNMP (Simple Network Management Protocol) entre les deux sous-réseaux de l’infrastructure, ainsi que limiter les flux ouverts vers Internet. J’ai aussi découvert les différentes sécurités du pare-feu, telles que la mise en place d’un CAPTCHA pour bloquer les robots, la configuration d’un proxy inverse afin de camoufler les véritables serveurs web à Internet, et la mise en place d’une protection anti-DDoS (Distributed Denial of Service) afin de bloquer les tentatives d’attaque par déni de service.</p>
        <p>Au cours de <a href="#/realisations/4">mon alternance</a>, j’ai eu l’occasion de manipuler une grande variété d’équipements de sécurité réseau, tels que des pares-feux virtuels et physiques, utilisés dans des rôles de pares-feux internes et périmétriques. J’ai notamment pu créer de nouvelles interfaces virtuelles dessus et ouvrir de nouveaux flux depuis Internet afin de donner l’accès à de nouveaux clients. J’ai aussi pu migrer une infrastructure de remédiation sur une nouvelle solution de pare-feu. C’est une infrastructure composée de plusieurs réseaux isolés, ne pouvant pas communiquer avec l’extérieur, sauf avec une console d’administration dédiée. Cela permet de pouvoir analyser des machines problématiques ou compromises sans impacter les machines de production. J’ai aussi vu configurer des commutateurs de couche 3, notamment en configurant de nouveaux VLAN afin de propager de nouveaux réseaux clients ou d’administration du cœur de réseau aux routeurs Internet.</p>
        <p>Lors du <a href="#/realisations/5">projet de déploiement d’un système de supervision de manière automatisée</a>, j’ai pu créer de nouveaux VLAN et les propager afin d’héberger quatre serveurs proxy dédiés aux agents de supervision à déployer. J’ai ensuite pu créer de nouvelles règles de pare-feu sur l’intégralité des pares-feux internes, afin de donner accès aux agents des machines clientes et de management un accès à leurs serveurs proxy respectifs. J’ai ensuite pu créer des règles entre ces proxy et la solution de supervision qui est un produit SaaS.</p>

        <h3>Mon autocritique</h3>
        <p>Grâce à mon parcours scolaire et mon alternance effectuée chez Berger-Levrault, j’ai pu apprendre à créer des réseaux et les sécuriser avec des équipements prévus à cet effet. J’estime mon niveau dans cette compétence comme étant « confirmé » mais pas expert, car je considère que je manque toujours d’expérience pour prendre les meilleures décisions pour sécuriser une infrastructure de grande taille.</p>
        <p>J’ai vite compris les principes de base de la création et sécurisation des réseaux tels que la création de VLAN, ainsi que la configuration de commutateurs et de pares-feux grâce aux cours et projets de l’ESIEA. Grâce à cette formation, j’ai eu l’occasion de vite apprendre les bases de cette compétence essentielle en entreprise et je suis en mesure de mettre en place une infrastructure réseau sécurisée et de la faire évoluer.</p>
        <p>Mon alternance au sein de Berger-Levrault m’a permis d’approfondir énormément ces compétences. Travailler dans un environnement contenant plus d’un millier de VLAN m’a permis de mieux comprendre les infrastructures de grande taille, et de découvrir de nombreux nouveaux équipements tels que des pares-feux Checkpoint ou des routeurs Stormshield.</p>

        <h3>Mon évolution dans la compétence</h3>
        <p>Ayant pour projet professionnel de devenir architecte réseau, cette compétence est très importante pour moi car aujourd’hui, la sécurité d’une infrastructure dépend en grande partie de l’organisation et de la segmentation des réseaux par des équipements de sécurité adéquats. Les pares-feux, commutateurs de couche 3 et bastions sont tous des éléments de cybersécurité importants, demandant une configuration particulière afin de ne pas interrompre du trafic légitime sans laisser de vulnérabilités aux attaquants.</p>
        <p>Pour approfondir mes connaissances, je souhaiterais pouvoir réaliser des actions sur d’autres sites de Berger-Levrault que celui de Villeneuve-sur-Lot, afin de découvrir de nouvelles infrastructures et de nouveaux équipements. J’ai aussi pu réaliser entre 2022 et 2025 avec l’ESIEA quatre formations de Cisco intitulées « <a href="https://www.netacad.com/courses/ccna-introduction-networks?courseLang=en-US">CCNA: Introduction to Networks</a> », « <a href="https://www.netacad.com/courses/ccna-switching-routing-wireless-essentials?courseLang=en-US">CCNA: Switching, Routing and Wireless Essentials</a> », « <a href="https://www.netacad.com/courses/cyberops-associate?courseLang=en-US">Cisco CyberOps Associate</a> » et « <a href="https://www.netacad.com/courses/network-security?courseLang=en-US">Cisco Network Security</a> », qui m’ont permis d’apprendre la configuration réseau et système d’équipements Cisco, ainsi que des concepts importants de la cybersécurité. J’aimerais poursuivre ces formations en passant les formations CCNP Enterprise, qui sont la suite logique des certifications CCNA.</p>
      `
    },
    4: {
      title: "Gestion des infrastructures VMware",
      icon: SVGIcons.cloud,
      desc: "Je suis capable de créer, faire évoluer et maintenir une infrastructure virtualisée avec VMware.",
      fullContent: `
        <h3>Ma définition</h3>
        <p>La conception et la gestion d’une infrastructure VMware représentent toutes les compétences et manipulations nécessaires à la création et à l’administration d’une infrastructure virtualisée VMware vSphere.</p>
        <p>VSphere est une suite logicielle créée en 2009 par l’entreprise américaine VMware afin de centraliser la création et la gestion d’une infrastructure virtualisée et de cloud computing. Avec ses nombreux composants, tels que l’hyperviseur ESXi qui permet de créer des machines virtuelles, vCenter qui gère ces derniers et les redondent dans des clusters et NSX qui permet de virtualiser la couche réseau d’une infrastructure, la suite vSphere permet aux entreprises de concevoir et maintenir des infrastructures virtualisées de toutes tailles.</p>
        <p>VMware aujourd’hui occupe une position de leader de la virtualisation pour les entreprises. Leurs solutions sont actuellement les plus complètes, stables et simples d’utilisation disponibles sur le marché. Malgré un rachat de VMware par l’entreprise Broadcom en novembre 2023 entraînant un changement de politique fortement impopulaire, leur position n’est pas menacée. Un article du <a href="https://www.lemondeinformatique.fr/actualites/lire-une-majorite-des-grands-clients-de-vmware-convertis-a-vcf-97095.html">Monde Informatique</a> note que 87% des 10 000 plus grands clients de VMware ont opté pour la suite VCF (VMware Cloud Foundation), héritière de la suite vSphere.</p>
        <p>Malgré des décisions controversées, telles que la multiplication des prix par un facteur de 3 à 12 pour les entreprises et l’abandon des licences perpétuelles, les produits VMware comme vSphere renforcent leur statut de solutions phares pour les entreprises de toutes tailles. Cela rend les connaissances de ces environnements un enjeu majeur sur le marché de l’emploi, avec des ingénieurs systèmes et réseaux compétents sur les outils VMware de plus en plus recherchés par les entreprises.</p>
        
        <h3>Mes éléments de preuve</h3>
        <p>Mon apprentissage de la conception et gestion d’une infrastructure VMware s’est déroulé tout au long de ma scolarité et de mon alternance.</p>
        <p>Je vais vous présenter mon expérience dans cette compétence à travers deux réalisations :</p>
        <ul>
          <li>Le <a href="#/realisations/3">projet DockStock</a>, réalisé au sein de l’ESIEA lors de ma 2ème année de bachelor Administrateur d’Infrastructures Sécurisées en 2023.</li>
          <li>La <a href="#/realisations/4">MCO d’un datacenter</a>, réalisé tout au long de mon alternance au sein de l’entreprise Berger-Levrault, entre 2023 et 2026.</li>
        </ul>
        <p>Lors du projet DockStock, mes camarades de classe et moi devions mettre en place une infrastructure sécurisée et redondée permettant d’héberger des conteneurs Docker. Pour cela, nous avons pu bénéficier de plusieurs PC de bureau afin de simuler notre infrastructure physique. J’ai utilisé deux d’entre eux pour installer nos deux hyperviseurs VMware ESXi 6.7. Un troisième PC a été utilisé pour installer la machine virtuelle vCenter 6.7. J’ai ensuite configuré le VDS (Virtual Distributed Switch) afin de gérer les réseaux de management et de production sur la carte réseau des hyperviseurs. La HA (Haute Disponibilité) a été mise en place, et je me suis chargé d’activer et de créer des règles DRS (Distributed Resource Scheduler), ce qui permet d’activer la bascule automatique des machines virtuelles d’un hôte à l’autre en cas de panne.</p>
        <p>Au cours de mon alternance, j’ai eu l’occasion d’effectuer diverses tâches de maintenance sur les infrastructures vCenter de Berger-Levrault. J’ai pu approfondir mes connaissances sur les éléments appris pendant le projet DockStock, mais aussi découvrir des facettes des outils VMware liées aux licences entreprise. J’ai eu la possibilité de mettre à jour un parc important d’hyperviseurs ESXi et plusieurs vCenter, ainsi que de créer de nouveaux datastores pour pouvoir créer des machines virtuelles stockées sur un SAN (Storage Area Network). J’ai aussi pu mettre en place un serveur UMDS (Update Manager Download Services), l’équivalent VMware du serveur Windows WSUS, afin de ne plus exposer les vCenter à l’Internet. J’ai aussi pu gérer l’interface VMware Cloud Director, qui nous permet de donner aux clients IaaS de Berger-Levrault de pouvoir gérer leur infrastructure sans leur allouer un vCenter entier.</p>
        
        <h3>Mon autocritique</h3>
        <p>Grâce à mon parcours scolaire et mon alternance effectuée chez Berger-Levrault, j’ai pu apprendre à concevoir, administrer et maintenir des infrastructures virtualisées de toutes tailles. J’estime mon niveau dans cette compétence comme étant « confirmé » mais pas expert, car je considère que je ne maîtrise pas encore certains outils de la suite vSphere tels que Cloud Director. J’estime aussi manquer d’expérience dans la création d’infrastructures de grande taille.</p>
        <p>J’ai vite compris les principes de base des infrastructures VMware tels que la mise en place des hyperviseurs ESX, la configuration des clusters dans vCenter et principes de la HA et du DRS grâce aux cours et projets de l’ESIEA pour le bachelor Administrateur d’Infrastructures Sécurisées. Grâce à cette formation, j’ai eu l’occasion de vite apprendre les bases de cette compétence essentielle en entreprise et je suis en mesure de mettre en place des infrastructures de petite taille, telles que celles d’une PME.</p>
        <p>Mon alternance au sein de Berger-Levrault m’a permis d’approfondir énormément ces compétences. J’ai pu découvrir les méthodes de MCO d’un environnement vCenter avec les mises à jour des hôtes ESXi et des instances vCenter, et j’ai pu faire évoluer l’infrastructure existante avec l’ajout d’un UMDS. J’ai aussi pu découvrir la panoplie d’outils de la suite vSphere, tels que NSX ou Cloud Director, qui sont des plus pour des infrastructures hyperconvergées ou des datacenters.</p>

        <h3>Mon évolution dans la compétence</h3>
        <p>Ayant pour projet professionnel de devenir architecte réseau, cette compétence est importante pour moi car une infrastructure virtualisée est aujourd’hui le cœur de tout datacenter. Lorsqu’elle est présente, le réseau de tout le datacenter est construit autour de cette infrastructure afin de pérenniser et sécuriser les accès au datacenter depuis l’extérieur.</p>
        <p>Pour approfondir mes connaissances sur les outils VMware, je souhaite m’inscrire et passer les certifications VMware Certified Professional (VCP) et VMware Certified Advanced Professional (VCAP), qui sont des certifications officielles de VMware. Ces certifications me permettraient de valider mes compétences en matière de conception, administration et optimisation des outils de la suite VCF.</p>
        `
    },
    5: {
      title: "Administration Docker",
      icon: SVGIcons.container,
      desc: "Je sais mettre en place une infrastructure conteneurisée et la faire évoluer.",
      fullContent: `
        <h3>Ma définition</h3>
        <p>La conception et la gestion des infrastructures conteneurisées représentent toutes les compétences et manipulations nécessaires à la mise en place d’une infrastructure à base de conteneurs, à sa configuration et son évolution dans le temps.</p>
        <p>Un conteneur est une instance isolée d’un applicatif ou d’un espace utilisateur. Comparée à la virtualisation classique, la conteneurisation nécessite moins de ressources sur une machine hôte, car elle ne nécessite pas d’hyperviseur. L’un des logiciels de conteneurisation les plus populaires est Docker, développé par Solomon Hykes et devenu open source en mars 2019. Docker est reconnu pour sa facilité de prise en main, son environnement complet (Docker Compose, Docker Swarm, Docker Hub, etc.) et sa communauté très active.</p>
        <p>Selon ce rapport de <a href="https://survey.stackoverflow.co/2025/technology#most-popular-technologies-platform">Stack Overview</a>, 73.8% des développeurs utilisent Docker de manière extensive pendant l’année 2025. Cela représente une augmentation de 17% comparé à 2024, montrant que l’intérêt des entreprises pour la conteneurisation est en constante augmentation. C’est pour cela que les compétences de gestion des environnements conteneurisés sont fortement recherchées sur le marché du travail.</p>

        <h3>Mes éléments de preuve</h3>
        <p>Mon apprentissage de la gestion et des environnements conteneurisés s’est déroulé tout au long de ma scolarité et de mon alternance.</p>
        <p>Je vais vous présenter mon expérience dans cette compétence à travers trois réalisations :</p>
        <ul>
          <li>Le <a href="#/realisations/3">projet DockStock</a>, réalisé au sein de l’ESIEA lors de ma 2ème année de bachelor Administrateur d’Infrastructures Sécurisées en 2023.</li>
          <li>Le <a href="#/realisations/2">projet Walltesters</a>, réalisé au sein de l’ESIEA lors de ma 3ème année de bachelor Administrateur d’Infrastructures Sécurisées en 2024.</li>
          <li>Le <a href="#/realisations/3">projet Netflow</a>, réalisé pendant la première année de mon alternance chez Berger-Levrault, entre 2023 et 2024.</li>
        </ul>
        <p>Lors du projet DockStock, mes camarades de classe et moi devions mettre en place une infrastructure sécurisée et redondée permettant d’héberger des conteneurs Docker. Pour cela, une machine virtuelle Debian avait été créée afin d’héberger tous les conteneurs. Sur cette machine, j’ai pu reprendre l’installation Docker faite par mes camarades et mettre en place la technologie Docker Compose mentionnée dans l’introduction. C’est un plugin officiel de Docker qui permet de définir et exécuter plusieurs conteneurs à partir d’un seul fichier YAML et d’une commande unique. J’ai pu configurer un conteneur Portainer, qui est un outil permettant de gérer le déploiement et la configuration de conteneurs via une interface graphique intuitive.</p>
        <p>Lors du projet Walltesters, mes camarades et moi devions réaliser un audit des vulnérabilités de la solution de pare-feu d’application (WAF) open source Bunkerweb, développée par l’entreprise Bunkerity. Bunkerweb étant une solution majoritairement déployée via Docker, l’idée était de créer une infrastructure conteneurisée permettant de répliquer le réseau d’une entreprise, avec une partie consacrée à la supervision, une pour des serveurs web protégés, et le WAF Bunkerweb sécurisant l’infrastructure des menaces extérieures. J’ai pu installer Docker et Docker Compose sur une machine physique sous Ubuntu, puis créer un fichier YAML contenant l’intégralité des conteneurs du projet : une partie supervision avec Prometheus, Grafana et CAdvisor, quatre stacks web avec des serveurs web Apache et des bases de données PostgreSQL, et la partie Bunkerweb contenant tous les conteneurs de la solution de pare-feu, ainsi que la configuration de base pour pouvoir accéder à l’interface web de management du pare-feu.</p>
        <p>Lors du projet Netflow, je devais mettre en place un collecteur de flux Netflow afin de surveiller les flux transitant par les pares-feux du datacenter. J’ai décidé d’utiliser Docker pour mettre en place une solution ELK conteneurisée, car c’était le meilleur moyen d’utiliser un serveur avec 128Go de mémoire quand il est recommandé de ne pas allouer plus de 32Go à une instance d’Elasticsearch. J’ai installé Docker et Docker Compose, puis j’ai créé un fichier YAML avec la configuration de plusieurs conteneurs : un conteneur « setup » permettant de créer les certificats SSL des conteneurs et les comptes de service, trois instances d’Elasticsearch en cluster, un conteneur Filebeat pour l’ingestion des flux Netflow, et un conteneur Kibana pour visualiser les données stockées via une interface web intuitive et claire. J’ai pu configurer un réseau interne spécifique et les adresses IP des conteneurs, leur assigner des volumes permanents pour stocker les données indexées et récupérer leurs fichiers de configuration, leur assigner des limites d’utilisation de ressources pour ne pas surcharger la machine hôte et créer des « healthchecks » pour voir l’état des conteneurs en temps réel.</p>

        <h3>Mon autocritique</h3>
        <p>Grâce à mon parcours scolaire et mon alternance effectuée chez Berger-Levrault, j’ai pu apprendre à concevoir, configurer et faire évoluer des infrastructures conteneurisées de petite à moyenne taille. J’estime mon niveau dans cette compétence comme étant « confirmé » mais pas expert, car je sais utiliser les commandes basiques de Docker, ainsi que créer plusieurs conteneurs avec Docker Compose, mais je manque beaucoup d’expérience avec l’orchestration de conteneurs avec Docker Swarm, que je n’ai que très peu utilisé malgré son utilité.</p>
        <p>J’ai pu apprendre comment créer et interagir avec différents conteneurs, modifier les images prédéfinies avec des fichiers Dockerfile, utiliser Docker Compose pour créer et gérer plusieurs conteneurs de manière simple, et utiliser les volumes, limites, healthchecks et réseaux pour adapter une infrastructure à tous types de conditions grâce aux cours et projets de l’ESIEA. Grâce à ces derniers, j’ai eu l’occasion de vite comprendre les bases de la conteneurisation Docker, et je suis en mesure de déployer une infrastructure conteneurisée de petite taille, et de l’adapter en fonction des besoins.</p>
        <p>Mon alternance au sein de Berger-Levrault m’a permis d’approfondir ces compétences. Le projet Netflow m’a permis d’appliquer mes connaissances pour réaliser une petite infrastructure demandant des liens structurés et stables entre différents composants de la stack ELK, tout cela avec une contrainte de performance et de stabilité pour un outil de surveillance du réseau. J’ai pu approfondir mes connaissances sur l’utilisation des images customisées avec Dockerfile, les commandes de débogage des conteneurs Docker, ainsi que sur la configuration des fichier YAML de Docker Compose.</p>

        <h3>Mon évolution dans la compétence</h3>
        <p>Ayant pour projet professionnel de devenir architecte réseau, cette compétence est importante pour moi car les infrastructures conteneurisées deviennent de plus en plus populaires au sein des entreprises, et concurrencent en partie la virtualisation. La gestion des différents réseaux internes aux conteneurs et leur sécurisation est aujourd’hui critique, car la conteneurisation est souvent utilisée sur des domaines de développement, où des données internes sont stockées.</p>
        <p>Pour approfondir mes connaissances sur la conteneurisation, je souhaiterais me perfectionner sur l’orchestration de conteneur. Pour cela, en 5ème année à l’ESIEA, j’ai pu découvrir Kubernetes, qui permet de gérer le déploiement, la scalabilité et la configuration de conteneurs. Dans le futur, je souhaite m’inscrire et passer la certification <a href="https://www.cncf.io/training/certification/cka/">Certified Kubernetes Administrator</a> (CKA), des certifications officielles de la Cloud Native Computing Foundation (CNCF), en collaboration avec la Linux Foundation. Cette certification me permettrait de valider mes compétences en matière de conception, administration et sécurisation des infrastructures Kubernetes.</p>

      `
    }
  },
  humaines: {
    1: {
      title: "Adaptabilité",
      icon: SVGIcons.refresh,
      desc: "Je m'adapte facilement à de nouveaux environnements et technologies.",
      fullContent: `
        <h3>Ma définition</h3>
        <p>L’adaptabilité est la capacité d’une personne à réagir à des évènements imprévus de manière rapide et efficace. En informatique, de nombreux incidents peuvent survenir, notamment à des moments critiques tels que des migrations ou périodes de maintenance. Ces incidents peuvent être causés par plusieurs aléas, comme une panne extérieure (coupure d’électricité longue, dégâts sur une fibre souterraine, etc.) ou interne (équipement en panne, erreur de manipulation, cyberattaque, etc.).</p>
        <p>Selon un rapport du <a href="https://www.weforum.org/publications/the-future-of-jobs-report-2023/digest/">World Economic Forum</a> datant de 2023, 32% des employeurs vont se concentrer sur le développement des compétences de résilience, de flexibilité et d’agilité de leurs collaborateurs.  Cela montre que l’adaptabilité est extrêmement recherchée par les entreprises, et est un véritable atout sur le marché du travail.</p>

        <h3>Mes éléments de preuve</h3>
        <p>Je vais vous présenter mon expérience dans cette compétence à travers trois réalisations :</p>
        <ul>
          <li>Le <a href="#/realisations/3">projet DockStock</a>, réalisé au sein de l’ESIEA lors de ma 2ème année de bachelor Administrateur d’Infrastructures Sécurisées en 2023.</li>
          <li>La <a href="#/realisations/4">MCO d’un datacenter</a>, réalisé tout au long de mon alternance au sein de l’entreprise Berger-Levrault, entre 2023 et 2026.</li>
          <li>Le <a href="#/realisations/5">projet de déploiement d’un système de supervision de manière automatisée</a>, réalisé au sein de mon alternance au sein de l’entreprise Berger-Levrault, entre octobre 2024 et février 2025.</li>
        </ul>
        <p>Lors du projet DockStock, un incident est arrivé la veille de notre présentation des recettes. Ce jour-là, l’un des membres de l’équipe a commis une erreur dans la configuration du pare-feu PFSense, ce qui a coupé tous les flux entre notre infrastructure et Internet. Puisqu’il n’était pas sur Agen, il a donc perdu la main sur le pare-feu. J’ai dû en urgence réinstaller le pare-feu puisque je n’arrivais plus à joindre l’interface web de PFSense, et recréer les règles de filtrage avec l’aide de la personne chargé de sa configuration.</p>
        <p>Lors de la MCO d’un datacenter, j’ai été confronté à beaucoup d’incidents de divers types et de criticités variées, ce qui m’a demandé de m’adapter constamment. Lors de certaines opérations réalisées, des erreurs de manipulation ont pu causer des interruptions de service imprévues ou plus longues que prévues. Dans d’autres cas, différents problèmes tels qu’une alimentation non-fonctionnelle sur un équipement physique, une coupure d’électricité ou des groupes froid du datacenter, ou une potentielle cyberattaque, je devais réagir au quart de tour et réaliser toutes les étapes nécessaires à la résolution du problème ou à son escalade aux personnes concernées.</p>
        <p>Lors du projet de déploiement d’un système de supervision, j’ai connu un incident majeur imprévu qui m’a demandé d’intervenir urgemment. Lors du déploiement de l’agent Dynatrace sur un groupe de machines Windows Server 2016 hébergeant une gamme de logiciels clients, les machines ne répondaient plus après l’installation de l’agent. Ce déploiement n’était pas le premier de la liste, ni le premier sur des machines Windows Server 2016, ce qui nous a pris par surprise. Le déploiement n’avait jamais eu d’impact client auparavant. J’ai donc dû cloner les machines ayant eu le problème en urgence, avant de les isoler derrière un pare-feu dédié à cet effet pour travailler sur ces dernières sans impacter la production. Après avoir découvert que la source des problèmes était un pilote de carte réseau non-compatible,  j’ai testé l’installation avec un autre pilote avec succès, puis planifié le redéploiement de l’agent sur toute la gamme avec ce pilote. Le problème ne s’est plus manifesté pour les autres déploiements.</p>

        <h3>Mon autocritique</h3>
        <p>Grâce aux différents projets réalisés ainsi que mon alternance au sein du groupe Berger-Levrault, j’estime avoir le niveau « confirmé » en matière d’adaptabilité. Je suis capable de réagir à un incident imprévu, en employant des procédures de remédiation, en escaladant aux bonnes personnes, puis en analysant les données pour découvrir la source des problèmes et réaliser des correctifs.</p>
        <p>Cependant, je considère que j’ai encore beaucoup à apprendre dans ce domaine. Je peux encore m’améliorer dans ma prise de décision après un incident, notamment dans la rédaction de procédures lorsqu’un nouvel incident est découvert.</p>

        <h3>Mon évolution dans la compétence</h3>
        <p>Ayant pour projet professionnel de devenir architecte réseau, l’adaptabilité est critique pour exercer dans ce domaine. Les projets de grande envergure ont des chances de créer des incidents imprévus, et c’est le rôle de l’architecte réseau de réagir efficacement afin de réaliser des changements sur une infrastructure pour les prévenir. Afin de m’améliorer dans cette compétence, je vais suivre la formation <a href="https://openclassrooms.com/fr/courses/6692406-developpez-vos-soft-skills">Développez vos soft skills</a>, proposée par l’organisme de formation OpenClassrooms.</p>

        `
    },
    2: {
      title: "Gestion de projet",
      icon: SVGIcons.clipboard,
      desc: "Je sais gérer des priorités complexes et à respecter des échéances critiques.",
      fullContent: `
        <h3>Ma définition</h3>
        <p>La gestion de projet est l’ensemble des méthodes et techniques visant à organiser un projet afin d’atteindre ses objectifs. Dans un projet, il faut gérer des ressources humaines, financières et temporelles pour délivrer un résultat satisfaisant le besoin client. La gestion de projet est quelque chose de complexe et ce rôle est souvent accompli par un chef ou coordonnateur de projet dans les entreprises. </p>
        <p>Selon un article de <a href="https://www.wimi-teamwork.com/fr/blog/gestion-projet/statistiques-gestion-de-projet">Wimi Teamwork</a> datant de janvier 2026, 68% des entreprises déclarent faire appel à des chefs de projet extérieurs, et seulement 58% d’entre-elles comprennent pleinement la valeur de la gestion de projet. Cela montre qu’aujourd’hui, la gestion de projet est un atout très important pour une entreprise, et qu’obtenir des compétences dans ce domaine nous rend plus attractif sur le marché du travail.</p>

        <h3>Mes éléments de preuve</h3>
        <p>J’ai commencé mon apprentissage de la gestion de projet pendant ma première année de Bachelor AIS. J’ai pu apprendre comment utiliser le modèle en cascade pour gérer mes premiers projets informatiques, ainsi qu’utiliser différents outils tels que le diagramme de Gantt ou l’analyse du SWOT (Strengths, Weaknesses, Opportunities, Threats). Lors de mon deuxième projet informatique, j’étais le chef de projet, me permettant d’approfondir mes compétences sur ce modèle. À partir de la deuxième année, j’ai pu utiliser la méthode Agile, notamment le Scrum, qui est basé sur un cycle de livraisons court, afin de livrer le produit en parties et réagir plus vite aux changements de cahier de charges ou problèmes sur le projet.</p>
        <p>Je vais vous présenter mon expérience dans cette compétence à travers deux réalisations :</p>
        <ul>
          <li>Le <a href="#/realisations/2">projet Walltesters</a>, réalisé au sein de l’ESIEA lors de ma 3ème année de bachelor Administrateur d’Infrastructures Sécurisées en 2024.</li>
          <li>Le <a href="#/realisations/3">projet Netflow</a>, réalisé pendant la première année de mon alternance chez Berger-Levrault, entre 2023 et 2024.</li>
        </ul>
        <p>Lors du projet Walltesters, j’ai pu assister le chef de projet de l’équipe dans la mise en place de la méthode Agile. J’ai réalisé le Product Backlog du projet, qui contenait toutes les user stories nécessaires à la réalisation du cahier des charges. J’ai pu aussi faire le planning des sprints du projet, ainsi que le premier Sprint Backlog, ou la liste des user stories à faire pour un sprint. J’ai aussi pu organiser la réunion de Weekly Scrum sur Teams, pour garder un aperçu de l’avancement et des difficultés de chacun.</p>
        <p>Le projet Netflow est le premier projet que j’ai réalisé en entreprise. J’ai pu organiser des réunions hebdomadaires ressemblant à un Weekly Scrum afin d’expliquer mon avancement à mon maître de formation et au client, ainsi qu’une réunion mensuelle incluant une démonstration de ce que j’ai pu réaliser jusque-là. J’ai aussi dû alimenter un outil de suivi en créant des tickets pour mes différentes tâches à réaliser.</p>

        <h3>Mon autocritique</h3>
        <p>Grâce à mon parcours scolaire, mes différents projets réalisés ainsi que mon alternance au sein du groupe Berger-Levrault, j’estime avoir le niveau « confirmé » en matière de gestion de projet. Je suis capable de gérer un projet de petite à moyenne taille en utilisant la méthode en cascade ou la méthode Agile. Je sais utiliser des outils de gestion de projet variés, ainsi que gérer des petites équipes lorsque je suis chef de projet. Je sais aussi organiser des réunions de tous types avec des parties prenantes.</p>
        <p>Cependant, je considère que j’ai encore beaucoup à apprendre dans la gestion de projet complexes. Je ne suis pas encore performant dans la gestion de grandes équipes ou dans l’utilisation de méthodes Agile autres que le Scrum. </p>

        <h3>Mon évolution dans la compétence</h3>
        <p>Ayant pour projet professionnel de devenir architecte réseau, la gestion de projet est très importante pour exercer dans ce domaine. Un architecte réseau doit, en plus de concevoir des solutions techniques pour des infrastructures de grande taille, planifier et organiser la mise en place de ces solutions dans le temps et avec un budget donné. Afin de m’améliorer dans cette compétence, je vais suivre la formation <a href="https://openclassrooms.com/fr/paths/3101-product-manager">Product Manager</a>, proposée par l’organisme de formation OpenClassrooms.</p>
      `
    },
    3: {
      title: "Travail en équipe",
      icon: SVGIcons.users,
      desc: "J'aime travailler en équipe et échanger avec mes pairs pour trouver les meilleures solutions.",
      fullContent: `
        <h3>Ma définition</h3>
        <p>Le travail en équipe est la capacité d’une personne à réaliser des tâches et des projets avec d’autres personnes. Dans des entreprises de moyenne et grande taille, les équipes informatiques sont en constance croissance. La collaboration entre les différents membres de ces équipes est critique pour réaliser à temps les objectifs des différents projets d’envergure qui leur sont donnés.</p>
        <p>Selon cet article de <a href="https://www.hellowork.com/fr-fr/medias/travail-equipe-collaboration.html">HelloWork</a> datant de juin 2025, les salariés passent en moyenne les trois-quarts de leur journée à réaliser du travail d’équipe, ce qui représente une augmentation de 50% en 20 ans. Cela montre que le travail en équipe est une capacité essentielle à maîtriser, et est extrêmement recherchée sur le marché du travail. </p>

        <h3>Mes éléments de preuve</h3>
        <p>J’ai commencé mon apprentissage du travail en équipe pendant ma première année de Bachelor AIS. Lors des différents projets chaque semestre, j’ai pu faire équipe avec d’autres étudiants, dans des groupes de 3 à 5 personnes. J’ai pu apprendre comment répartir mes tâches avec mes camarades, ainsi que demander ou apporter de l’aide sur ces dernières en cas de blocage. C’est grâce à ces projets que j’ai pu comprendre que certains problèmes demandent un point de vue différent pour être résolus, et que collaborer en équipe peut apporter ce point de vue.</p>
        <p>Je vais vous présenter mon expérience dans cette compétence à travers trois réalisations :</p>
        <ul>
          <li>Le <a href="#/realisations/2">projet Walltesters</a>, réalisé au sein de l’ESIEA lors de ma 3ème année de bachelor Administrateur d’Infrastructures Sécurisées en 2024.</li>
          <li>Le <a href="#/realisations/3">projet DockStock</a>, réalisé au sein de l’ESIEA lors de ma 2ème année de bachelor Administrateur d’Infrastructures Sécurisées en 2023.</li>
          <li>Le <a href="#/realisations/5">projet de déploiement d’un système de supervision de manière automatisée</a>, réalisé au sein de mon alternance au sein de l’entreprise Berger-Levrault, entre octobre 2024 et février 2025.</li>
        </ul>
        <p>Lors du projet DockStock, j’ai pu travailler au sein d’un groupe de 5 personnes, dont un membre se situant en dehors du campus d’Agen. Pendant ce projet, la majorité de mes tâches étaient réalisées en binôme avec l’un de mes camarades, comme le déploiement physique de l’infrastructure, la mise en place des hyperviseurs, et l’installation du VCenter. J’ai aussi pu être aidé sur la préparation d’un schéma réseau intégrant les VLAN, même si nous n’avons pas eu le temps de l’implémenter.</p>
        <p>Lors du projet Walltesters, j’ai pu travailler au sein d’un groupe de 9 personnes, ce qui était nouveau pour moi. J’ai aussi dû travailler en distanciel pendant au moins la moitié du projet, ce qui m’a demandé d’adapter ma méthode de travail. J’ai donc décidé de travailler en trinôme pendant toute la durée du projet. Toutes les réalisations de mon trinôme, c’est-à-dire la mise en place de l’infrastructure Docker avec le pare-feu Bunkerweb et sa configuration, ont été réalisées en physique sur le campus d’Agen ou à partir de réunions, notamment avec le logiciel Discord pour que l’on puisse communiquer directement.</p>
        <p>Lors du projet de déploiement d’un système de supervision, j’ai rejoint le projet alors qu’il avait déjà commencé, prenant la place de mon ancien maître de formation. Dans ce projet, j’ai dû travailler avec plusieurs équipes, telles que celle des chefs de projet, l’équipe chargé de l’automatisation, ainsi que les différentes parties prenantes de Dynatrace. Puisque mon travail a été de préparer et planifier les différents déploiements de l’outil, la majorité de ce travail a été réalisé pendant des réunions Teams.</p>

        <h3>Mon autocritique</h3>
        <p>Grâce à mon parcours scolaire, mes différents projets réalisés ainsi que mon alternance au sein du groupe Berger-Levrault, j’estime avoir le niveau « confirmé » en matière de travail d’équipe. Je suis capable de m’intégrer dans des projets existants afin de remplacer quelqu’un, ainsi que de réaliser des tâches en binôme ou trinôme. </p>
        <p>Cependant, je considère que j’ai encore beaucoup à apprendre dans ce domaine. Je suis une personne qui préfère toujours travailler seul qu’en équipe, et j’ai parfois un peu de mal à apporter mes idées dans des projets où beaucoup de personnes sont présentes, où quand je le rejoins en cours de route.</p>

        <h3>Mon évolution dans la compétence</h3>
        <p>Ayant pour projet professionnel de devenir architecte réseau, la gestion de projet est très importante pour exercer dans ce domaine. Les projets qui nécessitent la présence d’un architecte réseau sont souvent de très grande envergure, et concentrent de nombreux employés de différentes équipe. Savoir collaborer avec elles peut-être la différence entre un succès et un échec. Afin de m’améliorer dans cette compétence, je vais suivre la formation <a href="https://openclassrooms.com/fr/courses/5164316-travaillez-efficacement-en-equipe">Travaillez efficacement en équipe</a>, proposée par l’organisme de formation OpenClassrooms.</p>
      `
    },
    4: {
      title: "Communication",
      icon: SVGIcons.message,
      desc: "Mon aisance à l'oral et à l'écrit me permet de m'adapter à divers interlocuteurs.",
      fullContent: `
        <h3>Ma définition</h3>
        <p>La communication est la capacité d’une personne de transmettre des informations à d’autres personnes. Elle existe dans de nombreuses formes. La communication écrite est traduite par la rédaction de rapports ou de documentations techniques, ainsi que les échanges entre parties prenantes par e-mail, forums et autres. La communication orale rassemble tous les échanges téléphoniques avec des prestataires, clients et autres, ainsi que les prises de parole au cours de réunions physiques ou en visioconférence.</p>
        <p>En entreprise, la communication est essentielle. Selon un <a href="https://pumble.com/learn/communication/communication-statistics/">article de Pumble</a> datant de février 2026, 86% des cadres et employés citent une mauvaise communication comme étant l’une des causes principales de l’échec d’un projet. Une bonne communication en interne comme avec des clients permet aussi d’améliorer la réputation d’une entreprise. C’est donc un élément majeur à maîtriser aujourd’hui dans le monde du travail.</p>

        <h3>Mes éléments de preuve</h3>
        <p>J’ai véritablement démarré mon apprentissage de la communication pendant ma première année de Bachelor AIS. J’ai pu apprendre comment rédiger un e-mail efficace, ainsi que réaliser des présentations pertinentes sans support papier. Cela m’a beaucoup aidé lors de mes différents projets, puisqu’une certaine communication était attendue avec nos commanditaires et nos encadrants. Pendant les cinq années suivantes, la communication n’a cessé d’avoir un rôle important dans ma formation, notamment à partir du début de ma période d’alternance.</p>
        <p>Je vais vous présenter mon évolution dans cette compétence à travers trois réalisations :</p>
        <ul>
          <li>Le <a href="#/realisations/2">projet Walltesters</a>, réalisé au sein de l’ESIEA lors de ma 3ème année de bachelor Administrateur d’Infrastructures Sécurisées en 2024.</li>
          <li>La <a href="#/realisations/4">MCO d’un datacenter</a>, réalisé tout au long de mon alternance au sein de l’entreprise Berger-Levrault, entre 2023 et 2026.</li>
          <li>Le <a href="#/realisations/3">projet Netflow</a>, réalisé pendant la première année de mon alternance chez Berger-Levrault, entre 2023 et 2024.</li>
        </ul>
        <p>Le projet Walltesters était le dernier projet informatique que j’ai réalisé dans un cadre scolaire. L’équipe étant composée de 9 membres, j’ai dû user de mes compétences en communication écrite et orale afin d’organiser et prendre part à un « Weekly Scrum » (mêlée hebdomadaire), où j’ai dû rendre clairs mes avancements et points de blocage sur mes tâches assignées. Je me suis aussi chargé de la relecture et modification de nombreux comptes-rendus de réunion. Finalement, j’ai dû réaliser des documents administratifs et présentations de projet en anglais, ce qui était nouveau pour moi.</p>
        <p>Lors de la MCO d’un datacenter , j’ai eu l’occasion de communiquer avec un nombre de personnes bien plus important que lors de mes projets scolaires. J’ai été mis en relation avec beaucoup d’équipes de Berger-Levrault, telles que l’équipe des développeurs Médico-Social, l’équipe de Delivery ou même l’équipe Cybersécurité. J’ai aussi pu créer et modifier des documentations afin de référencer les évolutions d’une machine ou infrastructure. Finalement, j’ai pu utiliser mes compétences apprises pendant le projet Walltesters afin d’assurer le transfert d’informations et la résolution de problèmes avec les supports des différents équipements du datacenter, en français comme en anglais. </p>
        <p>Lors du projet Netflow, j’ai dû utiliser mes compétences en communication orale pour défendre mes choix technologiques devant mon maître de formation et mon manager lors d’une réunion en visioconférence. J’ai aussi du écrire un Document d’Architecture Technique afin de détailler les technologies mises en place, et un Document d’Exploitation pour expliquer comment utiliser le collecteur Netflow. Finalement, ce projet est directement lié à ma présentation de fin de Bachelor, qui était la présentation orale la plus complexe que j’ai pu faire à ce jour.</p>

        <h3>Mon autocritique</h3>
        <p>J’estime avoir le niveau « confirmé » en termes de communication. Je me sens à l’aise lorsque je dois communiquer en entreprise. Je ne rencontre que rarement des difficultés pour transmettre mes idées à l’oral ou à l’écrit. Je suis capable de rédiger des comptes-rendus et des documentations de tous types, ainsi que de communiquer par e-mail ou par téléphone à des clients, collaborateurs et prestataires. Je sais également réaliser des présentations professionnelles en français comme en anglais.</p>
        <p>Cependant, je considère que j’ai encore beaucoup à apprendre dans ce domaine. Je fais souvent relire mes écrits à mon maître de formation ou tout autre collègue lorsque je communique avec un client. Cela me permet d’améliorer mon vocabulaire et ma formulation de phrases, tout en confirmant que les informations présentes dans les écrits soient correctes.</p>

        <h3>Mon évolution dans la compétence</h3>
        <p>Ayant pour projet professionnel de devenir architecte réseau, la communication est essentielle pour exercer dans ce domaine. Un architecte réseau doit communiquer ses idées avec de nombreuses équipes, et défendre leurs choix techniques pour assurer une pleine compréhension des attentes et une organisation efficace en temps de projet. Afin de m’améliorer dans cette compétence, je vais suivre la formation <a href="https://openclassrooms.com/fr/courses/4929676-redigez-des-ecrits-professionnels">Rédigez des écrits professionnels</a>, proposée par l’organisme de formation OpenClassrooms.</p>
      `
    },
    5: {
      title: "Autonomie",
      icon: SVGIcons.person,
      desc: "Je sais réaliser des tâches et projets totalement en autonomie.",
      fullContent: `
        <h3>Ma définition</h3>
        <p>L’autonomie est la capacité d’une personne à réaliser des tâches par elle-même. Dans un cadre d’entreprise, une personne autonome est plus efficace dans son attribution et réalisation des tâches, puisqu’elle permet d’éviter des échanges inutiles entre un employé et ses supérieurs, réduisant le temps de réponse et donc la productivité globale de l’équipe.</p>
        
        <h3>Mes éléments de preuve</h3>
        <p>J’ai démarré mon apprentissage de l’autonomie dans le cadre de l’informatique dès mon baccalauréat général. Dans la spécialité NSI (Numérique et Sciences Informatiques), j’ai eu à réaliser seul différents travaux pratiques en nous servant des documentations officielles des outils, telles que la réalisation de pages web, des programmes écrits en Python, ou l’installation d’une machine virtuelle Linux. J’ai approfondi mon niveau d’autonomie au cours de mon Bachelor AIS.</p>
        <p>Je vais vous présenter mon expérience dans cette compétence à travers deux réalisations :</p>
        <ul>
          <li>La <a href="#/realisations/4">MCO d’un datacenter</a>, réalisé tout au long de mon alternance au sein de l’entreprise Berger-Levrault, entre 2023 et 2026.</li>
          <li>Le <a href="#/realisations/3">projet Netflow</a>, réalisé pendant la première année de mon alternance chez Berger-Levrault, entre 2023 et 2024.</li>
        </ul>
        <p>Dans le cadre de la réalisation « MCO d’un datacenter », j’ai effectué seul des opérations de maintenance mineures sur des outils de management de l’infrastructure, telles que la mise à jour des serveurs de supervision Zabbix. Il m’a fallu plusieurs mois afin de comprendre la partie administration de l’infrastructure du datacenter, et ainsi être capable de réaliser seul des demandes de support de niveau N3 sur cette partie. Mon autonomie s’est fortement améliorée grâce à la grande quantité de documentations créée par les équipes de la BU Technologie de Berger-Levrault. Cela était un point très important pour mon alternance, puisque l’autonomie des membres de l’équipe Infra Engineering était capitale pour la prise en compte et le traitement des différents incidents possibles sur le datacenter.</p>
        <p>Le projet Netflow consistait en la mise en place d’un collecteur de flux Netflow afin de surveiller les flux transitant par les pares-feux du datacenter de Berger-Levrault. Pendant ce projet, j’ai pu appliquer mes compétence en termes d’autonomie, puisque j’avais un cahier des charges à respecter avec des contraintes temporelles importantes, et je n’ai pu recevoir qu’une aide minime sur des tâches que je ne pouvais pas réaliser par manque d’autorisations. La combinaison de technologies dont je n’étais pas du tout familier et de l’aide minime m’a permis de persévéré lorsque j’ai pu rencontrer des échecs, et améliorer ma prise de décisions sur les plans techniques et organisationnels.</p>

        <h3>Mon autocritique</h3>
        <p>Grâce à mon parcours scolaire, mes différents projets réalisés ainsi que mon alternance au sein du groupe Berger-Levrault, j’estime avoir le niveau « confirmé » en matière d’autonomie. J’ai appris à me former sur des outils et technologies en me basant sur des documentations existantes, ainsi qu’en persévérant à travers plusieurs échecs et difficultés.</p>
        <p>Je considère comme essentiel le fait qu’un expert des systèmes d’information puisse réaliser diverses tâches en autonomie. Cependant, en tant qu’alternant, j’ai souvent considéré comme pertinent de demander un second point de vue à un collègue sur des situations à risque, telles qu’une intervention sur une machine cliente, ou lorsque j’ai des doutes concernant l’organisation ou la direction à suivre.</p>

        <h3>Mon évolution dans la compétence</h3>
        <p>Ayant pour projet professionnel de devenir architecte réseau, l’autonomie est extrêmement importante pour mon futur. Un architecte doit constamment prendre des décisions techniques importantes pour une entreprise, et doit toujours se former sur de nouvelles technologies afin de garder une infrastructure réseau à jour dans le temps. Afin d’aller plus loin dans l’apprentissage de l’autonomie, je souhaiterais passer la formation <a href="https://www.actionfirst.fr/formation/catalogueDetail.php?developper-son-autonomie-et-ses-capacites-d-initiative-1879">Développer son autonomie et ses capacités d'initiative</a>, proposée par l’organisme de formation ActionFirst.</p>
      `
    }
  }
};

// Content Fragments
const homeContent = `
  <div class="hero">
    <div class="hero-name fade-in">Nicolas CLUZEAU</div>
    <h1 class="fade-in" style="animation-delay: 0.1s">EXPERT EN INGÉNIERIE DES SYSTÈMES D'INFORMATION</h1>
    <p class="fade-in" style="animation-delay: 0.3s">Bienvenue sur mon portfolio digital.</p>
    <div class="hero-btns fade-in" style="animation-delay: 0.4s">
      <a href="#/presentation" class="btn btn-secondary">Ma Présentation</a>
      <a href="#/realisations" class="btn btn-primary">Mes Réalisations</a>
      <a href="#/competences" class="btn btn-secondary">Mes Compétences</a>
    </div>
  </div>

  <div class="home-sections">
    <section class="home-section fade-in" style="animation-delay: 0.6s">
      <div class="section-header">
        <h2>Mes Réalisations</h2>
        <a href="#/realisations" class="view-all-link">Voir les détails →</a>
      </div>
      <div class="mini-grid">
        ${Object.entries(projectData).map(([id, data]) => `
          <a href="#/realisations/${id}" class="mini-card glass realisation-card">
            <span class="card-icon">${data.icon}</span>
            <h3>${data.title}</h3>
            <p>${data.desc}</p>
          </a>
        `).join('')}
      </div>
    </section>

    <section class="home-section fade-in" style="animation-delay: 0.8s">
      <div class="section-header">
        <h2>Mes Compétences</h2>
        <a href="#/competences" class="view-all-link">Détails des compétences →</a>
      </div>
      <div class="comp-home-grid">
        <div class="comp-home-col glass">
          <h3>${SVGIcons.automation} Techniques</h3>
          <div class="skills-card-list">
            ${Object.entries(skillData.techniques).map(([id, data]) => `
              <a href="#/competences/techniques/${id}" class="mini-card glass realisation-card">
                <span class="card-icon">${data.icon}</span>
                <h3>${data.title}</h3>
                <p>${data.desc}</p>
              </a>
            `).join('')}
          </div>
        </div>
        <div class="comp-home-col glass">
          <h3>${SVGIcons.users} Humaines</h3>
          <div class="skills-card-list">
            ${Object.entries(skillData.humaines).map(([id, data]) => `
              <a href="#/competences/humaines/${id}" class="mini-card glass realisation-card">
                <span class="card-icon">${data.icon}</span>
                <h3>${data.title}</h3>
                <p>${data.desc}</p>
              </a>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  </div>
`;

const presentationContent = `
  <h1>Ma présentation</h1>
  <div class="glass" style="padding: 2rem; text-align: left; margin-top: 2rem;">
    <p>De nature curieuse, j’ai toujours eu une envie d’apprendre dans des domaines en tout genre. Cette soif de connaissances me pousse à toujours essayer de repousser mes limites. J’aime aussi 
      travailler sur des projets utilisant de nouvelles technologies et relever de nouveaux défis toujours plus complexes et ambitieux. Cela me permet de me remettre en question constamment et de 
      régulièrement progresser.
    </p>
    <p>Actuellement étudiant de 5ème année à l’ESIEA dans la filière Administrateur des Systèmes d’Informations (ASI), et alternant en tant qu’Administrateur d’Infrastructures au sein de l’entreprise 
      Berger-Levrault, j’ai eu l’occasion de travailler sur de nombreux projets variés. Ces expériences m’ont permis de découvrir mes préférences dans ce métier : les architectures réseaux et les 
      infrastructures virtualisées.
    </p>
    <p>Fort d’une expérience pluriannuelle au sein des équipes de gestion d’un datacenter, j’ai appris à m’adapter à des infrastructures de grande taille, et à la nécessité de livrer des solutions 
      techniques conformes à diverses réglementations telles que l’ISO 27001 ou la certification HDS. Le large éventail de technologies que j’ai pu utiliser me permettent de créer et gérer des 
      infrastructures sécurisées et redondantes.
    </p>
    <p>Mes différents projets et collaborations m’ont permis de développer mes compétences humaines. J’ai su user de persévérance afin de mener à bien des projets ambitieux et complexes. De plus, 
      j’ai eu l’occasion d’améliorer mon organisation lors de mes projets étudiants, ce qui m’a aidé à mener à bien des projets avec de nombreuses parties prenantes. Finalement, j’ai pu développer 
      mon professionnalisme grâce aux rencontres avec des professionnels du secteur et différentes parties prenantes au cours de mes projets.
    </p>
    <p>Je suis une personne plutôt sérieuse, motivée et perfectionniste. Je cherche constamment à découvrir de nouveaux domaines et disciples sur lesquelles m’intéresser. Je suis actuellement 
      fortement intéressé par les sports mécaniques, qui sont des disciplines de pointe extrêmement compétitives, ainsi que les jeux vidéo, qui sont des sources d’inspirations pour moi.
    </p>
    <p>J’ai pour projet professionnel d’exercer en tant qu’architecte réseau pour une grande entreprise. C’est un métier qui consiste en la conception et la planification de réseaux de grande taille. 
      C’est une évolution de mon métier actuel, demandant une grande maîtrise technique et une capacité analytique et de conception. Mes projets personnels sont de développer mon propre jeu vidéo 
      et le proposer au grand public, ainsi que de renforcer ma culture générale, notamment en apprenant l’allemand. 
    </p>
  </div>
`;

const parcoursContent = `
  <h1>Mon Parcours</h1>
  <div class="grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; margin-top: 2rem;">
    <div class="glass" style="padding: 1.5rem;">
      <h3>2022 - Présent</h3>
      <p>ESIEA - Expertise en Ingénierie des Systèmes d'Information</p>
    </div>
    <div class="glass" style="padding: 1.5rem;">
      <h3>2020 - 2022</h3>
      <p>BTS SIO - Services Informatiques aux Organisations</p>
    </div>
  </div>
`;

const realisationsHomeContent = `
  <div class="realisation-centered">
    <h1>Mes Réalisations</h1>
    <p class="section-subtitle">Au cours de mon parcours scolaire et de mes expériences professionnelles, j'ai participé à de nombreuses réalisations. Voici certaines d'entre elles.</p>
    <div class="grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; margin-top: 2rem;">
      ${Object.entries(projectData).map(([id, data]) => `
        <a href="#/realisations/${id}" class="mini-card glass realisation-card" style="text-decoration: none; color: inherit;">
          <span class="card-icon">${data.icon}</span>
          <h3>${data.title}</h3>
          <p>${data.desc}</p>
        </a>
      `).join('')}
    </div>
  </div>
`;

const competencesHomeContent = `
  <div class="realisation-centered">
    <h1>Mes Compétences</h1>
    <p class="section-subtitle">Ces dernières années, j'ai pu apprendre de nombreuses compétences techniques et humaines. Voici certaines d'entre elles.</p>
    <div class="comp-home-grid" style="margin-top: 2rem;">
      <div class="comp-home-col glass">
        <h3>${SVGIcons.automation} Techniques</h3>
        <div class="skills-card-list">
          ${Object.entries(skillData.techniques).map(([id, data]) => `
            <a href="#/competences/techniques/${id}" class="mini-card glass realisation-card">
              <span class="card-icon">${data.icon}</span>
              <h3>${data.title}</h3>
              <p>${data.desc}</p>
            </a>
          `).join('')}
        </div>
      </div>
      <div class="comp-home-col glass">
        <h3>${SVGIcons.users} Humaines</h3>
        <div class="skills-card-list">
          ${Object.entries(skillData.humaines).map(([id, data]) => `
            <a href="#/competences/humaines/${id}" class="mini-card glass realisation-card">
              <span class="card-icon">${data.icon}</span>
              <h3>${data.title}</h3>
              <p>${data.desc}</p>
            </a>
          `).join('')}
        </div>
      </div>
    </div>
  </div>
`;

const contactContent = `
  <div class="contact-container" style="margin-top: -2rem;">
    <h1>Contact</h1>
    <div class="glass" style="padding: 3rem; display: flex; flex-direction: column; gap: 2rem; max-width: 600px; margin: 1rem auto; text-align: center;">
    <p>Afin de rentrer en contact avec moi n'hésitez pas à m'envoyer un e-mail ou à consulter mon profil LinkedIn :</p>
    
    <div style="display: flex; flex-direction: column; gap: 1rem; align-items: center;">
      <a href="mailto:cluzeau@et.esiea.fr" class="contact-link" style="font-size: 1.25rem; text-decoration: none; color: var(--primary); font-weight: 600;">
        cluzeau@et.esiea.fr
      </a>
      
      <a href="https://www.linkedin.com/in/nicolas-cluzeau-3617ab255" target="_blank" rel="noopener noreferrer" class="nav-link" style="display: inline-block; background: #0077b5; color: white; padding: 0.75rem 2rem; border-radius: 50px; text-decoration: none;">
        Mon Profil LinkedIn
      </a>
    </div>
  </div>
`;

const routes = {
  '/': { title: 'Accueil', content: homeContent },
  '/presentation': { title: 'Ma Présentation', content: presentationContent },
  '/parcours': { title: 'Mon Parcours', content: parcoursContent },
  '/realisations': { title: 'Réalisations', content: realisationsHomeContent },
  '/competences': { title: 'Compétences', content: competencesHomeContent },
  '/competences/techniques': { title: 'Compétences Techniques', content: `<h1>Compétences Techniques</h1>${competencesHomeContent}` },
  '/competences/humaines': { title: 'Compétences Humaines', content: `<h1>Compétences Humaines</h1>${competencesHomeContent}` },
  '/contact': { title: 'Contact', content: contactContent },
};

// Sub-pages with personalized content
Object.entries(projectData).forEach(([id, data]) => {
  const relatedSkillsHTML = data.relatedSkills ? `
    <div class="related-skills">
      <h3>Compétences rattachées</h3>
      <div class="skills-chips">
        ${data.relatedSkills.map(s => {
    const skill = skillData[s.type][s.id];
    if (!skill) return '';
    return `<a href="#/competences/${s.type}/${s.id}" class="skill-chip skill-chip-${s.type} glass">
            <span class="chip-icon">${skill.icon}</span>
            ${skill.title}
          </a>`;
  }).join('')}
      </div>
    </div>
  ` : '';

  routes[`/realisations/${id}`] = {
    title: data.title,
    content: `
      <div class="realisation-centered">
        <span class="hero-icon">${data.icon}</span>
        <h1>${data.title}</h1>
        <div class="glass" style="padding: 3rem; margin-top: 2rem;">
          <div class="detailed-content">
            ${data.fullContent || `<p>${data.desc}</p>`}
          </div>
          ${relatedSkillsHTML}
          <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
            <a href="#/realisations" style="color: var(--primary); text-decoration: none; font-weight: 600;">← Retour aux réalisations</a>
          </div>
        </div>
      </div>
    `
  };
});

Object.entries(skillData.techniques).forEach(([id, data]) => {
  routes[`/competences/techniques/${id}`] = {
    title: data.title,
    content: `
      <div class="realisation-centered">
        <span class="hero-icon">${data.icon}</span>
        <h1>${data.title}</h1>
        <div class="glass" style="padding: 3rem; margin-top: 2rem;">
          <div class="detailed-content">
            ${data.fullContent || `<p>${data.desc}</p>`}
          </div>
          <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
            <a href="#/competences" style="color: var(--primary); text-decoration: none; font-weight: 600;">← Retour aux compétences</a>
          </div>
        </div>
      </div>
    `
  };
});

Object.entries(skillData.humaines).forEach(([id, data]) => {
  routes[`/competences/humaines/${id}`] = {
    title: data.title,
    content: `
      <div class="realisation-centered">
        <span class="hero-icon">${data.icon}</span>
        <h1>${data.title}</h1>
        <div class="glass" style="padding: 3rem; margin-top: 2rem;">
          <div class="detailed-content">
            ${data.fullContent || `<p>${data.desc}</p>`}
          </div>
          <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
            <a href="#/competences" style="color: var(--primary); text-decoration: none; font-weight: 600;">← Retour aux compétences</a>
          </div>
        </div>
      </div>
    `
  };
});

const render = () => {
  const path = window.location.hash.slice(1) || '/';
  const route = routes[path] || { title: '404', content: '<h1>Page non trouvée</h1>' };

  document.title = `${route.title} | Portfolio`;

  app.innerHTML = `
    ${Navigation(projectData, skillData, SVGIcons)}
    <main>
      <div class="container fade-in">
        ${route.content}
      </div>
    </main>
    ${Footer(projectData, skillData)}
  `;
  window.scrollTo(0, 0);

  // Sidebar & Mobile Drawer Logic
  const sidebarNav = document.querySelector('.sidebar-nav');
  const mobileToggle = document.querySelector('.mobile-toggle-sidebar');
  const navLinksVertical = document.querySelector('.nav-links-vertical');

  if (mobileToggle) {
    mobileToggle.onclick = () => {
      mobileToggle.classList.toggle('active');
      navLinksVertical.classList.toggle('active');
    };
  }

  // Handle Mobile Drawer Accordion
  document.querySelectorAll('.nav-item-vertical').forEach(item => {
    const link = item.querySelector('.nav-icon-link');
    const drawer = item.querySelector('.nav-drawer');

    if (drawer && link) {
      link.onclick = (e) => {
        if (window.innerWidth <= 1024) {
          e.preventDefault();
          // Close other drawers
          document.querySelectorAll('.nav-item-vertical').forEach(other => {
            if (other !== item) other.classList.remove('active');
          });
          item.classList.toggle('active');
        }
      };
    }
  });

  // Close menu on final link click
  document.querySelectorAll('.nav-link-final').forEach(link => {
    link.onclick = () => {
      mobileToggle?.classList.remove('active');
      navLinksVertical?.classList.remove('active');
      document.querySelectorAll('.nav-item-vertical').forEach(i => i.classList.remove('active'));
    };
  });
};

window.addEventListener('hashchange', render);
window.addEventListener('load', render);
