const information = document.getElementById("info");
// hiển thị các version của các thành phần trong ứng dụng
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;
