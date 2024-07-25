
export default function Users() {
       // Selection des elements
   const un = document.querySelector('.conts[inf]')
   const deux = document.querySelector('.conts[deux]')
   const ContbtnUser = document.querySelector('.btns')
   const btn1 = ContbtnUser.querySelectorAll('button[name]') 
   // const btn2 = InfoLibBtn.querySelectorAll('button[name]') 
function navigate(event) {
   event.preventDefault();
   const page = event.target.getAttribute('name');
   loadPage(page);
   history.pushState({page}, null, `#${page}`);
}
function loadPage(page) {
   let content = '';
   let cont = ''
   if(page==='infos'){
       content = '<div class="titles"><span><i class="fa-regular fa-circle-exclamation"></i> Consultations de mes informations</span><div class="btns" infos><button class="ui-btn" name="identification" theme="alpha" size="large" color="blue"><i class="fa-regular fa-circle-exclamation"></i> Identification</button><button class="ui-btn" name="contact" theme="alpha" size="large" color="blue"><i class="fa-duotone fa-address-book"></i> Contact</button><button class="ui-btn" name="parent" theme="alpha" size="large" color="blue"><i class="fa-duotone fa-family-pants"></i> Personne à contacter</button> <button class="ui-btn" name="carriere" theme="alpha" size="large" color="blue"><i class="fa-duotone fa-building-columns"></i> Carriere</button></div> </div>';
       un.removeAttribute('none');
       deux.style.display = 'flex';
       un.innerHTML = content
        const InfoLibBtn = document.querySelector('.btns[infos]')
        let b =  InfoLibBtn.querySelectorAll('button[name]')
        b.forEach(x =>{
        let a = x.getAttribute('name')
         x.addEventListener('click',()=>{
           if (a ==='identification') {
              history.pushState({a}, null, `#${page}` + `#${a}`);
               const initialPage = window.location.hash.substring(1) || '';
               history.replaceState({a: initialPage}, null, `#${page}`+`#${a}`);  
               cont ='<div class="all" _show><div class="cont1" ><div class="join"><div class="titre"><p><i class="fa-duotone fa-hashtag"></i> Matricule</p><p><i class="fa-duotone fa-calendar-star"></i> Civilite </p><p><i class="fa-duotone fa-user"></i> Nom</p><p><i class="fa-duotone fa-user"></i> Prenoms</p><p><i class="fa-duotone fa-badge-check"></i> Situation Matrimoniale</p><p><i class="fa-duotone fa-flag"></i> Nationnalité</p><p><i class="fa-duotone fa-cake-candles"></i> Date de naissance</p><p><i class="fa-duotone fa-location-dot"></i> Lieu de naissance</p> <p><i class="fa-duotone fa-hashtag"></i> Nombre d\'enfant</p><p><i class="fa-duotone fa-id-card"></i> Justificatif d\'identité</p><p><i class="fa-duotone fa-id-card"></i> Permis de Conduire</p><p><i class="fa-duotone fa-id-card"></i> Numèro CNPS</p></div><div class="result"> <p>1147</p> <p>Monsieur</p><p>DERPERPILLAN</p><p>Aka Jean Louis Gasset</p> <p>Marié</p><p>Ivoirienne</p><p>04 Dec 2001</p><p>Abengourou</p><p>02</p><p>Carte d\'identité No 1745245226325</p><p>ABCD No 1745245226325</p><p> 1745245226325</p> </div></div></div></div>'
               deux.removeAttribute('none')
               deux.innerHTML= cont
           }else if(a === 'contact'){
               history.pushState({a}, null, `#${page}` + `#${a}`);
               const initialPage = window.location.hash.substring(1) || '';
               history.replaceState({a: initialPage}, null, `#${page}`+`#${a}`);
               cont = '<div class="all" _show><div class="cont1"> <div class="join"><div class="titre"><p><i class="fa-duotone fa-location-dot"></i> Ville</p><p><i class="fa-duotone fa-location-dot"></i> Commune/ Quartier </p><p><i class="fa-duotone fa-phone-office"></i> Numero Telephone Principal</p><p><i class="fa-duotone fa-phone-office"></i> Numero Telephone Secondaire</p><p><i class="fa-duotone fa-at"></i> E-mail</p></div><div class="result"><p>Abidjan</p><p>Cocody Riviera 3</p><p>07 79 29 82 68</p><p>01 52 08 09 21</p><p>derpillanaka@e2js.com</p> </div></div> </div></div>'
               deux.innerHTML= cont 
           }else if(a === 'parent'){
               history.pushState({a}, null, `#${page}` + `#${a}`);
               const initialPage = window.location.hash.substring(1) || '';
               history.replaceState({a: initialPage}, null, `#${page}`+`#${a}`);
               cont = ' <div class="all" _show><div class="cont1" ><div class="join"><div class="titre"><p><i class="fa-duotone fa-user"></i> Nom & Prenoms</p><p><i class="fa-duotone fa-phone-office"></i> Numero Telephone</p> <p><i class="fa-duotone fa-hand-holding-droplet"></i> Lien de Parenter</p> </div> <div class="result"> <p>Abidjan</p> <p>Cocody Riviera 3</p><p>07 79 29 82 68</p> </div> </div>  </div></div>'
               deux.innerHTML= cont   

           }else if(a === 'carriere'){
               history.pushState({a}, null, `#${page}` + `#${a}`);
               const initialPage = window.location.hash.substring(1) || '';
               history.replaceState({a: initialPage}, null, `#${page}`+`#${a}`);
               cont ='<div class="all" _show> <div class="cont1"> <div class="join"><div class="titre" ><p><i class="fa-duotone fa-user"></i> Statut</p><p><i class="fa-duotone fa-calendar-star"></i> Date de depart</p><p><i class="fa-duotone fa-calendar-xmark"></i> Date de retour</p><p><i class="fa-duotone fa-watch-calculator"></i> Ancienneté</p> </div><div class="result" statut="x"> <p>Demissionaire</p><p>14/02/2002</p><p>14/02/2025</p><p>22 ans</p></div></div><div class="convention" -show><p class="titr" title="Afficher plus d\'informations"><i class="fa-duotone fa-file-contract"></i> Convention Professionelle</p><div class="table"><table><thead><th>Type</th><th>Catégorie</th><th>Fonction</th><th>Service</th><th>Departement</th><th>Date debut</th><th>Date fin</th></thead><tbody><tr><td>CDI</td><td>Asertionnnfbh</td><td>Assistant Communication</td><td>Commercial</td><td>DCM</td><td>12/10/2020</td><td>12/10/2022</td></tr><tr><td>CDI</td><td>Asertionnnfbh</td><td>Assistant Communication</td><td>Commercial</td><td>DCM</td><td>12/10/2020</td><td>12/10/2022</td></tr></tbody></table></div></div></div></div>'
               deux.innerHTML= cont   
           }
        })
      
        })  
      
   } else if(page==='demands'){
       content = '<div class="all cool-scroll-bar" _show><div class="cont1"><div class="join"><div class="titre"><p><i class="fa-duotone fa-code-pull-request"></i> Type de demande</p><p><i class="fa-duotone fa-question"></i> Type/Motif</p><p><i class="fa-duotone fa-layer-group"></i> Catégorie</p><p><i class="fa-duotone fa-right-left"></i> Mode de Compensation</p><p><i class="fa-duotone fa-calendar-star"></i> Date de depart </p><p><i class="fa-duotone fa-calendar-xmark"></i> Date de retour</p><p><i class="fa-duotone fa-badge-check"></i> Statut</p></div><div class="result" statut="await"><p>Absence</p><p>Congé Annuel</p><p>Courte durée</p><p>Congé Annuel</p><p>04 Janvier 2025</p><p>04 Fevrier 2025</p><p>En attente</p></div></div> </div></div>'
       deux.style.display = 'none';
       un.removeAttribute('none')
       un.innerHTML = content
   }else if(page === 'effectuer'){
       content = ' <div class="titles"><span><i class="fa-regular fa-circle-exclamation"></i> Choix du type de demande</span> <div class="btns" demands><button class="ui-btn" name="absence" theme="alpha" size="large" color="blue"><i class="fa-regular fa-circle-exclamation"></i> Absence</button> <button class="ui-btn" name="recrutement" theme="alpha" size="large" color="blue"><i class="fa-duotone fa-code-pull-request"></i> Recrutement</button><button class="ui-btn" name="formation" theme="alpha" size="large" color="blue"><i class="fa-duotone fa-hand-holding"></i> Formation</button></div> </div>'
       un.removeAttribute('none')
       deux.style.display = 'flex'
       un.innerHTML = content
       const BtnDmd = document.querySelector('.btns[demands]')
       let c =  BtnDmd.querySelectorAll('button[name]')
       c.forEach(x =>{
       let u = x.getAttribute('name')
        x.addEventListener('click',()=>{
           
          if (u ==='absence') {
             history.pushState({u}, null, `#${page}` + `#${u}`);
              const initialPage = window.location.hash.substring(1) || '';
              history.replaceState({u: initialPage}, null, `#${page}`+`#${u}`);  
              cont = ' <div class="all" _show><div class="cont1" ><div class="ui-input" theme="alpha" state="good"><select name="" id=""><option value="Civilité">--Type/Motif--</option><option value="">CONGE ANNUEL</option><option value="">CONGE MALADIE</option><option value="">CONGE PARENTAL</option><option value="">CONGE MATERNITE/PATERNITE</option><option value="">CONGE POUR DECES</option><option value="">CONGE POUR FORMATION</option></select> </div><div class="ui-input" theme="alpha" state="good"><label for="gdf6"><i class="fa-duotone fa-interrobang"></i></label><input type="text" placeholder="Autre motif ? Précisez " id="gdf6"></div><div class="ui-input" theme="alpha" state="good"><select name="" id=""><option value="Categorie">--Catégorie ?--</option><option value="">COURTE DUREE</option><option value="">PERMISSION EXCEPIONNELLE</option><option value="">ABSENCE EXCEPTIONNELLE</option></select></div><div class="ui-input" theme="alpha" state="good"><select name="" id=""><option value="Compensation">--Mode de compensation ?--</option><option value="">SALAIRE MOIS EN COURS</option><option value="">CONGE ANNUEL</option><option value="">SANS EFFET</option></select></div><div class="ui-input" theme="alpha" state="good"><label for="gdf6"><i class="fa-duotone fa-cake-candles"></i></label><input type="date" title="Date de depart" id="gdf6"></div><div class="ui-input" theme="alpha" state="good"><label for="gdf6"><i class="fa-duotone fa-cake-candles"></i></label><input type="date" title="Date de retour" id="gdf6"></div></div></div><div class="btn-save"><button class="ui-btn" name="login" theme="alpha" size="large" color="blue" title="Effectuer la demande" ><i class="fa-duotone fa-floppy-disk"></i></button></div> '
              deux.removeAttribute('none')
              deux.innerHTML= cont
          }else if(u ==='recrutement'){
              history.pushState({u}, null, `#${page}` + `#${u}`);
              const initialPage = window.location.hash.substring(1) || '';
              history.replaceState({u: initialPage}, null, `#${page}`+`#${u}`);
             cont = '<div class="all" _show><span class="title">Ressource *</span><div class="cont1" ><div class="ui-input" theme="alpha" state="good"><label for="gdf6"><i class="fa-duotone fa-hashtag"></i></label><input type="number" placeholder="Nombre d\'employés" id="gdf6"></div></div></div><div class="all" _show><span class="title">Poste *</span><div class="cont1" >  <div class="ui-input" theme="alpha" state="good"><label for="gdf6"><i class="fa-duotone fa-user"></i></label><input type="text" placeholder="Intitulé" id="gdf6"></div><div class="ui-input" theme="alpha" state="good"><select name="" id=""><option value="Existance">--Poste existant ?--</option><option value="">OUI</option><option value="">NON</option></select></div><div class="ui-input" theme="alpha" state="good"><select name="" id=""><option value="Existance">--Prevu au budget ?--</option><option value="">OUI</option><option value="">NON</option></select></div><div class="ui-input" theme="alpha" state="good"><label for="gdf6"><i class="fa-duotone fa-user"></i></label><input type="text" placeholder="Tâche Principale" id="gdf6"></div></div></div><div class="all" _show><span class="title">Contrat *</span><div class="cont1" ><div class="ui-input" theme="alpha" state="good"><select name="" id=""><option value="Existance">--Type de contrat--</option><option value="">STAGE ECOLE</option><option value="">STAGE PROFESSIONNEL</option><option value="">CDD</option><option value="">CDI</option></select></div><div class="ui-input" theme="alpha" state="good"><label for="gdf6"><i class="fa-duotone fa-user"></i></label><input type="text" placeholder="Durée ?" id="gdf6"></div></div></div><div class="all" _show><span class="title">Qualification *</span><div class="cont1" ><div class="ui-input" theme="alpha" state="good"><label for="gdf6"><i class="fa-duotone fa-user"></i></label><input type="text" placeholder="Diplome" id="gdf6"></div> <div class="ui-input" theme="alpha" state="good"><label for="gdf6"><i class="fa-duotone fa-user"></i></label><input type="text" placeholder="Expérience Professionelle" id="gdf6"></div><div class="ui-input" theme="alpha" state="good"><label for="gdf6"><i class="fa-duotone fa-user"></i></label><input type="text" placeholder="Compétence requise" id="gdf6"></div><div class="ui-input" theme="alpha" state="good"><label for="gdf6"><i class="fa-duotone fa-cake-candles"></i></label> <input type="date" title="Date prévisionnelle de recrutement" id="gdf6"></div></div></div><div class="btn-save"><button class="ui-btn" name="login" theme="alpha" size="large" color="blue" title="Effectuer la demande" ><i class="fa-duotone fa-floppy-disk"></i></button></div>'
                  
              deux.innerHTML= cont 
          }else if(u === 'formation'){
              history.pushState({u}, null, `#${page}` + `#${u}`);
              const initialPage = window.location.hash.substring(1) || '';
              history.replaceState({u: initialPage}, null, `#${page}`+`#${u}`);
              cont = ' <div class="all" _show><span class="title">Concerné(é) *</span><div class="cont1" ><div class="ui-input" theme="alpha" state="good"><label for="gdf6"><i class="fa-duotone fa-hashtag"></i></label><input type="number" placeholder="Nombre d\'employés" id="gdf6"></div><div class="ui-input" theme="alpha" state="good"><label for="gdf6"><i class="fa-duotone fa-user"></i></label><input type="text" placeholder="Demandeur" id="gdf6"></div><div class="ui-input" theme="alpha" state="good"><label for="gdf6"><i class="fa-duotone fa-user"></i></label><input type="text" placeholder="Intitulé" id="gdf6"></div><div class="ui-input" theme="alpha" state="good"><label for="gdf6"><i class="fa-duotone fa-user"></i></label><input type="text" placeholder="Bénéficiaire" id="gdf6"> </div> <div class="ui-input" theme="alpha" state="good"><label for="gdf6"><i class="fa-duotone fa-cake-candles"></i></label><input type="date" title="Date limite" id="gdf6"></div><div class="ui-input" theme="alpha" state="good"><label for="gdf6"><i class="fa-duotone fa-user"></i></label><input type="text" placeholder="Motif" id="gdf6"></div><div class="ui-input" theme="alpha" state="good"><label for="gdf6"><i class="fa-duotone fa-user"></i></label><input type="text" placeholder="Performances attendues" id="gdf6"></div><div class="ui-input" theme="alpha" state="good"><select name="" id=""><option value="Existance">--Formation indispensable au poste ?--</option><option value="">OUI</option><option value="">NON</option></select></div></div></div><div class="all" _show><span class="title">Organisme formateur ? *</span><div class="cont1" ><div class="ui-input" theme="alpha" state="good"><label for="gdf6"><i class="fa-duotone fa-user"></i></label><input type="text" placeholder="Nom" id="gdf6"></div><div class="ui-input" theme="alpha" state="good"><label for="gdf6"><i class="fa-duotone fa-user"></i></label><input type="email" placeholder="Email" id="gdf6"></div><div class="ui-input" theme="alpha" state="good"><label for="gdf6"><i class="fa-duotone fa-hashtag"></i></label><input type="number" placeholder="Numéro de Téléphone" id="gdf6"></div><div class="ui-input" theme="alpha" state="good"><label for="gdf6"><i class="fa-duotone fa-user"></i></label><input type="text" placeholder="Cout" id="gdf6"></div>  <div class="ui-input" theme="alpha" state="good"><label for="gdf6"><i class="fa-duotone fa-user"></i></label> <input type="text" placeholder="Lieu" id="gdf6"></div><div class="ui-input" theme="alpha" state="good"><label for="gdf6"><i class="fa-duotone fa-cake-candles"></i></label><input type="date" title="Date" id="gdf6"></div></div></div><div class="btn-save"><button class="ui-btn" name="login" theme="alpha" size="large" color="blue" title="Effectuer la demande" ><i class="fa-duotone fa-floppy-disk"></i></button></div> '
              deux.innerHTML= cont   

          }else if(a === 'carriere'){
              history.pushState({a}, null, `#${page}` + `#${a}`);
              const initialPage = window.location.hash.substring(1) || '';
              history.replaceState({a: initialPage}, null, `#${page}`+`#${a}`);
              cont ='<div class="all" _show> <div class="cont1"> <div class="join"><div class="titre" ><p><i class="fa-duotone fa-user"></i> Statut</p><p><i class="fa-duotone fa-calendar-star"></i> Date de depart</p><p><i class="fa-duotone fa-calendar-xmark"></i> Date de retour</p><p><i class="fa-duotone fa-watch-calculator"></i> Ancienneté</p> </div><div class="result" statut="x"> <p>Demissionaire</p><p>14/02/2002</p><p>14/02/2025</p><p>22 ans</p></div></div><div class="convention" -show><p class="titr" title="Afficher plus d\'informations"><i class="fa-duotone fa-file-contract"></i> Convention Professionelle</p><div class="table"><table><thead><th>Type</th><th>Catégorie</th><th>Fonction</th><th>Service</th><th>Departement</th><th>Date debut</th><th>Date fin</th></thead><tbody><tr><td>CDI</td><td>Asertionnnfbh</td><td>Assistant Communication</td><td>Commercial</td><td>DCM</td><td>12/10/2020</td><td>12/10/2022</td></tr><tr><td>CDI</td><td>Asertionnnfbh</td><td>Assistant Communication</td><td>Commercial</td><td>DCM</td><td>12/10/2020</td><td>12/10/2022</td></tr></tbody></table></div></div></div></div>'
              deux.innerHTML= cont   
          }
       })
     
       })
   }else{
       content = '<span>Aucune information ici</span> ';
       un.setAttribute('none','')    
   } 
}

function handlePopState(event) {
   const page = event.state ? event.state.page : '';
   loadPage(page);
}
window.addEventListener('popstate', handlePopState);

btn1.forEach(button => {
   button.addEventListener('click', navigate);
});

// Vérifier l'URL pour déterminer la page initiale à charger
const initialPage = window.location.hash.substring(1) || '';
loadPage(initialPage);
history.replaceState({page: initialPage}, null, `#${initialPage}`); 
    
}