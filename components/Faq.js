import React from "react";

const questions = [
  {
    question: "What is FocalTasks?",
    answer:
      "FocalTasks is a productivity suite that helps you create to-do lists, share tasks, and level up your productivity.",
  },
  {
    question: "Is FocalTasks free?",
    answer:
      "FocalTasks is open source and will be free for everyone to use. We hope you enjoy it!",
  },
  {
    question: "How is this different from other productivity apps?",
    answer:
      "FocalTasks is focused on bring a lightweight yet feature rich todo-list that is intuitive and joyful to use. Collaboration features also allows for easy task sharing with your team.",
  },
  {
    question: "When can I start using the app?",
    answer:
      "The public beta is open to everyone. We are currently working on a private beta, but we will release it soon. Join the waiting list to get notified when it is released!",
  },
];

export default function FAQ() {
  return (
    <div className="my-16 w-full">
      <h2 className="text-3xl font-semibold leading-8 tracking-tight opacity-60 md:text-4xl">
        Frequently Asked Questions:
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        {questions.map((question, index) => (
          <div key={index} className="col-span-1">
            <div className="h-full rounded-2xl border-2 border-gray-200 p-4 sm:p-6">
              <h3 className="text-lg font-semibold leading-6 text-gray-700">
                {question.question}
              </h3>
              <p className="mt-3 text-base leading-6 text-gray-500">
                {question.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
