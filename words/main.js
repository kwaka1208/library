import { wordsData, abbrData } from "./data.js";

function renderTable(data, tbodyId, colorTheme) {
  const tbody = document.getElementById(tbodyId);
  // アルファベット順にソート（元のデータを変更しないようコピーを作成）
  const sortedData = [...data].sort((a, b) =>
    a.word.toLowerCase().localeCompare(b.word.toLowerCase()),
  );

  sortedData.forEach((item, index) => {
    const tr = document.createElement("tr");
    tr.className =
      index % 2 === 0
        ? `bg-white hover:bg-${colorTheme}-50/50 transition-colors`
        : `bg-gray-50/50 hover:bg-${colorTheme}-50/50 transition-colors`;

    tr.innerHTML = `
      <td class="px-6 py-4 whitespace-nowrap">
        <span class="text-lg font-mono font-bold text-${colorTheme}-700">${item.word}</span>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <span class="text-gray-900 font-medium">${item.reading}</span>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <span class="text-gray-600 text-sm">${item.meaning}</span>
      </td>
      <td class="px-6 py-4 text-sm text-gray-700 leading-relaxed">
        ${item.usage}
      </td>
    `;
    tbody.appendChild(tr);
  });
}

renderTable(wordsData, "words-table-body", "emerald");
renderTable(abbrData, "abbr-table-body", "blue");
