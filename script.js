const profiles = [
  {
    platform: "Instagram",
    handle: "@trivenistudio_",
    url: "https://www.instagram.com/trivenistudio_",
  },
  {
    platform: "Facebook",
    handle: "Triveni Studio",
    url: "https://www.facebook.com/share/18wPwP2W7j/",
  },
  {
    platform: "X",
    handle: "@TriveniStudio",
    url: "https://x.com/TriveniStudio",
  },
  {
    platform: "Threads",
    handle: "@trivenistudio_",
    url: "https://www.threads.com/@trivenistudio_",
  },
];

const links = document.getElementById("links");

links.innerHTML = profiles
  .map(
    (profile) => `
      <a class="card" href="${profile.url}" target="_blank" rel="noreferrer noopener">
        <div class="meta">
          <p class="platform">${profile.platform}</p>
          <p class="handle">${profile.handle}</p>
        </div>
        <span class="arrow" aria-hidden="true">↗</span>
      </a>
    `,
  )
  .join("");

// Testimonials data (picked from provided reviews)
const testimonials = [
  { author: 'Ruby Kamble', text: 'Wonderful staff, had a great relaxing day.' },
  { author: 'Supriya Lotankar', text: 'Wonderful service. Very much satisfied. Expert services provided by Triveni & her staff like Shabnam, Irshad.' },
  { author: 'Rita Iyer', text: 'Excellent Service n Quality Products. Courteous staff. Superb pedicure, manicure, hair wash n head massage by Irshad. Excellent facial by Shabnam.' },
  { author: 'Ruhaani Nayak', text: 'It was really good and comfortable. Highly recommended.' },
  { author: 'Jyotsna Raja', text: 'Best haircuts in the locality! Great service, attitude and facilities!' },
  { author: 'Soumya N', text: 'Triveni parlour gives you complete care to your personal needs and that too at reasonable costs.' },
];

const testimonialsEl = document.getElementById('testimonials');

function renderTestimonials(active = 0) {
  testimonialsEl.innerHTML = testimonials
    .map((t, i) => `
      <div class="testimonial ${i === active ? 'active' : ''}" data-index="${i}">
        <p class="quote">“${t.text}”</p>
        <p class="author">— ${t.author}</p>
      </div>
    `)
    .join('');
}

let current = 0;
renderTestimonials(current);

// Auto-rotate and controls
setInterval(() => {
  current = (current + 1) % testimonials.length;
  renderTestimonials(current);
}, 5000);