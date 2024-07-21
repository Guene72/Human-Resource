<!-- 
    Gestion RH
    ---
    Ecrit avec ❤ par GUENE Moumouni 
    © 2024 E2JS CI
 -->
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ressource humaine</title>
    <link rel="shortcut icon" href="libs/img/favicon.png" type="image/x-icon">
    <!-- Chargement des feuilles CSS -->
    <!-- Librairie -->
    <link rel="stylesheet" href="libs/vendor/font-awesome-pro/css/all.css">
    <!-- Intégré -->
    <link rel="stylesheet" href="./libs/css/app.css">
    <!-- Chargement des scripts JS -->
     <script type="module" src="./libs/js/app.js"> </script>
    <!-- Librairie -->
    <!-- Intégré -->
</head>
<body>
    <!-- Conteneur des pops up de notification -->
    <div id="notifications" style="display: none;">
        <div class="wait" _show-timeout no-cancel text="Execution dans 5s">
            <div class="box">
                <svg width="500" height="500" viewBox="0 0 500 500">
                    <circle static cx="250" cy="250" r="200" stroke-width="80" fill="transparent" />
                    <circle dynamic cx="250" cy="250" r="200" stroke="currentColor" stroke-width="80" stroke-linecap="round"
                    fill="transparent"/>
                </svg>
            </div>
        </div>
        <!-- Temporaires -->
        <div class="notifications-list">
            <div class="notification" state="good" _show>
                <span class="head">Connexion Effectuée</span>
                <!-- <span class="body">Content de vous revoir KOFFI</span> -->
            </div>
            <div class="notification" state="bad" _show>
                <span class="head"> Identifiants Incorrects </span>
                <!-- <span class="body">Ces identifiants sont incorrects</span> -->
            </div>
            <div class="notification" state="bad" _show>
                <span class="head">Connexion Impossible</span>
                <!-- <span class="body">Les identifiants saisis sont incorrects</span> -->
            </div>
        </div>
    </div>
    <!-- Conteneur des fenetres modales -->
    <div id="modals" style="display: _none;"> 
        <div class="modal" name="auth" show>
            <div class="box">

            </div>

        </div>
    </div>
    </div>
    <!-- Conteneur de l'application -->
    <div id="app" style="display: one;">
     <div id="app-left">
        <div id="app-left-content">
             <div id="image">
                   <img src="libs/img/icon-text-large.png" alt="">
            </div>
            <div id="menu"><i class="fa-light fa-compass"></i> Menu</div>
            <div id="libelle">
                <button class="ui-btn" theme="alpha" menu name="menu-btn-employe" size="large" color="blue"><i class="fa-duotone fa-users"></i>&nbsp;  Employés</button>    
            </div>
            <div class="filigran">
                <p>
                    <i class="fa-solid fa-users"></i>  <i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i>
                    <i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i>
                    <i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i>
                    <i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i>
                    <i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i>
                    <i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i>
                    <i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i>
                    <i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i>
                    <i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i>
                    <i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i>
                    <i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i>
                    <i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i>
                    <i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i>
                    <i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i>
                    <i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i>
                    <i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i>
                    <i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i><i class="fa-solid fa-users"></i>
                </p><img src="libs/img/e2js-logo-1.png" alt="">
            </div>
           
        </div>  
            <div class="logout">
                <input type="checkbox" id="check">
                <label for="check" class="button" title="Se deconnecter"></label>
            </div>  
     </div> 
     <div id="app-right">
        <div id="head-1">
            <div class="date">
                 <div>
                     <p>LA GESTION</p>
                     <p>DU ----------------</p>
                     <p>PERSONNEL</p>
                </div> 
            </div>
            
            <div class="btn-notifs">   
               <div class="notif" cont="5"><button><i class="fa-regular fa-bell"></i></button></div>
                <div class="admin">
                    <img src="libs/img/kadaf.jpeg" alt="">
                   <div class="title">
                    <p>GUENE MAEL WISSIFY</p>
                    <p>Responsable Ressource Humaine</p>
                   </div>
                </div>
            </div>
        </div>
        <div id="log" _show>
           <div class="i"><i class="fa-duotone fa-file-user"></i></div>
           <div class="cont">
        </div>
        </div>
       <div id="app-content">
          <div id="list">
             <div id="statistic">
            <div class="state" name="direction">
                <span class="nb-direction">8</span>
                <span class="ecrit">DIRECTIONS</span>
            </div>
            <div class="state" name="service">
                <span class="nb-direction">14</span>
                <span class="ecrit">SERVICES</span>

            </div>  
            <div class="state" name="employe" _add>
                <span class="nb-direction">512</span>
                <span class="ecrit">EMPLOYES ACTIFS</span>

            </div>
            <div class="state" name="depart">
                <span class="nb-direction">147</span>
                <span class="ecrit">DEPARTS</span>

            </div>
            <div class="state" name="await">
                <span class="nb-direction">10</span>
                <span class="ecrit">DEMANDES EN ATTENTES</span>
            </div>
        </div>
        <div id="employe">
            <!-- Selecteur des directions -->
            <div class="controls">
              <div class="title">LES EMPLOYES DE:</div>
                <div class="rubrique">
                    <div class="input-select" show>
                        <div class="input-cont"><label for="ff"><i class="fa-light fa-building-user"></i></label> <input type="text" id="ff" disabled value="Toutes les Directions" ></div>
                         <div class="options">
                           <div>
                            <span><i class="fa-duotone fa-hand-point-right"></i> DCM</span>
                            <span><i class="fa-regular fa-shop"></i> Direction Commercial</span>
                           </div>
                           <div>
                             <span><i class="fa-duotone fa-hand-point-right"></i> DAF</span>
                             <span><i class="fa-regular fa-shop"></i> Direction Administratif et Financier</span>
                            </div>
                            <div>
                             <span><i class="fa-duotone fa-hand-point-right"></i> DASI</span>
                             <span><i class="fa-regular fa-shop"></i> Direction Assistant Service Informatique</span>
                            </div>
                            <div>
                             <span><i class="fa-duotone fa-hand-point-right"></i> DQ</span>
                             <span><i class="fa-regular fa-shop"></i> Direction Qualité</span>
                            </div>
                            <div>
                             <span><i class="fa-duotone fa-hand-point-right"></i> DP</span>
                             <span><i class="fa-regular fa-shop"></i> Direction des Programmes</span>
                            </div>
                         </div>
                       </div>
                       <!-- Selecteur des services -->
                       <div class="input-select" state="service" _show >
                         <div class="input-cont"><label for="ff"><i class="fa-brands fa-servicestack"></i></label> <input type="text" id="ff" value="Tout les services" ></div>
                          <div class="options">
                            <div>
                             <span><i class="fa-duotone fa-hand-point-right"></i> SI</span>
                             <span><i class="fa-regular fa-shop"></i> Service Informatique</span>
                            </div>
                            <div>
                              <span><i class="fa-duotone fa-hand-point-right"></i> SA</span>
                              <span><i class="fa-regular fa-shop"></i> Service Achat</span>
                             </div>
                             <div>
                              <span><i class="fa-duotone fa-hand-point-right"></i> SRH</span>
                              <span><i class="fa-regular fa-shop"></i> Service Ressouces humaines</span>
                             </div>
                             <div>
                              <span><i class="fa-duotone fa-hand-point-right"></i> SC</span>
                              <span><i class="fa-regular fa-shop"></i> Service Comptable</span>
                             </div>
                             <div>
                              <span><i class="fa-duotone fa-hand-point-right"></i> DP</span>
                              <span><i class="fa-regular fa-shop"></i> Direction des Programmes</span>
                             </div>
                          </div>
                        </div> 
                    </div>
                  
                  <!-- Choix des statut -->
               <div class="reste">
                   <div class="controls-statut">
                     <i class="fa-regular fa-people-group " title="Tous les employés"></i>
                     <i class="fa-solid fa-wave-pulse select" title="Employés actifs"></i>
                     <i class="fa-regular fa-house-person-leave" title="Employés en congé"></i>
                     <i class="fa-duotone fa-person-walking-dashed-line-arrow-right" title="Employés licenciés"></i>
                     <i class="fa-duotone fa-person-walking-dashed-line-arrow-right" title="Employés licenciés"></i>
                   </div>
                  <div class="ui-input" theme="alpha">
                     <input type="text" placeholder="Recherche" id="fsd" autocomplete="off">
                  </div> 
                  <div class="controls-statut actualise " >
                    <i class="fa-solid fa-rotate-right" title="Actualiser"></i>
                    <i class="fa-solid fa-file-export" title="Exporter"></i>
                  </div> 
              </div>             
            </div>
              <!-- <div class="trait"></div>
              <div class="trait deux"></div> -->
            <div class="cont-table cool-scroll-bar">  
                <table>
                    <thead>
                        <tr>
                            <th><i class="fa-duotone fa-hashtag"></i> Matricule</th>
                            <th><i class="fa-duotone fa-user"></i> Nom & Prenoms</th>
                            <th><i class="fa-duotone fa-briefcase"></i> Fonction</th>
                            <th><i class="fa-brands fa-servicestack"></i> Service</th>
                            <th><i class="fa-duotone fa-building-user"></i> Direction</th>
                            <th><i class="fa-solid fa-code-pull-request"></i> Demande</th>
                            <th><i class="fa-duotone fa-badge-check"></i> Statut</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                    </tbody>
                </table>

            </div>
        </div>
          </div>
       </div>
    </div>
    </div>
    <!-- <script defer>
         const x = document.querySelector('.modal[name="confirm"]')
        setTimeout(() => {
            x.setAttribute('show', '')
            setTimeout(() => {
                x.setAttribute('hide', '')
                setTimeout(() => {
                    x.removeAttribute('hide')
                    x.removeAttribute('show')
                }, 600);
            }, 3000);
        }, 1000); 
        / console.log(docum);
            //  Desactive l'autre modale pour activer l'autre
        //  const x = document.querySelector('.modal[name="confirm"]')
        //  const d = document.querySelector('.modal[name="info-employe"]')
        //  const btn = document.querySelector('.ui-btn[title="Refuser"]')
        //  btn.addEventListener('click',()=>{
        //     setTimeout(() => {
        //     d.removeAttribute('show')
        //     setTimeout(() => {
        //         x.setAttribute('show','')
        //     }, 50); 
        //  }, 0);
        //  })  
 
    </script> -->
      
     
        
</body>
</html>