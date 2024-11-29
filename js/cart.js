let mock_info = [
  {
    code: 1,
    name: "Bermuda Social Cinza",
    price: 30.00,
    quantity: 2,
    urlImg:
      "../icon/bermuda.png",
  },
  {
    code: 2,
    name: "Camisa Rosa",
    price: 45.99,
    quantity: 1,
    urlImg:
      "../icon/CamisaRosa.png",
  },
  {
    code: 3,
    name: "Camisa Vermelha",
    price: 45.99,
    quantity: 1,
    urlImg:
      "../icon/CamisaVermelha.png",
  },
  {
    code: 4,
    name: "Chinelo Havaianas",
    price: 12.99,
    quantity: 2,
    urlImg:
      "../icon/Chinelo.png",
  },
  {
    code: 5,
    name: "Kit com 3 Calças Jeans",
    price: 120.00,
    quantity: 1,
    urlImg:
      "../icon/Kit3CalcaJeans.png",
  },
];

function onLoad(mock_info) {
  loadCart(mock_info);
  loadResume(mock_info);
  loadModalResume(mock_info);
}

function deleteItem(code) {
  mock_info = mock_info.filter((item) => item.code !== code);

  loadCart(mock_info);
  loadResume(mock_info);
  loadModalResume(mock_info)
}

function openModal() {
  const modal = document.getElementById("modalResume");

  if (modal.classList.contains("hidden")) {
    modal.classList.add("visible");
    modal.classList.remove("hidden");
  } else {
    modal.classList.add("hidden");
    modal.classList.remove("visible");
  }

}

function openModalFinish() {
  const modal = document.getElementById("modalFinish");

  if (modal.classList.contains("hidden")) {
    modal.classList.add("visible");
    modal.classList.remove("hidden");
  } else {
    modal.classList.add("hidden");
    modal.classList.remove("visible");
  }

}

function loadCart(mock_info) {
  let productsBody = document.querySelector("#productsBody");

  while (productsBody.firstChild) {
    productsBody.removeChild(productsBody.firstChild);
  }
  mock_info.forEach(({ code, name, price, quantity, urlImg }) => {
    let productCardHTML = `
            <div id="productCard" class="flex flexRow width100 contBetween borderDefault bgMedium transition">
                <div id="prodInfo" class="flex flexColumn contBetween">
                    <div>
                        <h2>${name}</h2>
                        <h3>R$ ${price}</h3>
                    </div>
                    <div id="prodQuantity" class="flex flexRow width100">
                        <p>Quantidade: </p>
                        <input id="prodQtdInput" class="width100 height100 borderDefault bgBorder" type="number" value="${quantity}">
                    </div>
                </div>
                <img id="prodImg" class="height100 borderDefault" src="${urlImg}">
                <button onclick="deleteItem(${code})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </button>
            </div>
        `;

    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = productCardHTML.trim();
    let productCardElement = tempDiv.firstChild;

    productsBody.appendChild(productCardElement);
  });
}

function loadResume(mock_info) {
  let totalPrice = 0;
  let valuesCount = document.querySelector("#valuesCount");
  let totalValue = document.querySelector("#totalValue");
  let subTotal = document.querySelector("#subTotal")

  while (valuesCount.firstChild) {
    valuesCount.removeChild(valuesCount.firstChild);
  }

  while (subTotal.firstChild) {
    subTotal.removeChild(subTotal.firstChild);
  }

  if (totalValue.lastChild) {
    totalValue.removeChild(totalValue.lastChild);
  }

  mock_info.forEach(({ name, price, quantity }) => {
    let resumeItemsHTML = `
        <div class="flex flexRow width100 contBetween">
            <p>${name} x ${quantity}</p>
            <p>${price * quantity}</p>
        </div>
        `;
    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = resumeItemsHTML.trim();
    let resumeItemsElement = tempDiv.firstChild;

    valuesCount.appendChild(resumeItemsElement);

    totalPrice += price * quantity;
  });

  let totalPriceHTML = `
        <h3>R$ ${totalPrice.toFixed(2)}</h3>
    `;

  let tempH3 = document.createElement("h3");
  tempH3.innerHTML = totalPriceHTML.trim();
  let totalPriceElement = tempH3.firstChild;

  totalValue.appendChild(totalPriceElement);

  let qtdTotal = mock_info.length;
  let qtdTotalText = "";

  if (qtdTotal < 1) {
    qtdTotalText = `<div class="flex width100"><p>Você não possui nenhum item no carrinho!</p></div>`;
  } else if (qtdTotal === 1) {
    qtdTotalText = `<div class="flex width100"><p>Subtotal (${qtdTotal} item)</p></div>`;
  } else {
    qtdTotalText = `<div class="flex width100"><p>Subtotal (${qtdTotal} itens)</p></div>`;
  }

  let tempDiv = document.createElement("div");
  tempDiv.innerHTML = qtdTotalText.trim();
  let qtdTotalTextElement = tempDiv.firstChild;

  subTotal.appendChild(qtdTotalTextElement);
}

function loadModalResume(mock_info) {
  let totalPrice = 0;
  let valuesCount = document.querySelector("#valuesCountModal");
  let totalValue = document.querySelector("#totalValueModal");
  let subTotal = document.querySelector("#subTotalModal")

  while (valuesCount.firstChild) {
    valuesCount.removeChild(valuesCount.firstChild);
  }

  while (subTotal.firstChild) {
    subTotal.removeChild(subTotal.firstChild);
  }

  if (totalValue.lastChild) {
    totalValue.removeChild(totalValue.lastChild);
  }

  mock_info.forEach(({ name, price, quantity }) => {
    let resumeItemsHTML = `
        <div class="flex flexRow width100 contBetween">
            <p>${name} x ${quantity}</p>
            <p>${price * quantity}</p>
        </div>
        `;
    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = resumeItemsHTML.trim();
    let resumeItemsElement = tempDiv.firstChild;

    valuesCount.appendChild(resumeItemsElement);

    totalPrice += price * quantity;
  });

  let totalPriceHTML = `
        <h3>R$ ${totalPrice.toFixed(2)}</h3>
    `;

  let tempH3 = document.createElement("h3");
  tempH3.innerHTML = totalPriceHTML.trim();
  let totalPriceElement = tempH3.firstChild;

  totalValue.appendChild(totalPriceElement);

  let qtdTotal = mock_info.length;
  let qtdTotalText = "";

  if (qtdTotal < 1) {
    qtdTotalText = `<div class="flex width100"><p>Você não possui nenhum item no carrinho!</p></div>`;
  } else if (qtdTotal === 1) {
    qtdTotalText = `<div class="flex width100"><p>Subtotal (${qtdTotal} item)</p></div>`;
  } else {
    qtdTotalText = `<div class="flex width100"><p>Subtotal (${qtdTotal} itens)</p></div>`;
  }

  let tempDiv = document.createElement("div");
  tempDiv.innerHTML = qtdTotalText.trim();
  let qtdTotalTextElement = tempDiv.firstChild;

  subTotal.appendChild(qtdTotalTextElement);
}

/// #IMPORTANT PRECISO FAZER O MODAL DO RESUMO DA COMPRA CASO A TELA SEJA DE CELULAR (WIDTH < QUE ALGO)

onLoad(mock_info);
