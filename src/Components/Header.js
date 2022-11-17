import { Link } from 'react-router-dom'
export default function Header(){
    return(
        <>
            <Link to= '/'>
                <h3 className="text-3xl font-bold underline" >FootyHub</h3>
            </Link>

        </>
    )
}