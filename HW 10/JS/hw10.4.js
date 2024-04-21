// Изменить код метода wrapperA  таким образом, чтобы 
// добавлялся анкор (текст) ссылки. Текст передавать 
// массивом.


function Menu(...navList){
        this.navList=navList;
        this.wrapperA=function(){
            return this.navList.map(elem=>`<a href='${elem}'>item</a>`);
        }
    }
    let mainMenu=new Menu("home.html","services.html","price.html","about.html");
    for (elem of mainMenu.navList)
        console.log(elem);
        console.log(mainMenu.wrapperA());
    let footerMenu=new Menu("newPage.html","checkPage.html","seoPage.html");
    for (elem of footerMenu.navList)
        console.log(elem);
        console.log(footerMenu.wrapperA()); 

mainMenu.forEach(function(elem, i)
{
    let a = document.createElement('a');
    document.body.append(a);
    a.textContent = elem;

})