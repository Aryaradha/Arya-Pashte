const text = `Dear Radha ❤️,

Sabse pehle...
Happy Birthday Meri Jaan! 🎂❤️

Main sach me bahut khushnaseeb hoon ki hum ek dusre se mile. Kabhi kabhi lagta hai ki shayad hamara milna pehle se hi likha hua tha. Tumhara meri life me aana meri sabse pyari blessings me se ek hai.

Mujhe pata hai ki ye sab hum dono ke liye naya hai. Hum shayad zyada nahi mile, lekin jitna bhi waqt humne saath bitaya hai, woh mere liye bahut special hai.

Main perfect nahi hoon, lekin hamesha koshish karunga ki tumhe kabhi dukh na pahunchau aur har situation me tumhara saath doon.

Bas aise hi hamesha meri life me rehna. Tumhari smile meri sabse badi khushi hai. ❤️

Happy Birthday once again, Meri Jaan. 🎂❤️

I Love You So Much. ❤️

Tumhara Arya Sir ❤️`;

let index = 0;
const speed = 40;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter;

// Next button
document.getElementById("nextBtn").addEventListener("click", function () {
    window.location.href = "gallery.html";
});