import './App.css'
import ChildToParent from './pages/ChildToParent.jsx'
import EmployListPage from './pages/EmployListPage.jsx'
import UserDetails from './pages/userDetails.jsx'

// import userDetails from './pages/userDetails'
// import PageForm1 from './pages/PageForm1'
function App() {

  return (
    <>
      {/* <PageForm1PageForm1 /> */}
      <div style={{ padding: "20px", margin: "0 auto", }}>
        <UserDetails/>
        {/* <ChildToParent/> */}
        {/* <EmployListPage />  */}
      </div>
    </>
  )
}

export default App
