// import
import SanPham from "../models/SanPham.js";
import SanPhamService from "../service/SanPhamService.js";

let glassesList = new SanPhamService();

let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];

let showSanPhamList = (list) => {
    let content = "";
    list.map((glass) => {
        let { id, src } = glass;
        content += `<button onclick= "getDetailSanPham('${id}')" style="width:0px; height: 100px;border: none;margin: 20px 0px;background-color: white; outline: none " class="col-4">
        <img src="${src}" alt="" style="height: 100px; width: 100px;">
        </button>`;
    })
    document.querySelector("#vglassesList").innerHTML = content;
}


let getSanPhamList = () => {
    glassesList.getSanPhamList()
        .then((result) => {
            console.log(result.data);
            showSanPhamList(result.data);
        })
        .catch((error) => {
        })
}
getSanPhamList();


let getDetailSanPham = (id) => {
    let img_content = "";
    let infor_content = "";
    glassesList.getDetailSanPham(id)
        .then((result) => {
            img_content += `<img src="${result.data.virtualImg}" alt="">
        `
            infor_content += `
             <div>
             <span style="font-size: 2em;">${result.data.name}-${result.data.brand}(${result.data.color})</span>
                <p style="background-color: yellowgreen; width: 60px;text-align: center;border-radius: 10px;">$${result.data.price}</p>
                <p>${result.data.description}</p>
            </div>
        `
            document.querySelector("#avatar").innerHTML = img_content;
            document.querySelector("#glassesInfo").innerHTML = infor_content ;
            document.querySelector("#glassesInfo").style.display="block"; 
            
        })
        .catch((error) => {
        })

}
window.getDetailSanPham = getDetailSanPham;

let beforSanPham = () =>{
  document.querySelector("#avatar img").style.display="none"
  document.querySelector("#glassesInfo").style.display="none"; 
}
window.beforSanPham= beforSanPham;

let afterSanPham =() =>{
    document.querySelector("#avatar img").style.display="block"
  document.querySelector("#glassesInfo").style.display="block"; 
}
window.afterSanPham=afterSanPham;




