import qrCode from 'qrcode';
const app = document.querySelector('#app');

const thisUrl = window.location.href;
let text;

const input = document.createElement('input');
input.id = 'input';
input.placeHolder = 'Texto a codificar.';

const canvasContainer = document.createElement('div');
canvasContainer.id = 'canvasContainer';

const canvas = document.createElement('canvas');
canvas.id = 'canvas';

const downloadLink = document.createElement('a');
downloadLink.id = 'downloadLink';
downloadLink.innerText = 'Download!';

canvasContainer.appendChild(canvas);
canvasContainer.appendChild(downloadLink);

const header = document.createElement('h1');
header.innerText = 'Clau! QR Code';
header.id = 'title';

const draw = (data) => {
  text = data;
  return qrCode.toCanvas(canvas, text).catch((e) => console.log('No text to code.'));
};

const onInputHandler = () => {
  if (input.value === '') draw(thisUrl);
  draw(input.value);
};

const onClickDownloadHandler = () => {
  const dataUrl = canvas.toDataURL('image/png');
  downloadLink.href = dataUrl;
  downloadLink.download = 'qrcode.png';
};

draw(thisUrl);
input.addEventListener('input', onInputHandler);
downloadLink.addEventListener('click', onClickDownloadHandler);

app.appendChild(header);
app.appendChild(input);
app.appendChild(canvasContainer);
