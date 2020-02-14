function solve() {

    // let inputField = document.getElementsByTagName('textarea')[0];

    document
        .getElementsByTagName('button')[0]
        .addEventListener("click", generate);
    // generateButton.addEventListener("click", generate);

    document
        .getElementsByTagName('button')[1]
        .addEventListener("click", buy);
    // buyButton.addEventListener("click", buy);

    function generate(e) {

        let objects = JSON.parse(
            document
                .getElementsByTagName('textarea')[0]
                .value
        );
        // objects.forEach(obj => objectGenerator(obj))
        objects.forEach(function (obj) { objectGenerator(obj) })

    }

    function objectGenerator(obj) {
        // let name = obj.name;
        // let img = obj.img;
        // let price = obj.price;
        // let decFactor = obj.decFactor;

        // let tbodyElement = document.getElementsByTagName('tbody')[0];

        let trElement = document.createElement('tr');
        let imgElementTd = document.createElement('td');
        // let imgElement = document.createElement('img');
        // imgElement.src = img;
        imgElementTd.innerHTML = '<img src="' + obj.img + '">';

        document
            .getElementsByTagName('tbody')[0]
            .appendChild(trElement);

        // tbodyElement.appendChild(trElement);
        // trElement.append(imgElementTd);
        trElement.appendChild(imgElementTd);

        let nameElementTd = document.createElement('td');
        let nameElementP = document.createElement('p');


        nameElementP.textContent = obj.name;
        nameElementTd.appendChild(nameElementP);
        trElement.appendChild(nameElementTd);


        let priceElementP = document.createElement('p');
        priceElementP.textContent = obj.price;

        let priceElementTd = document.createElement('td');
        priceElementTd.appendChild(priceElementP);

        trElement.appendChild(priceElementTd);

        let decFactorElement = document.createElement('td');
        let decFactorElementP = document.createElement('p');

        decFactorElementP.textContent = obj.decFactor;
        // decFactorElement.append(decFactorElementP);
        decFactorElement.appendChild(decFactorElementP);
        trElement.appendChild(decFactorElement);

        // document
        //   .createElement('input')
        //   .type = 'checkbox';
        // checkBox.type = 'checkbox';
        let checkBoxTd = document.createElement('td');
        checkBoxTd.innerHTML = '<input type="checkbox">';
        // trElement.append(checkBoxTd);
        trElement.appendChild(checkBoxTd);

    }

    function buy(e) {
        let boughtFurniture = [];
        let totalPrice = 0;
        let avgDecFactor = 0;
        let count = 0;

        let allTr = Array.from(document.getElementsByTagName('tr'));
        // console.log(allTr[2].children[4].children[0]);
        for (let i = 2; i < allTr.length; i++) {

            if (allTr[i].children[4].children[0].checked) {
                count += 1;
                boughtFurniture.push(allTr[i].children[1].textContent);
                totalPrice += +allTr[i].children[2].textContent;
                avgDecFactor += +allTr[i].children[3].textContent;

            }
            // console.log(boughtFurniture);
        }

        avgDecFactor = avgDecFactor / (count);
        // avgDecFactor = (avgDecFactor / (allTr.length - 2)).toFixed(2);

        document
            .getElementsByTagName('textarea')[1]
            .value =
            "Bought furniture: " +
            boughtFurniture.join(', ') +
            "\nTotal price: " +
            totalPrice.toFixed(2) +
            "\nAverage decoration factor: " +
            avgDecFactor;
    }

}