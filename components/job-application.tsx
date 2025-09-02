"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface JobApplicationProps {
  jobTitle: string
  jobId: string
}

export function JobApplication({ jobTitle, jobId }: JobApplicationProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    linkedinLink: "",
    phoneNumber: "",
    experienceYears: "",
    resume: null as File | null
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData(prev => ({
      ...prev,
      resume: file
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-emerald-600">Application Submitted!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-600">
            Thank you for applying to the <strong>{jobTitle}</strong> position. 
            We've received your application and will review it shortly.
          </p>
          <p className="text-sm text-slate-500">
            You should receive a confirmation email within the next few minutes. 
            Our team will get back to you within 1-2 business days.
          </p>
          <div className="pt-4 border-t border-slate-200">
            <p className="text-xs text-slate-400">
              Application ID: {jobId}-{Date.now()}
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Apply for this Position</CardTitle>
        <p className="text-sm text-slate-600">
          Ready to join TaskGrid Technologies? Fill out the application below.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              name="fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className="w-full"
            />
          </div>

          {/* Email ID */}
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
              className="w-full"
            />
          </div>

          {/* LinkedIn Link */}
          <div className="space-y-2">
            <Label htmlFor="linkedinLink">LinkedIn Profile</Label>
            <Input
              id="linkedinLink"
              name="linkedinLink"
              type="url"
              value={formData.linkedinLink}
              onChange={handleInputChange}
              placeholder="https://linkedin.com/in/yourprofile"
              className="w-full"
            />
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Phone Number *</Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              required
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="+1 (555) 123-4567"
              className="w-full"
            />
          </div>

          {/* Experience Years */}
          <div className="space-y-2">
            <Label htmlFor="experienceYears">Years of Experience *</Label>
            <Input
              id="experienceYears"
              name="experienceYears"
              type="number"
              min="0"
              max="50"
              required
              value={formData.experienceYears}
              onChange={handleInputChange}
              placeholder="e.g., 5"
              className="w-full"
            />
          </div>

          {/* Resume Upload */}
          <div className="space-y-2">
            <Label htmlFor="resume">Resume *</Label>
            <Input
              id="resume"
              name="resume"
              type="file"
              required
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100"
            />
            <p className="text-xs text-slate-500">
              Accepted formats: PDF, DOC, DOCX (max 10MB)
            </p>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-sky-600 hover:bg-sky-700"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Submitting Application...
              </span>
            ) : (
              "Submit Application"
            )}
          </Button>

          <p className="text-xs text-slate-500 text-center">
            By submitting this application, you agree to our privacy policy and terms of service.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
