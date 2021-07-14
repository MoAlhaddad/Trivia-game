let topTextinput= topTextsizeinput, bottomTextsizeinput, generateBtn, canvas, ctx;

function generateMeme (img, topText, bottomText) {
    canvas.width = img.width;
    canvas.height = img.height;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);
    let fontSize = canvas.width / 15;
    ctx.font = fontSize + 'px impact';
    ctx.fillStyle= 'white';
    ctx.strokeStyle= 'black';
    ctx.lineWidth = fontSize / 15;
    ctx.textAlign = 'center';

    ctx.textBaseline = 'top';
    topText.split('\0').forEach(function(t, i)  {
        
    });
    ctx.fillText(t, canvas.width / 2, i * fontSize, canvas.width);
    ctx.strokeText(t, canvas.width / 2, i * fontSize, canvas.width);

    ctx.textBaseline = 'bottom';
    bottomText.split('\n').reverse(forEach(function( t, i){
    ctx.fillText(bottomText, canvas.width / 2, canvas.height - i *fontSize , canvas.width);
    ctx.strokeText(bottomText, canvas.width / 2, canvas.height - i *fontSize , canvas.width);


}
function init(){
    topTextinput = document.getElementById('top-text');
    topTextinput = document.getElementById('top-text');
    imageInput = document.getElementById('image-input');
    generateBtn = document.getElementById('generate-btn');
    canvas = document.getElementById('meme-canvas');

    ctx = canvas.getContext('2d');

    canvas.width = canvas.height = 0;

    generateBtn.addEventListener('click', function(){
        let reader = new FileReader();
        reader.onload = function (){
            let img = new Image;
            img.src = reader.result;
            generateMeme(img, topTextinput.value, bottomTextinput.value);
        };
        reader.readAsDataURL(imageInput.files[0])
    });
}

init();
