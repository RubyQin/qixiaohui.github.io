function alertBuy() {
  var products = document.getElementsByName("product");
  var product = "A";
  for (var i = 0, length = products.length; i < length; i++) {
    if (products[i].checked) {
      product = products[i].value;
      break;
    }
  }
  
  var productNum = document.getElementById("numSelect").value;
  
  const postObj = {
    pcmPixelPostMessageEvent: {
        id: '12345',
        ev: 'Purchase',
        cd: '{"currency":"USD","value":"0.00"}'
    }
  };
  window.postMessage(postObj, 'github.com');
  
  alert("You've just bought on Yizhu's iframe " + productNum + " " + product + "(s)!");
}
