'use client'
import { authClient } from "@/lib/auth-client";
import { Link, Button } from "@heroui/react";
import { useRouter } from "next/navigation";

const Navbar = () => {

  const router = useRouter();
  

  const { 
        data: session, 
  } = authClient.useSession() 
  
  // console.log(session);

  const user = session?.user;
//  console.log(user);
  const handleSignOut = async() => {
    await authClient.signOut();

    router.push('/signin')
  }

  return (
    <div className="border ">
      {/* Basic */}
      <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
        <header className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <p className="font-bold">ACME</p>
          </div>
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href={"/models"}>Models</Link>
            </li>
          </ul>
        </header>
      </nav>
      {/* With right-aligned content */}
      <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
        <header className="flex h-16 items-center justify-between px-6">
          <div className="text-xs text-semibold">{ user?.name}</div>
          <ul className="flex items-center gap-4">
            <li>
              <Link href={"/signup"}>
                <Button>Sign up</Button>
              </Link>
            </li>
            <li>
              <Link href={"/server-action"}>
                <Button>Server Action</Button>
              </Link>
            </li>
            <li>
              <Link href={"/signin"}>
                <Button variant="outline">Sign In</Button>
              </Link>
            </li> 

            <li>
                <Button onClick={handleSignOut} variant="secondary">Sign out</Button> 
            </li> 


          </ul>
        </header>
      </nav>
    </div>
  );
};

export default Navbar;
