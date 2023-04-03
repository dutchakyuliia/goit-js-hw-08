import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', throttle((e) => {
    const prevState = JSON.parse(localStorage.getItem('feedback-form-state'));
    const inputEl = event.target;

    localStorage.setItem(
        'feedback-form-state',
        JSON.stringify({
            ...prevState,
            [inputEl.getAttribute('name')]: inputEl.value,
        })
    );
}, 500 ));

const inputEl = document.querySelector('.feedback-form input');
inputEl.value = JSON.parse(localStorage.getItem('feedback-form-state'))?.email;
const messageEl = document.querySelector('.feedback-form textarea');
messageEl.value = JSON.parse(

formEl.addEventListener('submit', e => {
    e.preventDefault();
      const data = new FormData(e.target);
    console.log(data.get("email"));
      console.log(data.get("message"));
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
});

