function Quiz(){
  const questions = [
  {
    id: 1,
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    id: 2,
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats"
    ],
    answer: "Cascading Style Sheets"
  },
  {
    id: 3,
    question: "What does HTML stand for?",
    options: [
      "Hypertext Markup Language",
      "Hyperloop Machine Language",
      "Hyperlink and Text Markup Language",
      "Home Tool Markup Language"
    ],
    answer: "Hypertext Markup Language"
  },
  {
    id: 4,
    question: "What year was JavaScript launched?",
    options: ["1996", "1995", "1994", "None of the above"],
    answer: "1995"
  },
  {
    id: 5,
    question: "Which of these is a JavaScript framework?",
    options: ["React", "Laravel", "Django", "Flask"],
    answer: "React"
  }
]

  return <div>
    {questions.map((question,qNo)=>{
      return<div key={qNo}>
      <h2>{question.question}</h2>
      {
    questions[qNo].options.map((optionQ,index) => {
      return <div key={index}>
        <h6>{optionQ}</h6>
      </div>
    })
  }

      </div>
      

    })}

  </div>
}

export default Quiz;