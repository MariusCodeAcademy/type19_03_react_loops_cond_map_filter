export default function SingleCounter({ value, color, title }) {
  // const { value, color, title } = counter;
  return (
    <div
      className={`col-lg-3 col-md-6 text-center text-white p-4 ${color || ''}`}>
      <p className='lead fs-1 '>{value}</p>
      <h3 className='fs3'>{title}</h3>
    </div>
  );
}
