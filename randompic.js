var myData = { // Create a JSON for your images
    1: {
        imageUrl: "jhin.jpg",
        text: "In carnage, I bloom, like a flower in the dawn. ~ JHIN"
    }, 
    2: {
        imageUrl: "vayne.jpg",
        text: "Let us hunt those who have fallen to darkness. ~ VAYNE"
    }, 
    3: {
        imageUrl: "masteryi.jpg",
        text: "Doubt is the greatest enemy. ~ MASTER YI"
    }, 
    4: {
        imageUrl: "yasuo.jpg",
        text: "Death is like the wind - always by my side. ~ YASUO"
    }, 
    5: {
        imageUrl: "fiora.jpg",
        text: "I long for a worthy opponent. ~ FIORA"
    }, 
    6: {
        imageUrl: "lucian.jpg",
        text: "Everybody dies. Some just need a little help. ~ LUCIAN"
    }, 
    7: {
        imageUrl: "zed.jpg",
        text: "The unseen blade is the deadliest. ~ ZED"
    }, 
    8: {
        imageUrl: "ekko.jpg",
        text: "It's not how much time you have, it's how you use it. ~ EKKO"
    }, 
    9: {
        imageUrl: "ashe.jpg",
        text: "Take a good look; it's the last you'll get. ~ ASHE"
    }, 
    10: {
        imageUrl: "vi.jpg",
        text: "Punch first. Ask questions while punching. ~ VI"
    }, 	
    11: {
        imageUrl: "leona.jpg",
        text: "I must not fall. ~ LEONA"
    }, 
    12: {
        imageUrl: "katarina.jpg",
        text: "Violence solves everything! ~ KATARINA"
    },
    13: {
        imageUrl: "akali.jpg",
        text: "Fear the assassin with no master. ~ AKALI"
    },
    14: {
        imageUrl: "irelia.jpg",
        text: "Fight for the First Lands! ~ IRELIA"
    },
    15: {
        imageUrl: "jinx.jpg",
        text: "Rules are made to be broken... like buildings! Or people! ~ JINX"
    },
    16: {
        imageUrl: "pyke.jpg",
        text: "Sink 'em all. ~ PYKE"
    },
    17: {
        imageUrl: "warwick.jpg",
        text: "Blood runs... they all run. ~ WARWICK"
    }
};
function changeImage(){
    var randomNumber = Math.floor((Math.random() * 17) + 1); //Change 10 to the number of images in your JSON
    document.getElementById("background").style.background = "url('"+myData[randomNumber].imageUrl+"') no-repeat";
	document.getElementById("background").style.backgroundSize = "cover";
    document.getElementById("text-box").innerHTML = myData[randomNumber].text;
}


              changeImage();

document.getElementById("my-button").addEventListener("click",changeImage); //Bind the button to the changeImage function
 

