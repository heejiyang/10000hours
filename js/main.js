const loadingSection = document.querySelector('.cont-result-loading');
const resultSection = document.querySelector('.cont-result');

const modal = document.querySelector('#modal');
const modalStartBtn = document.querySelector('.btn-open');
const modalOpenBtn = document.querySelector('.btn-go');
const modalCloseBtn = document.querySelector('.btn-close');
const modalShareBtn = document.querySelector('.btn-share');

function calculate(){
  const fieldValue = document.querySelector('#inp-field');
  const timeValue = document.querySelector('#inp-time');

  if (fieldValue.value === ""){
    alert("비정상 접근입니다.")
    return
  } else if (timeValue.value === ""){
    alert("비정상 접근입니다.")
    return
  } else if (timeValue.value >= 24){
    alert ("하루는 24시간입니다.")
    return
  } else if (timeValue.value >= 12){
    alert ("이러다 번아웃이 옵니다.")
    return
  }

  loadingSection.style.display = 'block';
  setTimeout(function(){
    const fieldResult = document.querySelector('.field-result');
    const timeResult = document.querySelector('.time-result');

    loadingSection.style.display = 'none';
    resultSection.style.display = 'block';

    fieldResult.innerHTML = fieldValue.value;
    timeResult.innerHTML = 10000/parseInt(timeValue.value);
  }, 2000);
};

function modalOpen(){
  modal.style.display = "flex"
};

function modalClose(){
  modal.style.display = "none"
};

function share(){
  let url = window.location.href;
  navigator.clipboard.writeText(url)
    .then(() => {
      alert("URL이 복사되었습니다.")
    })
    .catch((err) => {
      alert("URL이 복사되지 않았습니다.")
    });
};

modalStartBtn.addEventListener('click', calculate);
modalOpenBtn.addEventListener('click', modalOpen);
modalCloseBtn.addEventListener('click', modalClose);
modalShareBtn.addEventListener('click', share);

window.onclick = function(event){
  if(event.target == modal){
    modalClose();
  };
};
// const locationForm = document.querySelector('form');
// const job = document.getElementById('#inp-field');
// const time = document.getElementById('#inp-time');
// const resultJob = document.

// modalOpen.addEventListener('click', (event) => {
//   event.preventDefault();
//   modal.classList.add('active');
// });

// modalClose.addEventListener('click', (event) => {
//   event.preventDefault();
//   modal.classList.remove('active');
// });
