import { useState } from 'react';

export default function FlashCards({
  title = 'Title',
  description = 'Description that contain more words than title',
}) {
  const [showTitle, setShowTitle] = useState(true);
  const fontSizeClassName = showTitle ? 'text-xl' : 'text-sm';

  function hadleCardClick() {
    setShowTitle(currentShowTitle => !currentShowTitle);
  }

  return (
    <div
      className={`shadow-lg p-4 m-2 w-80 h-48 bg-blue cursor-pointer
                  flex flex-row items-center justify-center
                  font-semibold ${fontSizeClassName}`}
      style={{ fontFamily: 'monospace' }}
      onClick={hadleCardClick}
    >
      {showTitle ? title : description}
    </div>
  );
}
