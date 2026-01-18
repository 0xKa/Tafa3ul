import { useState } from "react";

const useCopyToClipboard = (text: string, timeout: number = 2000) => {
  const [copyNotificationTimeout, setTextCopied] = useState(false);

  const copyToClipboard = () => {
    if (!navigator.clipboard || !text) {
      return;
    }

    navigator.clipboard.writeText(text);
    setTextCopied(true);
    setTimeout(() => setTextCopied(false), timeout);
  };
  return { copyNotificationTimeout, copyToClipboard };
};

export default useCopyToClipboard;
