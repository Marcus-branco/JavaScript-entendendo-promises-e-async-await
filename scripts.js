const uploadBtn = document.getElementById('upload-btn');
const inputUpload = document.getElementById('image-upload');

uploadBtn.addEventListener('click', () => {
    inputUpload.click();
});

document.getElementById('image-upload').addEventListener('change', (event) => {
    var file = event.target.files[0];
    if (!file.type.match('image/png') && !file.type.match('image/jpeg')) {
        alert('Por favor, selecione uma imagem PNG ou JPEG.');
        return;
    }
    if (file.size > 2 * 1024 * 1024) {
        alert('O tamanho do arquivo deve ser menor que 2MB.');
        return;
    }
});    