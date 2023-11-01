$(function () {

  const currentDate = dayjs().format(' MMMM D, YYYY')
  //sets the current day to the id currentDay in the html
  $('#currentDay').text(currentDate)

  // Define an array of time block IDs
  const timeBlockIds = [9, 10, 11, 12, 13, 14, 15, 16, 17]

  //This function is for setting the css class per time block, based on the current hour
  function updateTimeClasses(){
  
  const currentHour = dayjs().hour();

    // Loop through the time block IDs and apply classes based on the current time
    // Help with writing this function with the Xpert Learning Assistant
    timeBlockIds.forEach(function (timeBlockId) {
      const $timeBlock = $(`#hour-${timeBlockId}`);

      if (timeBlockId < currentHour) {
        $timeBlock.removeClass('present future').addClass('past');
      } else if (timeBlockId === currentHour) {
        $timeBlock.removeClass('past future').addClass('present');
      } else {
        $timeBlock.removeClass('past present').addClass('future');
      }
    });

  }

  //Calls the function, and keeps calling it again every minute. 
  updateTimeClasses();
  setInterval(updateTimeClasses, 60000)

 // Function to save user input to local storage
$('.saveBtn').on('click', function (event) { 
  // Find the closest time-block element
  //researched this with examples from stack overflow
  const timeBlockElement = $(event.target).closest('.time-block');
  // Get the timeBlockId from its ID
  const timeBlockId = timeBlockElement.attr('id');
  // Find the description element within the same time-block
  const description = timeBlockElement.find('.description').val();
  
  // Store the data in local storage
  localStorage.setItem(timeBlockId, description);
});

// Function to retrieve and display user input from local storage
function displayUserInput() {
  timeBlockIds.forEach(function (timeBlockId) {
    const description = localStorage.getItem(`hour-${timeBlockId}`);
    $(`#hour-${timeBlockId} .description`).val(description);
  });
}

displayUserInput();

  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  
});
