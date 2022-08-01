import * as userService from '../../utilities/users-service'

export default function OrderHistoryPage(){

    async function handleCheckToken(){
        let expDate = await userService.checkToken()
        let token = localStorage.getItem('token')
        console.log('exp date is' , expDate)
    }
    return(
    <>
        <h1>Order History Page</h1>
        <button onClick={handleCheckToken}>Login expiration</button>
    </>
    )
    }