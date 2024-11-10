let messages = [
  "<span class='breakup-reason'>Har ladki bewafa nikalti hai...</span>",
  "<span class='breakup-reason'>Mere jaane ke baad toh uska kisi se affair tak tha aur ab bhi hazar honge...</span>",
  "<span class='breakup-reason'>Jo ladki parda nahi kar sakti, usay mohabbat nahi ki jati...</span>",
  "<span class='breakup-reason'>Usne mera yakeen toda, aur apne raste chali gayi. Ek pardah aur haya wali ladki thi, par usne yeh sab bhula diya 💔...</span>",
  "<span class='breakup-reason'>Hame Instagram ya Snap wali nahi chahiye zindagi ke sathi...</span>",
  "<span class='breakup-reason'>Mujhe ek Allah ki naik bandi chahiye thi, jo bas mujhe samjhe...</span>",
  "<span class='breakup-reason'>Woh be-pardah ladki thi... uski dressing bhi theek nahi thi 💔. Woh ek Muslim ladki ke tarah nahi rehti thi, woh ladko ke saath khelti thi, unse dosti karti thi 👥💔... aur na jane aur kya kya 😔💔. Mujhe toh ek sharm-o-haya wali sathi chahiye thi, jo Allah ki raahein par chale 🌙💫...</span>",
  "<span class='breakup-reason'>Uske ghar mein shadi chal rahi hai, aur woh bhi 3 bhaiyon ki shadi hai. Koi mil hi jayega, hamara kya hai, hum toh ladke hain 😌💔...</span>",
  "<span class='breakup-reason'>Ye kahani yahi khatam ho gayi...</span>",
  "Phir khamoshi chha gayi..."
];
let index = 0;

function nextMessage() {
  const messageElement = document.getElementById("message");
  if (index < messages.length) {
    messageElement.innerHTML = messages[index];
    index++;
  } else {
    // Display today's date in the final message
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    messageElement.innerHTML = `Kahani ka ikhtitam - ${formattedDate}`;
  }
}
