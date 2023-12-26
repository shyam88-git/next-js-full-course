import AdminHeader from "@/components/AdminHeader";
import React,{ReactNode} from "react";
interface AdminLoayoutProps{

    children:string;
}



const AdminLayout:React.FC<AdminLoayoutProps> = ({children}) => {
  return (

    <>
         <AdminHeader/>
     {children}
    </>


  )
}

export default AdminLayout