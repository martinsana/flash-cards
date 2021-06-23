export default function Button({
  children: description = 'Button description',
  onButtonClick = null,
}) {
  function hadleButtonClick() {
    if (onButtonClick) {
      onButtonClick();
    }
  }
  return (
    <button
      className="bg-gray-200 p-2 rounded-md m-1"
      onClick={hadleButtonClick}
    >
      {description}
    </button>
  );
}
