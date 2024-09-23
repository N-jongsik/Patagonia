import { useNavigate } from "react-router-dom";

function useCustomMove() {
  const navigate = useNavigate();
  const moveToRead = (id) => {
    navigate({
      pathname: `../detail/${id}`,
    });
  };

  const moveToCart = (id) => {
    navigate({
      pathname: `../cart`,
    });
  };
  return { moveToRead, moveToCart };
}

export default useCustomMove;
