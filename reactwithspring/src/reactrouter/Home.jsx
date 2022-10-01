import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Home = (probs) => {
  const [course, setCourse] = useState();
  const [filterCourse, setFilterCourse] = useSearchParams();
  const searchCourse = () => {
    setFilterCourse({ filter: course });
  };
  const showCourse = () => {
    switch (filterCourse.get("filter")) {
      case "java":
        return (
          <div className="text-start">
            <h2> Java Playlist on Dr. Vipin Classes Youtube Channel</h2>
            <ol>
              <li>Core Java</li>
              <li>Java File Handling</li>
              <li>Java Socket Programming</li>
              <li>Android with Java</li>
            </ol>
          </div>
        );
      case "kotlin":
        return (
          <div className="text-start">
            <h2> Koltin Playlist on Dr. Vipin Classes Youtube Channel</h2>
            <ol>
              <li>Kotlin Fundmental</li>
              <li>Android with Kotlin</li>
              <li>Jetpack Compose</li>
            </ol>
          </div>
        );
      case "react":
        return (
          <div className="text-start">
            <h2> React Playlist on Dr. Vipin Classes Youtube Channel</h2>
            <ol>
              <li>React Tutorial for Biginners</li>
              <li>React Hooks</li>
              <li>React Routers</li>
              <li>React Projects</li>
            </ol>
          </div>
        );
      default:
        return (
          <h2>Welcome to Dr. Vipin Classes for {filterCourse.get("filter")}</h2>
        );
    }
  };
  return (
    <div style={{ height: "400px" }}>
      <h2>{probs.title}</h2>
      <input
        type="text"
        value={course}
        onChange={(event) => setCourse(event.target.value)}
      />
      <button onClick={searchCourse}>Fetch Course</button>
      {filterCourse.get("filter") ? showCourse() : ""}
    </div>
  );
};

export default Home;
