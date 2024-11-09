import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <h3>This page doesn&apos;t exist</h3>
      <Link to="/recipe-list">Go List</Link>
    </div>
  );
}

export default NotFoundPage;
