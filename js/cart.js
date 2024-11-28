let mock_info = [
  {
    code: 1,
    name: "Short Jeans",
    price: 12.99,
    quantity: 10,
    urlImg:
      "https://as2.ftcdn.net/v2/jpg/00/29/45/15/1000_F_29451528_XHdoJm3fP0WTRfjxiHKeb12R47hOsjMF.jpg",
  },
  {
    code: 2,
    name: "Short Jeans",
    price: 12.99,
    quantity: 10,
    urlImg:
      "https://as2.ftcdn.net/v2/jpg/00/29/45/15/1000_F_29451528_XHdoJm3fP0WTRfjxiHKeb12R47hOsjMF.jpg",
  },
  {
    code: 3,
    name: "Short Jeans",
    price: 12.99,
    quantity: 10,
    urlImg:
      "https://as2.ftcdn.net/v2/jpg/00/29/45/15/1000_F_29451528_XHdoJm3fP0WTRfjxiHKeb12R47hOsjMF.jpg",
  },
  {
    code: 4,
    name: "Short Jeans",
    price: 12.99,
    quantity: 10,
    urlImg:
      "https://as2.ftcdn.net/v2/jpg/00/29/45/15/1000_F_29451528_XHdoJm3fP0WTRfjxiHKeb12R47hOsjMF.jpg",
  },
  {
    code: 5,
    name: "Short Jeans",
    price: 12.99,
    quantity: 10,
    urlImg:
      "https://as2.ftcdn.net/v2/jpg/00/29/45/15/1000_F_29451528_XHdoJm3fP0WTRfjxiHKeb12R47hOsjMF.jpg",
  },
];

function onLoad(mock_info) {
  loadCart(mock_info);
  loadResume(mock_info);
}

function deleteItem(code) {
  mock_info = mock_info.filter((item) => item.code !== code);

  loadCart(mock_info);
  loadResume(mock_info);
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
                        <h2>R$ ${price}</h2>
                        <h3>${name}</h3>
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

/// #IMPORTANT PRECISO FAZER O MODAL DO RESUMO DA COMPRA CASO A TELA SEJA DE CELULAR (WIDTH < QUE ALGO)

onLoad(mock_info);
