import CountersList from './components/counters/CountersList';
import OneLi from './components/counters/OneLi';
import ImageSections from './components/imageSecion/ImageSections';
import './style/App.css';

export default function App() {
  const countersDataArr = [
    { id: 1, title: 'Push ups', value: 500, color: 'bg-warning' },
    { id: 2, title: 'Sit ups', value: 200, color: 'bg-success' },
    { id: 3, title: 'Squats', value: 300, color: 'bg-danger' },
    { id: 4, title: 'Jumping jacks', value: 100 },
  ];

  const listElements = countersDataArr
    .filter((cObj) => cObj.value > 100)
    .map((cObj) => (
      // <li key={cObj.id} className='list-group-item'>
      //   {cObj.title}
      // </li>
      <OneLi key={cObj.id} title={cObj.title} value={cObj.value} />
    ));

  // console.log('listElements ===', listElements);
  return (
    <div className='container'>
      <h1 className='display-2 mt-3'>All good Friday</h1>

      <ul className='list-group my-5'>{listElements}</ul>

      <CountersList list={countersDataArr} />

      <ImageSections />
    </div>
  );
}
