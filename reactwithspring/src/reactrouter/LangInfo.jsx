import { useParams } from "react-router-dom";

const LangInfo = () => {
  const { lang } = useParams();
  return (
    <div style={{ height: "400px" }}>
      <h3>We provides lectures on {lang} language also...</h3>
    </div>
  );
};

export default LangInfo;
