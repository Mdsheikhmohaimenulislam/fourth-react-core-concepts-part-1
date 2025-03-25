//? api valu added function

export default function UserApi({user}){

    return(
        <div className="card">
            <h1>Name: {user.name}</h1>
            <h3>Email: {user.email}</h3>
            <p>Phone Number: {user.phone}</p>
        </div>
    )
}