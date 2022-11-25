import SWM from 'public/SWM.png'

function Sidebar() {
  return (
    <div className="top-0 w-full h-full pt-5 overflow-auto text-center bg-gray-200">
      <img className="inline w-[200px] max-w-[230px] p-5" src={SWM} />
      {/* <span>대답의 좋은 예시 모음집</span> */}
    </div>
  )
}

export default Sidebar
