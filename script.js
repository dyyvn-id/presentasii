// =====================================
// PRAMUKA PENGGALANG V5
// JAVASCRIPT
// =====================================



// Ambil semua slide

const slides = document.querySelectorAll(".slide");



// Tombol

const startBtn = document.getElementById("startBtn");

const nextBtn = document.getElementById("nextBtn");

const prevBtn = document.getElementById("prevBtn");



// posisi slide

let currentSlide = 0;






// =====================================
// TAMPILKAN SLIDE
// =====================================


function showSlide(index){



    slides.forEach((slide)=>{


        slide.classList.remove("active");


    });




    slides[index].classList.add("active");






    // tombol kembali



    if(index === 0){


        prevBtn.style.display="none";


    }

    else{


        prevBtn.style.display="block";


    }






    // tombol akhir



    if(index === slides.length - 1){


        nextBtn.innerHTML =
        "Selesai 🎉";


    }

    else{


        nextBtn.innerHTML =
        "Lanjut ➜";


    }



}







// =====================================
// MULAI PRESENTASI
// =====================================



if(startBtn){



startBtn.addEventListener("click",()=>{


    currentSlide = 1;


    showSlide(currentSlide);


});


}








// =====================================
// NEXT BUTTON
// =====================================



nextBtn.addEventListener("click",()=>{



    if(currentSlide < slides.length - 1){



        currentSlide++;



        showSlide(currentSlide);



    }

    else{



        alert(
        "🎉 Presentasi selesai!\n⚜️ Salam Pramuka!"
        );



        currentSlide=0;



        showSlide(currentSlide);



    }



});








// =====================================
// BACK BUTTON
// =====================================



prevBtn.addEventListener("click",()=>{



    if(currentSlide > 0){



        currentSlide--;



        showSlide(currentSlide);



    }



});








// =====================================
// BUKA PENJELASAN PEMATERI
// =====================================



const openButtons = 
document.querySelectorAll(".openMateri");





openButtons.forEach((button)=>{



    button.addEventListener("click",()=>{



        const box = 
        button.nextElementSibling;





        box.classList.toggle("show");





        if(box.classList.contains("show")){



            button.innerHTML =
            "❌ Tutup Penjelasan";



        }

        else{



            button.innerHTML =
            "📚 Penjelasan Pemateri";



        }



    });



});








// =====================================
// JALANKAN AWAL
// =====================================


showSlide(currentSlide);