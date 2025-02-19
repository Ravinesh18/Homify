import { Link } from "react-router-dom"
export default function RegisterPage(){
    return (
        <div className="mt-4 grow flex items-center justify-around">
        <div className="mb-64">
          <h1 className="text-4xl text-center">Register </h1>
          <form className="max-w-md mx-auto">
            <input type="text" placeholder="your name"/>
            <input type="email" placeholder="your@gmail.com" />
            <input type="password" placeholder="password" />
            <button className="primary">Login</button>
            <div className="text-center py-2">
              Already have an account !
              <Link className="bold text-bn" to={"/login"}> <b>Login</b></Link>
            </div>
          </form>
        </div>
      </div>

    )
}