
function showPage(page){
    document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
    document.getElementById(page).classList.add("active");
}


const data = {
    hindi:[
        {eng:"Apple",trans:"सेब",img:"https://cdn-icons-png.flaticon.com/512/415/415733.png"},
        {eng:"Dog",trans:"कुत्ता",img:"https://cdn-icons-png.flaticon.com/512/616/616408.png"},
        {eng:"Car",trans:"गाड़ी",img:"https://cdn-icons-png.flaticon.com/512/743/743922.png"},
        {eng:"Book",trans:"किताब",img:"https://cdn-icons-png.flaticon.com/512/29/29302.png"},
        {eng:"Sun",trans:"सूरज",img:"https://cdn-icons-png.flaticon.com/512/869/869869.png"},
        {eng:"Moon",trans:"चाँद",img:"https://cdn-icons-png.flaticon.com/512/869/869869.png"},
        {eng:"Water",trans:"पानी",img:"https://cdn-icons-png.flaticon.com/512/728/728093.png"},
        {eng:"Food",trans:"खाना",img:"https://cdn-icons-png.flaticon.com/512/1046/1046784.png"},
        {eng:"House",trans:"घर",img:"https://cdn-icons-png.flaticon.com/512/69/69524.png"},
        {eng:"Phone",trans:"फोन",img:"https://cdn-icons-png.flaticon.com/512/15/15874.png"},
        {eng:"Laptop",trans:"लैपटॉप",img:"https://cdn-icons-png.flaticon.com/512/2721/2721293.png"},
        {eng:"Chair",trans:"कुर्सी",img:"https://cdn-icons-png.flaticon.com/512/84/84380.png"},
        {eng:"Table",trans:"मेज",img:"https://cdn-icons-png.flaticon.com/512/3076/3076998.png"},
        {eng:"Pen",trans:"कलम",img:"https://cdn-icons-png.flaticon.com/512/60/60990.png"},
        {eng:"Bag",trans:"बैग",img:"https://cdn-icons-png.flaticon.com/512/3081/3081559.png"},
        {eng:"Shoes",trans:"जूते",img:"https://cdn-icons-png.flaticon.com/512/892/892458.png"},
        {eng:"Watch",trans:"घड़ी",img:"https://cdn-icons-png.flaticon.com/512/747/747310.png"},
        {eng:"Tree",trans:"पेड़",img:"https://cdn-icons-png.flaticon.com/512/427/427735.png"},
        {eng:"Flower",trans:"फूल",img:"https://cdn-icons-png.flaticon.com/512/414/414927.png"},
        {eng:"Milk",trans:"दूध",img:"https://cdn-icons-png.flaticon.com/512/1046/1046787.png"}
    ],

    japanese:[
        {eng:"Apple",trans:"りんご",img:"https://cdn-icons-png.flaticon.com/512/415/415733.png"},
        {eng:"Dog",trans:"犬",img:"https://cdn-icons-png.flaticon.com/512/616/616408.png"},
        {eng:"Car",trans:"車",img:"https://cdn-icons-png.flaticon.com/512/743/743922.png"},
        {eng:"Book",trans:"本",img:"https://cdn-icons-png.flaticon.com/512/29/29302.png"},
        {eng:"Sun",trans:"太陽",img:"https://cdn-icons-png.flaticon.com/512/869/869869.png"},
        {eng:"Moon",trans:"月",img:"https://cdn-icons-png.flaticon.com/512/869/869869.png"},
        {eng:"Water",trans:"水",img:"https://cdn-icons-png.flaticon.com/512/728/728093.png"},
        {eng:"Food",trans:"食べ物",img:"https://cdn-icons-png.flaticon.com/512/1046/1046784.png"},
        {eng:"House",trans:"家",img:"https://cdn-icons-png.flaticon.com/512/69/69524.png"},
        {eng:"Phone",trans:"電話",img:"https://cdn-icons-png.flaticon.com/512/15/15874.png"},
        {eng:"Laptop",trans:"ノートパソコン",img:"https://cdn-icons-png.flaticon.com/512/2721/2721293.png"},
        {eng:"Chair",trans:"椅子",img:"https://cdn-icons-png.flaticon.com/512/84/84380.png"},
        {eng:"Table",trans:"テーブル",img:"https://cdn-icons-png.flaticon.com/512/3076/3076998.png"},
        {eng:"Pen",trans:"ペン",img:"https://cdn-icons-png.flaticon.com/512/60/60990.png"},
        {eng:"Bag",trans:"バッグ",img:"https://cdn-icons-png.flaticon.com/512/3081/3081559.png"},
        {eng:"Shoes",trans:"靴",img:"https://cdn-icons-png.flaticon.com/512/892/892458.png"},
        {eng:"Watch",trans:"時計",img:"https://cdn-icons-png.flaticon.com/512/747/747310.png"},
        {eng:"Tree",trans:"木",img:"https://cdn-icons-png.flaticon.com/512/427/427735.png"},
        {eng:"Flower",trans:"花",img:"https://cdn-icons-png.flaticon.com/512/414/414927.png"},
        {eng:"Milk",trans:"牛乳",img:"https://cdn-icons-png.flaticon.com/512/1046/1046787.png"}
    ]
};

let currentLang="hindi";
let index=0;

function updateCard(){
    let w=data[currentLang][index];
    frontText.innerText=w.eng;
    backText.innerText=w.trans;
    frontImg.src=w.img;
    backImg.src=w.img;
    progress.innerText=(index+1)+" / "+data[currentLang].length;
    card.classList.remove("flip");
}

function flipCard(){card.classList.toggle("flip");}
function nextCard(){index=(index+1)%data[currentLang].length;updateCard();}
function prevCard(){index=(index-1+data[currentLang].length)%data[currentLang].length;updateCard();}
function changeLanguage(){currentLang=language.value;index=0;updateCard();}

function searchWord(){
    let val=search.value.toLowerCase();
    let found=data[currentLang].findIndex(w=>w.eng.toLowerCase().includes(val));
    if(found!=-1){index=found;updateCard();}
}

updateCard();