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





// function fn() {
//     const divs = document.querySelectorAll('.products_page_div1_div');

//     divs.forEach((div, index) => {
//         div.addEventListener('mouseenter', () => {
//             alert(`Mouse is hovering over div number: ${index + 1}`);
//         });

//         div.addEventListener('mouseleave', () => {
//             console.log(`Mouse left div number: ${index + 1}`);
//         });
//     });
// }
// window.onload = fn;








// ================== Artcle page movement fn ================== //

let motion_count = 0;
function artcle_page_position(){
    let artcle_page_navigation_left_var = document.querySelector('.artcle_page_navigation_left');
    let artcle_page_navigation_right_var = document.querySelector('.artcle_page_navigation_right');

    let artcle_page_var = document.querySelectorAll('.artcle_page_section');
    
    artcle_page_navigation_left_var.addEventListener('click', () => {

        artcle_page_var[motion_count].classList.add('artcle_move_right');
        artcle_page_var[motion_count].classList.remove('artcle_move_right_reverce');

        if(motion_count > 0){
            motion_count--;
        }
        else{
            motion_count = 2;
        }

        artcle_page_var[motion_count].classList.remove('artcle_move_right');
        artcle_page_var[motion_count].classList.add('artcle_move_right_reverce');
        

    });

    artcle_page_navigation_right_var.addEventListener('click', () => {

        artcle_page_var[motion_count].classList.add('artcle_move_right');
        artcle_page_var[motion_count].classList.remove('artcle_move_right_reverce');

        if(motion_count < 2){
            motion_count++;
        }
        else{
            motion_count = 0;
        }
        
        artcle_page_var[motion_count].classList.remove('artcle_move_right');
        artcle_page_var[motion_count].classList.add('artcle_move_right_reverce');
        

    });
}
artcle_page_position();