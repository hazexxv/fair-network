document.addEventListener('DOMContentLoaded', () => {
  const tabBar      = document.getElementById('tabBar');
  const mainContent = document.getElementById('mainContent');
  const locationBar = document.getElementById('locationBar');

const themes = ['white', 'ocean', 'dark'];

  function applyTheme(theme) {
    themes.forEach(t => document.body.classList.remove(`${t}-theme`));
    document.body.classList.add(`${theme}-theme`);
    localStorage.setItem('theme', theme);
  }

  const savedTheme = localStorage.getItem('theme') || 'white';
  applyTheme(savedTheme);

  function updateLocation(path) {
    locationBar.textContent = `https://fairnetwork${path}`;
  }

  // clear .active from all tabs
  function clearActiveTab() {
    tabBar.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  }

  window.openTab = function(name) {
    clearActiveTab();
    let tab = Array.from(tabBar.children).find(t => t.textContent === name);
    if (!tab) {
      tab = document.createElement('div');
      tab.className = 'tab';
      tab.textContent = name;
      tab.addEventListener('click', () => selectTab(tab, name));
      tabBar.appendChild(tab);
      // pop animation
      tab.animate(
        [{ transform: 'scale(0.8)' }, { transform: 'scale(1)' }],
        { duration: 200, easing: 'ease-out' }
      );
    }
    tab.classList.add('active');
    selectTab(tab, name);
  };

  function selectTab(tabElement, name) {
    clearActiveTab();
    tabElement.classList.add('active');
    if (name === 'Home')        showHome();
    else if (name === 'Fair Games')  showGamesTab();
    else if (name === 'Settings')    showSettingsTab();
  }

  function showHome() {
    updateLocation('');
    mainContent.innerHTML = `
      <h1>Fair Network</h1>
      <div class="button-group">
        <button class="nav-btn" data-tab="Home">Home</button>
        <button class="nav-btn" data-tab="Fair Games">Games</button>
        <button class="nav-btn" data-tab="Settings">Settings</button>
      </div>
    `;
    mainContent.querySelectorAll('.nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        btn.animate(
          [{ transform: 'scale(0.95)' }, { transform: 'scale(1)' }],
          { duration: 100, easing: 'ease-out' }
        );
        openTab(btn.dataset.tab);
      });
    });
  }

  function showGamesTab() {
    updateLocation('/games');
    mainContent.innerHTML = `
      <h1>Fair Games</h1>
      <input type="text" id="searchInput" placeholder="Search games…" />
      <div id="gameInfo">Games: 0</div>
      <div id="gameContainer"></div>
      <div class="modal" id="gameModal">
        <div class="modal-content">
          <button id="closeGameModal">&times;</button>
          <h2 id="gameTitle"></h2>
          <iframe id="gameFrame" frameborder="0"></iframe>
          <div class="controls">
            <button id="downloadBtn">Download</button>
            <button id="fullscreenBtn">Fullscreen</button>
            <button id="aboutBlankBtn">Open in about:blank</button>
            <button id="blobBtn">Open in Blob URL</button>
          </div>
        </div>
      </div>
    `;
    const gameContainer  = document.getElementById('gameContainer');
    const searchInput    = document.getElementById('searchInput');
    const gameInfo       = document.getElementById('gameInfo');
    const gameModal      = document.getElementById('gameModal');
    const gameFrame      = document.getElementById('gameFrame');
    const closeModal     = document.getElementById('closeGameModal');
    const downloadBtn    = document.getElementById('downloadBtn');
    const fullscreenBtn  = document.getElementById('fullscreenBtn');
    const aboutBlankBtn  = document.getElementById('aboutBlankBtn');
    const blobBtn        = document.getElementById('blobBtn');

    closeModal.addEventListener('click', () => {
      gameModal.style.display = 'none';
      gameFrame.src = '';
    });

    searchInput.addEventListener('input', () => {
      const q = searchInput.value.toLowerCase();
      document.querySelectorAll('.game-card').forEach(card => {
        const title = card.querySelector('h2').textContent.toLowerCase();
        card.style.display = title.includes(q) ? 'block' : 'none';
      });
    });

    let latestSHA = '';
    let gamesData = [];

    async function loadGames() {
      try {
        const commits = await fetch(
          'https://api.github.com/repos/elite-gamez/elite-gamez.github.io/commits'
        ).then(r => r.json());
        const sha = commits[0].sha;
        if (sha === latestSHA) return;
        latestSHA = sha;
        const url = `https://cdn.jsdelivr.net/gh/elite-gamez/elite-gamez.github.io@${sha}/games.json?cb=${Date.now()}`;
        gamesData = await fetch(url).then(r => r.json());
        renderGames();
      } catch (err) {
        console.error('Game load error:', err);
      }
    }

    function renderGames() {
      gameContainer.innerHTML = '';
      gamesData.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.innerHTML = `
          <img
            src="https://rawcdn.githack.com/elite-gamez/elite-gamez.github.io/main/${game.image}"
            alt="${game.title}"
          />
          <h2>${game.title}</h2>
          <p>${game.description}</p>
        `;
        card.addEventListener('click', () => openGame(game));
        gameContainer.appendChild(card);
      });
      gameInfo.textContent = `Games: ${gamesData.length}`;
    }

    async function openGame(game) {
      const url = `https://rawcdn.githack.com/elite-gamez/elite-gamez.github.io/main/${game.url}`;
      gameFrame.src = url;
      document.getElementById('gameTitle').textContent = game.title;
      gameModal.style.display = 'flex';

      downloadBtn.onclick = async () => {
        try {
          const resp = await fetch(url);
          if (!resp.ok) throw new Error('Fetch failed');
          const blob = await resp.blob();
          const blobUrl = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = blobUrl;
          a.download = `${game.title}.html`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(blobUrl);
        } catch (e) {
          alert(`Download error: ${e.message}`);
        }
      };

      fullscreenBtn.onclick = () => {
        if (gameFrame.requestFullscreen) gameFrame.requestFullscreen();
        else alert('Fullscreen not supported');
      };

      aboutBlankBtn.onclick = () => {
        const win = window.open('about:blank', '_blank');
        if (win) {
          win.document.write(`
            <iframe
              src="https://fair.playcode.io/"
              style="border:none;width:100vw;height:100vh;">
            </iframe>
          `);
          win.document.close();
        }
      };

      blobBtn.onclick = () => {
        fetch(url)
          .then(r => r.text())
          .then(html => {
            const blob = new Blob([html], { type: 'text/html' });
            const blobUrl = URL.createObjectURL(blob);
            window.open(blobUrl, '_blank');
          })
          .catch(e => alert(`Blob error: ${e.message}`));
      };
    }

    loadGames();
    setInterval(loadGames, 30000);
  }

  function showSettingsTab() {
    updateLocation('/settings');
    mainContent.innerHTML = `
      <h1>Settings</h1>
      <section class="theme-picker">
        <h2>Pick a Theme</h2>
        ${themes.map(t =>
          `<label>
             <input type="radio" name="theme" value="${t}"
               ${t === savedTheme ? 'checked' : ''}>
             ${t.charAt(0).toUpperCase() + t.slice(1)}
           </label>`
        ).join('')}
      </section>
      <button id="aboutBlankSettings" class="nav-btn">Open About Blank</button>
      <section class="credits">
        <h2>Credits</h2>
        <ul>
          <li>Christian – Developer</li>
          <li>Hutchinsan – Every game</li>
        </ul>
        <h2>Contacts</h2>
        <ul>
          <li>Christian – Discord @ haze_vv</li>
          <li>Hutchinsan – GitHub https://github.com/elite-gamez/elite_gamez_games</li>
        </ul>
      </section>
    `;
    mainContent.querySelectorAll('input[name="theme"]').forEach(r => {
      r.addEventListener('change', () => applyTheme(r.value));
    });
    document.getElementById('aboutBlankSettings')
      .addEventListener('click', () => {
        const win = window.open('about:blank', '_blank');
        if (win) {
          win.document.write(`
            <iframe
              src="https://fair.playcode.io/"
              style="border:none;width:100vw;height:100vh;">
            </iframe>
          `);
          win.document.close();
        }
      });
  }

  showHome();
  openTab('Home');
});
