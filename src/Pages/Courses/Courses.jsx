import React, { useEffect, useState } from "react";
import CourseCard from "../CourseCard/CourseCard";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="">
      <h1 className="py-10 text-5xl font-bold bg-base-200 text-center">
        Courses
      </h1>
      <div className="grid grid-cols-3 pb-10 bg-base-200 gap-8 px-6">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default Courses;
