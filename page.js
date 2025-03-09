
import LoginForm from "@/component/LoginForm";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/dist/server/api-utils";

export default   function Home() {

  return (
    <main>
         <LoginForm />
    </main>

   
  );
}
