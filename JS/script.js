window.addEventListener("load" , ()=>{
    const btn_bars = document.querySelector(".menu-bars");
    const header = document.querySelector(".header");
    const menu = document.querySelector(".container-nav");

    btn_bars.addEventListener("click" , ()=>{
        menu.classList.toggle("active")
        header.classList.toggle("active");
    })

    // INICIA CODIGO PARA SLIDE

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove("show");
            }
        })
    })

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // FIN DE SLIDE
})