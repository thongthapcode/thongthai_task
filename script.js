let currentIndex = 0;

function showSlide(index) {
    const slides = document.getElementById("banner-slide");
    const totalSlides = slides.children.length;
    
    if (index >= totalSlides) currentIndex = 0;
    else if (index < 0) currentIndex = totalSlides - 1;
    else currentIndex = index;

    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Tự động chạy banner sau 3 giây
setInterval(nextSlide, 3000);
document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0; 
    const sliderContainer = document.getElementById("sliderContainer");
    const slides = document.querySelectorAll("#sliderContainer img");
    const totalSlides = slides.length;

    function updateSlider() {
        sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
    }

    // Tự động chuyển slide sau 3 giây
    let slideInterval = setInterval(nextSlide, 3000);

    // Thêm sự kiện click cho nút
    document.getElementById("nextBtn").addEventListener("click", function () {
        nextSlide();
        resetAutoSlide();
    });

    document.getElementById("prevBtn").addEventListener("click", function () {
        prevSlide();
        resetAutoSlide();
    });

    // Khi bấm nút thì reset thời gian tự động chuyển
    function resetAutoSlide() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 3000);
    }

   /* ======= GIỎ HÀNG ======= */
// Mảng lưu trữ sản phẩm trong giỏ hàng
let cart=[];
//ham cap nhat so luong san pham tren gio hang
function updateCartBadge(){
    const badge= document.getElementById("cart-badge");
    const totalItems = cart.reduce((acc,item)=>acc+item.quantity,0);
    badge.innerText=totalItems;
    //ẩn badge nếu k có sản phẩm nào
    badge.style.display=totalItems>0?"inline-block":"none";
}
// Biến lưu thông tin người dùng đăng nhập (số điện thoại)
let currentUser = null;
 // Hàm cập nhật hiển thị nút đăng nhập với số điện thoại nếu đã đăng nhập
function updateLoginDisplay() {
const loginBtn = document.getElementById("login-btn");
if(currentUser) {
loginBtn.innerHTML = `<i class="fas fa-user"></i> ${currentUser}`;
}else {
loginBtn.innerHTML = `<i class="fas fa-user"></i> Đăng nhập`;
}
} 

//các tham số: id, tên, giá
window.addToCart=function(id,name,price){
    //kiểm tra nếu sản phẩm đã có, tăng số lượng 
    const exists =cart.find(item=>item.id===id);
    if(exists){
        exists.quantity++;

    }else{
        cart.push({id,name,price,quantity:1});
    }
    updateCartBadge();
    alert(`${name}đã được thêm vào giỏ hàng.`);
    console.log("giỏ hàng:",cart);
};
//khởi tạo badge giỏ hàng khi trang load
updateCartBadge();
//đăng nhập bằng sđt
const validPhones = ["0923111071","0976471361","091235678"];
const loginForm =document.getElementById("login-form");
const loginMessage = document.getElementById("login-message");

loginForm.addEventListener("submit",function(e){
    e.preventDefault();
    const phone=document.getElementById("phone").value.trim();
    if(validPhones.includes(phone)){
        loginMessage.innerText="";
        alert("Đăng nhập thành công!");
        currentUser = phone;//lưu thông tin đăng nhập
        updateLoginDisplay();//cập nhật thông tin đăng nhâp
        document.getElementById("login-modal").classList.add("hidden");
    }else{
        loginMessage.innerText="số điện thoại không hợp lệ";
    }

});

document.getElementById("login-btn").addEventListener("click",function(){
    //nếu chưa đăng nhập mở modal đăng nhập
    if(!currentUser){
        document.getElementById("login-modal").classList.remove("hidden");
    };
});
document.getElementById("close-login").addEventListener("click",function(){
document.getElementById("login-modal").classList.add("hidden");

});
//cập nhật hiển thị lúc load
updateLoginDisplay();
});
document.addEventListener("DOMContentLoaded", function() {
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

function hideAllTabs() {
tabContents.forEach(content => {
content.classList.add("hidden");
});
tabButtons.forEach(btn => {
btn.classList.remove("border-blue-500", "text-blue-500");
});
}

function showTab(tabId, button) {
hideAllTabs();
document.getElementById(tabId).classList.remove("hidden");
button.classList.add("border-blue-500", "text-blue-500");
}

// Mặc định hiển thị tab1 (banner1)
showTab("tab1", tabButtons[0]);

// Gắn sự kiện click cho từng nút tab
tabButtons.forEach(btn => {
btn.addEventListener("click", () => {
const tabId = btn.getAttribute("data-tab");
showTab(tabId, btn);
});
});
});

// Ví dụ hàm addToCart (thay cho code gốc)
function addToCart(id, name, price) {
alert(`Đã thêm sản phẩm ${name} giá ${price} vào giỏ hàng!`);
}
document.addEventListener("DOMContentLoaded", function () {
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((button) => {
button.addEventListener("click", function () {
let tabId = this.getAttribute("data-tab");

// Ẩn tất cả nội dung tab
tabContents.forEach((content) => {
content.classList.add("hidden");
});

// Hiển thị nội dung tab được chọn
document.getElementById(tabId).classList.remove("hidden");

// Xóa active của tất cả nút
tabButtons.forEach((btn) => btn.classList.remove("border-blue-500"));

// Thêm border cho tab đang chọn
this.classList.add("border-blue-500");
});
});

// Mặc định hiển thị tab đầu tiên
tabButtons[0].click();
});
