export default function modals() {
    document.querySelectorAll('.fui-modal-trigger').forEach((trigger) => {
        trigger.addEventListener('click', e => {
            try {
                const target = e.currentTarget.getAttribute('data-modal-target');
                document.querySelector(`#${target}.fui-modal__background`).classList.toggle('open');
            } catch {
                return;
            }
        });

    });

    document.querySelectorAll(`.close`).forEach(button => {
        button.addEventListener('click', e => {
            try {
                e.currentTarget.closest('.fui-modal__background').classList.toggle('open');
            } catch {
                return;
            }
        })
    })
};