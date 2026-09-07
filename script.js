console.log("hello")
function popup() {
    alert("hello")
}
/* =================================
           PART 1: NAVIGATION
        ================================= */

        const navButtons =
            document.querySelectorAll(".nav-btn");

        const pages =
            document.querySelectorAll(".page");


        navButtons.forEach(button => {

            button.addEventListener("click", () => {

                // Button se page ka naam lena
                const pageName = button.dataset.page;


                // Sabhi pages hide
                pages.forEach(page => {
                    page.classList.remove("active");
                });


                // Selected page show
                document
                    .getElementById(pageName)
                    .classList.add("active");


                // Sabhi buttons inactive
                navButtons.forEach(btn => {
                    btn.classList.remove("active");
                });


                // Clicked button active
                button.classList.add("active");

            });

        });


const trendingSongs = [
                        popSongs[10], 
                        popSongs[14],
                        romanticSongs[1],
                        moreSongs[1],
                        moreSongs[2],
                        moreSongs[3],
                        moreSongs[4],
                        moreSongs[8]
];

const oldSongs = [
                        oldSongs2[1],
                        oldSongs2[2],
                        oldSongs2[3],
                        oldSongs2[4],
                        oldSongs2[5],
                        oldSongs2[6],
                        oldSongs2[7],
                        oldSongs2[8],
                        oldSongs2[9],
                        oldSongs2[10]

];

const honeySongs = [
                        popSongs[4],
                        popSongs[5],
                        popSongs[6],
                        popSongs[7],
                        popSongs[11],
                        popSongs[9],
                        popSongs[14]
];

const hinduSongs = [
                        religiousSongs[0],
                        religiousSongs[1],
                        religiousSongs[2],
                        religiousSongs[3],
                        religiousSongs[4],
                        religiousSongs[1]
                        
];

//like song

let likedSongs =
    JSON.parse(
        localStorage.getItem(
            "novaLikedSongs"
        )
    ) || [];
    
    const likedContainer =
    document.getElementById(
        "likedSongs"
    );
        
  
function createHomeCard(song) {

    const card =
        document.createElement("div");


    card.className =
        "song-card";


    card.innerHTML = `

        <img class="cover" src="${song.cover}">
    

        <h3>
            ${song.name}
        </h3>

        <p>
            ${song.artist}
        </p>
        
         
 
        <button class="play-btn">
            ▶ Play
        </button>

    `;

        //like btn
    
    
/*
     likeBtn.addEventListener("click", () => {
      
      const alreadyLiked = likedSongs.some(
        item => item.file === song.file
      );
      
      if (alreadyLiked) {
          
          likedSongs = likedSongs.filter(
                item => item.file !== song.file
          );
          
      } else {
          
          likedSongs.push(song);
      }
      
      localStorage.setItem(
        "novaLikedSongs",
      JSON.stringify(likedSongs)
      );
      
      renderLikedSongs();
  });
*/
    



    // Play button

    const playButton =
        card.querySelector(".play-btn");


    playButton.addEventListener(
        "click",
        () => {

            playSong(song);

        }
    );


    return card;

}

function loadHomeSongs() {
    const trending = 
                    document.getElementById("trendingSongs");
    
    const old = 
                    document.getElementById("oldSongs");
    
    const honey = 
                    document.getElementById("honeySongs");
    
    const hindu = 
                    document.getElementById("hinduSongs");
    
    
    
    
    
    trending.innerHTML = "";
    
    trendingSongs.forEach(song => {
        
        trending.appendChild(
        
        createHomeCard(song)
        );
    });
    
    old.innerHTML = "";
    
    oldSongs.forEach(song => {
        
        old.appendChild(
        
        createHomeCard(song)
        );
    });
    
    honey.innerHTML = "";
    
    honeySongs.forEach(song => {
        
        honey.appendChild(
        
        createHomeCard(song)
        );
    });
    
    hindu.innerHTML = "";
    
    hinduSongs.forEach(song => {
        
        hindu.appendChild(
        
        createHomeCard(song)
        );
    });
    
}
        loadHomeSongs();

    
     // ==========================================
// ALL CATEGORY DATA
// ==========================================

const categoryData = {

    pop: popSongs,

    romantic: romanticSongs,

    sad: sadSongs,

    party: partySongs,

    religious: religiousSongs,

    english: englishSongs,
    
    more: moreSongs, 
    
    old: oldSongs2

};


// ==========================================
// ELEMENTS
// ==========================================

const buttons =
    document.querySelectorAll(".category-btn");

const songRow =
    document.getElementById("songRow");

