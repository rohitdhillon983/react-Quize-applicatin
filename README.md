
# Quiz Application - React

This is a Quiz Application built using React. It allows users to take a quiz, answer questions, and view their results at the end. The application includes features like a timer, dynamic scoring, and the ability to revisit and change answers.

URL - https://rohit-quiz-application.netlify.app/

gitHub Repositorie - https://github.com/rohitdhillon983/react-Quize-applicatin


## Features

✅ **Quiz Questions:**

  - Users can answer multiple-choice questions.
  - Each question has a set of options, and only one option is correct.

✅ **Timer:**

  - A countdown timer is displayed, and the quiz automatically ends when the time runs out.

✅ **Dynamic Scoring:**

  - Users earn points for correct answers and lose points for incorrect answers.

  - The score is updated dynamically as the user changes their answers.

✅ **Navigation:**

  - Users can navigate between questions using "Previous" and "Next" buttons.

  - They can revisit previous questions and change their answers.

✅ **Results Page:**

  - After completing the quiz, users are redirected to a results page.

  - The results page displays:

    * Total score.

    * Correct answers.

    * User's selected answers.

    * Correct answers for each question.

✅ **Responsive Design:**

  - The application is fully responsive and works on all screen sizes.

## Tech Stack

**React:** A JavaScript library for building user interfaces.

**Tailwind CSS:** A utility-first CSS framework for styling.

**React Icons:** A library for adding icons to the application.

**JavaScript:** The programming language used for logic and functionality.


## Authors

- [@rohitdhillon983](https://www.github.com/rohitdhillon983)


## Installing


✅ **1. Clone the Repository:**
```
git clone https://github.com/rohitdhillon983/react-Quize-applicatin.git
```
```
cd quiz-app
```
✅ **2. Install Dependencies:**

```
npm install
```

✅ **3. Run the Application:**

```
npm start 
```
✅ **4. Open in Browser:**

The application will open at http://localhost:3000.



## Folder structure

quiz-app/\
├── public/\
│   └── index.html\
├── src/\
│   ├── components/\
│   │   ├── QuizQuestion.js\
│   │   ├── QuizQuestionCard.js\
│   │   └── Results.js\
│   ├── pages/\
│   │   └── QuizQuestionCard.js\
│   ├── App.js\
│   ├── index.js\
│   └── styles.css\
├── package.json\
├── README.md\
└── .gitignore\
## Code Explaination

1. **QuizQuestion Component**
- This is the main component that handles the quiz logic.

- It manages:

    * The current question index.

    * User's answers.

    * Points and correct answers.

    * Timer functionality.

- Users can navigate between questions and submit the quiz.

2. **QuizQuestionCard Component**
- This component displays the question and options.

- It allows users to select an answer and updates the parent component (QuizQuestion) with the selected answer.

3. **Results Component**
- This component displays the quiz results.

- It shows:

    * The user's score.

    * Total points.

    * User's selected answers.

    * Correct answers for each question.

4. **Timer**
- The timer counts down from the total quiz duration (in minutes).

- When the timer reaches zero, the quiz automatically ends, and the results are displayed.

5. **Dynamic Scoring**
- Users earn points for correct answers and lose points for incorrect answers.

- If the user changes their answer, the points are updated dynamically.
## How to Works

1. **Start the Quiz:**

- The quiz begins with the first question.

- The timer starts counting down.

2. **Answer Questions:**

- Users select an answer for each question.

- They can navigate between questions using "Previous" and "Next" buttons.

3. **Change Answers:**

- Users can revisit previous questions and change their answers.

- The points and correct answers are updated dynamically.

4. **Submit the Quiz:**

- Users can submit the quiz by clicking the "Submit" button on the last question.

- The quiz also ends automatically when the timer runs out.

5. **View Results:**

- After submitting the quiz, users are redirected to the results page.

- The results page displays the user's score, selected answers, and correct answers.

## Screenshorts
[image 1](https://drive.google.com/file/d/1doJaZVPpsH6pyTU1ZJqPy55qiWERF1YY/view?usp=sharing),
[image 2](https://drive.google.com/file/d/1Z4omWXuu55A1XcYzNdpzPRu_09XV7j2B/view?usp=sharing),
[image 3](https://drive.google.com/file/d/1q6Mvf0ybeQ1EDPNPDEdksybUJVN_l6OD/view?usp=sharing)

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Push your branch to your forked repository.
5. Submit a pull request.


## License

This project is licensed under the `MIT` License. See the LICENSE file for details.


## Acknowledgements

 - [React]() for the java library.
 - [Tailwind CSS]() for the styling framwork.
 - [React Icons]() for the icons.


# Hi, I'm Rohit Dhillon! 👋


## 🚀 About Me
I'm a full stack developer and Cybersecurity Engineering, eager to apply
technical knowledge and innovative solutions to real-world challenges.
Proficient in front-end technologies like HTML, CSS, a
JavaScript,React with a foundational understanding of back-end
development using Node.js and Next js. And also knowledge of Python and
C++. Skilled in identifying and mitigating security vulnerabilities,
performing basic penetration testing, and ensuring compliance with
cybersecurity best practices. A quick learner with a passion for crafting
secure, user-centric applications and safeguarding digital environments.


## Feedback

If you have any feedback, please reach out to us at rohitdhillon983@gmail.com, +91 7355841453

