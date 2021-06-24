export default function FlashCards({
  id,
  title = 'Title',
  description = 'Description that contain more words than title',
  showFlashCardTitle = true,
  onToggleFlashCard = null,
}) {
  const fontSizeClassName = showFlashCardTitle ? 'text-xl' : 'text-sm';

  function hadleCardClick() {
    if (onToggleFlashCard) {
      onToggleFlashCard(id);
    }
  }

  return (
    <div
      className={`shadow-lg p-4 m-2 w-80 h-48 bg-blue cursor-pointer
                  flex flex-row items-center justify-center
                  font-semibold ${fontSizeClassName}`}
      style={{ fontFamily: 'monospace' }}
      onClick={hadleCardClick}
    >
      {showFlashCardTitle ? title : description}
    </div>
  );
}
