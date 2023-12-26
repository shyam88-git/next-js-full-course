import React,{ReactNode} from "react";

interface UserLayoutProps{

    children:ReactNode;
    login:ReactNode;
    register:ReactNode;
}



const UserLayout:React.FC<UserLayoutProps> = ({children,login,register}) => {

  const isLogin=false;
  return (

    <section>
      {children}
      {/* {login}
      {register} */}

      {isLogin? register:login}
    </section>
  )
}

export default UserLayout;