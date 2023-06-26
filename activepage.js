const activePage=window.location.pathname;
const navLinkEls=document.querySelectorAll('a.links');
const windowPathname=window.location.pathname;
console.log(windowPathname)

navLinkEls.forEach(navLinkEl=>{
const navLinkPathname= new URL(navLinkEl.href).pathname;

  if((windowPathname === navLinkPathname)|| (windowPathname==='/index.htm' && navLinkPathname==="/")){
    navLinkEl.classList.add('active');
  }
})