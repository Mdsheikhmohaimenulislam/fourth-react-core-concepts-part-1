import { use } from "react"
import UserApi from "./userApi";

export default function User({userPromise}){

    const users = use(userPromise)


    return(
        <div className="card">
            <h1>What is your name: {users.length}</h1>

{/* Api loop korci  and api ar data call korci api added function diye*/}
            {
                users.map( user => <UserApi key={user.id} user = {user}></UserApi>)
            }
        </div>
    )
}