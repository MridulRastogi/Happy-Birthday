document.getElementById('celebrateButton').addEventListener('click', function() {
    window.alert('Sab enjoy yahi pe karna hai kya, party kab hai?')
      const confetti = document.getElementById('confetti');
      confetti.classList.toggle('active');
  });
  
  // Function to create firecrackers continuously
  function createFirecracker() {
      const firecrackerContainer = document.getElementById('firecrackers');
      const firecracker = document.createElement('div');
      firecracker.classList.add('firecracker');
  
      // Randomize firecracker starting position from the left
      const randomPosition = Math.random() * 100; // Random position in percentage
      firecracker.style.left = `${randomPosition}%`;
  
      firecrackerContainer.appendChild(firecracker);
  
      // Remove the firecracker after animation ends (2s duration)
      setTimeout(() => {
          firecracker.remove();
      }, 2000); // Match the duration of the firecracker animation
  }
  
  // Create a new firecracker every 0.5 second
  setInterval(createFirecracker, 500);
  
  