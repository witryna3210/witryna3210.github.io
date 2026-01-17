const subjectInput = document.getElementById("subject");
const bodyInput = document.getElementById("body");
const sendButton = document.getElementById("send");

const updateEmailLink = () => {
  const subject = window.encodeURI(subjectInput.value);
  const body = window.encodeURI(bodyInput.value);
  sendButton.href = `mailto:biurobus@wp.pl?subject=${subject}&body=${body}`;
};

subjectInput.addEventListener("input", () => {
  updateEmailLink();
});

bodyInput.addEventListener("input", () => {
  updateEmailLink();
});

updateEmailLink();
