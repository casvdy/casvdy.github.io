
// Function to handle the drag start event
function handleDragStart(event) {
  const componentId = event.target.id;
  event.dataTransfer.setData('componentId', componentId);
}

// Function to handle the drag over event (to allow drop)
function handleDragOver(event) {
  event.preventDefault(); // Necessary to allow drop
}

// Function to handle the drop event and place components on canvas
function handleDrop(event) {
  event.preventDefault();
  const componentId = event.dataTransfer.getData('componentId');
  const componentElement = document.getElementById(componentId);
  
  // Create a new component on the canvas
  const newComponent = document.createElement('div');
  newComponent.classList.add('component-item');
  newComponent.innerHTML = componentElement.innerHTML;
  newComponent.setAttribute('draggable', true);
  
  // Set initial position for the component
  const x = event.clientX - event.target.offsetLeft;
  const y = event.clientY - event.target.offsetTop;
  newComponent.style.left = `${x}px`;
  newComponent.style.top = `${y}px`;

  // Append the new component to the canvas
  const canvas = document.getElementById('canvas');
  canvas.appendChild(newComponent);
  
  // Allow dragging the new component
  newComponent.addEventListener('dragstart', handleDragStart);
}

// Add event listeners for the drag-and-drop functionality
const componentLibrary = document.querySelectorAll('.component');
componentLibrary.forEach(component => {
  component.addEventListener('dragstart', handleDragStart);
});

const canvas = document.getElementById('canvas');
canvas.addEventListener('dragover', handleDragOver);
canvas.addEventListener('drop', handleDrop);