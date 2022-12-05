import { useNavigate } from 'react-router-dom';



function ContentView(props) {
  const navigate = useNavigate();
  //const handleOnClick = useCallback(() => sessionStorage.setItem(), navigate(props.page, [navigate]))
  const handleOnClick = () => {
    navigate(props.page, { state: { itemId : props.id} })
  }

  return (
    <div onClick={handleOnClick} className='flex flex-col text-l p-3 w-40 m-2 rounded-2xl drop-shadow-xl bg-white h-20'>
        <div className='flex-1'>{props.name}</div>
        <div className='flex-1'>{props.price}</div>
    </div>
  )
}

export default ContentView