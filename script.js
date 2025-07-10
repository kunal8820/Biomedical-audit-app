document.getElementById('auditForm').addEventListener('submit', function(e) {
  e.preventDefault();

  navigator.geolocation.getCurrentPosition(function(position) {
    document.getElementById('latitude').value = position.coords.latitude;
    document.getElementById('longitude').value = position.coords.longitude;

    const form = document.getElementById('auditForm');
    const formData = new FormData(form);

    fetch('https://script.google.com/macros/s/AKfycbzz0PuzhJLu-LLl9TvWxqRVyJ6komFnnR-YpIEg5peOAcLzfnU_Fii1BxOjL1zrUBYSuw/exec, {
      method: 'POST',
      body: formData
    })
    .then(response => alert('✅ Submitted successfully!'))
    .catch(error => alert('❌ Submission failed.'));
  }, function(error) {
    alert('⚠️ Location access is required to submit the form.');
  });
});