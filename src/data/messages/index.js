import { project } from '../../../package.json';

export default {
  notifyKycApprove: 'Your KYC Application has been approved',
  auth: {
    tokenNotFound: 'Please provide token. Token not found. Try again'
  },
  user: {
    welcome: (name) => `Welcome ${name || 'User'} to ${project.name}`
  }
};
