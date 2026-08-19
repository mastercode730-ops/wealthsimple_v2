// Utility to manage support chat across the application (Tidio live chat)

export const initTidioChat = () => {
  if (!document.getElementById('tidio-script')) {
    const script = document.createElement('script');
    script.id = 'tidio-script';
    script.src = '//code.tidio.co/7olypvy8xknhr1k644clrgoucvcnjuxb.js';
    script.async = true;
    document.body.appendChild(script);
  }
};

export const openSupportChat = () => {
  if (window.tidioChatApi) {
    window.tidioChatApi.show();
    window.tidioChatApi.open();
  } else if (!document.getElementById('tidio-script')) {
    const script = document.createElement('script');
    script.id = 'tidio-script';
    script.src = '//code.tidio.co/7olypvy8xknhr1k644clrgoucvcnjuxb.js';
    script.async = true;
    script.onload = () => {
      if (window.tidioChatApi) {
        window.tidioChatApi.show();
        window.tidioChatApi.open();
      }
    };
    document.body.appendChild(script);
  }
};
