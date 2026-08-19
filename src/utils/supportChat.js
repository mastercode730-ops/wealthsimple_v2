// Utility to open support chat across the application (Tidio & custom chat widget)

export const openSupportChat = () => {
  // 1. Dispatch custom event for built-in chat widget
  window.dispatchEvent(new CustomEvent('open-support-chat'));

  // 2. Load and open Tidio chat widget if available
  if (!document.getElementById('tidio-script')) {
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
  } else if (window.tidioChatApi) {
    window.tidioChatApi.show();
    window.tidioChatApi.open();
  }
};
