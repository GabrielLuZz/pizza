const c = el => document.querySelector(el);

let cart = [];

const cs = el => document.querySelectorAll(el);

let modalqt = 1;

let modalkey = 0;

pizzaJson.map((item, index) => {
    let pizzaItem = c('.models .pizza-item').cloneNode(true);

    pizzaItem.setAttribute('data-key', index);
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    pizzaItem.querySelector('a').addEventListener('click', (e)=> {
 
        e.preventDefault();
        modalqt = 1;
    
        let key = e.target.closest('.pizza-item').getAttribute('data-key');

        modalkey = key;

        c('.pizzaBig img').src = pizzaJson[key].img;
        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        c('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;
        c('.pizzaInfo--size.selected').classList.remove('selected');
        cs('.pizzaInfo--size').forEach((size, sizeindex)=>{
            if (sizeindex == 2) {
                size.classList.add('selected');
            };
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeindex];
        });

        c('.pizzaInfo--qt').innerHTML = modalqt;

        c('.pizzaWindowArea').style.opacity = 0;
        c('.pizzaWindowArea').style.display = "flex";
        setTimeout(()=> {

            c('.pizzaWindowArea').style.opacity = 1;

        }, 200);

    });


    c('.pizza-area').append( pizzaItem );
});

// eventos do modal

function closemodal () {
    c('.pizzaWindowArea').style.opacity = 0;

    setTimeout(() => {
        c('.pizzaWindowArea').style.display = 'none';
    }, 500);
};

cs('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item)=>{
    item.addEventListener('click', closemodal);
});

c('.pizzaInfo--qtmenos').addEventListener('click', ()=>{
        if (modalqt>1) {
        modalqt--;
        c('.pizzaInfo--qt').innerHTML = modalqt;
    }
})

c('.pizzaInfo--qtmais').addEventListener('click', ()=>{
    modalqt++;
    c('.pizzaInfo--qt').innerHTML = modalqt;
});

cs('.pizzaInfo--size').forEach((size, sizeindex)=>{
    size.addEventListener('click', ()=>{
        c('.pizzaInfo--size.selected').classList.remove('selected');
        size.classList.add('selected');
    });
});

c('.pizzaInfo--addButton').addEventListener('click', ()=>{
    let size = parseInt(c('.pizzaInfo--size.selected').getAttribute('data-key'));

    let indentifier = pizzaJson[modalkey].id+'@'+size;

    let key = cart.findIndex((item)=> item.indentifier == indentifier );

    if (key > -1) {
        cart[key].qt += modalqt;
    } else {

        cart.push({
        indentifier,
        id: pizzaJson[modalkey].id,
        size,
        qt:modalqt
        });

    }

    updateCart();
    closemodal();
});

c('.menu-openner').addEventListener('click', ()=>{
    if (cart.length > 0) {
        c('aside').style.left = '0';
    }
});

c('.menu-closer').addEventListener('click', ()=>{
    c('aside').style.left = '100vw';
});

function updateCart() {

    c('.menu-openner span').innerHTML = cart.length;

    if (cart.length > 0) {

        c('aside').classList.add('show');
        c('.cart').innerHTML = '';

        let subtotal = 0;
        let desconto = 0;
        let total = 0;

        for (let i in cart) {
            let pizzaItem = pizzaJson.find((item)=> item.id == cart[i].id);

            subtotal += pizzaItem.price * cart[i].qt;

            let cartItem = c('.models .cart--item').cloneNode(true);

            let pizzaSizeName;

            switch (cart[i].size) {
                case 0:
                    pizzaSizeName = 'P';
                break;

                case 1:
                    pizzaSizeName = 'M';
                break;

                case 2:
                    pizzaSizeName = 'G';
                break;
            }

            let pizzaName = `${pizzaItem.name} (${pizzaSizeName})`;

            cartItem.querySelector('img').src = pizzaItem.img;
            cartItem.querySelector('.cart--item-nome').innerHTML = pizzaName;
            cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qt;
            cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', ()=>{

                if (cart[i].qt > 1) {
                    cart[i].qt--;
                } else {
                    cart.splice(i, 1);
                };

                updateCart();
            });

            cartItem.querySelector('.cart--item-qtmais').addEventListener('click', ()=>{

                cart[i].qt++;
                updateCart();
            });

            c('.cart').append(cartItem);
        };

        desconto = subtotal * 0.1;
        total = subtotal - desconto;

        c('.subtotal span:last-child').innerHTML = `R$ ${subtotal.toFixed(2)}`;
        c('.desconto span:last-child').innerHTML = `R$ ${desconto.toFixed(2)}`;
        c('.total span:last-child').innerHTML = `R$ ${total.toFixed(2)}`;

    } else {
        c('aside').classList.remove('show');
        c('aside').style.left = '100vw';
    };
};