module.exports = {
  parserOpts: {
    headerPattern: /^(feat|fix)\((cicd|git|github|gke|iam|tf)\):\s.*(DEVOPS-[0-9]+)/,
    headerCorrespondence: ['type', 'scope', 'ticket', 'subject'],
  },
};