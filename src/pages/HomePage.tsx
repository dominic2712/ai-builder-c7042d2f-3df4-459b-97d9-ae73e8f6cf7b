import React from 'react';
import Header from '../components/Header';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-4">
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">Introduction to AI</h2>
          <p className="text-gray-700">Artificial Intelligence (AI) is a branch of computer science that aims to create intelligent machines that work and react like humans. AI has the potential to transform the world as we know it, making our lives easier and more efficient in numerous ways.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">Benefits of AI</h2>
          <ul className="list-disc list-inside">
            <li>Automation of repetitive tasks</li>
            <li>Improved decision-making</li>
            <li>Enhanced customer experiences</li>
            <li>Increased productivity and efficiency</li>
            <li>Advancements in healthcare and medicine</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default HomePage;