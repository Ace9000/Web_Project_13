const filePickerelement = document.getElementById('image');
const imagePreviewElement = document.getElementById('image-preview');

function showPreview() {
    const files = filePickerelement.files;
    if (!files || files.lenght === 0) {
        imagePreviewElement.style.display = 'none';
        return;
    }

    const pickedFile = files[0];

    imagePreviewElement.src = URL.createObjectURL(pickedFile);
    imagePreviewElement.style.display = 'block';
}

filePickerelement.addEventListener('change', showPreview);