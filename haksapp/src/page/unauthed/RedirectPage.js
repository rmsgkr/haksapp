import { Link } from "react-router-dom";

const RedirectPage = () => {
  return (
    <>
      <Link to={"/test"}>
        <span>{"리다이렉트"}</span>
      </Link>
    </>
  );
};
export default RedirectPage;
