document.addEventListener('DOMContentLoaded', function () {
    const countdownElement = document.getElementById('countdown');
    const bodyElement = document.body;
    const countdownContainer = document.getElementById('countdown-container'); // Ensure this element exists in your HTML
  
    // Set the target date and time to January 1, 2024, 00:00:00
    // const targetDate = new Date('2023-12-18T22:32:00');
    const targetDate = new Date('2024-03-24T00:00:00');
    let intervalId;
  
    function updateCountdown() {
      const now = new Date();
  
      // Check if it's New Year's Day
      if (now >= targetDate) {
        countdownElement.innerHTML = 'Happy New Year!';
        bodyElement.style.backgroundImage = 'url("https://i.pinimg.com/originals/98/85/50/9885503ab99f4172466d3299a65ec044.gif")'; // Replace with your image URL
        shutdownContainer();
        return;
      }
  
      const timeDifference = targetDate - now;
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
      countdownElement.innerHTML = `${days}D ${hours}H ${minutes}M ${seconds}S`;
    }
  
    // Update the countdown every second
    intervalId = setInterval(updateCountdown, 1000);
  
    // Initial update
    updateCountdown();
  
    function shutdownContainer() {
      console.log('Shutting down container');
      if (countdownContainer) {
        countdownContainer.style.display = 'none';
      }
      clearInterval(intervalId);
    }

  });
  