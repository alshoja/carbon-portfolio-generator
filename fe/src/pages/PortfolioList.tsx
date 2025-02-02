import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Card from "../components/Card";
import { AppDispatch, RootState } from "../store";
import { fetchCardData } from "../store/projects.slice";
import LoadingSpinner from "../components/Spinner";
import ErrorComponent from "../components/Error";

const PortFolioList = () => {
  const location = useLocation();
  const dispatch: AppDispatch = useDispatch();

  const queryParams = new URLSearchParams(location.search);
  const creditsRequested = queryParams.get("credits");
  const {
    data: projectsData,
    loading,
    error,
  } = useSelector((state: RootState) => state.projects);

  useEffect(() => {
    if (creditsRequested) {
      dispatch(fetchCardData({ requestedTons: Number(creditsRequested) }));
    }
  }, [dispatch, creditsRequested]);

  if (loading) {
    return <LoadingSpinner message="Please wait, fetching data..." />;
  }

  if (error) {
    return (
      <ErrorComponent
        heading="Error"
        message="Something went wrong. Please try again later."
      />
    );
  }

  return (
    <>
      <div className="container">
        <h2 className="text-center mb-4 d-flex justify-content-center">
          Projects
        </h2>

        {projectsData.length > 0 ? (
          <p className="text-center text-muted">
            Here are some projects that can accommodate {creditsRequested}{" "}
            credits.
          </p>
        ) : (
          <ErrorComponent
            heading="Oops!"
            message="No projects at the movement"
          />
        )}
      </div>

      <div className="container-fluid">
        <div className="row justify-content-start card-list">
          {projectsData.length > 0
            ? projectsData.map((card, index) => <Card key={index} {...card} />)
            : ""}
        </div>
      </div>
    </>
  );
};

export default PortFolioList;
