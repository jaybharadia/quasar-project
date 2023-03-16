import { project } from '../../../package.json';

export default {
  notifyKycApprove: 'Your KYC Application has been approved',
  auth: {
    tokenNotFound: 'Something went wrong while setting token. Try again later',
    logout: {
      successMessage: 'Logout successful.'
    }
  },
  errorMessage: 'Something went wrong. Please try again later.',
  user: {
    welcome: (name) => `Welcome ${name || 'User'} to ${project.name}`
  },
  network: {
    tooManyRequest: 'Server overloaded. Please wait...'
  }
};
