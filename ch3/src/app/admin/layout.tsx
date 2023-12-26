import AdminHeader from "@/components/AdminHeader";
import React ,{ReactNode} from "react";

interface AdminLayoutProps{

    children:ReactNode;
    
}



const AdminLayout:React.FC<AdminLayoutProps> = ({children}) => {
  return (

        <section>
            <AdminHeader/>
            {children}

        </section>
  )
}

export default AdminLayout