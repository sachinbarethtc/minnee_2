(function () {
    // ---- Chat Button ----
    const chatBtn = document.createElement('div');
    chatBtn.id = 'myChatbotButton';
    chatBtn.innerHTML = ':speech_balloon: Chat';
    chatBtn.style.position = 'fixed';
    chatBtn.style.bottom = '20px';
    chatBtn.style.right = '20px';
    chatBtn.style.background = '#4A90E2';
    chatBtn.style.color = 'white';
    chatBtn.style.padding = '12px 18px';
    chatBtn.style.borderRadius = '25px';
    chatBtn.style.cursor = 'pointer';
    chatBtn.style.fontFamily = 'Arial, sans-serif';
    chatBtn.style.zIndex = '999999';
    chatBtn.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
    document.body.appendChild(chatBtn);

    let widgetFrame = null;

    // ---- Toggle Chat Widget ----
    chatBtn.onclick = () => {
        if (widgetFrame) {
            // Hide if already open
            widgetFrame.remove();
            widgetFrame = null;
            return;
        }

        // ---- Create iframe ----
        widgetFrame = document.createElement('iframe');
        widgetFrame.src = 'https://minnee.onrender.com/index.html'; // <-- CHANGE THIS
        widgetFrame.style.position = 'fixed';
        widgetFrame.style.bottom = '70px';
        widgetFrame.style.right = '20px';
        widgetFrame.style.width = '350px';
        widgetFrame.style.height = '500px';
        widgetFrame.style.border = 'none';
        widgetFrame.style.borderRadius = '12px';
        widgetFrame.style.boxShadow = '0 4px 30px rgba(0,0,0,0.3)';
        widgetFrame.style.zIndex = '999999';

        document.body.appendChild(widgetFrame);
    };
})();
