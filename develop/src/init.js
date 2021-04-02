import HistoryButton from './AddHistoryElement';

let dbOperation = [
    {
    id: '1',
    description: 'Получил зарплату',
    amount: 30000,
    },
    {
    id: '2',
    description: 'Отдал долг',
    amount: -10000,
    },
    {
    id: '3',
    description: 'Такси',
    amount: -5000,
    }
  ]
const Generateblock = () => {
    for (let i = 0; i < dbOperation.length; i++) {
      return (HistoryButton(dbOperation[i]));
    };
  };

export default Generateblock;