import { useSelector } from "react-redux";

const LoadingScreen = () => {
  const { loading, progress, error } = useSelector((state) => state.progress);

  if (!loading && !error) return null;

  return (
    <div className="overlay">
      {error ? (
        <p style={{ color: "red" }}>❌ Lỗi: {error}</p>
      ) : (
        <>
          <div className="barContainer">
            <div className= "bar" style={{ width: `${progress}%` }} />
          </div>
        </>
      )}
    </div>
  );
};



export default LoadingScreen;
