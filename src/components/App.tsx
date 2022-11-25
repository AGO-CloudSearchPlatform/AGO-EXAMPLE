import Sidebar from './Sidebar'

function App() {
  return (
    <div className="grid-cols-2 bg-gray">
      <Sidebar />
      <div className="border-2">검색창원하는 부분</div>
    </div>
  )
}

export default App
