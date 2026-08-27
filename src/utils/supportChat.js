// Utility to manage Tidio live chat integration across the application

export const initTidioChat = () => {
  if (typeof window === 'undefined') return;

  // Check if script is already injected
  if (!document.getElementById('tidio-script') && !document.querySelector('script[src*="code.tidio.co"]')) {
    const script = document.createElement('script');
    script.id = 'tidio-script';
    script.src = '//code.tidio.co/q8tmqdhv6sz0wctvkppzgujxxriyyfli.js';
    script.async = true;
    document.body.appendChild(script);
  }
};

export const openSupportChat = () => {
  if (typeof window === 'undefined') return;

  const handleOpen = () => {
    if (window.tidioChatApi) {
      if (typeof window.tidioChatApi.show === 'function') {
        window.tidioChatApi.show();
      }
      if (typeof window.tidioChatApi.open === 'function') {
        window.tidioChatApi.open();
      }
    }
  };

  if (window.tidioChatApi) {
    handleOpen();
  } else {
    document.addEventListener('tidioChat-ready', handleOpen, { once: true });
    initTidioChat();
  }
};
