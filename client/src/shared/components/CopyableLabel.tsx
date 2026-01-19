import useCopyToClipboard from "../hooks/useCopyToClipboard";

interface CopyableLabelProps {
  label: string;
  text: string;
}

const CopyableLabel = ({ label, text }: CopyableLabelProps) => {
  const { copyNotificationTimeout, copyToClipboard } = useCopyToClipboard(text);

  return (
    <div className="text-xs text-muted-foreground flex items-center gap-2">
      <span>{label}: </span>
      <code className="bg-muted px-1 py-0.5 rounded hover:cursor-pointer hover:bg-muted/5" onClick={copyToClipboard}>
        {text}
      </code>
      {copyNotificationTimeout && (
        <span className="text-green-600 dark:text-green-600 animate-in fade-in duration-200">✌️ Copied!</span>
      )}
    </div>
  );
};

export default CopyableLabel;
