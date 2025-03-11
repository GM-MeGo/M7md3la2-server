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
              <td>
                <button class="editBtn" data-id="${device.id}">تعديل</button>
                <button class="deleteBtn" data-id="${device.id}">حذف</button>
              </td>
            `;
            deviceTable.appendChild(row);
          });
        });
    };
  
    loadDevices();
  
    // Handle Create/Update device
    deviceForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = new FormData(deviceForm);
      const deviceData = {};
      formData.forEach((value, key) => deviceData[key] = value);
  
      const method = editingId ? 'PUT' : 'POST';
      const url = editingId ? `/devices/${editingId}` : '/devices';
  
      fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(deviceData)
      }).then(() => {
        loadDevices();
        deviceModal.style.display = 'none';
        editingId = null; // Reset editing state
      });
    });
  
    // Handle Edit/Delete actions
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('editBtn')) {
        const id = e.target.getAttribute('data-id');
        
        fetch(`/devices/${id}`)
          .then(response => response.json())
          .then(data => {
            modalTitle.innerText = 'تعديل اسم جهه / كود منشأه / مركز ';
            deviceModal.style.display = 'block';
  
            deviceForm.kood.value = data.kood;
            deviceForm.asm.value = data.asm;
            deviceForm.markaz.value = data.markaz;
            
            editingId = id; // Store the ID for updating
          });
      }
  
      if (e.target.classList.contains('deleteBtn')) {
        const id = e.target.getAttribute('data-id');
        fetch(`/devices/${id}`, { method: 'DELETE' }).then(() => {
          loadDevices();
        });
      }
    });
  });
  
  