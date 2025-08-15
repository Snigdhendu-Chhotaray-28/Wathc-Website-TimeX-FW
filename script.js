// let classics_pairs_var = document.querySelector('.classics_pairs');
// let classics_pairs_btn_var = document.querySelector('.fa-beat-fade');

// document.querySelectorAll('.classics_pairs , .fa-beat-fade').forEach(Element=>{
//     Element.addEventListener('mouseenter',()=>{
//         classics_pairs_btn_var.classList.remove('fa-beat-fade');
//     });
//     Element.addEventListener('mouseleave',()=>{
//         classics_pairs_btn_var.classList.add('fa-beat-fade');
//     });
// });

                                    // Or

// let classics_pairs_var = document.querySelector('.products_page_div1_div');
// let classics_pairs_btn_var = document.querySelector('.timex_e_class_btn');

// function eye_btn_blink(){
//     classics_pairs_var.addEventListener('mouseenter',()=>{
//         classics_pairs_btn_var.innerHTML='<i class="fa-solid fa-eye"></i>';
//     });
//     classics_pairs_var.addEventListener('mouseleave',()=>{
//         classics_pairs_btn_var.innerHTML='<i class="fa-solid fa-eye fa-beat-fade"></i>';
//     });
// }
// eye_btn_blink();






function eye_btn_blink(){ 
    let classics_pairs_var_all = document.querySelectorAll('.products_page_div1_div');
    classics_pairs_var_all.forEach((classics_pairs_var) => {
        classics_pairs_var.addEventListener("mouseenter",() =>{

            let classics_pairs_btn_var = classics_pairs_var.querySelector(".timex_e_class_btn");
            
            classics_pairs_btn_var.innerHTML='<i class="fa-solid fa-eye"></i>';
        });

        classics_pairs_var.addEventListener("mouseleave",()=>{

            let classics_pairs_btn_var = classics_pairs_var.querySelector(".timex_e_class_btn");
            classics_pairs_btn_var.innerHTML='<i class="fa-solid fa-eye fa-beat-fade"></i>';
        });
    
    });

}
eye_btn_blink();