function setCookie(name, value, days = 365) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = name + "=" + encodeURIComponent(value) + ";path=/;expires=" + d.toUTCString();
}

function getCookie(name) {
  const cookies = document.cookie.split(";").map(c => c.trim());
  for (const cookie of cookies) {
    if (cookie.startsWith(name + "=")) {
      return decodeURIComponent(cookie.substring(name.length + 1));
    }
  }
  return null;
}

document.addEventListener("DOMContentLoaded", () => {
  const io = new Server(server, {
      cors: {
        origin: "http://bridge.ve3.info:13231",
        methods: ["GET", "POST"]
      }
  });

  let username = getCookie("gremlinChatUsername") || "";
  let secret = "";

  const chat = document.getElementById("chat");
  const input = document.getElementById("msg");
  const charCount = document.getElementById("charCount");
  const sendButton = document.getElementById("send-button");

  function appendMessage(data) {
    const div = document.createElement("div");

    let timeStr = "";
    if (data.timestamp) {
      const date = new Date(data.timestamp);
      const h = date.getHours().toString().padStart(2, "0");
      const m = date.getMinutes().toString().padStart(2, "0");
      const s = date.getSeconds().toString().padStart(2, "0");
      timeStr = `[${h}:${m}:${s}] `;
    }

    let crownHtml = "";
    if (data.crowned) {
      crownHtml = '<span class="crown" title="Gremlin Crown">👑</span>';
    }

    const timestampSpan = document.createElement("span");
    timestampSpan.className = "timestamp";
    timestampSpan.textContent = timeStr;

    const strong = document.createElement("strong");
    strong.textContent = data.user;

    const messageText = document.createTextNode(`: ${data.text}`);

    div.appendChild(timestampSpan);
    div.appendChild(strong);
    div.innerHTML += crownHtml;
    div.appendChild(messageText);

    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
  }

  function askCredentials() {
    if (username) {
      if (username.toLowerCase() === "legithegremlin") {
        secret = prompt("Enter secret passphrase for LegiTheGremlin (leave blank if none):") || "";
      } else {
        secret = "";
      }
      socket.emit("join", { username, secret });
      return;
    }
    username = prompt("Enter your username") || "Anonymous";
    setCookie("gremlinChatUsername", username);
    if (username.toLowerCase() === "legithegremlin") {
      secret = prompt("Enter secret passphrase for LegiTheGremlin (leave blank if none):") || "";
    } else {
      secret = "";
    }
    socket.emit("join", { username, secret });
  }

  socket.on("join_error", (data) => {
    alert(data.error);
    setCookie("gremlinChatUsername", "", -1);
    username = "";
    askCredentials();
  });

  socket.on("message", (data) => {
    appendMessage(data);
  });

  input.addEventListener("input", () => {
    charCount.textContent = `${input.value.length} / 300`;
  });

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      send();
    }
  });

  sendButton.addEventListener("click", send);

  function send() {
    const msg = input.value.trim();
    if (msg.length === 0) return;
    socket.emit("chat", { text: msg });
    input.value = "";
    charCount.textContent = "0 / 300";
    input.focus();
  }

  askCredentials();
});
