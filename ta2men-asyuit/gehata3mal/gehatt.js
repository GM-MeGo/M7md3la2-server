document.addEventListener('DOMContentLoaded', () => {
    const deviceTable = document.querySelector('#deviceTable tbody');
    const createBtn = document.getElementById('createBtn');
    const deviceModal = document.getElementById('deviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const deviceForm = document.getElementById('deviceForm');
    const closeBtn = document.querySelector('.close');
  
    let editingId = null; // Track if editing a device
  
    // Open modal for new device
    createBtn.addEventListener('click', () => {
      modalTitle.innerText = 'إضافة جهه جديدة  ';
      deviceForm.reset();
      editingId = null; // Reset editing state
      deviceModal.style.display = 'block';
    });
  
    // Close modal
    closeBtn.addEventListener('click', () => {
      deviceModal.style.display = 'none';
    });
  
    // Fetch and display devices
    const loadDevices = () => {
      fetch('/devices')
        .then(response => response.json())
        .then(data => {
          deviceTable.innerHTML = '';
          data.forEach(device => {
            const row = document.createElement('tr');
            row.innerHTML = `
              <td>${device.kood}</td>
              <td>${device.asm}</td>
              <td>${device.markaz}</td>
            `;
            deviceTable.appendChild(row);
          });
        });
    };
  
    loadDevices();
  
  })
  