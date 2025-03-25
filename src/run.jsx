// import { useState } from "react"

// export default function Runs(){


//     const [countRun, setCountRun] = useState(0)

//     const singleRun = () => {
//         const update = countRun + 1
//         setCountRun(update)
//     }


//     const [six,setSix] = useState(0)

//     const sixs = () => {

//         const countSix = six + 1
//         setSix(countSix)

//         const updateSix = countRun + 6
//         setCountRun(updateSix)
//     }

//     return(
//         <div>
//             <h1>Count Runs</h1>
//             <p>Count Six: {six}</p>
//             <h3>Single Count:{countRun}</h3>
//             <button onClick={singleRun}>Single Runs</button>
//             <button onClick={sixs}>Six Runs</button>
//         </div>
//     )
// }