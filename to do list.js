// ============================================================
// 1. Tambahkan tombol untuk menghapus satu item dari To-do List
// ============================================================
const todoInput = document.getElementById('todoInput');
const btnAddTodo = document.getElementById('btnAddTodo');
const todoList = document.getElementById('todoList');

// Fungsi untuk menambah item ke list
btnAddTodo.addEventListener('click', function () {
    const text = todoInput.value.trim();
    if (text === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${text}</span>
        <button class="btn-delete">Hapus</button>
    `;
    
    todoList.appendChild(li);
    todoInput.value = '';
});

// Event Delegation untuk menghapus item
todoList.addEventListener('click', function (e) {
    if (e.target.classList.contains('btn-delete')) {
        const li = e.target.parentElement;
        todoList.removeChild(li); // Menghapus item tunggal
    }
});


// ============================================================
// 2. Ubah validasi agar nama minimal terdiri dari tiga karakter
// ============================================================
const namaInput = document.getElementById('namaInput');
const namaError = document.getElementById('namaError');

namaInput.addEventListener('input', function () {
    const val = namaInput.value.trim();
    
    if (val.length > 0 && val.length < 3) {
        namaError.textContent = 'Nama harus terdiri dari minimal 3 karakter!';
    } else {
        namaError.textContent = '';
    }
});


// ============================================================
// 3. Tambahkan event change pada dropdown sesi workshop
//    dan tampilkan sesi yang dipilih
// ============================================================
const sesiDropdown = document.getElementById('sesiDropdown');
const hasilSesi = document.getElementById('hasilSesi');

sesiDropdown.addEventListener('change', function () {
    const nilaiTerpilih = sesiDropdown.value;
    
    if (nilaiTerpilih !== '') {
        hasilSesi.textContent = nilaiTerpilih;
    } else {
        hasilSesi.textContent = '- Belum Dipilih -';
    }
});


// ============================================================
// 4. Buat tombol untuk menyembunyikan dan menampilkan paragraf
//    menggunakan class CSS
// ============================================================
const btnToggle = document.getElementById('btnToggle');
const targetParagraf = document.getElementById('targetParagraf');

btnToggle.addEventListener('click', function () {
    // Toggle class 'is-hidden' dari CSS
    targetParagraf.classList.toggle('is-hidden');

    // Ubah teks tombol sesuai kondisi
    if (targetParagraf.classList.contains('is-hidden')) {
        btnToggle.textContent = 'Tampilkan Paragraf';
    } else {
        btnToggle.textContent = 'Sembunyikan Paragraf';
    }
});
