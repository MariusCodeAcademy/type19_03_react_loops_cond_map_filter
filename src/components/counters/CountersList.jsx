import SingleCounter from './SingleCounter';

export default function CountersList(props) {
  return (
    <section className='row bg-info'>
      {props.list.map((cObj) => (
        <SingleCounter
          key={cObj.id}
          // counter={cObj}
          // {...cObj}
          title={cObj.title}
          value={cObj.value}
          color={cObj.color}
        />
      ))}
    </section>
  );
}
