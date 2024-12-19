import { Button } from "@/components/ui/button"
import Link from "next/link";


export default function Home() {

  return (
    <Link href="/login">
    <Button>Sign In</Button>
    {/* <Button>SignUp</Button> */}
    </Link>

  );
}