const categoryTitle =
    document.getElementById("categoryTitle");

const songCount =
    document.getElementById("songCount");

const searchInput =
    document.getElementById("searchInput");

const audio =
    document.getElementById("audioPlayer");

const currentSong =
    document.getElementById("currentSong");

const currentArtist =
    document.getElementById("currentArtist");

const playerCover =
    document.getElementById("playerCover");


// ==========================================
// CURRENT CATEGORY
// ==========================================

let currentCategory = "pop";


// ==========================================
// SHOW SONGS FUNCTION
// ==========================================

function showSongs(category) {

    currentCategory = category;

    let songs = categoryData[category];


    // Clear old cards

    songRow.innerHTML = "";


    // Number of songs

    songCount.textContent =
        songs.length + " songs";


    // Create cards

    songs.forEach(song => {

        createSongCard(song);

    });

}

// ==========================================
// CREATE CARD
// ==========================================


function createSongCard(song) {

    const card =
        document.createElement("div");


    card.className =
        "song-card";


    card.innerHTML = `

        <img class="cover" src="${song.cover}" alt="${song.name}">
    

        <h3>
            ${song.name}
        </h3>

        <p>
            ${song.artist}
        </p>
    
       
        <button class="play-btn">
            ▶ Play
        </button>

    `;
    
     


    // Play button

    const playButton =
        card.querySelector(".play-btn");


    playButton.addEventListener(
        "click",
        () => {

            playSong(song);

        }
    );


    songRow.appendChild(card);

}


// ==========================================
// PLAY SONG
// ==========================================

function playSong(song) {

    currentSong.textContent =
        song.name;

    currentArtist.textContent =
        song.artist;

    playerCover.innerHTML =`
    
        <img class="player-cover" src="${song.cover}" alt="${song.name}">`;


    audio.src =
        song.file;


    audio.play()
        .catch(() => {

            alert(
                "MP3 file nahi mili. " +
                "songs folder mein file check karo."
            );

        });
    saveRecentSong(song);

}


// ==========================================
// CATEGORY BUTTON CLICK
// ==========================================

buttons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            // Remove active

            buttons.forEach(btn => {

                btn.classList.remove(
                    "active"
                );

            });


            // Add active

            button.classList.add("active");


            // Get category

            const category =
                button.dataset.category;


            // Heading

            categoryTitle.textContent =
                button.textContent;


            // Show songs

            showSongs(category);


            // Search clear

            searchInput.value = "";

        }
    );

});


// ==========================================
// SEARCH
// ==========================================

searchInput.addEventListener("input", () => {

    const text =
        searchInput.value
            .toLowerCase()
            .trim();


    // Sabhi categories ke songs ek jagah
    const allSongs = [

        ...popSongs,
        ...romanticSongs,
        ...sadSongs,
        ...partySongs,
        ...religiousSongs,
        ...englishSongs,
        ...moreSongs,
        ...oldSongs2

    ];


    // Search karo
    const filteredSongs =
        allSongs.filter(song => {

            return (

                song.name
                    .toLowerCase()
                    .includes(text)

                ||

                song.artist
                    .toLowerCase()
                    .includes(text)

            );

        });


    // Purane cards hatao
    songRow.innerHTML = "";


    // Heading
    categoryTitle.textContent =
        text === ""
            ? currentCategory.toUpperCase()
            : "Search Results";


    // Song count
    songCount.textContent =
        filteredSongs.length + " songs";


    // Cards banao
    filteredSongs.forEach(song => {

        createSongCard(song);

    });

});





//============
//ACCOUNT
//===========

const accountName =
    document.getElementById("accountName");

const avatar =
    document.getElementById("avatar");

const inputName = 
    document.getElementById("nameInput");

const namebox = 
    document.getElementById("nameBox");

// Get saved name

let savedName =
    localStorage.getItem("novaUserName");


// If no name exists

if (!savedName) {


    if (!savedName || savedName.trim() === "") {

        savedName = "NOVA User";

    }

    localStorage.setItem(
        "novaUserName",
        savedName
    );

} else {
    
    namebox.classList.add("hidden");
}


// Show name

function updateProfile() {

    accountName.textContent =
        savedName;

    avatar.textContent =
        savedName
            .charAt(0)
            .toUpperCase();

}


updateProfile();



// ==========================================
// CHANGE NAME
// ==========================================

function changeUserName() {
        namebox.classList.remove("hidden");
}


document
    .getElementById("editNameBtn")
    .addEventListener(
        "click",
        changeUserName
    );


document
    .getElementById("changeName")
    .addEventListener(
        "click",
        changeUserName
    );

