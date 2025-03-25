// import Badman from './badman'
import { Suspense } from 'react'
import './App.css'
// import Bolar from './bolar'
// import Runs from './run'
// import Friends from './friend'
import User from './user'

//? User api
const fetchUser = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users')

  return res.json()
}









//? Friend api
//  const fetchFriend = async () => {

//   const res = await fetch('https://jsonplaceholder.typicode.com/users')

//   return res.json()

//  }


function App() {
// ? user call back
const userPromise = fetchUser()




  // ? friend call back
// const FriendPromise = fetchFriend()
  return (
    <>
    <Suspense fallback="Loding......">
      <User userPromise = {userPromise}></User>
    </Suspense>
    {/* <Suspense fallback="Hi iam your friend">
      <Friends FriendPromise = {FriendPromise}></Friends>
    </Suspense> */}
    {/* <Runs></Runs> */}
    {/* <Bolar></Bolar> */}
    {/* <Badman></Badman> */}
    </>
  )
}

export default App
