//MENNAGKAP PILIHAN KOMPUTER
//MENENNTUKAN RULES
//HANDLE EVENT SAAT GAMBAR DI KLIK
var score;
score = 0;
function pilihanComputer() {
  const comp = Math.random();
  if (comp < 0.33) return 'gunting';
  if (comp > 0.34 && comp < 0.66) return 'batu';
  return 'kertas';
}

function hasilPermainan(comp, player) {
  if (comp == player) return 'seri';
  if (player == 'gunting') return (comp == 'kertas')? 'menang' : 'kalah';
  if (player == 'batu') return (comp == 'gunting') ? "menang" : 'kalah';
  if(player == 'kertas') return (comp == 'batu') ? 'menang' : 'kalah';
}


function putarImg() {
  const imgComputer = document.getElementById('imgComp');
  const kelas = ['gunting', 'batu', 'kertas'];
  let x = 0;
  const mulai = new Date().getTime();
  // console.log(imgComputer);
  const putarImg = setInterval(function(){
      if ( new Date().getTime() - mulai > 1500) {
        clearInterval;
        return
      }
      imgComputer.setAttribute('src', "img/" + kelas[x++] + ".png");
      if (x == kelas.length) x = 0;
    }, 100);
}

//jia diklik pilihan sesuai class
//panggil fungsi hasilPermainan
//tampilkan hasil pada html

const imgPlayer = document.querySelectorAll('.pilihan-player img');
const tampilHasil = document.querySelector('.hasil p');
imgPlayer.forEach(function(pilihan){
  pilihan.addEventListener('click', function(){
    putarImg();
    setTimeout(function () {
      const tampilScore = document.querySelector('.score p');
      
      const imgComputer = document.getElementById("imgComp");
      const comp = pilihanComputer();
      const player = pilihan.className;
      const hasil = hasilPermainan(comp, player);
      imgComputer.setAttribute('src', 'img/' + comp + ".png");
      tampilHasil.innerHTML = hasil;
      if (hasil == 'menang') {
        nilai = 5;
        window.score += nilai;
      } else if (hasil == "seri") {
        nilai = 2;
        window.score += nilai;
      } else {
        nilai = 0;
        window.score += nilai;
      }
      tampilScore.innerHTML = "SCORE  " + window.score;
    }, 1500);
  })
})