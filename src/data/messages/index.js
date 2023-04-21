import { project } from '../../../package.json';

// This file contains messages that are used at many places.
export default {
  notifyKycApprove: 'Your KYC Application has been approved',
  auth: {
    tokenNotFound: 'Something went wrong while setting token. Try again later',
    logout: {
      successMessage: 'Logout successful.'
    },
    signup: {
      title: 'Sign Up',
      password: 'Password',
      confirmPassword: 'Confirm Password'
    }
  },
  otp: {
    send: {
      success: 'Otp sent successfully'
    }
  },
  field: {
    contactName: 'Contact Name'
  },
  errorMessage: 'Something went wrong. Please try again later.',
  user: {
    welcome: (name) => `Welcome ${name || 'User'} to ${project.name}`
  },
  network: {
    tooManyRequest: 'Server overloaded. Please wait...'
  },
  validation: {
    gst: 'GST Invalid',
    required: 'Field is required',
    confirmPassword: 'Password does not match',
    mobileNumber: 'Mobile Number not valid.',
    email: 'Invalid email'
  }
};
