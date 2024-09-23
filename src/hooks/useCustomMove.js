import { useNavigate } from "react-router-dom";

function useCustomMove() {
  const navigate = useNavigate();
  const moveToRead = (id) => {
    navigate({
      pathname: `../detail/${id}`,
    });
  };
  return { moveToRead };
}

export default useCustomMove;
