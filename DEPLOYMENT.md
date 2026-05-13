# Driving with Perks – Vercel Deployment Guide

## Overview
This guide walks you through deploying the Driving with Perks lead generation platform to Vercel with a custom domain.

## Prerequisites
- GitHub account with the repo: https://github.com/ErichPerks/Driving-With-Perks
- Vercel account (free tier is fine)
- Namecheap account (or any domain registrar)
- Database: Vercel Postgres (recommended) or external MySQL

## Step 1: Connect GitHub to Vercel

1. Go to https://vercel.com
2. Click "New Project"
3. Select "Import Git Repository"
4. Search for "Driving-With-Perks" and select it
5. Click "Import"

## Step 2: Configure Build Settings

Vercel should auto-detect the settings, but verify:

**Framework Preset:** React
**Build Command:** `pnpm install && pnpm build`
**Output Directory:** `dist`
**Install Command:** `pnpm install`

## Step 3: Set Environment Variables

In the Vercel dashboard, go to **Settings → Environment Variables** and add all required variables from `.env.example`.

Key variables:
- `DATABASE_URL` - Your database connection string
- `JWT_SECRET` - Session signing secret
- `NODE_ENV` - Set to `production`
- All `VITE_*` variables for frontend configuration

## Step 4: Deploy

1. Click "Deploy"
2. Wait for build to complete (usually 2-3 minutes)
3. Once deployed, you'll get a URL like: `https://driving-with-perks.vercel.app`

## Step 5: Set Up Custom Domain (Namecheap)

### Option A: Use Namecheap Nameservers (Recommended)

1. In Vercel, go to **Settings → Domains**
2. Click "Add Domain"
3. Enter your domain (e.g., `drivingwithperks.ca`)
4. Select "Use Namecheap Nameservers"
5. Copy the nameserver addresses
6. Go to Namecheap → Domain List → Manage
7. Go to **Nameservers** tab
8. Select "Custom DNS"
9. Paste the Vercel nameservers
10. Save and wait 24-48 hours for DNS to propagate

### Option B: Add CNAME Record

1. In Vercel, go to **Settings → Domains**
2. Click "Add Domain"
3. Select "Add CNAME"
4. Go to Namecheap → Domain List → Manage
5. Go to **Advanced DNS** tab
6. Add the CNAME record provided by Vercel
7. Save and wait for DNS to propagate

## Step 6: Verify Deployment

1. Visit your domain (e.g., `https://drivingwithperks.ca`)
2. Test the lead form on the homepage
3. Check admin dashboard at `/admin`
4. Verify SSL certificate is active (green lock icon)

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all environment variables are set
- Verify `pnpm` is available in build environment

### Database Connection Error
- Verify DATABASE_URL is correct
- Ensure database is accessible from Vercel IPs
- For Vercel Postgres, use the provided connection string

### Domain Not Resolving
- Wait 24-48 hours for DNS propagation
- Check DNS settings in Namecheap
- Use `nslookup` to verify DNS records

### SSL Certificate Error
- Vercel auto-generates SSL certificates
- Wait 24 hours for certificate to be issued
- Check Vercel dashboard for certificate status

## Monitoring

After deployment:

1. **Vercel Dashboard:** Monitor build logs and deployments
2. **Analytics:** Track visitor behavior and lead submissions
3. **Database:** Monitor lead data in Vercel Postgres dashboard
4. **Errors:** Check Vercel error logs for any issues

## Next Steps

1. Set up email notifications for new leads
2. Configure CRM automation sequences
3. Create dealer marketplace for lead sales
4. Set up analytics tracking

## Support

For issues:
1. Check Vercel build logs
2. Review environment variables
3. Test locally with `pnpm dev`
4. Contact Vercel support if needed
