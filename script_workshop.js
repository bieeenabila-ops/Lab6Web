// Mengambil Elemen DOM
const form = document.getElementById('workshopForm');
const namaInput = document.getElementById('nama');
const emailInput = document.getElementById('email');
const sesiInput = document.getElementById('sesi');

const charCount = document.getElementById('charCount');
const namaError = document.getElementById('namaError');
const emailError = document.getElementById('emailError');
const sesiError = document.getElementById('sesiError');

const summaryNama = document.getElementById('summaryNama');
const summaryEmail = document.getElementById('summaryEmail');
const summarySesi = document.getElementById('summarySesi');

const alertBox = document.getElementById('alertBox');
const btnReset = document.getElementById('btnReset');

// 1. Event Input: Live Character Counter & Live Summary Nama
namaInput.addEventListener('input', function () {
    const textLength = namaInput.value.length;
    charCount.textContent = textLength;

    // Batasi maksimal 50 karakter
    if (textLength > 50) {
        namaInput.value = namaInput.value.substring(0, 50);
        charCount.textContent = 50;
        namaError.textContent = 'Maksimal 50 karakter!';
    } else {
        namaError.textContent = '';
    }

    // Update ringkasan live
    summaryNama.textContent = namaInput.value.trim() || '-';
});

// 2. Event Input: Live Summary Email
emailInput.addEventListener('input', function () {
    summaryEmail.textContent = emailInput.value.trim() || '-';
    emailError.textContent = '';
});

// 3. Event Change: Live Summary Sesi
sesiInput.addEventListener('change', function () {
    summarySesi.textContent = sesiInput.value || '-';
    sesiError.textContent = '';
});

// 4. Event Submit: Validasi Form & Pesan Sukses / Gagal
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah reload halaman

    let isValid = true;
    
    // Reset pesan alert
    alertBox.className = 'alert hidden';

    // Validasi Nama
    if (namaInput.value.trim() === '') {
        namaError.textContent = 'Nama tidak boleh kosong!';
        isValid = false;
    }

    // Validasi Email menggunakan Regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = 'Format email tidak valid!';
        isValid = false;
    }

    // Validasi Pilihan Sesi
    if (sesiInput.value === '') {
        sesiError.textContent = 'Pilih salah satu sesi workshop!';
        isValid = false;
    }

    // Tampilkan Alert Sukses atau Gagal pada Halaman
    if (isValid) {
        alertBox.textContent = `Pendaftaran berhasil! Terimakasih ${namaInput.value.trim()}.`;
        alertBox.className = 'alert success';
        
        // Form bisa di-reset atau biarkan
        form.reset();
        resetSummary();
    } else {
        alertBox.textContent = 'Mohon periksa kembali inputan Anda yang bermasalah.';
        alertBox.className = 'alert danger';
    }
});

// 5. Event Click: Tombol Reset
btnReset.addEventListener('click', function () {
    form.reset();
    resetSummary();
    clearErrors();
    alertBox.className = 'alert hidden';
});

// Fungsi Helper untuk Reset Ringkasan
function resetSummary() {
    charCount.textContent = '0';
    summaryNama.textContent = '-';
    summaryEmail.textContent = '-';
    summarySesi.textContent = '-';
}

// Fungsi Helper untuk Hapus Pesan Error
function clearErrors() {
    namaError.textContent = '';
    emailError.textContent = '';
    sesiError.textContent = '';
}
