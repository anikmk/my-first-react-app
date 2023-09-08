export default function Todo({task,isDone}){
  

  return (
    <li>
    {task} {isDone && ': Done'}
     </li>
  )
}
