import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { JobApplication } from "@/components/job-application"
import { notFound } from "next/navigation"
import Link from "next/link"

// Job data - in a real app, this would come from a database
const jobData = {
  "senior-workflow-engineer": {
    id: "JOB-001",
    title: "Backend Engineer",
    type: "Full-time",
    location: "Remote",
    department: "Engineering",
    whatYouWillDo: [
      "Design and implement scalable workflow automation systems",
      "Collaborate with cross-functional teams to optimize business processes",
      "Build reliable, observable platforms that handle complex workflows",
      "Lead technical discussions and architectural decisions",
      "Mentor junior engineers and contribute to team growth",
      "Work with modern technologies including cloud platforms and microservices"
    ],
    whatWeExpect: [
      "5+ years of experience in software engineering",
      "Strong background in workflow automation and process optimization",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Proficiency in modern programming languages (Python, TypeScript, Go)",
      "Understanding of microservices architecture and distributed systems",
      "Experience with CI/CD pipelines and DevOps practices",
      "Excellent communication and collaboration skills",
      "Passion for building systems that make work flow with precision"
    ],
    perks: [
      "Competitive salary with equity options",
      "100% remote work flexibility",
      "Comprehensive health, dental, and vision insurance",
      "Unlimited PTO policy",
      "Professional development budget ($3,000/year)",
      "Top-tier equipment and home office setup allowance",
      "Annual team retreats and company offsites",
      "Flexible working hours across time zones"
    ]
  },
  "integration-specialist": {
    id: "JOB-002",
    title: "Integration Specialist",
    type: "Full-time",
    location: "Remote",
    department: "Engineering",
    whatYouWillDo: [
      "Build and maintain integrations between various software systems",
      "Design APIs and integration patterns that scale",
      "Work with clients to understand integration requirements",
      "Troubleshoot and resolve integration issues",
      "Document integration processes and best practices",
      "Collaborate with engineering teams to improve integration tools"
    ],
    whatWeExpect: [
      "3+ years of experience with API development and integrations",
      "Strong knowledge of REST APIs, webhooks, and event-driven architectures",
      "Experience with integration platforms (Zapier, MuleSoft, or similar)",
      "Proficiency in at least one programming language (Python, Node.js, Java)",
      "Understanding of authentication methods (OAuth, JWT, API keys)",
      "Experience with database technologies (SQL and NoSQL)",
      "Strong problem-solving and debugging skills",
      "Customer-focused mindset with excellent communication skills"
    ],
    perks: [
      "Competitive salary with performance bonuses",
      "Fully remote position with flexible hours",
      "Health and wellness benefits package",
      "Professional development opportunities",
      "Modern tech stack and tools",
      "Collaborative team environment",
      "Opportunities for career growth",
      "Work-life balance focus"
    ]
  },
  "frontend-developer-dashboards": {
    id: "JOB-003",
    title: "Frontend Developer (Dashboards)",
    type: "Contract",
    location: "Remote",
    department: "Engineering",
    whatYouWillDo: [
      "Develop responsive and intuitive dashboard interfaces",
      "Build data visualization components and charts",
      "Implement real-time updates and interactive features",
      "Collaborate with designers to create exceptional user experiences",
      "Optimize frontend performance and accessibility",
      "Work with backend APIs to integrate data seamlessly"
    ],
    whatWeExpect: [
      "3+ years of frontend development experience",
      "Expert knowledge of React, TypeScript, and modern CSS",
      "Experience with data visualization libraries (D3.js, Chart.js, or similar)",
      "Understanding of responsive design and mobile-first development",
      "Knowledge of state management (Redux, Zustand, or Context API)",
      "Experience with testing frameworks (Jest, React Testing Library)",
      "Familiarity with design systems and component libraries",
      "Strong attention to detail and user experience focus"
    ],
    perks: [
      "Competitive contract rates",
      "Flexible working arrangements",
      "Opportunity to work on cutting-edge dashboard technology",
      "Potential for contract-to-hire conversion",
      "Access to modern development tools and resources",
      "Collaborative remote team environment",
      "Professional growth opportunities",
      "Exposure to enterprise-level projects"
    ]
  }
}

interface JobPageProps {
  params: Promise<{
    jobId: string
  }>
}

export default async function JobPage({ params }: JobPageProps) {
  const { jobId } = await params
  const job = jobData[jobId as keyof typeof jobData]

  if (!job) {
    notFound()
  }

  return (
    <main className="bg-white">
      <SiteHeader />
      <div className="px-12 py-14 lg:px-24 xl:px-32">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Careers
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Job Details Column */}
          <div className="lg:col-span-2">
            {/* Job Header */}
            <div className="border-b border-slate-200 pb-6">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-slate-900">{job.title}</h1>
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-slate-600">
                    <span className="flex items-center gap-1">
                      <span className="font-medium">Job ID:</span> {job.id}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="font-medium">Type:</span> {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="font-medium">Location:</span> {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="font-medium">Department:</span> {job.department}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* What You Will Do */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">What You Will Do</h2>
              <ul className="space-y-3">
                {job.whatYouWillDo.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-sky-600 rounded-full mt-2" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What We Expect */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">What We Expect</h2>
              <ul className="space-y-3">
                {job.whatWeExpect.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-emerald-600 rounded-full mt-2" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Perks */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Perks & Benefits</h2>
              <ul className="space-y-3">
                {job.perks.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-violet-600 rounded-full mt-2" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Application Form Column */}
          <div className="lg:col-span-1">
            <div id="apply" className="sticky top-8">
              <JobApplication jobTitle={job.title} jobId={job.id} />
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </main>
  )
}

// Generate metadata for the page
export async function generateMetadata({ params }: JobPageProps) {
  const { jobId } = await params
  const job = jobData[jobId as keyof typeof jobData]
  
  if (!job) {
    return {
      title: 'Job Not Found - TaskGrid Technologies'
    }
  }

  return {
    title: `${job.title} - Careers - TaskGrid Technologies`,
    description: `Join TaskGrid Technologies as a ${job.title}. ${job.type} position, ${job.location}. Apply now!`
  }
}
