
const idpp = 5;
let page = -1;

function showprojects(){
    
    let start = page * idpp;
    let end = start + idpp;

    const contents = projects.slice(start,end);

    console.log("ID : ",start,end);
    console.log("CONTENTS : ",contents);

    const container_card = document.getElementById("cards");

    container_card.innerHTML = "";

    for (let i = 0; i < contents.length; i++){
        let kategoriHTML = "";

        for(let j = 0; j < contents[i].kategori.length; j++)
            kategoriHTML += `
                <li>${contents[i].kategori[j]}</li>
            `;

        const card = document.createElement("div");

        card.className = "card";
        card.innerHTML = `
            <div class="card">
                <img src="${contents[i].cover}">
                <div class="card-inf">
                    <h2 id="judul">${contents[i].nama.singkat}</h2>
                    <span id="sub-judul">${contents[i].nama.lengkap}</span>
                    <ol class="category" id="kategori">
                        ${kategoriHTML}
                    </ol>
                    <div class="describe">
                        <line></line>
                        <article id="deskripsi">
                            ${contents[i].deskripsi}.
                        </article>
                    </div>
                </div>
            </div>
        `;

        container_card.appendChild(card);
    };

};

function pinnedprojects(){
    
    const pinned = projects.pinned[true];
    const container_pinned = document.getElementById("pined_proj");

    container_pinned.innerHTML = ""

    for(let k = 0; k < pinned.length; k++){
        let kategoriHTML = "";

        for(let l = 0; l < contents[k].kategori.length; l++)
            kategoriHTML += `
                <li>${contents[k].kategori[l]}</li>
            `;
        
        container_pinned.innerHTML = `
            <img src="${pinned[k].cover}" alt="" class="proj-img">
            <div class="proj-inf">
                <h1 id="judul"></h1>
                <span id="sub-judul">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quae minima eveniet velit vero nulla soluta, officiis autem sunt. Cumque cum dignissimos non dolorem! Autem alias ea a asperiores maxime.</span>
                <ol class="category" id="kategori">
                    <li>Teknologi</li>
                    <li>Agrikultur</li>
                    <li>FnB</li>
                    <li>Kesehatan</li>
                    <li>Hukum</li>
                    <li>Edukasi</li>
                </ol>
                <div class="describe">
                    <line></line>
                    <article id="deskripsi">
                        lorem Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolor architecto! Dicta libero, unde similique minima perferendis illo, reiciendis placeat explicabo facilis ratione porro ipsa Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolore doloribus, veritatis ad, perferendis laborum dicta est tempora atque adipisci unde sunt dolor suscipit et, sit error numquam iure officiis. praesentium obcaecati. Voluptate, nisi. Facilis. sit amet consectetur adipisicing elit. Velit, architecto dicta qui molestias nemo nostrum vitae tenetur explicabo? Cum aliquam explicabo quam ex recusandae praesentium saepe. Ut eaque quas blanditiis.
                    </article>
                </div>
            </div>
        `;
    };
};

function next(){
    if ((page + 1) * idpp < projects.length){
        page++;
        showprojects();
    };
}

function back(){
    if (page > 0){
        page--;
        showprojects();
    };
}

window.onload = next();
