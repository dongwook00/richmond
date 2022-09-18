import Link from "next/link";
import { useAppContext } from "../context/AppContext";

export default function Nav() {
  const foo = useAppContext();
  console.log("nav", foo);
  return (
    <nav>
      <ul className="flex justify-between">
        <li>link1</li>
        <li>link2</li>
      </ul>
    </nav>
  );
}
