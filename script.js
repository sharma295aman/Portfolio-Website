window.onload = function () {
  const images = [
    "https://images.unsplash.com/photo-1581093588401-12d1a1a473b4?auto=format&fit=crop&w=1600&q=80", // AI
    "https://images.unsplash.com/photo-1581090700227-4c4e929c3db6?auto=format&fit=crop&w=1600&q=80", // Web Dev
    "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a4?auto=format&fit=crop&w=1600&q=80", // Tech
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80", // Code
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80"  // Machine Learning
  ];

  const randomImage = images[Math.floor(Math.random() * images.length)];
  document.getElementById("home").style.backgroundImage = `url('${randomImage}')`;
};

function getBotReply() {
  const userInput = document.getElementById("userInput").value.toLowerCase();
  const replyDiv = document.getElementById("botReply");
  let reply = "";

  if (userInput.includes("hello") || userInput.includes("hi")) {
    reply = "Hi there! How can I help you today?";
  } else if (userInput.includes("skills")) {
    reply = "I know HTML, CSS, JavaScript, and Java (core).";
  } else if (userInput.includes("project")) {
    reply = "I'm currently building my portfolio project with Web Dev and AI integration.";
  } else if (userInput.includes("linkedin")) {
    reply = "You can connect with me on LinkedIn: linkedin.com/in/aman-sharma-b2400b280/";
  } else if (userInput.includes("github")) {
    reply = "Here’s my GitHub: github.com/sharma295aman";
  } else if (userInput.includes("gmail")) {
    reply = "You can connect with me on Gmail: amansharmabtp555@gmail.com/";
  } else if (userInput.includes("resume")) {
    reply = "I’m working on adding my resume soon!";
  } else {
    reply = "Sorry, I didn't understand that. Try asking about my skills, project, resume or links!";
  }

  replyDiv.innerText = reply;
  document.getElementById("userInput").value = "";
}


// ✅ Press Enter to Send Message
document.getElementById("userInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault(); // Stop form submission or line break
    getBotReply();      // Directly call the bot reply function
  }
});
