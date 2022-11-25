import SWM from 'public/swm.png'

function Sidebar() {
  return (
    <div className="fixed top-0 h-full w-[220px] overflow-auto border-2 bg-white pt-5 text-center">
      <img className="w-[200px] max-w-[230px] p-5" src={SWM} />
      - 정보 공유 -
      <br />
      친구 위로하는 법<br />
      1. 친구의 질문을 입력한다. <br />
      2. 친구의 질문에 대한 답변을 확인한다. <br />
      3. 친구와 친밀도 상승!
    </div>
  )
}

export default Sidebar
