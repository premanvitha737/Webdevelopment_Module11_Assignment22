import React from "react";

const tests = [
  { title: "Mock Test 1", description: "Start your IELTS speaking practice test now." },
  { title: "Mock Test 2", description: "Start your IELTS speaking practice test now." },
  { title: "Real-Time Practice", description: "Start your IELTS speaking test now." },
];

function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-3xl font-bold mb-8">Available Tests</h2>
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
        {tests.map((test, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg text-center w-64"
          >
            <h3 className="text-xl font-semibold mb-2">{test.title}</h3>
            <p className="text-gray-700 mb-4">{test.description}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Start Test
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
