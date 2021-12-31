const submitButton = document.getElementById('submit');

function dontRefresh(event){
    console.log("hello world");
    event.preventDefault();
}

submitButton.addEventListener('click', e => dontRefresh(e));