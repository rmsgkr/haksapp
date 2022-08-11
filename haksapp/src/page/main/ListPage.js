import { Link } from "react-router-dom";

const ListPage = () => {
  return (
    <>
      <Link to={"/"}>
        <span>{"HOME"}</span>
      </Link>
      <br />
      <br />
      <br />
      <Link to={"/test"}>
        <span>{"Test"}</span>
      </Link>
    </>
  );
};
export default ListPage;
