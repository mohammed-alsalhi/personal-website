import { useTypingEffect } from '../../hooks/useTypingEffect';

const TypingText = ({ texts, className = '', typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000 }) => {
  const displayText = useTypingEffect(texts, typingSpeed, deletingSpeed, pauseTime);

  // Function to colorize UIUC letters as they appear
  const colorizeText = (text) => {
    const uiucIndex = text.indexOf('@ ');
    if (uiucIndex === -1) return text;

    const beforeUIUC = text.substring(0, uiucIndex + 2); // Include "@ "
    const afterAt = text.substring(uiucIndex + 2);

    // Colorize each letter of UIUC as it appears
    const colorizedLetters = [];
    const uiucColors = ['u1', 'i1', 'u2', 'c'];
    const uiucLetters = ['U', 'I', 'U', 'C'];

    for (let i = 0; i < afterAt.length && i < 4; i++) {
      colorizedLetters.push(
        <span key={i} className={uiucColors[i]}>{uiucLetters[i]}</span>
      );
    }

    const remaining = afterAt.substring(4);

    if (colorizedLetters.length > 0) {
      return (
        <>
          {beforeUIUC}
          <span className="uiuc-text">
            {colorizedLetters}
          </span>
          {remaining}
        </>
      );
    }

    return text;
  };

  return (
    <span className={className}>
      {colorizeText(displayText)}
      <span className="typing-cursor">|</span>
    </span>
  );
};

export default TypingText;
