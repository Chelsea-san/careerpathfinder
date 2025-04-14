"use client";

import { useUserContext } from "@/context/usercontext";
import React, { useState } from "react";

const ScoreInputPage = () => {
  const { courses } = useUserContext();
  const selectedCourses = Object.entries(courses).filter(
    ([_, selected]) => selected
  );

  const [scores, setScores] = useState<{ [key: string]: number }>({});

  const handleScoreChange = (courseName: string, value: number) => {
    const newScore = Math.max(0, Math.min(100, value)); // Clamp score to 0-100
    setScores((prev) => ({ ...prev, [courseName]: newScore }));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 rounded-xl shadow-lg bg-white">
      <h2 className="text-xl font-bold mb-4">Enter Your Course Scores</h2>
      <div className="space-y-4">
        {selectedCourses.map(([courseName]) => (
          <div key={courseName} className="flex justify-between items-center">
            <label className="w-1/2 font-medium">{courseName}</label>
            <select
              className="w-1/3 border px-2 py-1 rounded"
              value={scores[courseName] ?? ""}
              onChange={(e) =>
                handleScoreChange(courseName, parseInt(e.target.value))
              }
            >
              <option value="">--</option>
              {Array.from({ length: 101 }, (_, i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScoreInputPage;
