function formatSize(sizeKB) {
    return sizeKB > 1000 ? (sizeKB / 1024).toFixed(2) + " MB" : sizeKB.toFixed(2) + " KB";
}

let selectedFile, originalSize;
document.getElementById("upload").addEventListener("change", function(event) {
    selectedFile = event.target.files[0];
    if (selectedFile) {
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = function(event) {
            document.getElementById("originalImg").src = event.target.result;
            originalSize = selectedFile.size / 1024;
            document.getElementById("originalSize").innerText = formatSize(originalSize);
        };
    }
});

document.getElementById("quality").addEventListener("input", function() {
    let qualityPercent = parseInt(this.value);
    let expectedSize = originalSize * (1 - qualityPercent / 100);
    document.getElementById("qualityValue").innerText = qualityPercent + "%";
    document.getElementById("expectedSize").innerText = formatSize(expectedSize);
    previewCompression(qualityPercent);
});

function compressImage() {
    if (!selectedFile) {
        alert("Please select an image first.");
        return;
    }

    const qualityPercent = parseInt(document.getElementById("quality").value);
    const quality = 1 - (qualityPercent / 100);
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onload = function(event) {
        const img = new Image();
        img.src = event.target.result;
        img.onload = function() {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, img.width, img.height);
            
            canvas.toBlob(function(blob) {
                const compressedSize = blob.size / 1024;
                const compressionPercent = Math.max(0, ((1 - (compressedSize / originalSize)) * 100).toFixed(2));
                
                const compressedUrl = URL.createObjectURL(blob);
                document.getElementById("compressedImg").src = compressedUrl;
                document.getElementById("expectedSize").innerText = formatSize(compressedSize);
                document.getElementById("compressionPercent").innerText = compressionPercent;
                
                const downloadBtn = document.getElementById("downloadBtn");
                downloadBtn.style.display = "block";
                downloadBtn.setAttribute("data-url", compressedUrl);
            }, "image/jpeg", quality);
        };
    };
}
function downloadImage() {
    const downloadBtn = document.getElementById("downloadBtn");
    const link = document.createElement("a");
    link.href = downloadBtn.getAttribute("data-url");
    link.download = "mrMeGo4Resala_image.jpg";
    link.click();
}