"use client";

import React from "react";
import Link from "next/link";
import { FiBarChart2, FiUsers } from "react-icons/fi";

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold mb-12 gradient-text text-center">
        Welcome to StudyRacer
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center mb-6">
            <FiBarChart2 className="text-4xl text-primary mr-4" />
            <h2 className="text-2xl font-semibold">Track Your Progress</h2>
          </div>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Stay on top of your assignments and watch your performance improve
            over time.
          </p>
          <Link href="/assignments" className="btn btn-primary inline-block">
            View Assignments
          </Link>
        </div>
        <div className="card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center mb-6">
            <FiUsers className="text-4xl text-secondary mr-4" />
            <h2 className="text-2xl font-semibold">Compete with Peers</h2>
          </div>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Join the leaderboard and challenge yourself to reach the top.
          </p>
          <Link href="/leaderboard" className="btn btn-secondary inline-block">
            Check Leaderboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
