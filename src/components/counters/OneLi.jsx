export default function OneLi(props) {
  console.log('props ===', props);

  return (
    <li className='list-group-item'>
      {props.title} - value: {props.value}
    </li>
  );
}
