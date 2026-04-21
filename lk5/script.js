
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const hp = document.getElementById('hp').value;
    const kategori = document.getElementById('kategori').value;
    const pesan = document.getElementById('pesan').value;

    // VALIDASI
    if (nama === "" || email === "" || hp === "" || kategori === "" || pesan === "") {
        alert("Semua field wajib diisi!");
        return;
    }

    if (!email.includes("@")) {
        alert("Email tidak valid!");
        return;
    }

    // ALERT
    alert('Pesan berhasil dikirim!');

    // TAMPILKAN HASIL
    document.getElementById('resNama').innerText = nama;
    document.getElementById('resEmail').innerText = email;
    document.getElementById('resHP').innerText = hp;
    document.getElementById('resKategori').innerText = kategori;
    document.getElementById('resPesan').innerText = pesan;

    document.getElementById('resultContainer').style.display = 'block';

    // RESET FORM
    this.reset();
});

// EVENT TAMBAHAN
document.getElementById("nama").addEventListener("input", function () {
    console.log("User sedang mengetik nama...");
});
