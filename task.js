let navbar = document.getElementById('navbar')
document.querySelector('#bars-btn').onclick = () =>{
    navbar.classList.toggle('navbar');
    console.log("hello");
}
window.onscroll = () =>{
    navbar.classList.remove('navbar');
}