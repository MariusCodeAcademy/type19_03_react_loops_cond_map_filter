import OneLi from './components/counters/OneLi';
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
      <h1 className='display-2 mt-3'>I am the Vytas App</h1>

      <ul className='list-group my-5'>{listElements}</ul>

      {/* <CountersList list={} /> */}
      <section className='row bg-info'>
        {countersDataArr.map((cObj) => (
          <div
            key={cObj.id}
            className={`col-3 text-center text-white p-4 ${cObj.color || ''}`}>
            <p className='lead fs-1 '>{cObj.value}</p>
            <h3 className='fs3'>{cObj.title}</h3>
          </div>
        ))}
      </section>
    </div>
  );
}
