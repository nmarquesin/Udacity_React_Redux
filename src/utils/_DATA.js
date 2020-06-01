let users = {
  sarahedo: {
    id: "sarahedo",
    name: "Sarah Edo",
    avatarURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS52xmXxJIqflAan_8_5dTs901oAXBo3kfG-hamcQBqoF6BMeuJ9MqDcMXXdG6qB6xHXvk6esSC&usqp=CAc",
    answers: {
      "8xf0y6ziyjabvozdd253nd": "optionOne",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
      am8ehyc8byjqgar0jgpub9: "optionTwo",
      loxhs1bqm25b708cmbf3g: "optionTwo",
    },
    questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
  },
  tylermcginnis: {
    id: "tylermcginnis",
    name: "Tyler McGinnis",
    avatarURL:
      "https://digitalcontent.api.tesco.com/v2/media/ghs/a1cd4cba-936c-4eef-9c81-1f8e95af6f72/snapshotimagehandler_202548200.jpeg?h=540&w=540",
    answers: {
      vthrdm985a262al8qx3do: "optionOne",
      xj352vofupe1dqz9emx13r: "optionTwo",
    },
    questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
  },
  johndoe: {
    id: "johndoe",
    name: "John Doe",
    avatarURL:
      "data:image/jpeg;base64,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",
    answers: {
      xj352vofupe1dqz9emx13r: "optionOne",
      vthrdm985a262al8qx3do: "optionTwo",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
    },
    questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
  },
};

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: "8xf0y6ziyjabvozdd253nd",
    author: "sarahedo",
    timestamp: 1467166872634,
    optionOne: {
      votes: ["sarahedo"],
      text: "have horrible short term memory",
    },
    optionTwo: {
      votes: [],
      text: "have horrible long term memory",
    },
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: "6ni6ok3ym7mf1p33lnez",
    author: "johndoe",
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: "become a superhero",
    },
    optionTwo: {
      votes: ["johndoe", "sarahedo"],
      text: "become a supervillain",
    },
  },
  am8ehyc8byjqgar0jgpub9: {
    id: "am8ehyc8byjqgar0jgpub9",
    author: "sarahedo",
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: "be telekinetic",
    },
    optionTwo: {
      votes: ["sarahedo"],
      text: "be telepathic",
    },
  },
  loxhs1bqm25b708cmbf3g: {
    id: "loxhs1bqm25b708cmbf3g",
    author: "tylermcginnis",
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: "be a front-end developer",
    },
    optionTwo: {
      votes: ["sarahedo"],
      text: "be a back-end developer",
    },
  },
  vthrdm985a262al8qx3do: {
    id: "vthrdm985a262al8qx3do",
    author: "tylermcginnis",
    timestamp: 1489579767190,
    optionOne: {
      votes: ["tylermcginnis"],
      text: "find $50 yourself",
    },
    optionTwo: {
      votes: ["johndoe"],
      text: "have your best friend find $500",
    },
  },
  xj352vofupe1dqz9emx13r: {
    id: "xj352vofupe1dqz9emx13r",
    author: "johndoe",
    timestamp: 1493579767190,
    optionOne: {
      votes: ["johndoe"],
      text: "write JavaScript",
    },
    optionTwo: {
      votes: ["tylermcginnis"],
      text: "write Swift",
    },
  },
};

function generateUID() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

export function _getUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...users }), 1000);
  });
}

export function _getQuestions() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...questions }), 1000);
  });
}

function formatQuestion({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    },
  };
}

export function _saveQuestion(question) {
  return new Promise((res, rej) => {
    const authedUser = question.author;
    console.log("_saveQuestion, authedUser ====", authedUser);
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion,
      };

      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id]),
        },
      };

      res(formattedQuestion);
    }, 1000);
  });
}

export function _saveQuestionAnswer({ authedUser, qid, answer }) {
  console.log("1 - ", authedUser);
  console.log("2 - ", qid);
  console.log("3 - ", answer);

  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("users= ", users[authedUser]);
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer,
          },
        },
      };

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser]),
          },
        },
      };

      res();
    }, 500);
  });
}
