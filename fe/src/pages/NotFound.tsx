import ErrorComponent from "../components/Error";

const NotFound = () => {
  return <ErrorComponent message="The page you are looking for does not exist."  heading="404"/>;
};

export default NotFound;
