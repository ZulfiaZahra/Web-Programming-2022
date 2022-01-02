function convertDollarToRupiah() {
	let angka = document.getElementById('dollar').value;

	let hasil = angka * 14650;

	var number_string = hasil.toString(),
		sisa = number_string.length % 3,
		rupiah = number_string.substr(0, sisa),
		ribuan = number_string.substr(sisa).match(/\d{3}/g);

	if (ribuan) {
		separator = sisa ? '.' : '';
		rupiah += separator + ribuan.join('.');
	}

	document.getElementById('hasilConvert').innerHTML = " Rp " +rupiah;
}
