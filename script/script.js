// Sample job data
let jobs = [
  {id:1, companyName:"Mobile First Corp", position:"React Native Developer", location:"Remote", type:"Full-time", salary:"40k-50k", description:"Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.", status:"All"},

  {id:2, companyName:"WebFlow Agency", position:"Web Designer & Developer", location:"Los Angeles, CA", type:"Part-time", salary:"50k-60k", description:"Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.", status:"All"},

  {id:3, companyName:"DataViz Solutions", position:"Data Visualization Specialist", location:"Boston, MA", type:"Full-time", salary:"25k-35k", description:"Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.", status:"All"},

  {id:4, companyName:"CloudFirst Inc", position:"Backend Developer", location:"Seattle, WA", type:"Full-time", salary:"60k-70k", description:"Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.", status:"All"},

  {id:5, companyName:"Innovation Labs", position:"UI/UX Engineer", location:"Austin, TX", type:"Full-time", salary:"35k-45k", description:"Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.", status:"All"},

  {id:6, companyName:"MegaCorp Solutions", position:"JavaScript Developer", location:"New York, NY", type:"Full-time", salary:"55k-65k", description:"Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.", status:"All"},

  {id:7, companyName:"StartupXYZ", position:"Full Stack Engineer", location:"Remote", type:"Full-time", salary:"45k-55k", description:"Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.", status:"All"},
  
  {id:8, companyName:"TechCorp Industries", position:"Senior Frontend Developer", location:"San Francisco, CA", type:"Full-time", salary:"40k-50k", description:"We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.", status:"All"}
];

// Current selected tab
let currentTab = "All";

// Elements
const jobsContainer = document.getElementById("jobsContainer");
const tabButtons = document.querySelectorAll(".tab-btn");
const totalCountEl = document.getElementById("totalCount");
const interviewCountEl = document.getElementById("interviewCount");
const rejectedCountEl = document.getElementById("rejectedCount");
const tabCountEl = document.getElementById("tabCount");

// Render jobs
function renderJobs() {
  jobsContainer.innerHTML = "";

  let filteredJobs = jobs.filter(job => currentTab==="All" || job.status===currentTab);

  if(filteredJobs.length === 0){
    jobsContainer.innerHTML = `
      <div class="col-span-full text-center py-10">
        <img src="jobs.png" class="mx-auto w-16 mb-4" alt="No jobs">
        <p class="text-[#002C5C] text-2xl font-bold">No jobs available</p>
      </div>`;
    tabCountEl.textContent = `0 Jobs`;
    return;
  }

  tabCountEl.textContent = `${filteredJobs.length} Jobs`;

  filteredJobs.forEach(job => {
    const card = document.createElement("div");
    card.className = "bg-gray-50 p-4 rounded shadow flex flex-col justify-between";
    card.innerHTML = `
      <h3 class="font-bold text-lg">${job.position} @ ${job.companyName}</h3>
      <p class="text-gray-600">${job.location} | ${job.type} | Salary: ${job.salary}</p>
      <p class="my-2 text-[#323B49]">${job.description}</p>
      <div class="flex gap-2 mt-2">
        <button class="interview-btn border border-green-500 px-2 py-1 bg-white text-green-500 rounded font-semibold" data-id="${job.id}">Interview</button>
        <button class="rejected-btn border border-red-500 px-2 py-1 bg-white text-red-500 font-semibold rounded" data-id="${job.id}">Rejected</button>
        <button class="delete-btn px-3 py-1 font-semibold bg-gray-300 rounded" data-id="${job.id}">Delete</button>
      </div>
    `;
    jobsContainer.appendChild(card);
  });
}

// Update dashboard counts
function updateDashboard() {
  totalCountEl.textContent = jobs.length;
  interviewCountEl.textContent = jobs.filter(j=>j.status==="Interview").length;
  rejectedCountEl.textContent = jobs.filter(j=>j.status==="Rejected").length;
}

// Handle tab switching
tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    currentTab = btn.dataset.tab;
    tabButtons.forEach(b=>b.classList.replace("bg-blue-500","bg-gray-200"));
    btn.classList.replace("bg-gray-200","bg-blue-500");
    renderJobs();
  });
});

// Handle buttons (Interview, Rejected, Delete)
jobsContainer.addEventListener("click", e=>{
  const id = Number(e.target.dataset.id);
  const job = jobs.find(j=>j.id===id);
  if(e.target.classList.contains("interview-btn")){
    job.status = (job.status==="Interview") ? "All" : "Interview";
  }
  if(e.target.classList.contains("rejected-btn")){
    job.status = (job.status==="Rejected") ? "All" : "Rejected";
  }
  if(e.target.classList.contains("delete-btn")){
    jobs = jobs.filter(j=>j.id!==id);
  }
  updateDashboard();
  renderJobs();
});

// Initial render
updateDashboard();
renderJobs();