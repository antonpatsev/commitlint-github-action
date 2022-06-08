module.exports = {
  extends: ['@commitlint/config-conventional', "@commitlint/parse"],
//  rules: {
//    "subject-empty": [2, "never"],
//    "scope-enum": [2, "always", [
//      "cicd",
//      "git",
//      "github",
//      "gke",
//      "iam",
//      "tf"
//    ]]
//  },
  rules: {
    'body-leading-blank': [0],
    'footer-leading-blank': [0],
    'header-max-length': [0],
    'scope-case': [0],
    'subject-case': [0],
    'subject-empty': [0],
    'subject-full-stop': [0],
    'type-case': [0],
    'type-empty': [0],
    'type-enum': [0],
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^(feat|fix)\((cicd|git|github|gke|iam|tf)\):\s.*(DEVOPS-[0-9]+)/,
//      headerCorrespondence: ['type', 'scope', 'ticket', 'subject']
//      headerCorrespondence: ['subject']
      },
    },
};