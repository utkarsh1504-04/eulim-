ScrollReveal().reveal('.logo-main', { delay: 200, origin: 'top' });
ScrollReveal().reveal('a', { delay: 200, origin: 'top' });
ScrollReveal().reveal('.body-main', { delay:210, origin: 'top' });
ScrollReveal().reveal('.navbar', { delay:200, origin: 'top' });
ScrollReveal().reveal('.footer', { delay:200, origin: 'top' });
ScrollReveal().reveal('.body h1', { delay:200, origin: 'top' });
ScrollReveal().reveal('.enterprise-h1', { delay:200, origin: 'top' });
ScrollReveal().reveal('.approach', { delay:200, origin: 'top' });
ScrollReveal().reveal('.body-enterprise p', { delay:200, origin: 'top' });
ScrollReveal().reveal('.form-container', { delay:200, origin: 'top' });
ScrollReveal().reveal('.product', { delay:200, origin: 'top' });

function typeWriter(){
    var typed = new Typed(".auto-type",{
        strings:["Simplify It.","RecyclifyIt."],
        typeSpeed:150,
        backSpeed:250,
        loop:true,
        delay:5000
    })
}
typeWriter();


// retail script

// donate search info here
function search() {
    let filter = document.getElementById('find').value.toUpperCase();
    let item = document.querySelectorAll('.product');
    let l = document.getElementsByTagName('h3');
    for(var i = 0;i<=l.length;i++){
    let a=item[i].getElementsByTagName('h3')[0];
    let value=a.innerHTML || a.innerText || a.textContent;
    if(value.toUpperCase().indexOf(filter) > -1) {
    item[i].style.display="";
    }
    else
    {
    item[i].style.display="none";
    }
    }
    }

    //retail 
    function search1() {
        let filter = document.getElementById('find1').value.toUpperCase();
        let products = document.querySelectorAll('.product');
    
        // Loop through all product items
        for (var i = 0; i < products.length; i++) {
            let title = products[i].getElementsByTagName('h3')[0];
    
            // Check if title exists
            if (title) {
                let textValue = title.textContent || title.innerText;
    
                // Control visibility based on search filter
                if (textValue.toUpperCase().indexOf(filter) > -1) {
                    products[i].style.display = "";
                } else {
                    products[i].style.display = "none";
                }
            } else {
                // If no title is found, hide the product
                products[i].style.display = "none";
            }
        }
    }

    function search2() {
        let filter = document.getElementById('find2').value.toUpperCase();
        let products = document.querySelectorAll('.product');
    
        // Loop through all product items
        for (var i = 0; i < products.length; i++) {
            let title = products[i].getElementsByTagName('h3')[0];
    
            // Check if title exists
            if (title) {
                let textValue = title.textContent || title.innerText;
    
                // Control visibility based on search filter
                if (textValue.toUpperCase().indexOf(filter) > -1) {
                    products[i].style.display = "";
                } else {
                    products[i].style.display = "none";
                }
            } else {
                // If no title is found, hide the product
                products[i].style.display = "none";
            }
        }
    }

    