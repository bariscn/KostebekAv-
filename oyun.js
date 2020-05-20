const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let sonHole; //en son seçilen çukur
let timeUp= false; //true oyun durdurulacak
let skor;


function randomTime(min,max)
{
        return  Math.floor(Math.random() * (max-min) + min);
           //0 ile 1 aralığında
}

function randomHole(x)
{
      let i= Math.floor(Math.random() * x.length); //6 ve üzeri X
      let hole= holes[i];
      
      if(sonHole==hole)
      {
         return randomHole(holes);
      }

      sonHole=hole;
      return hole;
    
} 

function oyun_acemi()
{
   const sure= randomTime(1000,3000);
   const cukur= randomHole(holes);

  cukur.classList.add('up');



  setTimeout(
    () =>  { cukur.classList.remove('up');
           if(timeUp==false)  
           {
            oyun_acemi();       
           } 
           },sure);      
 
}

function oyun_caylak()
{
   const sure= randomTime(500,1000);
   const cukur= randomHole(holes);

  cukur.classList.add('up');



  setTimeout(
    () =>  { cukur.classList.remove('up');
           if(timeUp==false)  
           {
            oyun_caylak();       
           } 
           },sure);      
 
}

function oyun_usta()
{
   const sure= randomTime(200,500);
   const cukur= randomHole(holes);

  cukur.classList.add('up');



  setTimeout(
    () =>  { cukur.classList.remove('up');
           if(timeUp==false)  
           {
            oyun_usta();       
           } 
           },sure);      
 
}


function acemi()
{
    scoreBoard.textContent=0; 
    skor=0;    
    oyun_acemi();
    setTimeout(() => {      //oyun başladıktan 10 saniye geçtikten sonra timeUp=true olacak ve oyun durdurulacak.
             timeUp=true;
    }, 30000);  
}

function caylak()
{
    scoreBoard.textContent=0; 
    skor=0;    
    oyun_caylak();
    setTimeout(() => {      //oyun başladıktan 10 saniye geçtikten sonra timeUp=true olacak ve oyun durdurulacak.
             timeUp=true;
    }, 30000);  
}

function usta()
{
    scoreBoard.textContent=0; 
    skor=0;    
    oyun_usta();
    setTimeout(() => {      //oyun başladıktan 10 saniye geçtikten sonra timeUp=true olacak ve oyun durdurulacak.
             timeUp=true;
    }, 30000);  
}


function yakala()
{ 
    skor++; //her yakalandığında skor değeri 1 artacak
    this.parentNode.classList.remove('up'); //yakalandığında gitmesi için
    scoreBoard.textContent=skor; //en son yapılan skoru yazdırıyoruz
}

moles.forEach(mole=> mole.addEventListener('click',yakala));
