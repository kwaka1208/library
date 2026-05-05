import { symbolsData } from "./data.js";

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

const container = document.getElementById("symbols-container");

symbolsData.forEach((item) => {
  const card = document.createElement("div");
  card.className =
    "bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow flex flex-col h-full";

  card.innerHTML = `
    <div
      class="text-6xl font-mono text-center text-indigo-600 mb-5 bg-indigo-50/50 py-6 rounded-lg cursor-pointer hover:bg-indigo-100 transition-colors relative group select-none"
      onclick="copyToClipboard('${escapeHtml(item.symbol.replace(/\\/g, "\\\\"))}')"
      title="クリックしてコピー"
    >
      ${escapeHtml(item.symbol)}
      <span class="absolute right-2 top-2 text-xs font-sans bg-indigo-200 text-indigo-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
        コピー
      </span>
    </div>
    <div class="flex-grow">
      <h2 class="text-xl font-bold text-gray-800 flex items-baseline gap-2">
        ${item.name}
        <span class="text-xs font-medium text-gray-400 font-mono">${item.en}</span>
      </h2>
      <p class="text-gray-600 mt-3 text-sm leading-relaxed">
        <span class="font-semibold text-gray-700">用途:</span><br>
        ${item.usage}
      </p>
      ${item.note ? `<p class="text-xs text-amber-600 mt-2 bg-amber-50 p-2 rounded">${item.note}</p>` : ""}
    </div>
    <div class="mt-5 pt-5 border-t border-gray-100">
      <h3 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">キーボード入力</h3>
      <ul class="text-sm text-gray-600 space-y-2">
        <li class="flex items-center">
          <span class="inline-block w-14 font-semibold text-gray-500 text-xs">JIS配列:</span>
          <kbd>${item.jis}</kbd>
        </li>
        <li class="flex items-center">
          <span class="inline-block w-14 font-semibold text-gray-500 text-xs">US配列:</span>
          <kbd>${item.us}</kbd>
        </li>
      </ul>
    </div>
  `;
  container.appendChild(card);
});
