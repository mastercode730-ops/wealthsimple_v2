// Utility to manage support chat across the application

export const openSupportChat = (options = {}) => {
  const detail = typeof options === 'string' ? { message: options } : options;
  window.dispatchEvent(new CustomEvent('open-support-chat', { detail }));
  window.dispatchEvent(new CustomEvent('open-chat', { detail }));
};
