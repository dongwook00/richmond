import Link from "next/link";
import { useAppContext } from "../context/AppContext";

export default function Nav() {
  const { postContext } = useAppContext();
  console.log("nav", postContext.posts);
  return (
    <nav>
      <ul className="flex justify-between">
        <li>link1</li>
        <li>link2</li>
      </ul>
    </nav>
  );
}
