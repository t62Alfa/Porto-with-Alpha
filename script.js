let a = 0;

function tprofile(){
    const profile_base = profile[a]

//MINI-PROFILE INFORMATION
    document.getElementById("profile-name").innerHTML = profile_base.username;
    document.getElementById("profile-picture").src = profile_base.img;

//MAIN PROFILE HIGHTLIGHT
    document.getElementById("title-profile").innerHTML = `
        <p id="title-name" class="title1">${profile_base.username}</p>
        <p id="title-name" class="title2">${profile_base.username}</p>
        <p id="title-name" class="title3">${profile_base.username}</p>
    `;
    document.getElementById("author-name").innerHTML = `by ${author.name}`;
    document.getElementById("profile-job").innerHTML = profile_base.pekerjaan.judul;
    document.getElementById("profile-job-description").innerHTML = profile_base.pekerjaan.deskripsi;
    
    document.getElementById("profile-characters").innerHTML = `
        <img src="${profile_base.img_chr}" alt="Profile Picture Character" id="profile-picture-character" class="profile-character">
        <img src="${profile_base.img_chr}" alt="Profile Picture Character Blur" id="profile-picture-character" class="profile-character-blur">
    `;

//JOBS INFORMATION
    document.getElementById("jobs-title").innerHTML = profile_base.pekerjaan.judul;

    const jobs_desc = document.getElementById("jobs-describe");

    jobs_desc.innerHTML = "";
    jobs_desc.innerHTML = `
    <i>${profile_base.pekerjaan.judul}</i>${profile_base.pekerjaan.deskripsi}
    `;

    console.log("AUTHOR INFORMATION : ", author);
    console.log("PROFILE DATA : ", profile_base);
};

const idpp = 5;
let page = 0;

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

        for(let j = 0; j < contents[i].kategori.length; j++){
            kategoriHTML += `
                <li>${contents[i].kategori[j]}</li>
            `;
        };

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
    
    const pinned = projects.filter(p => p.pinned);

    console.log("PIN : ", pinned);

    const container_pinned = document.getElementById("pinned_p");
    
    container_pinned.innerHTML = "";

    for(let k = 0; k < pinned.length; k++){
        let kategoriHTML = "";

        for(let l = 0; l < pinned[k].kategori.length; l++){
            kategoriHTML += `
                <li>${pinned[k].kategori[l]}</li>
            `;
        };

        const pin_card = document.createElement("div");

        pin_card.className = "pinned-card";
        pin_card.innerHTML = `
            <img src="${pinned[k].cover}" alt="" class="proj-img">
            <div class="proj-inf">
                <h1 id="judul">${pinned[k].nama.singkat}</h1>
                <span id="sub-judul">${pinned[k].nama.lengkap}</span>
                <ol class="category" id="kategori">
                    ${kategoriHTML}
                </ol>
                <div class="describe">
                    <line></line>
                    <article id="deskripsi">
                        ${pinned[k].deskripsi}.
                    </article>
                </div>
            </div>
        `;

        container_pinned.appendChild(pin_card);
    };
};

function next(){
    if ((page + 1) * idpp < projects.length){
        page++;
        showprojects();
    };
};

function back(){
    if (page > 0){
        page--;
        showprojects();
    };
};



function hdependensi(){
    const depen_p = profile[a].dependensi;
    const depen_card_box = document.getElementById("depen");
    const scripy = document.getElementById("scripy");

    const clas_depen = document.getElementById("clas-depen");
    const desc_depen = document.getElementById("desc-depen");
    const def_depen_name = "MORE information";
    const def_depen_desc = "Kalian dapat mengarahkan cursor untuk melihat informasi lebih lanjut dari kategori di atas. Terimakasih sudah membaca semoga informasinya dapat memuaskan hati kalian <3";

    function cha_slow_nm(name){
        clas_depen.classList.add('fade');
        document.getElementById('line').classList.add('fade');

        setTimeout(() => {
            clas_depen.textContent = name;
            clas_depen.classList.remove('fade');
            document.getElementById('line').classList.remove('fade');
        }, 300);
    };
    function cha_slow_ds(describe){
        desc_depen.classList.add('fade')

        setTimeout(() => {
            desc_depen.textContent = describe;
            desc_depen.classList.remove('fade');
        }, 300);
    };

    clas_depen.textContent = def_depen_name;
    desc_depen.textContent = def_depen_desc;    
    depen_card_box.innerHTML = "";

    for(let m = 0; m < depen_p.length; m++){
        const depen_card = document.createElement("button");
        let card_id = `card${m}`;

        depen_card.id = card_id;
        depen_card.type = "button";
        depen_card.className = "card-dep";
        depen_card.innerHTML = depen_p[m].nama;
        depen_card.style = `
            background: ${depen_p[m].img};
        `;

        depen_card.addEventListener("mouseover", () => {
            cha_slow_nm(depen_p[m].nama);
            cha_slow_ds(depen_p[m].deskripsi);
        });

        depen_card.addEventListener("mouseout", () => {
            cha_slow_nm(def_depen_name);
            cha_slow_ds(def_depen_desc);
        });

        depen_card_box.appendChild(depen_card);
    };
};

window.onload = hdependensi();
window.onload = showprojects();
window.onload = pinnedprojects();
window.onload = tprofile();