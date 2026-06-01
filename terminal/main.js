import { terminalData } from "./data.js";

function escapeHtml(str) {
  if (typeof str !== 'string') return str;
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

const containers = {
    commands: document.getElementById("terminal-container"),
    keys: document.getElementById("special-keys-container")
};

const tabs = {
    bash: document.getElementById("tab-bash"),
    powershell: document.getElementById("tab-powershell")
};

let currentShell = 'bash';

function createCard(item) {
  const card = document.createElement("div");
  card.className =
    "bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow flex flex-col h-full";

  const isSpecialKey = item.command.startsWith('[') && item.command.includes('キー');
  const copyText = isSpecialKey ? '' : item.command.split(' ')[0];

  card.innerHTML = `
    <div class="mb-5 overflow-hidden">
        <div
            class="command-code relative group select-none w-full flex items-center justify-between gap-2 ${isSpecialKey ? 'no-copy' : ''}"
            ${isSpecialKey ? '' : `onclick="copyToClipboard('${escapeHtml(copyText)}')"`}
            title="${isSpecialKey ? '' : 'クリックしてコマンドをコピー'}"
        >
            <span class="truncate">${isSpecialKey ? item.command : `$ ${item.command}`}</span>
            ${isSpecialKey ? '' : `
            <span class="flex-shrink-0 text-[10px] font-sans bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                コピー
            </span>
            `}
        </div>
    </div>
    <div class="flex-grow">
      <h2 class="text-xl font-bold text-gray-800 flex items-baseline gap-2">
        ${item.name}
        <span class="text-xs font-medium text-gray-400 font-mono">${item.en}</span>
      </h2>
      <p class="text-gray-600 mt-3 text-sm leading-relaxed">
        ${item.description}
      </p>
      <div class="mt-4 bg-gray-50 p-3 rounded-lg border border-gray-100">
        <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">使用例</p>
        <code class="text-sm font-mono text-indigo-600 block">${item.example}</code>
      </div>
      ${item.note ? `<p class="text-xs text-amber-600 mt-3 bg-amber-50 p-2 rounded border border-amber-100">💡 ${item.note}</p>` : ""}
    </div>
  `;
  return card;
}

function renderCommands(shell) {
  containers.commands.innerHTML = '';
  containers.keys.innerHTML = '';
  
  const data = terminalData[shell];

  data.forEach((item) => {
    const isSpecialKey = item.command.startsWith('[') && item.command.includes('キー');
    const card = createCard(item);
    
    if (isSpecialKey) {
        containers.keys.appendChild(card);
    } else {
        containers.commands.appendChild(card);
    }
  });
}

function updateTabs(shell) {
    Object.keys(tabs).forEach(key => {
        if (key === shell) {
            tabs[key].classList.add('bg-indigo-600', 'text-white');
            tabs[key].classList.remove('bg-white', 'text-gray-600', 'hover:bg-gray-50');
        } else {
            tabs[key].classList.remove('bg-indigo-600', 'text-white');
            tabs[key].classList.add('bg-white', 'text-gray-600', 'hover:bg-gray-50');
        }
    });
}

function switchShell(shell) {
    currentShell = shell;
    updateTabs(shell);
    renderCommands(shell);
}

// Event Listeners
tabs.bash.addEventListener('click', () => switchShell('bash'));
tabs.powershell.addEventListener('click', () => switchShell('powershell'));

// Initial Render
switchShell('bash');
