## Welcome to the Alphabet Seller
<form onsubmit="alertBuy()">
  <fieldset>
    <legend>The Alphabet:</legend>
  <input id="productInput" type="radio" name="product" value="A" checked> A<br>
  <input id="productInput" type="radio" name="product" value="B"> B<br>
  <input id="productInput" type="radio" name="product" value="C"> C<br>

  Number of Products:
  <select id="numSelect" name="num">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
  </select><br><br>
  Please help us click "Buy"! (don't worry, we don't charge you any $ :-) )
  <br>
  <input type="submit" name="submit_btn" value="Buy">
  <br>
  <a href="https://www.amazon.com" addestination="https://www.amazon.com" adcampaignid="55"> GO TO AMAZON </a>
  </fieldset>
  <a href="https://www.amazon.com" adcampaignid="55"> GO TO AMAZON </a>
</form>

### Go to [Amazon](https://www.amazon.com)

### Go to [Facebook](https://www.facebook.com)

<script src="script.js"></script>
<script>
  var nativeBridge = window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.receiveImgPixel;
if (nativeBridge) {
    const postObj = {
      pcmPixelPostMessageEvent: {
          id: '54321',
          ev: 'Purchase',
      }
    };
    nativeBridge.postMessage(JSON.stringify(postObj));
}
</script>
