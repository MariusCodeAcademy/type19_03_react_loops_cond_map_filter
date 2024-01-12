export default function CountersList(props) {
  return (
    <section className='row bg-info'>
      {props.list.map((cObj) => (
        <div
          key={cObj.id}
          className={`col-3 text-center text-white p-4 ${cObj.color || ''}`}>
          <p className='lead fs-1 '>{cObj.value}</p>
          <h3 className='fs3'>{cObj.title}</h3>
        </div>
      ))}
    </section>
  );
}