continueBtn.addEventListener("click", () => {

            const name =
                nameInput.value.trim();


            // Empty name allowed nahi
            if (name === "") {

                alert("Please enter your name.");

                return;
            }


            // Name browser mein save
            localStorage.setItem(
                "novaUserName",
                name
            );


            // Account mein name show
            savedName =
                 name;

    
            // Popup hide
            nameBox.classList.add("hidden");
    
        updateProfile();
        });



            //RESET ACCOUNT
document
    .getElementById("resetAccount")
    .addEventListener(
        "click",
        () => {

            const confirmReset =
                confirm(
                    "Reset your NOVA account?"
                );


            if (!confirmReset) return;


            localStorage.removeItem(
                "novaUserName"
            );

            localStorage.removeItem(
                "novaRecentSongs"
            );

            localStorage.removeItem(
                "novaLikedSongs"
            );


            location.reload();

        }
    );



let recentSongs =
    JSON.parse(
        localStorage.getItem(
            "novaRecentSongs"
        )
    ) || [];


function saveRecentSong(song) {

    // Remove duplicate

    recentSongs =
        recentSongs.filter(
            item =>
                item.name !== song.name
        );


    // Put latest song first

    recentSongs.unshift({

        name: song.name,

        artist: song.artist,

        cover: song.cover || "🎵",

        file: song.file

    });


    // Keep only last 10

    recentSongs =
        recentSongs.slice(0, 10);


    localStorage.setItem(
        "novaRecentSongs",
        JSON.stringify(recentSongs)
    );


    renderRecentSongs();

    updateStats();

}



// ==========================================
// DISPLAY RECENT SONGS
// ==========================================

const recentContainer =
    document.getElementById(
        "recentSongs"
    );


function renderRecentSongs() {

    recentContainer.innerHTML = "";


    if (recentSongs.length === 0) {

        recentContainer.innerHTML = `
            <p class="empty-text">
                No songs played yet 🎵
            </p>
        `;

        return;

    }


    recentSongs.forEach(song => {

        const item =
            document.createElement("div");


        item.className =
            "recent-song";


        item.innerHTML = `

            <img class="recent-cover" src= ${song.cover}>
                
            

            <div class="recent-info">

                <h3>
                    ${song.name}
                </h3>

                <p>
                    ${song.artist}
                </p>

            </div>

            <button class="recent-play">
                <img class="play-svg" src="images/play.svg">
            </button>

        `;


        item
            .querySelector(".recent-play")
            .addEventListener(
                "click",
                () => {

                    audio.src =
                        song.file;
                    
                    
                    currentSong.textContent =
                        song.name;

                    currentArtist.textContent =
                        song.artist;
                    
                    playerCover.innerHTML = ` 
                    
                    <img src = "${song.cover}" class = "cover">`;

                    audio.play();

                }
            );


        recentContainer.appendChild(item);

    });

}


renderRecentSongs();


// ==========================================
// CLEAR RECENT
// ==========================================

document
    .getElementById("clearRecent")
    .addEventListener(
        "click",
        () => {

            recentSongs = [];

            localStorage.removeItem(
                "novaRecentSongs"
            );

            renderRecentSongs();

            updateStats();

        }
    );

// ==========================================
// LIKED SONGS
// ==========================================

    function renderLikedSongs() {
        likedContainer.innerHTML = "";

        if (likedSongs.length === 0) {
            likedContainer.innerHTML = `
                <p class="empty-text">
                    No liked songs yet ❤️
                </p>
            `;

            return;
        }

        likedSongs.forEach(song => {

            const item = 
                document.createElement("div");

                item.className =
                    "recent-song";

                item.innerHTML = `
                    
                <img class="recent-cover" src= ${song.cover}>

                <div class="recent-info">

                    <h3>
                        ${song.name}
                    </h3>

                    <p>
                        ${song.artist}
                    </p>

                </div>

                <button class="recent-play">
                    <img src=" images/play.svg" class="play-svg">
                </button>

                 `;

                 item.querySelector(".recent-play").addEventListener(
                    "click", () => {

                        audio.src = 
                            song.file;

                        currentSong.textContent =
                            song.name;

                        currentArtist.textContent =
                            song.artist;
                    }
                 );

            likedContainer.appendChild(item);
        });
    }

    renderLikedSongs();

    // stats

    function updateStats() {
        document.getElementById(
            "playedCount"
        ).textContent = 
                recentSongs.length;


        document.getElementById(
            "likedCount"
        ).textContent = likedSongs.length;
    }

    updateStats();