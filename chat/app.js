// --- Simple Local Auth Mock (replace with AWS Amplify later) ---
let currentUser = null;
document.getElementById('login').onclick = async () => {
  const username = document.getElementById('username').value.trim();
  if (!username) return alert('Enter username');
  currentUser = username;
  document.getElementById('auth').classList.add('hidden');
  document.getElementById('chat').classList.remove('hidden');
};

// --- WebRTC + DataChannel setup ---
let pc = null;
let channel = null;
let isOp = false;

const stunServers = {
  iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
};

// --- Signaling mock via console copy-paste (no server) ---
async function createOffer() {
  pc = new RTCPeerConnection(stunServers);
  channel = pc.createDataChannel('chat');
  setupChannel();

  const offer = await pc.createOffer();
  await pc.setLocalDescription(offer);
  return btoa(JSON.stringify(pc.localDescription));
}

async function acceptOffer(base64Offer) {
  pc = new RTCPeerConnection(stunServers);
  pc.ondatachannel = (e) => {
    channel = e.channel;
    setupChannel();
  };

  const offer = JSON.parse(atob(base64Offer));
  await pc.setRemoteDescription(offer);
  const answer = await pc.createAnswer();
  await pc.setLocalDescription(answer);
  return btoa(JSON.stringify(pc.localDescription));
}

async function acceptAnswer(base64Answer) {
  const answer = JSON.parse(atob(base64Answer));
  await pc.setRemoteDescription(answer);
}

// --- Channel handlers ---
function setupChannel() {
  channel.onopen = () => log('✅ Connected');
  channel.onmessage = (e) => {
    const msg = JSON.parse(e.data);
    log(`${msg.user}: ${msg.text}`, 'them');
  };
}

function sendMessage() {
  const text = document.getElementById('messageInput').value.trim();
  if (!text) return;
  const msg = { user: currentUser, text };
  channel.send(JSON.stringify(msg));
  log(`me: ${text}`, 'me');
  document.getElementById('messageInput').value = '';
}

document.getElementById('send').onclick = sendMessage;

// --- Simple logger ---
function log(text, cls) {
  const div = document.createElement('div');
  if (cls) div.classList.add(cls);
  div.textContent = text;
  document.getElementById('messages').appendChild(div);
  div.scrollIntoView();
}

// --- Channel creation/join flow ---
document.getElementById('createChannel').onclick = async () => {
  const room = document.getElementById('channel').value.trim();
  if (!room) return alert('Enter channel name');

  const whitelist = JSON.parse(sessionStorage.getItem('whitelist_' + room) || '[]');

  if (!whitelist.includes(currentUser)) {
    whitelist.push(currentUser);
    sessionStorage.setItem('whitelist_' + room, JSON.stringify(whitelist));
  }

  const wantsOp = confirm('Are you @op (room creator)?');
  if (wantsOp) {
    isOp = true;
    const offer = await createOffer();
    prompt('Send this offer to peer (paste elsewhere):', offer);
    const answer = prompt('Paste peer answer here:');
    if (answer) await acceptAnswer(answer);
  } else {
    const offer = prompt('Paste @op offer:');
    const answer = await acceptOffer(offer);
    prompt('Send this answer back to @op:', answer);
  }
};