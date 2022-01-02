function lamaParkir() {
	let masuk = document.getElementById('masuk').value;
	let keluar = document.getElementById('keluar').value;

	let lamaParkir = keluar - masuk;

	let bayar

	if (lamaParkir < 3) {
		bayar = 3000
	} else {
		bayar = (lamaParkir * 1000) - 3000
	}

	document.getElementById('hasilLamaParkir').innerHTML = lamaParkir + " Jam";
	document.getElementById('hasilBiayaParkir').innerHTML = bayar;
}
