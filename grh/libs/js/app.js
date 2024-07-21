// import { Users, boh} from "./user.js";
// Users()
// console.log(boh());
import { modal } from "./modal.js";

// Selection de quelques elements
const modals = document.querySelector('#modals');
const SmallModal = modals.querySelector('.modal');
const box = SmallModal.querySelector('.box');
const app = document.getElementById('app');
app.style.display = 'none';
const mod = new modal();
const storage = localStorage.getItem('savedState')

// Element à lancer par defaut au chargement de la page
SmallModal.setAttribute('name','auth');
const cont = '<div class="app-logos"><img src="libs/img/icon-text-large.png" alt="Logo application"></div><div class="auth-forms"><form class="login-form" style="display: _none;" ><span class="form-title"><i class="fa-regular fa-link"></i>Une connexion est requise pour accéder à cette application</span><div class="form-controls"><div class="ui-input" theme="alpha" state="" error="fkjsd sdjf ksdjkfjsdk"><label for="fsd"><i class="fa-regular fa-fingerprint"></i></label><input type="text" placeholder="Identifiant" id="fsd" autocomplete="off"></div><div class="ui-input" theme="alpha" state="_bad"><label for="lmf"><i class="fa-regular fa-key"></i></label><input type="password" placeholder="Mot de passe" id="lmf" autocomplete="off"><button class="show-password" title="Afficher" state="on"></button></div></div><div class="form-actions"><button type="submit" class="ui-btn" name="login" theme="alpha" size="large" color="blue" title="Effectuer la connexion" disabled><i class="fa-regular fa-right-to-bracket"></i></button><button class="ui-btn" name="reset-password-switch" theme="alpha" size="large" color="blue"><i class="fa-regular fa-circle-exclamation"></i> Information oubliée</button></div></form><div class="reset-form"><span class="form-title"><i class="fa-regular fa-question"></i>Votre adresse E-mail est nécessaire afin de recupérer votre compte</span><div class="ui-input" theme="alpha" state="good"><label for="gdf6"><i class="fa-solid fa-at"></i></label><input type="email" placeholder="Adresse E-mail" id="gdf6"></div><div class="reset-actions"><button class="ui-btn" theme="alpha" name="go-back" size="large" color="blue" title="Retournez à la connexion"><i class="fa-solid fa-chevron-left"></i></button><button class="ui-btn" theme="alpha" name="reset-password-action" size="large" color="blue"><i class="fa-solid fa-paper-plane"></i> Soumettre</button></div></div></div>';
box.innerHTML = cont;

const Auth = document.querySelector('.modal[name="auth"]');
const forms = Auth.querySelector('form');
const UiInput = Auth.querySelectorAll('.ui-input');
const spa = Auth.querySelector('.form-title');
const UserId = UiInput[0].querySelector('input[type="text"]');
const UserPassword = UiInput[1].querySelector('input[type="password"]');
const BtnLog = Auth.querySelector('.ui-btn[name="login"]');
const BtnReset = Auth.querySelector('.ui-btn[name="reset-password-switch"]');

if (UserId instanceof HTMLInputElement && UserPassword instanceof HTMLInputElement) {
    const Chek = () => {
        if (UserId.value.length >= 3 && UserPassword.value.length >= 3) {
            BtnLog.removeAttribute('disabled');
        } else {
            BtnLog.setAttribute('disabled', 'true');
        }
    };

    UserId.addEventListener('change', (event) => {
        event.preventDefault();
        if (UserId.value.length < 3) {
            UiInput[0].setAttribute('state', 'bad');
            UiInput[0].setAttribute('error', 'Données incorrectes');
        } else {
            UiInput[0].setAttribute('state', '');
            Chek();
        }
    });

    UserPassword.addEventListener('change', (event) => {
        event.preventDefault();
        if (UserPassword.value.length < 3) {
            UiInput[1].setAttribute('state', 'bad');
            UiInput[1].setAttribute('error', 'Données incorrectes');
        } else {
            UiInput[1].setAttribute('state', '');
            Chek();
        }
    });

    BtnLog.addEventListener('click', async (event) => {
        event.preventDefault();
            const response = await fetch('libs/php/database.php?action=login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: UserId.value,
                    pass: UserPassword.value
                })
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data[0].motdepassutilisateur);

                localStorage.setItem('savedState','visible')
               let un = mod.CloseModal()
            } else {
                console.log('Error:', response.statusText); 
            }
    });
} else {
    console.log('Element Html non selectionné ou introuvable');
}
// Instanciation
// const un = mod.showModal(,'confirm');
