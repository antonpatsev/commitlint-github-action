module.exports = {
  extends: ['@commitlint/config-conventional', "@commitlint/parse"],
  rules: {
    "scope-enum": [2, "always", [
      "cicd",
      "git",
      "github",
      "gke",
      "iam",
      "tf"
    ]],
  },
  parserPreset: {
  parserOpts: {
    headerPattern: /^(feat|fix)\((cicd|git|github|gke|iam|tf)\):\s.*(DEVOPS-[0-9]+)/,
    headerCorrespondence: ['type', 'scope', 'ticket', 'subject'],
    },
  },
};