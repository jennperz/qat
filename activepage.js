const activePage=window.location.pathname;
const navLinks=document.querySelectorAll('nav a').forEach(link=>{
    console.log(link.href)
})
console.log(activePage);