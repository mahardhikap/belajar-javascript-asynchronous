// setTimeout(function () {
//   document.body.style.backgroundColor = 'red';
//   console.log(document.body.style.backgroundColor);
//   setTimeout(function () {
//     document.body.style.backgroundColor = 'yellow';
//     console.log(document.body.style.backgroundColor);
//     setTimeout(function () {
//       document.body.style.backgroundColor = 'green';
//       console.log(document.body.style.backgroundColor);
//       setTimeout(function () {
//         document.body.style.backgroundColor = 'blue';
//         console.log(document.body.style.backgroundColor);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);

// searchMoviesApi(
//   'naruto',
//   function (movies) {
//     saveToMyDb(
//       movies,
//       function () {
//         //kalo berhasil kita simpan
//       },
//       () => {
//         //kalo gagal kita coba lagi
//       }
//     );
//   },
//   () => {
//     //server error
//   }
// );

const getData = (url, success, failure) => {
	const delay = Math.floor(Math.random() * 4500) + 500;
	setTimeout(() => {
		if (delay > 4000) {
			failure('Gagal: Koneksi habis');
		} else {
			success(`Berhasil: ${url} (${delay}ms)`);
		}
	}, delay);
};

// function handleData(err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// }

// let url = 'www.google.com';
// let timeout = 3000;

// let timer = setTimeout(function() {
//   callback(`Error: waktu tunggu melebihi ${timeout} detik`, null);
// }, timeout);

// getData(url, function(err, data) {
//   clearTimeout(timer);
//   if (err) {
//     console.log(err);
//     console.log(`Mengambil data dari ${url} gagal`);
//   } else {
//     console.log(data);
//     console.log(`Mengambil data dari ${url} berhasil`);
//   }
// });