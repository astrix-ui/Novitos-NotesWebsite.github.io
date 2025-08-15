
  function openPopup() {
    document.getElementById('popup').style.display = 'block';
  }

  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }

  function submitNote() {
    const noteInput = document.getElementById('noteInput').value;
    // Do something with the submitted note (e.g., save it to a database)
    console.log('Submitted note:', noteInput);

    // Close the popup after submitting the note
    closePopup();
  }

