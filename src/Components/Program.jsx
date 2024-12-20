import React from "react";
import Card from "./Card";

const program = [
  {
    title: "JAMB",
    subject: "4 Subjects",
    month: "5,000",
    quarter: "14,000",
    year: "55,000",
    topic1: "Comprehensive tutorials",
    topic2: "Weekly masterclasses",
    topic3: "Mock tests and practice questions",
    topic4: "Live Q&A sessions with experts",
    path: "/learnMore",
  },
  {
    title: "JAMB",
    subject: "4 Subjects",
    month: "5,000",
    quarter: "14,000",
    year: "55,000",
    topic1: "Comprehensive tutorials",
    topic2: "Weekly masterclasses",
    topic3: "Mock tests and practice questions",
    topic4: "Live Q&A sessions with experts",
    path: "/learnMore",
  },
  {
    title: "WAEC",
    subject: "8-9 Subjects",
    month: "8,000",
    quarter: "23,000",
    year: "88,000",
    topic1: "Complete syllabus coverage",
    topic2: "Weekly quizzes and assignments",
    topic3: "Interactive live sessions with subject tutors",
    topic4: "Past question reviews and analysis",
    path: "/learnMore",
  },
  {
    title: "WAEC",
    subject: "8-9 Subjects",
    month: "8,000",
    quarter: "23,000",
    year: "88,000",
    topic1: "Complete syllabus coverage",
    topic2: "Weekly quizzes and assignments",
    topic3: "Interactive live sessions with subject tutors",
    topic4: "Past question reviews and analysis",
    path: "/learnMore",
  },
  {
    title: "JAMB",
    subject: "4 Subjects",
    month: "5,000",
    quarter: "14,000",
    year: "55,000",
    topic1: "Comprehensive tutorials",
    topic2: "Weekly masterclasses",
    topic3: "Mock tests and practice questions",
    topic4: "Live Q&A sessions with experts",
    path: "/learnMore",
  },
];

export default function Program() {
  return (
    <>
      <div className="Container">
        <div className="area-wrapper">
          <div className="mb-7">
            <h2 className="uppercase lg:text-xl text-base font-bold mb-4">
              Our program
            </h2>
            <p className="text-sm leading-6">
              At Tutorial Center, we understand the challenges faced by Nigerian
              students preparing for critical exams like JAMB, WAEC, NECO, and
              GCE. That’s why we’ve built a platform that not only addresses
              these challenges but empowers you to achieve your academic goals
              with confidence and ease
            </p>
          </div>
          <div className="hidden">
            {
                program.map((item,index) => (
                    <div className=" " key={index}>
                        <Card
                         subject={item.subject}
                         title={item.title}
                         month={item.month}
                         quarter={item.quarter}
                         year={item.year}
                         topic1={item.topic1}
                         topic2={item.topic2}
                         topic3={item.topic3}
                         topic4={item.topic4}
                         path={item.path}
                        />
                    </div>
                ))
            }
          </div>
        </div>
      </div>
    </>
  );
}
