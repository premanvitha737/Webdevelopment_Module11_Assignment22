import React from "react";

interface Props {
  title: string;
}

const TestCard: React.FC<Props> = ({ title }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300">
      <h3 className="text-lg font-semibold text-dark mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">Start your IELTS speaking practice test now.</p>
      <button
        className="bg-accent hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded transition"
        aria-label={`Start ${title}`}
      >
        Start Test
      </button>
    </div>
  );
};

export default TestCard;
