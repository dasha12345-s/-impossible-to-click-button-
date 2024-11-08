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
  if (
    Math.abs(horizontalDistance) <= horizontalOffset &&
    Math.abs(verticalDistance) <= verticalOffset
  ) {
    setButtonPosition(
      buttonBox.x + (horizontalOffset / horizontalDistance) * 10,
      buttonBox.y + (verticalOffset / verticalDistance) * 10
    );
  }
});

function setButtonPosition(left, top) {
  const windowBox = document.body.getBoundingClientRect();
  const buttonBox = evilButton.getBoundingClientRect();

  if (distanceFromCenter(left, windowBox.left, buttonBox.width) < 0) {
    left = windowBox.right - buttonBox.width - OFFSET;
  }
  if (distanceFromCenter(left, windowBox.right, buttonBox.width) > 0) {
    left = windowBox.left + OFFSET;
  }
  if (distanceFromCenter(top, windowBox.top, buttonBox.height) < 0) {
    top = windowBox.bottom - buttonBox.height - OFFSET;
  }
  if (distanceFromCenter(top, windowBox.bottom, buttonBox.height) > 0) {
    top = windowBox.top + OFFSET;
  }

  evilButton.style.left = `${left}px`;
  evilButton.style.top = `${top}px`;
}

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
  return boxPosition - mousePosition + boxSize / 2;
}
