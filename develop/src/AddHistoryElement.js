import './App.js';

const historyblock = document.querySelector('HistoryButtonPlus');

const RenderOperation = () => {

  const HistoryListItem = document.createElement('li');

  HistoryListItem.classList.add('HistoryButtonPlus');

  HistoryListItem.innerHTML = `
  <span>21212121</span>
  `;
  historyblock.append(HistoryListItem);
  
}
export default RenderOperation;