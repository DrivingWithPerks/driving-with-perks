# Driving with Perks – Project TODO

## Phase 1: Schema, Design System & Backend API
- [x] Design system: color palette, typography, global CSS variables
- [x] Database schema: leads table with all fields and status enum
- [x] Run migration and apply SQL
- [x] Backend: tRPC procedures for lead submission (public)
- [x] Backend: tRPC procedures for lead management (admin-protected)
- [x] Backend: owner notification on every lead submission

## Phase 2: Homepage
- [x] Top navigation bar with logo and links
- [x] Hero section with headline, subheadline, and CTA buttons
- [x] Value proposition section (3-column feature cards)
- [x] Credit rebuilding teaser section with CTA to education page
- [x] CTA section with strong call-to-action
- [x] Footer with links and contact info

## Phase 3: Multi-Step Application Form
- [x] Step 1: Personal Information (name, email, phone, address)
- [x] Step 2: Employment Details (employer, job title, years employed)
- [x] Step 3: Income Information (monthly income, pay frequency)
- [x] Step 4: Vehicle Preference (type, make, model, budget)
- [x] Step 5: Credit Situation (credit score range, bankruptcy, co-applicant)
- [x] Progress indicator and step navigation
- [x] Form validation with error states
- [x] Success confirmation screen
- [x] Submit leads to backend and trigger owner notification

## Phase 4: Landing Pages
- [x] Subprime landing page with tailored messaging and embedded form
- [x] Prime landing page with tailored messaging and embedded form
- [x] Credit Rebuilding Education page with tips and step-by-step guide

## Phase 5: Admin Dashboard
- [x] Protected admin-only route
- [x] Leads table with all submitted data
- [x] Filter by status, lead type (subprime/prime/general), and search
- [x] Status management: New, Contacted, Converted, Archived
- [x] Export leads to CSV
- [x] Lead detail modal/panel with notes editing
- [x] Stats overview cards (total, new, contacted, converted, archived)

## Phase 6: Polish & Testing
- [x] Mobile-responsive design across all pages
- [x] Consistent premium branding throughout (Driving with Perks)
- [x] Vitest unit tests passing
- [x] Final checkpoint save

## Phase 7: Logo Integration
- [x] Upload Driving with Perks logo to project
- [x] Integrate logo in navbar
- [x] Integrate logo in footer
- [x] Verify all tests pass with logo integration

## Phase 8: Legal Pages
- [x] Privacy Policy page (CCPA, GDPR, data handling)
- [x] Terms of Service page (user agreements, liability)
- [x] FCRA Disclosure page (Fair Credit Reporting Act compliance)
- [x] Add links to legal pages in footer
- [x] Test all legal pages load correctly

## Phase 9: Canadian Legal Compliance
- [x] Update Privacy Policy for PIPEDA/PECA (BC/Canada standards)
- [x] Update Terms of Service for Canadian law and Perks Ventures Ltd.
- [x] Update FCRA Disclosure for Canadian credit reporting standards
- [x] Update company name to Perks Ventures Ltd. throughout
- [x] Update contact information and mailing address references
- [x] Test all updated legal pages

## Phase 10: Lead Generation System Optimization
- [x] Simplify lead form to 6 core fields (Name, Phone, Email, Income, Credit, Employment)
- [x] Rewrite homepage copy for urgency and conversion (approval-focused messaging)
- [x] Create Bad Credit Approval funnel with optimized landing page
- [x] Create Trade-In Upgrade funnel with optimized landing page
- [x] Create First-Time Buyer funnel with optimized landing page
- [x] Implement lead qualification scoring (tier 1: $25, tier 2: $50, tier 3: $75)
- [x] Add trust elements (approval rates, testimonials, fast turnaround)
- [x] Optimize for mobile-first conversion
- [x] Create A/B test variations (headlines, CTAs)
- [x] Add lead routing logic (internal vs. dealer sales)
- [x] Test all funnels and verify conversion tracking
- [x] Save final checkpoint

## Phase 11: Canadian Localization
- [x] Remove all US-specific terminology and references
- [x] Update all funnels to Canadian context (Bad Credit, Trade-In, First-Time Buyer)
- [x] Update LeadForm with Canadian income ranges and employment terms
- [x] Update all copy to reflect Canadian financing/credit terminology
- [x] Remove US-specific trust elements (replace with Canadian equivalents)
- [x] Ensure all messaging complies with PIPEDA and Canadian lending standards
- [x] Test all pages for Canadian accuracy
- [x] Save final checkpoint with Canadian localization

## Phase 12: Logo & Color Scheme Update
- [x] Update navbar with new logo URL
- [x] Update footer with new logo URL
- [x] Redesign global CSS color palette to match logo (bright blue primary)
- [x] Update all component colors to new scheme
- [x] Update all landing pages with new colors
- [x] Update CTA buttons to match new scheme
- [x] Test color scheme across all pages
- [x] Save final checkpoint with new branding


## Phase 13: Remove US-Specific References
- [x] Remove "United States" from Home.tsx value prop
- [x] Change "nationwide" to "across Canada" in Footer
- [x] Verify all tests pass
- [x] Save final checkpoint
