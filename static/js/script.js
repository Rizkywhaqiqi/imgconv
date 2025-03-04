let selectedFiles = [];
const fileInput = document.getElementById('file-input');
const sortableList = document.getElementById('sortable-list');

// Event untuk pemilihan file
fileInput.addEventListener('change', function() {
    if (this.files.length + selectedFiles.length > 50) {
        alert("Maksimal upload hanya 50 gambar!");
        return;
    }
    selectedFiles = [...selectedFiles, ...Array.from(this.files)];
    displayImages();
});

// Fungsi untuk drag & drop
function handleDrop(event) {
    event.preventDefault();
    let files = event.dataTransfer.files;
    if (files.length + selectedFiles.length > 50) {
        alert("Maksimal upload hanya 50 gambar!");
        return;
    }
    selectedFiles = [...selectedFiles, ...Array.from(files)];
    displayImages();
}

// Menampilkan gambar yang dipilih
function displayImages() {
    sortableList.innerHTML = "";
    selectedFiles.forEach((file, index) => {
        let reader = new FileReader();
        reader.onload = function(e) {
            let li = document.createElement('li');
            li.innerHTML = `<img src="${e.target.result}" data-index="${index}">`;
            sortableList.appendChild(li);
        };
        reader.readAsDataURL(file);
    });

    new Sortable(sortableList, {
        animation: 150,
        onEnd: updateOrder
    });
}

// Update urutan gambar
function updateOrder() {
    let newOrder = [];
    document.querySelectorAll("#sortable-list img").forEach(img => {
        newOrder.push(selectedFiles[img.getAttribute('data-index')]);
    });
    selectedFiles = newOrder;
    document.getElementById('image-order').value = selectedFiles.map(f => f.name).join(",");
}

// Kirim data ke backend
document.getElementById('upload-form').onsubmit = async function(event) {
    event.preventDefault();
    
    let formData = new FormData();
    selectedFiles.forEach(file => formData.append("images", file));
    formData.append("duration", document.querySelector('input[name="duration"]').value);

    let response = await fetch('/convert', {
        method: 'POST',
        body: formData
    });

    let data = await response.json();
    if (data.gif_base64) {
        let gifData = "data:image/gif;base64," + data.gif_base64;
        document.getElementById('gif-preview').src = gifData;
        document.getElementById('gif-preview').style.display = "block";

        let downloadBtn = document.getElementById('download-btn');
        downloadBtn.href = gifData;
        downloadBtn.style.display = "block";
        downloadBtn.innerText = "⬇️ Download GIF";
    }
};
