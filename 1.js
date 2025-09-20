const timerElement = document.getElementById("timer");
  const countDownDate = new Date("Oct 1, 2025 15:37:25").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance <= 0) {
      clearInterval(timerInterval);
      timerElement.textContent = "Time's up!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  updateCountdown(); // Show immediately
  const timerInterval = setInterval(updateCountdown, 1000);