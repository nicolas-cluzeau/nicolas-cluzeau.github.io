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
  person: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`
};

// Personalized Data
const projectData = {
  1: {
    title: "Projet DockStock",
    icon: SVGIcons.docker,
    desc: "Mise en place d'une infrastructure redondée et sécurisée pour l'hébergement de conteneurs Docker.",
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
        <li>Le conteneur BunkerWeb est le cœur du pare-feu</li>
        <li>Le conteneur bw-autoconf est le conteneur permettant l’autoconfiguration des services web en fonction des labels qui leur sont assignés dans le fichier docker-compose</li>
        <li>Le conteneur bw-scheduler est le conteneur permettant l’orchestration de tous les conteneurs de la stack Bunkerweb.</li>
        <li>Le conteneur bw-ui est le conteneur permettant d’administrer Bunkerweb via une interface web</li>
        <li>Le conteneur bw-db est le conteneur permettant de stocker les données de configuration du pare-feu</li>
        <li>Le conteneur bw-docker est le conteneur protégeant le socket Docker pour éviter l’utilisation de Docker depuis un réseau extérieur</li>
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
  3: { title: "Projet Netflow", icon: SVGIcons.flow, desc: "Création d'un collecteur de flux Netflow conteneurisé.", fullContent: `` },
  4: { title: "MCO d'un datacenter", icon: SVGIcons.server, desc: "Réalisation du Maintien en Condition Opérationnelle d'un datacenter certifié HDS et ISO 27001.", fullContent: `` },
  5: { title: "Déploiement de supervision automatisé", icon: SVGIcons.automation, desc: "Déploiement d'une solution de supervision avec Ansible.", fullContent: `` }
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
    <h1 class="fade-in">EXPERT EN INGÉNIERIE DES SYSTÈMES D'INFORMATION</h1>
    <p class="fade-in" style="animation-delay: 0.2s">Bienvenue sur mon portfolio digital.</p>
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
  <h1>Me Contacter</h1>
  <div class="glass" style="padding: 3rem; display: flex; flex-direction: column; gap: 2rem; max-width: 600px; margin: 2rem auto; text-align: center;">
    <p>Vous avez un projet ou une opportunité ? N'hésitez pas à me joindre via les canaux ci-dessous :</p>
    
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
  routes[`/realisations/${id}`] = {
    title: data.title,
    content: `
      <div class="realisation-centered">
        <h1>${data.title}</h1>
        <div class="glass" style="padding: 3rem; margin-top: 2rem;">
          <div class="detailed-content">
            ${data.fullContent || `<p>${data.desc}</p>`}
          </div>
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
    ${Navigation(projectData, skillData)}
    <main>
      <div class="container fade-in">
        ${route.content}
      </div>
    </main>
    ${Footer(projectData, skillData)}
  `;
  window.scrollTo(0, 0);

  // Setup mobile toggle after render
  const toggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle) {
    toggle.onclick = () => {
      toggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    };
  }

  // Handle Accordion on Mobile
  document.querySelectorAll('.nav-item, .dropdown-item').forEach(item => {
    const link = item.querySelector(':scope > a');
    const dropdown = item.querySelector(':scope > .dropdown, :scope > .nested-dropdown');

    if (dropdown && link) {
      link.onclick = (e) => {
        // Only apply accordion on mobile
        if (window.innerWidth <= 768) {
          e.preventDefault();
          dropdown.classList.toggle('show');
          link.classList.toggle('active-arrow');
        }
      };
    }
  });

  // Close menu on final link click
  document.querySelectorAll('.dropdown-link:not(.has-nested), .nav-link:not(.has-dropdown)').forEach(link => {
    // Note: I'll add classes to Navigation.js to distinguish these
    link.onclick = (e) => {
      if (!link.nextElementSibling?.classList.contains('dropdown') && !link.nextElementSibling?.classList.contains('nested-dropdown')) {
        toggle?.classList.remove('active');
        navLinks?.classList.remove('active');
      }
    };
  });
};

window.addEventListener('hashchange', render);
window.addEventListener('load', render);
