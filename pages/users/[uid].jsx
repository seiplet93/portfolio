// import the user router hook to get the path params
import { useRouter } from "next/router";

export default function UserIdPage() {
  // open instance of the router
  const router = useRouter();
  // pull the path param from the router
  const { uid } = router.query;
  return <h1>Hello user at id {uid}</h1>;
}
