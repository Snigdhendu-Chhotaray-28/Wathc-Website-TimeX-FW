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

function swiperfn(){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 3.5,
        spaceBetween: 50,
      }, 
    }, 
  });
}
swiperfn();

function ourStory_img_div_size(){
  let featured_page_img_div_var = document.querySelector('.featured_page_img_div');
  featured_page_img_div_var.style.height = document.querySelector('.featured_page_img').offsetHeight+"px";
}
ourStory_img_div_size()

function max_width1_new_arrivalfn(){
  let window_width = window.innerWidth;
  if(window_width < 1171){
    
    var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 2.5,
        spaceBetween: 40,
      },
    }, 
  });
  }
  let new_arrival_product_img = document.querySelectorAll('.new_arrival_product_img');
}
max_width1_new_arrivalfn();

// ================== Dark mode and light mode fn ================== //

function bg_change_color(){

  let isDarkMood = false
  const mood_changer = document.querySelector('.mood');
  const root = document.documentElement;

  mood_changer.addEventListener("click",()=>{
    isDarkMood = !isDarkMood;

    if(isDarkMood){
    
      root.style.setProperty('--main-color', 'black');
      root.style.setProperty('--sub-color', 'hsl(0, 0.00%, 11.40%)');
      root.style.setProperty('--eye-btn-clr', 'white');
      root.style.setProperty('--title-color', 'white');
      root.style.setProperty('--text-color', 'hsl(0, 0.00%, 90.60%)');

      mood_changer.classList.add('fa-sun');
      mood_changer.classList.remove('fa-moon');
      mood_changer.style.color = 'white';
    }

    else{
      root.style.setProperty('--main-color', 'hsl(0, 0%, 97%)');
      root.style.setProperty('--sub-color', 'hsl(0, 0%, 100%)');
      root.style.setProperty('--eye-btn-clr', 'black');
      root.style.setProperty('--title-color', 'hsl(0, 0%, 11%)');
      root.style.setProperty('--text-color', 'hsl(0, 0%, 18%)');

      mood_changer.classList.add('fa-moon');
      mood_changer.classList.remove('fa-sun');
      mood_changer.style.color = 'black';
    }
  });
}
bg_change_color();



function up_swipe_arrow_div_fn(){
  document.addEventListener('scroll', () => {
    let up_swipe_arrow_div_var = document.querySelector('.up_swipe_arrow_div');
    let distance_from_top = up_swipe_arrow_div_var.offsetTop;
    let up_swipe_arrow_var = document.querySelector('.up_swipe_arrow_div');
    if(distance_from_top > 1400){
      up_swipe_arrow_var.style.visibility = 'visible';
    }
    else{
      up_swipe_arrow_var.style.visibility = 'hidden';
    }
  });
}
up_swipe_arrow_div_fn()

function artcle_page_section_img_div_height_adjustment(){
  if(window.innerWidth < 800){
    document.querySelector('.artcle_page_section_img_div').style.height = document.querySelector('.artcle_page_section_img').offsetHeight+"px";
  }
}
artcle_page_section_img_div_height_adjustment();

function max_width1_new_arrivalfn_adjustment(){
    let window_width = window.innerWidth;
    if(window_width < 781){
    
    var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 1.7,
        spaceBetween: 20,
      },
    }, 
  });
  }
  let new_arrival_product_img = document.querySelectorAll('.new_arrival_product_img');
}
max_width1_new_arrivalfn_adjustment();


function max_width1_new_arrivalfn_adjustment2(){
    let window_width = window.innerWidth;
    if(window_width < 587){
    
    var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
    }, 
  });
  }
  let new_arrival_product_img = document.querySelectorAll('.new_arrival_product_img');
}
max_width1_new_arrivalfn_adjustment2();

function max_width1_new_arrivalfn_adjustment3(){
    let window_width = window.innerWidth;
    if(window_width < 491){
    
    var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1.1,
        spaceBetween: 10,
      },
    }, 
  });
  }
  let new_arrival_product_img = document.querySelectorAll('.new_arrival_product_img');
}
max_width1_new_arrivalfn_adjustment3();

function footer_visibility(){
  if(window.innerWidth < 785){
    let footer_down_div_vars = document.querySelectorAll('.footer_down_div');
    footer_down_div_vars.forEach((footer_down_div_var)=>{
      footer_down_div_var.querySelector('.footer_down_content').classList.add('hidden');
      footer_down_div_var.addEventListener('mouseenter',()=>{
        footer_down_div_var.querySelector('.footer_down_content').classList.remove('hidden');
      });
      footer_down_div_var.addEventListener('mouseleave',()=>{
        footer_down_div_var.querySelector('.footer_down_content').classList.add('hidden');
      });
    });
  }
}
footer_visibility();


function three_bar_active(){
  let three_bar = document.querySelector('.three_bar');
  let header_menu = document.querySelector('.header_menu');
  
  three_bar.addEventListener('click',(e)=>{
    // e.stopProp agation(); // Prevent click from bubbling up
    setTimeout(()=>{
      header_menu.classList.add('menu_visibile');
    },0);
    document.querySelector('.bg_changer').style.display = "none";
  });
  
  document.addEventListener('scroll',()=>{
    nav_bar_dissapior();
  });

  // Modified click handler - only close if clicking outside menu
  document.addEventListener('click',(e)=>{
    // Check if click is outside the menu and not on three_bar
    if(!header_menu.contains(e.target) && e.target !== three_bar) {
      nav_bar_dissapior();
    }
  });
}
three_bar_active();

let nav_bar_dissapior = ()=>{
  let header_menu = document.querySelector('.header_menu');
  header_menu.classList.remove('menu_visibile');
  document.querySelector('.bg_changer').style.display = "flex";
};
