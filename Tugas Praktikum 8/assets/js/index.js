

function lamaParkir() {
	let masuk = document.getElementById('masuk').value;
	let keluar = document.getElementById('keluar').value;

	let lamaParkir = keluar - masuk;

	let bayar

	if (lamaParkir < 3) {
		bayar = 3000
	} else {
		bayar = (lamaParkir * 2000) - 3000
	}

	document.getElementById('hasilLamaParkir').innerHTML = lamaParkir + " Jam";
	document.getElementById('hasilBiayaParkir').innerHTML = bayar;
}

function hasilDuaBilangan() {
	document.getElementById('hasilDuaBilangan').innerHTML = parseInt(bilangan1.value) + parseInt(bilangan2.value);
}