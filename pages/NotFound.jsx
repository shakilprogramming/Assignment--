import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1 className="text-yellow-300">Page Not Found</h1>
      <p className="text-green-200">Go to the <Link className="text-blue-50" to='/'>Home</Link></p>
    </div>
  );
}
