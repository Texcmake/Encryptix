document.getElementById('new-job-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const jobTitle = document.getElementById('job-title').value;
    const company = document.getElementById('company').value;
    const location = document.getElementById('location').value;
    const description = document.getElementById('description').value;

    const jobList = document.getElementById('jobs');

    const jobItem = document.createElement('li');
    jobItem.innerHTML = `
        <h3>${jobTitle}</h3>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p>${description}</p>
    `;

    jobList.appendChild(jobItem);

    document.getElementById('new-job-form').reset();
});
