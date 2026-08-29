// Utility to manage Tidio live chat integration across the application

const TIDIO_CUSTOM_STYLES = `
  /* Tidio Chat Widget - Compact floating bottom card for mobile screen sizes */
  @media (max-width: 768px) {
    .chat, .mobile .chat, #chat-wrapper {
      position: fixed !important;
      max-height: min(360px, 46vh) !important;
      height: min(360px, 46vh) !important;
      max-width: calc(100vw - 24px) !important;
      width: calc(100vw - 24px) !important;
      right: 12px !important;
      left: 12px !important;
      bottom: 76px !important;
      top: auto !important;
      border-radius: 20px !important;
      box-shadow: 0 16px 48px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.12) !important;
      overflow: hidden !important;
      z-index: 999999 !important;
    }
    
    /* Ensure content inside chat respects rounded corners */
    .chat > div:nth-child(2), .mobile .chat > div:nth-child(2) {
      border-radius: 20px !important;
      overflow: hidden !important;
      height: 100% !important;
    }

    /* Ensure home screen header does not push navigation tabs out of view */
    .chat-header, header {
      height: auto !important;
      max-height: 180px !important;
    }

    /* Position close button neatly below chatbox */
    #button.chat-open {
      position: fixed !important;
      top: auto !important;
      bottom: 12px !important;
      right: 16px !important;
      left: auto !important;
      width: 52px !important;
      height: 52px !important;
      z-index: 999999 !important;
    }
  }
`;

const setupAutoChatTab = (shadowRoot) => {
  if (!shadowRoot || shadowRoot._chatTabObserverAttached) return;
  shadowRoot._chatTabObserverAttached = true;

  const switchToChatTab = () => {
    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      const chatButton = Array.from(shadowRoot.querySelectorAll('button')).find(
        (b) => b.innerText && b.innerText.trim() === 'Chat'
      ) || shadowRoot.querySelector('.tidio-5zdofo');

      if (chatButton) {
        chatButton.click();
        clearInterval(interval);
      } else if (attempts > 30) {
        clearInterval(interval);
      }
    }, 20);
  };

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.addedNodes.length) {
        const chatContainer = shadowRoot.querySelector('.chat');
        if (chatContainer) {
          switchToChatTab();
        }
      }
    }
  });

  observer.observe(shadowRoot, { childList: true, subtree: true });

  if (shadowRoot.querySelector('.chat')) {
    switchToChatTab();
  }
};

const injectTidioStyles = () => {
  if (typeof document === 'undefined') return;

  const applyToShadow = () => {
    const tidioHost = document.getElementById('tidio-chat');
    if (tidioHost && tidioHost.shadowRoot) {
      if (!tidioHost.shadowRoot.getElementById('tidio-custom-overrides')) {
        const styleEl = document.createElement('style');
        styleEl.id = 'tidio-custom-overrides';
        styleEl.textContent = TIDIO_CUSTOM_STYLES;
        tidioHost.shadowRoot.appendChild(styleEl);
      }
      setupAutoChatTab(tidioHost.shadowRoot);
    }
  };

  // Global style tag in document head as fallback for iframe-based renders
  if (!document.getElementById('tidio-global-overrides')) {
    const globalStyle = document.createElement('style');
    globalStyle.id = 'tidio-global-overrides';
    globalStyle.textContent = `
      @media (max-width: 768px) {
        #tidio-chat-iframe,
        iframe[id*="tidio"] {
          max-height: min(360px, 46vh) !important;
          height: min(360px, 46vh) !important;
          max-width: calc(100vw - 24px) !important;
          width: calc(100vw - 24px) !important;
          right: 12px !important;
          left: 12px !important;
          bottom: 76px !important;
          top: auto !important;
          border-radius: 20px !important;
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.12) !important;
          overflow: hidden !important;
        }
      }
    `;
    document.head.appendChild(globalStyle);
  }

  applyToShadow();

  // Watch for when #tidio-chat is attached or updated in DOM
  const observer = new MutationObserver(() => {
    applyToShadow();
  });

  if (document.body) {
    observer.observe(document.body, { childList: true, subtree: true });
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      observer.observe(document.body, { childList: true, subtree: true });
    });
  }
};

export const initTidioChat = () => {
  if (typeof window === 'undefined') return;

  injectTidioStyles();

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

  injectTidioStyles();

  const handleOpen = () => {
    if (window.tidioChatApi) {
      if (typeof window.tidioChatApi.show === 'function') {
        window.tidioChatApi.show();
      }
      if (typeof window.tidioChatApi.open === 'function') {
        window.tidioChatApi.open();
      }
    }
    const tidioHost = document.getElementById('tidio-chat');
    if (tidioHost && tidioHost.shadowRoot) {
      setupAutoChatTab(tidioHost.shadowRoot);
    }
  };

  if (window.tidioChatApi) {
    handleOpen();
  } else {
    document.addEventListener('tidioChat-ready', handleOpen, { once: true });
    initTidioChat();
  }
};

