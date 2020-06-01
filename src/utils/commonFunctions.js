export function getAuthor(questions, qId) {
  return questions[qId]["author"];
}

export function getAvatar(users, questions, qId) {
  return users[getAuthor(questions, qId)]["avatarURL"];
}

export function getAuthorsName(users, questions, qId) {
  return users[getAuthor(questions, qId)]["name"];
}

export function getText(textId, questions, qId) {
  switch (textId) {
    case 1:
      return questions[qId]["optionOne"]["text"];
    case 2:
      return questions[qId]["optionTwo"]["text"];
    default:
      return;
  }
}

export function getVotes(voteId, questions, qId) {
  switch (voteId) {
    case 1:
      return questions[qId]["optionOne"]["votes"].length;
    case 2:
      return questions[qId]["optionTwo"]["votes"].length;
    default:
      return;
  }
}

export function answeredByUser(qId, users, activeUser) {
  return Object.keys(users[activeUser["id"]]["answers"]).includes(qId);
}

export function votedByUser(qId, users, activeUser) {
  if (users[activeUser["id"]]) {
    for (let [key, value] of Object.entries(
      users[activeUser["id"]]["answers"]
    )) {
      if (key === qId) return value;
    }
    return "";
  }
}
