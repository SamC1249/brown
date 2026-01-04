# Brown University Memorial Website - Development Tasks

## Project Overview
A memorial and community website for the Brown University shooting incident, providing a platform for students to share their stories, access resources, and find support.

## Design Specifications

### Typography
- **Kapakana**: Artsy, inspirational, and heartfelt headers
- **Roboto Bold**: Standard headers
- **Ropa Sans**: Paragraph text

### Color Palette
- **Brown**: `#4E3629` (Primary)
- **Off-white**: `#F5F1EB` (Background)
- **Green**: TBD (Primary accent)
- **Red**: `#C41E3A` (Rare highlights)

### Tone & Style
- Journalistic quality (NYT/Guardian style)
- Professional yet cozy
- Local and truthful
- Community-focused, made by people for purpose

## Website Structure

### Main Page Sections
1. **Hero Section**
   - Full-screen video/image background
   - Animated text: "To Brown and Her People"
   - Text appears word-by-word with blur effect (0.3s total)

2. **What Happened Section**
   - Scroll reveal animations
   - Subtitle and detailed text
   - Image placement (left side)
   - Interactive timeline component

3. **Read Their Stories Section**
   - 10-12 non-congruous image grid with rounded corners
   - Hover effects to enlarge and show info
   - Modal popup on click with background blur
   - Link to full stories page

4. **Image/Brown Section**
   - Gallery component showcasing Brown community
   - Centerpiece quote from Brown student

5. **How to Contribute Section**
   - Three cards: Donations, Write, Petitions
   - Links to GoFundMe pages
   - Login for Brown students
   - Petition links

6. **Purpose Section**
   - Three pillars: Truth, Permanency, Focus
   - Beautiful and stylistic presentation

### Stories of Brown Page
- Student submission display (anonymous or named)
- Tags: Story, Thoughts, Hopes
- Filtering by hearts, recency, tags
- Reply and heart functionality
- Featured gallery at top

### Components
- Professional sidebar navigation
- Login modal (UI only - Supabase integration later)
- Image galleries
- Timeline component
- Story cards with modal views
- Contribution cards

## Technical Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Database**: Supabase (to be integrated later)

## Asset Organization
- `/public/brown/`: Brown University community images
- `/public/news/`: Shooting-related images and articles

## Development Phases

### Phase 1: Setup & Foundation (Current)
- [x] Project structure examination
- [ ] Install dependencies (Framer Motion, fonts)
- [ ] Configure custom fonts
- [ ] Set up color scheme and design tokens
- [ ] Create folder structure

### Phase 2: Core Components
- [ ] Sidebar navigation
- [ ] Login modal (UI only)
- [ ] Reusable components (cards, buttons, etc.)

### Phase 3: Main Page Sections
- [ ] Hero section
- [ ] What Happened section with timeline
- [ ] Read Their Stories section
- [ ] Image/Brown gallery
- [ ] How to Contribute section
- [ ] Purpose section

### Phase 4: Stories Page
- [ ] Story grid with filtering
- [ ] Featured gallery
- [ ] Story cards and modals
- [ ] Tag system

### Phase 5: Polish & Refinement
- [ ] Animations and transitions
- [ ] Responsive design
- [ ] Accessibility improvements
- [ ] Performance optimization

## Future Integration (Not in Current Scope)
- Supabase authentication
- Database for story submissions
- Brown student verification system
- Comment/reply functionality
- Heart/like system
- Admin moderation tools

## Important Notes
- Build scaffolding and UI only
- No backend functionality yet
- Focus on visual design and user experience
- Maintain sensitivity to subject matter
- Ensure accessible and inclusive design

## Resources

### GoFundMe Links
- Medical expenses (Chinese-American victims): https://gofund.me/a24f81c87
- Jacob Spears medical expenses: https://gofund.me/a0e5fa366
- Matthew Wang medical expenses: https://gofund.me/2c14bc858

### Petition Links
- RISD alert system unification: https://www.change.org/p/unify-risd-and-brown-university-campus-alert-systems
- Brown medical/funeral expense coverage: https://www.change.org/p/urge-brown-university-to-cover-victims-medical-and-funeral-expenses

## Timeline Data

**December 13, 2025 (Saturday)**
- 4:00 PM - Shots fired in Room 166, Barus and Holley building
- 4:06 PM - Earliest police reports of shooting
- 4:22 PM - First active shooter alert issued by Brown
- Evening - Campus lockdown, police search continues
- 2:13 AM - Brown posts overnight update on Facebook

**December 14, 2025 (Sunday)**
- 5:42 AM - Brown posts that shelter-in-place has ended

**Victims**
- Ella Cook (19, sophomore from Alabama)
- Mukhammad Aziz Umurzokov (18, freshman from Virginia)
- 9 others injured

**Perpetrator**
- Cláudio Manuel Neves Valente (former Brown PhD student from Portugal)
- Also responsible for murder of MIT professor Nuno Loureiro
- December 16 - Valente died by suicide in Salem, NH storage facility
