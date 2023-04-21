import messages from 'src/data/messages/index';
export const GST = (value) => {
  const regex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/g;
  return value.match(new RegExp(regex)) || messages.validation.gst;
};

export const required = (value) => {
  return (value && value.length > 0) || messages.validation.required;
};

export const confirmPassword = (password, value) => {
  return [() => required(value), () => password === value || messages.validation.confirmPassword];
};

export const mobileNumber = () => {
  return [(value) => required(value), (value) => value.length === 10 || messages.validation.mobileNumber];
};

export const email = () => {
  return [(value) => required(value), (value) => {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/g;
    return value.match(new RegExp(regex)) || messages.validation.email;
  }];
};
