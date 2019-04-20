(function () {
    let productData= null;
    let xhr = new XMLHttpRequest;
    xhr.open('GET', 'json/product.json', false);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 || xhr.readyState === 200) {
            productData = xhr.responseText;
        }
    };
    xhr.send(null);
    let str = ``;
    let list = document.getElementById('list');

    productData = JSON.parse(productData);
    console.log(productData);
    for (let i = 0; i < productData.length; i++) {
        let {id, title, price, time, hot, img} = productData[i];
        str += `<li >
                <a href="javascript:;">

                <img src="${img}">
                    <p>"${title}"</p>

                <span>${price}</span>
                </a>
            </li>`;
    }

    list.innerHTML = str;
})();

(function () {

})


