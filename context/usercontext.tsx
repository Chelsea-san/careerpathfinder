"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";


interface Courses {
  [courseName: string]: boolean;
}

// Define the context type
interface UserContextType {
  university: string;
  gradingSystem: number;
  cgpa: number;
  courses: Courses;
  updateUniversity: (uni: string) => void;
  updateGradingSystem: (scale: number) => void;
  updateCgpa: (cgpaVal: number) => void;
  updateCourse: (courseName: string, value: boolean) => void;
}


const defaultCourses: Courses = {
  "Structured Programming": false,
  "OOP": false,
  "Discrete Math": false,
  "Calculus": false,
  "English Skill Development": false,
  "Data Structure": false,
  "Algorithm": false,
  "Statistics": false,
  "DBMS": false,
  "Operating Systems": false,
  "Computer Architecture": false,
  "Artificial Intelligence": false,
  "Machine Learning": false,
  "Compiler Design": false,
};

// Default context value
const defaultUserContext: UserContextType = {
  university: "",
  gradingSystem: 0,
  cgpa: 0,
  courses: defaultCourses,
  updateUniversity: () => {},
  updateGradingSystem: () => {},
  updateCgpa: () => {},
  updateCourse: () => {},
};

const UserContext = createContext<UserContextType>(defaultUserContext);

export const useUserContext = () => useContext(UserContext);

// Props type for the provider
interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [university, setUniversity] = useState<string>("");
  const [gradingSystem, setGradingSystem] = useState<number>(0);
  const [cgpa, setCgpa] = useState<number>(0);
  const [courses, setCourses] = useState<Courses>(defaultCourses);

  const updateUniversity = (uni: string) => setUniversity(uni);

  const updateGradingSystem = (scale: number) =>
    setGradingSystem(parseFloat(scale.toString()));

  const updateCgpa = (cgpaVal: number) => setCgpa(cgpaVal);

  const updateCourse = (courseName: string, value: boolean) => {
    setCourses((prev) => ({
      ...prev,
      [courseName]: value,
    }));
  };

  return (
    <UserContext.Provider
      value={{
        university,
        gradingSystem,
        cgpa,
        courses,
        updateUniversity,
        updateGradingSystem,
        updateCgpa,
        updateCourse,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
