const click_nav = document.getElementsByTagName('body')[0];     /// detecta todos los clicks

const modal_hub = document.querySelector('.modal_hub');
const modal_menu = document.querySelector('.modal_menu');
const modal_calendario = document.querySelector('.modal_calendario');
const fondo_modal = document.querySelector('.modal-fondo-oscuro');


click_nav.addEventListener('click', e => {

    /// si se hace 'click' en una 'X' cierra los modales y fondo oscuro
    if (e.target.dataset.action === "close-modal") {

        console.log('data',e.target.dataset.action);

        fondo_modal.classList.remove('fondo_modal_active');
        modal_hub.classList.remove('modal-activo-right');
        modal_menu.classList.remove('modal-activo-left');
        modal_calendario.classList.remove('modal-activo-right');
    }

    /// si se hace 'click' en un 'btn' se abre el modal elegido y el fondo modal
    if (e.target.dataset.action === "modal") { 

        document.querySelector(`.modal_${e.target.dataset.name}`).classList.toggle(`modal-activo-${e.target.dataset.side}`);
        document.querySelector('.modal-fondo-oscuro').classList.toggle('fondo_modal_active');
    }
});