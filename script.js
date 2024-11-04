const evilButton = document.getElementById("evil-button");

evilButton.addEventListener("click", () => {
  alert("Nice try!");
  window.close();
});

const OFFSET = 100;

document.addEventListener("mousemove", (e) => {
  const x = e.pageX;
  const y = e.pageY;
  const buttonBox = evilButton.getBoundingClientRect();
  const horizontalDistance = distanceFromCenter(
    buttonBox.x,
    x,
    buttonBox.width
  );
  const verticalDistance = distanceFromCenter(buttonBox.y, y, buttonBox.height);
  const horizontalOffset = buttonBox.width / 2 + OFFSET;
  const verticalOffset = buttonBox.height / 2 + OFFSET;
});

function distanceFromCenter(boxPosition, boxSize, mousePosition) {
  return boxPosition - mousePosition + boxSize / 2;
}
