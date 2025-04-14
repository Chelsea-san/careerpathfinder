"use client"
import { useRouter } from 'next/router';
import React from 'react'

const academicDataForm = () => {  
  const router = useRouter();
  return (
    
<div className="flex flex-col gap-8 p-8 w-[782px] bg-white shadow-lg rounded-2xl">
  
  <h2 className="text-2xl font-bold text-primary">Academic Information</h2>
  <p className="font-light leading-3 text-black -mt-0">Please provide your academic information, also select that courses you have done so far</p>
  
  <div className="flex flex-col gap-1">
    <label htmlFor="university" className="text-sm font-medium text-gray-700">University</label>
    <select id="university" name="university" className="border border-gray-300 rounded-md p-2 px-5">
      <option>Select your university</option>
      <option>Veritas University</option>
      <option>UNILAG</option>
     
    </select>
  </div>

 
  <div className="flex flex-col gap-1">
    <label htmlFor="grading" className="text-sm font-medium text-gray-700">Grading System</label>
    <select id="grading" name="grading" className="border border-gray-300 rounded-md p-2">
      <option>Select grading system</option>
      <option>5.0 Scale</option>
      <option>4.0 Scale</option>
    </select>
  </div>


  <div className="flex flex-col gap-1">
    <label htmlFor="cgpa" className="text-sm font-medium text-gray-700">CGPA</label>
    <input
      type="number"
      step="0.01"
      max="5.0"
      min={0}
      id="cgpa"
      name="cgpa"
      placeholder="e.g. 4.56"
      className="border border-gray-300 rounded-md p-2"
      required
    />
  </div>


  <div className="flex flex-col gap-2 ">
    <p className="text-lg font-semibold text-teal-700">Courses</p>
    <div className="flex flex-col flex-wrap gap-2 h-52  ">
      {['Structured Programming', 'OOP', 'Discrete Math',
    'Calculus', 'English Skill Development', 'Data Structure',
    'Algorithm', 'Statistics', 'DBMS',
    'Operating Systems', 'Computer Architecture',
    'Artificial Intelligence', 'Machine Learning', 'Compiler Design'].map((course) => (
        <label key={course} className="inline-flex items-center gap-2">
          <input type="checkbox" name="courses" value={course} className="accent-orange-500" />
          <span className="text-gray-800">{course}</span>
        </label>
      ))}
    </div>
  </div>

 
  <div className="flex justify-end">
    <button 
     onClick={() => router.push("/protected/ScoreInputPage")} 
     className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
     >
      Next →
      
    </button>
  </div>
</div>

  )
}

export default academicDataForm