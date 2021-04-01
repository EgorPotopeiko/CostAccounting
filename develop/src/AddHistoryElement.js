import './App.js';
import HistoryButtonPlus from './HistoryButtons/HistoryButtonPlus.js';

const RenderOperation = () => {
  const historyblock = document.querySelector('.ButtonsList');
  const HistoryListItem = document.createElement('li');
  const content = HistoryButtonPlus.innerHTML;
  HistoryListItem.innerHTML = content;
  historyblock.append(HistoryListItem);
}

export default RenderOperation;