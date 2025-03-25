import { use } from "react"

export default function User({userPromise}){

    const users = use(userPromise)
    console.log(users);

    return(
        <div>
            <h1>What is your name</h1>
        </div>
    )
}