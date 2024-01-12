import './style/App.css';

function OneLi(props) {
  console.log('props ===', props);
  return <li className='list-group-item'>One LI</li>;
}

export default function App() {
  const countersDataArr = [
    { id: 1, title: 'Push ups', value: 500 },
    { id: 2, title: 'Sit ups', value: 200, color: 'bg-success' },
    { id: 3, title: 'Squats', value: 300 },
    { id: 4, title: 'Jumping jacks', value: 100 },
  ];

  return (
    <div className='container'>
      <h1 className='display-2 mt-3'>I am the Vytas App</h1>

      <ul className='list-group my-5  '>
        {countersDataArr.map((cObj) => (
          <li key={cObj.id} className='list-group-item'>
            {cObj.title}
          </li>
          // <OneLi key={cObj.id} />
        ))}
      </ul>

      <section className='row bg-info'>
        <div className='col-3 text-center text-white p-4'>
          <p className='lead fs-1 '>{countersDataArr[0].value}</p>
          <h3 className='fs3'>{countersDataArr[0].title}</h3>
        </div>
        <div className='col-3 text-center text-white p-4'>
          <p className='lead fs-1 '>{countersDataArr[1].value}</p>
          <h3 className='fs3'>{countersDataArr[1].title}</h3>
        </div>
      </section>
    </div>
  );
}
