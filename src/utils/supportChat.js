// Utility to manage headless Tidio live chat across the application

export const initTidioChat = () => {
  if (typeof window === 'undefined') return;
  if (!document.getElementById('tidio-script')) {
    const script = document.createElement('script');
    script.id = 'tidio-script';
    script.src = '//code.tidio.co/7olypvy8xknhr1k644clrgoucvcnjuxb.js';
    script.async = true;

    const onReady = () => {
      if (window.tidioChatApi) {
        // Keep default Tidio button hidden so only Wealthsimple UI is shown
        window.tidioChatApi.hide();
      }
    };

    script.onload = () => {
      if (window.tidioChatApi) {
        window.tidioChatApi.on('ready', onReady);
        onReady();
      } else {
        document.addEventListener('tidioChat-ready', onReady);
      }
    };

    document.body.appendChild(script);
  }
};

export const openSupportChat = (options = {}) => {
  const detail = typeof options === 'string' ? { message: options } : options;
  window.dispatchEvent(new CustomEvent('open-support-chat', { detail }));
  window.dispatchEvent(new CustomEvent('open-chat', { detail }));
};
