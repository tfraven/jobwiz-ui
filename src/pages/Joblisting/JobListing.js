import React from 'react';
import './JobListing.css';

function JobListing() {
  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Tech Corp',
      location: 'New York, NY',
      salary: '$80,000 - $100,000',
      description: 'We are looking for a skilled frontend developer to join our team.',
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'Innovatech',
      location: 'San Francisco, CA',
      salary: '$90,000 - $110,000',
      description: 'Seeking a backend developer with experience in Node.js and MongoDB.',
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      company: 'Design Studio',
      location: 'Remote',
      salary: '$70,000 - $90,000',
      description: 'Creative UI/UX designer needed to create stunning user interfaces.',
    },
    {
      id: 4,
      title: 'UI/UX Designer',
      company: 'Design Studio',
      location: 'Remote',
      salary: '$70,000 - $90,000',
      description: 'Creative UI/UX designer needed to create stunning user interfaces.',
    },
  ];

  return (
    <div className="job-listings-container">
      <h2 className="job-listings-title">Available Job Listings</h2>
      <div className="job-listings">
        {jobs.map((job) => (
          <div key={job.id} className="job-card">
            <h3 className="job-title">{job.title}</h3>
            <p className="job-company">{job.company}</p>
            <p className="job-location">{job.location}</p>
            <p className="job-salary">{job.salary}</p>
            <p className="job-description">{job.description}</p>
            <button className="btn-apply">Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobListing;
