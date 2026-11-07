import { useEffect, useRef, useState } from 'react'
import './App.css'

function WeddingImage({ id, src, alt, className = '', eager = false, position, onClick }) {
  const imageSrc = src || (id && id.startsWith('/') ? id : (id ? `/photo/curated/${id}.webp` : ''))
  const fallbackSrc = id && !id.startsWith('/') && !src ? `/photo/curated/${id}.jpg` : imageSrc

  return (
    <img
      className={className}
      src={imageSrc}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : 'auto'}
      style={position ? { objectPosition: position } : undefined}
      onClick={onClick}
      onError={(e) => {
        if (fallbackSrc && e.currentTarget.src !== fallbackSrc) {
          e.currentTarget.src = fallbackSrc
        }
      }}
    />
  )
}

const experiences = [
  {
    number: '01',
    title: 'Luxury Wedding Celebrations',
    text: 'Grand, deeply personal celebrations imagined with artistry and produced without compromise.',
    id: 'exp-luxury',
    alt: 'Grand royal wedding celebration stage with floral architecture and circular halo',
  },
  {
    number: '02',
    title: 'Destination Weddings',
    text: 'Remarkable places transformed into intimate worlds that belong entirely to you.',
    id: 'exp-destination',
    alt: 'Hilltop destination wedding ceremony framed by mountain vistas and floral garlands',
  },
  {
    number: '03',
    title: 'Stage & Floral Design',
    text: 'Immersive floral environments, sculptural stages and unforgettable first impressions.',
    id: 'exp-stage',
    alt: 'Signature lakefront botanical canopy mandap and stage production',
  },
  {
    number: '04',
    title: 'Reception & Entertainment',
    text: 'Atmospheric evenings where lighting, music and hospitality move in perfect rhythm.',
    id: 'exp-reception',
    alt: 'Heritage palace grand staircase royal wedding procession',
  },
]

const portfolio = [
  {
    title: 'A Ceremony in Bloom',
    place: 'The Lakefront Mandap',
    id: 'portfolio-01',
    alt: 'Waterfront botanical mandap with mirrored reflection runway over the lake',
    shape: 'hero-tile',
  },
  {
    title: 'A Portrait of Two',
    place: 'The Royal Couple',
    id: 'portfolio-02',
    alt: 'Bride and groom in handcrafted royal crimson and ivory wedding couture',
    shape: 'portrait-tile',
  },
  {
    title: 'Forever, Hand in Hand',
    place: 'Garden Serenity',
    id: 'portfolio-03',
    alt: 'Romantic couple in traditional South Indian gold silk among lush Kerala palms',
    shape: 'portrait-tile tall-tile',
  },
  {
    title: 'Joy in Every Step',
    place: 'The Procession',
    id: 'portfolio-04',
    alt: 'Joyous couple walking down the mirrored aisle with fresh floral showers',
    shape: 'landscape-tile',
  },
  {
    title: 'Palace Elegance',
    place: 'Grand Staircase',
    id: 'portfolio-05',
    alt: 'Royal couple descending heritage palace staircase with brass balustrades',
    shape: 'small-tile',
  },
  {
    title: 'An Evening to Remember',
    place: 'The Grand Stage',
    id: 'portfolio-06',
    alt: 'Grand royal wedding stage with massive floral wall and Better Together halo',
    shape: 'wide-tile',
  },
  {
    title: 'Vows by the Sea',
    place: 'Beachside Mandap',
    id: 'portfolio-07',
    alt: 'Coastal wedding with wooden timber floral canopy overlooking ocean waves',
    shape: 'landscape-tile',
  },
  {
    title: 'Moments of Pure Joy',
    place: 'Candid Portrait',
    id: 'portfolio-08',
    alt: 'Radiant bride and groom sharing an authentic smile on their wedding celebration',
    shape: 'portrait-tile',
  },
  {
    title: 'Golden Hour Splendor',
    place: 'Sacred Mandap',
    id: 'portfolio-09',
    alt: 'Bride and groom framed through sunlit sheer golden drapes',
    shape: 'landscape-tile',
  },
  {
    title: 'Sacred Agni & Eternal Vows',
    place: 'Vedic Rituals',
    id: 'portfolio-10',
    alt: 'Traditional Hindu wedding sacred fire Agni ceremony and floral offerings',
    shape: 'portrait-tile final-tile',
  },
]

const destinations = [
  { name: 'Kerala', note: 'Backwater serenity', id: 'dest-kerala' },
  { name: 'Goa', note: 'Barefoot elegance', id: 'dest-goa' },
  { name: 'Rajasthan', note: 'Heritage grandeur', id: 'dest-rajasthan' },
  { name: 'Udaipur', note: 'Palace romance', id: 'dest-udaipur' },
  { name: 'Beyond', note: 'International destinations', id: 'dest-beyond' },
]

const process = [
  ['01', 'Discover', 'Understanding your dreams, your story and the atmosphere you want to create.'],
  ['02', 'Design', 'Shaping every visual, sensory and emotional layer of your wedding experience.'],
  ['03', 'Plan', 'Perfecting each detail through calm expertise, care and uncompromising precision.'],
  ['04', 'Celebrate', 'Bringing everything to life so you can be completely present in the moment.'],
]

function Arrow({ diagonal = false }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="arrow-icon">
      <path d={diagonal ? 'M5 19 19 5M9 5h10v10' : 'M4 12h16m-6-6 6 6-6 6'} />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".8" className="icon-fill" />
    </svg>
  )
}

const weddingVideos = [
  {
    id: 'craft-wedding-reel',
    title: 'A Floral Symphony',
    subtitle: 'Signature Mandap & Stage Production',
    category: 'Stage & Decor',
    duration: '0:27',
    src: '/media/craft-wedding-reel.mp4',
    poster: '/media/posters/craft-wedding-reel.webp',
    aspect: 'portrait',
    badge: 'Mandap Design',
    description: 'Immersive floral architecture, sculptural stage elements and warm ambient lighting designed to frame sacred wedding moments.',
    highlights: ['Bespoke Floral Arches', 'Ambient Stage Lighting', 'Symphonic Decor Composition']
  },
  {
    id: 'IMG_4756',
    title: 'Sparks & Celebration',
    subtitle: 'Daniya & Maathan Grand Entry',
    category: 'Grand Entrances',
    duration: '0:32',
    src: '/media/IMG_4756.mp4',
    poster: '/media/posters/IMG_4756.webp',
    aspect: 'portrait',
    badge: 'Pyro Entrance',
    description: 'Euphoric energy and sheer joy as cold pyrotechnic sparklers illuminate the reception entrance for Daniya & Maathan surrounded by dancing family and friends.',
    highlights: ['Cold Pyrotechnics (Sparklers)', 'Choreographed Procession', 'High-Energy Music Coordination']
  },
  {
    id: 'IMG_2968',
    title: 'The Imperial Stage',
    subtitle: 'Opulent Architectural Stagecraft',
    category: 'Stage & Decor',
    duration: '0:37',
    src: '/media/IMG_2968.mp4',
    poster: '/media/posters/IMG_2968.webp',
    aspect: 'portrait',
    badge: 'Royal Stage',
    description: 'A grand multi-tiered royal wedding stage with crystal chandeliers, intricate jaali work backdrops, and cascading flower arrangements.',
    highlights: ['Tiered Royal Platform', 'Crystal Chandeliers', 'Intricate Jaali Backdrop']
  },
  {
    id: 'IMG_8511',
    title: 'Sacred Vows & Agni',
    subtitle: 'Vedic Ceremonial Traditions',
    category: 'Rituals & Traditions',
    duration: '1:47',
    src: '/media/IMG_8511_web.mp4',
    poster: '/media/posters/IMG_8511.webp',
    aspect: 'landscape',
    badge: 'Vedic Rituals',
    description: 'The profound beauty of traditional rituals: the sacred fire (havan), decorated kalash, turmeric offerings, and Vedic rites captured with cinematic reverence.',
    highlights: ['Sacred Fire (Havan) Altar', 'Traditional Kalash & Flowers', 'Vedic Puja Decor']
  },
  {
    id: 'IMG_0414',
    title: 'Portraits in Grace',
    subtitle: 'Couple Scenography & Elegance',
    category: 'Couple Stories',
    duration: '0:23',
    src: '/media/IMG_0414.mp4',
    poster: '/media/posters/IMG_0414.webp',
    aspect: 'portrait',
    badge: 'Couple Portrait',
    description: 'Timeless romance captured against lush pastel floral walls, soft candelabra glows, and impeccable styling in white tuxedo and crystalline gown.',
    highlights: ['Pastel Floral Wall', 'Candelabra Scenography', 'Bespoke Seating Lounges']
  },
  {
    id: 'IMG_0459',
    title: 'The Royal Bridal Procession',
    subtitle: 'Heritage Bridal Entry',
    category: 'Rituals & Traditions',
    duration: '1:05',
    src: '/media/IMG_0459_web.mp4',
    poster: '/media/posters/IMG_0459.webp',
    aspect: 'portrait',
    badge: 'Bridal Entry',
    description: 'The bride walks gracefully under an ornate floral canopy and umbrella, accompanied by loved ones in an emotional and regal procession.',
    highlights: ['Handcrafted Floral Canopy', 'Traditional Accompanying Attendants', 'Emotional Family Moments']
  },
  {
    id: 'IMG_0737',
    title: 'The Story Wall & Glass Marquee',
    subtitle: 'Illuminated Welcome Installation',
    category: 'Stage & Decor',
    duration: '0:47',
    src: '/media/IMG_0737.mp4',
    poster: '/media/posters/IMG_0737.webp',
    aspect: 'portrait',
    badge: 'Welcome Concept',
    description: 'An expansive illuminated folding screen detailing the couple’s journey, set on green lawns inside a fairy-lit transparent marquee.',
    highlights: ['Illuminated Accordion Storyboard', 'Transparent Starlight Marquee', 'Bespoke Meadow Florals']
  },
  {
    id: 'IMG_9987',
    title: 'The Classic Vintage Arrival',
    subtitle: 'Bridal Arrival & Escort',
    category: 'Couple Stories',
    duration: '0:35',
    src: '/media/IMG_9987.mp4',
    poster: '/media/posters/IMG_9987.webp',
    aspect: 'portrait',
    badge: 'Vintage Arrival',
    description: 'A picture-perfect arrival: lace gown, white calla lilies and tulips, vintage automobile, and the groom gently escorting his bride.',
    highlights: ['Vintage Automobile Entrance', 'Fresh Calla Lily & Tulip Bouquet', 'Candid Emotional Moments']
  },
  {
    id: 'IMG_2758',
    title: 'Velvet Arch & Candelabras',
    subtitle: 'Regal Foyer & Entrance Styling',
    category: 'Stage & Decor',
    duration: '0:27',
    src: '/media/IMG_2758.mp4',
    poster: '/media/posters/IMG_2758.webp',
    aspect: 'portrait',
    badge: 'Entrance Arch',
    description: 'Deep crimson velvet drapery, antique Persian carpet, towering brass candelabras, and sculpted red rose pillars greeting arriving guests.',
    highlights: ['Persian Carpet Runway', 'Brass Multi-Tier Candelabras', 'Sculpted Red Florals']
  },
  {
    id: 'IMG_9239',
    title: 'Under the Spotlight',
    subtitle: 'First Dance & Evening Entry',
    category: 'Grand Entrances',
    duration: '0:20',
    src: '/media/IMG_9239.mp4',
    poster: '/media/posters/IMG_9239.webp',
    aspect: 'portrait',
    badge: 'Spotlight Entry',
    description: 'Dramatic pin-spot lighting cuts through the evening darkness as the newlyweds enter with a spontaneous spin and celebration.',
    highlights: ['Pin-Spot Theatrical Lighting', 'Romantic Couple Spin', 'Evening Gala Entrance']
  },
  {
    id: 'IMG_1060',
    title: 'Origami Cranes in Bloom',
    subtitle: 'Artisanal Suspended Ceiling',
    category: 'Stage & Decor',
    duration: '0:30',
    src: '/media/IMG_1060.mp4',
    poster: '/media/posters/IMG_1060.webp',
    aspect: 'portrait',
    badge: 'Art Installation',
    description: 'Thousands of handcrafted paper cranes gracefully cascading among fresh white and blush garden roses in a floating canopy installation.',
    highlights: ['Handmade Origami Art', 'Suspended Botanical Canopy', 'Dreamlike Atmosphere']
  },
  {
    id: 'IMG_4757',
    title: 'After-Hours Ecstasy',
    subtitle: 'Intelligent Lighting & Dance Floor',
    category: 'Reception & Gala',
    duration: '0:38',
    src: '/media/IMG_4757.mp4',
    poster: '/media/posters/IMG_4757.webp',
    aspect: 'portrait',
    badge: 'Dance Floor',
    description: 'A vibrant after-party with laser effects, responsive stage lighting, and an electric atmosphere that keeps guests celebrating late into the night.',
    highlights: ['Dynamic Laser & Color Wash', 'Live DJ Production', 'Club-Grade Sound Reinforcement']
  },
  {
    id: 'IMG_0580',
    title: 'The Crimson Ballroom',
    subtitle: 'Evening Banquet Scenography',
    category: 'Reception & Gala',
    duration: '0:13',
    src: '/media/IMG_0580.mp4',
    poster: '/media/posters/IMG_0580.webp',
    aspect: 'portrait',
    badge: 'Ballroom Design',
    description: 'An intimate candlelit dining room draped in deep burgundy velour with warm glowing bell lamps, floral runners, and refined banquet place settings.',
    highlights: ['Burgundy Velvet Drapes', 'Glow Bell Pendant Lamps', 'Intimate Dining Atmosphere']
  }
]

const videoCategories = [
  'All',
  'Stage & Decor',
  'Grand Entrances',
  'Rituals & Traditions',
  'Couple Stories',
  'Reception & Gala'
]

const featuredBrandFilms = [
  {
    title: 'A Floral Symphony',
    tag: 'Mandap & Stage',
    src: '/media/craft-wedding-reel.mp4',
    poster: '/media/posters/craft-wedding-reel.webp',
    number: 'CRAFT / 001',
    description: 'Floral stagecraft & ambient lighting',
    fullVideoId: 'craft-wedding-reel',
  },
  {
    title: 'The Imperial Stage',
    tag: 'Imperial Stage',
    src: '/media/IMG_2968.mp4',
    poster: '/media/posters/IMG_2968.webp',
    number: 'CRAFT / 002',
    description: 'Crystal chandeliers & multi-tier royal stage',
    fullVideoId: 'IMG_2968',
  },
  {
    title: 'Sparks & Celebration',
    tag: 'Pyro Grand Entry',
    src: '/media/IMG_4756.mp4',
    poster: '/media/posters/IMG_4756.webp',
    number: 'CRAFT / 003',
    description: 'Daniya & Maathan · Cold pyro sparkler entry',
    fullVideoId: 'IMG_4756',
  },
  {
    title: 'The Royal Bridal Procession',
    tag: 'Bridal Walk',
    src: '/media/IMG_0459_web.mp4',
    poster: '/media/posters/IMG_0459.webp',
    number: 'CRAFT / 004',
    description: 'Handcrafted floral umbrella procession',
    fullVideoId: 'IMG_0459',
  },
  {
    title: 'Sacred Vows & Agni',
    tag: 'Vedic Rituals',
    src: '/media/IMG_8511_web.mp4',
    poster: '/media/posters/IMG_8511.webp',
    number: 'CRAFT / 005',
    description: 'Sacred fire rites & timeless rituals',
    fullVideoId: 'IMG_8511',
  },
]

const timelessMemories = [
  {
    id: 'marquee-01',
    src: '/photo/marquee/marquee-01.webp',
    fallback: '/photo/marquee/marquee-01.jpg',
    alt: 'Royal bride in embroidered red lehenga with groom in ivory sherwani',
  },
  {
    id: 'marquee-02',
    src: '/photo/marquee/marquee-02.webp',
    fallback: '/photo/marquee/marquee-02.jpg',
    alt: 'Couple on grand heritage golden staircase',
  },
  {
    id: 'marquee-03',
    src: '/photo/marquee/marquee-03.webp',
    fallback: '/photo/marquee/marquee-03.jpg',
    alt: 'Intimate bridal embrace and royal jewellery',
  },
  {
    id: 'marquee-04',
    src: '/photo/marquee/marquee-04.webp',
    fallback: '/photo/marquee/marquee-04.jpg',
    alt: 'Radiant bride portrait with floral wedding backdrop',
  },
  {
    id: 'marquee-05',
    src: '/photo/marquee/marquee-05.webp',
    fallback: '/photo/marquee/marquee-05.jpg',
    alt: 'Couple romantic portrait in royal wedding attire',
  },
  {
    id: 'marquee-06',
    src: '/photo/marquee/marquee-06.webp',
    fallback: '/photo/marquee/marquee-06.jpg',
    alt: 'Waterfront floral canopy mandap celebration',
  },
  {
    id: 'marquee-07',
    src: '/photo/marquee/marquee-07.webp',
    fallback: '/photo/marquee/marquee-07.jpg',
    alt: 'Auspicious sacred mangalsutra wedding moment',
  },
  {
    id: 'marquee-08',
    src: '/photo/marquee/marquee-08.webp',
    fallback: '/photo/marquee/marquee-08.jpg',
    alt: 'Sacred sindoor blessing tradition',
  },
  {
    id: 'marquee-09',
    src: '/photo/marquee/marquee-09.webp',
    fallback: '/photo/marquee/marquee-09.jpg',
    alt: 'Traditional ceremony under lotus buds and brass lamps',
  },
  {
    id: 'marquee-10',
    src: '/photo/marquee/marquee-10.webp',
    fallback: '/photo/marquee/marquee-10.jpg',
    alt: 'Hilltop destination wedding ceremony in Kerala',
  },
  {
    id: 'marquee-11',
    src: '/photo/marquee/marquee-11.webp',
    fallback: '/photo/marquee/marquee-11.jpg',
    alt: 'Christian wedding vows in white bridal gown',
  },
  {
    id: 'marquee-12',
    src: '/photo/marquee/marquee-12.webp',
    fallback: '/photo/marquee/marquee-12.jpg',
    alt: 'Cliffside mandap framed by mountain vistas',
  },
]

const heroMediaSlides = [
  // 01. IMAGE
  {
    type: 'image',
    id: 'hero-media-01',
    src: '/photo/hero/hero-01.webp',
    fallbackSrc: '/photo/hero/hero-01.jpg',
    title: 'Waterfront Floral Mandap & Mirrored Aisle',
    subtitle: 'Lakeside Destination Wedding Production',
    focalPoint: '50% 60%',
  },
  // 02. VIDEO
  {
    type: 'video',
    id: 'hero-media-02',
    src: '/media/IMG_8511_web.mp4',
    poster: '/media/posters/IMG_8511_web.webp',
    title: 'Sacred Vows & Vedic Agni Traditions',
    subtitle: 'Live Wedding Film · Holy Fire Ceremony',
    focalPoint: 'center 48%',
  },
  // 03. IMAGE
  {
    type: 'image',
    id: 'hero-media-03',
    src: '/photo/hero/hero-02.webp',
    fallbackSrc: '/photo/hero/hero-02.jpg',
    title: 'Grand Royal Floral Stage Production',
    subtitle: 'Bespoke Floral Wall & Halo Architecture',
    focalPoint: '50% 50%',
  },
  // 04. VIDEO
  {
    type: 'video',
    id: 'hero-media-04',
    src: '/media/craft-wedding-reel.mp4',
    poster: '/media/posters/craft-wedding-reel.webp',
    title: 'A Floral Symphony',
    subtitle: 'Live Wedding Film · Signature Stage Production',
    focalPoint: 'center 48%',
  },
  // 05. IMAGE
  {
    type: 'image',
    id: 'hero-media-05',
    src: '/photo/hero/hero-03.webp',
    fallbackSrc: '/photo/hero/hero-03.jpg',
    title: 'Golden Drapes Couple Romance',
    subtitle: 'Sunlit Royal Wedding Portrait',
    focalPoint: '50% 30%',
  },
  // 06. VIDEO
  {
    type: 'video',
    id: 'hero-media-06',
    src: '/media/IMG_4756.mp4',
    poster: '/media/posters/IMG_4756.webp',
    title: 'Sparks & Celebration — Cold Pyro Entry',
    subtitle: 'Live Wedding Film · Grand Evening Arrival',
    focalPoint: 'center 48%',
  },
  // 07. IMAGE
  {
    type: 'image',
    id: 'hero-media-07',
    src: '/photo/hero/hero-04.webp',
    fallbackSrc: '/photo/hero/hero-04.jpg',
    title: 'Lakefront Floating Mandap Stage',
    subtitle: 'Cascading Botanical Canopy',
    focalPoint: '50% 45%',
  },
  // 08. VIDEO
  {
    type: 'video',
    id: 'hero-media-08',
    src: '/media/IMG_2758.mp4',
    poster: '/media/posters/IMG_2758.webp',
    title: 'Mandap Architecture & Stagecraft in Motion',
    subtitle: 'Live Wedding Film · Bespoke Stage Production',
    focalPoint: 'center 48%',
  },
  // 09. IMAGE
  {
    type: 'image',
    id: 'hero-media-09',
    src: '/photo/hero/hero-07.webp',
    fallbackSrc: '/photo/hero/hero-07.jpg',
    title: 'Palace Grand Staircase Entrance',
    subtitle: 'Heritage Royal Procession',
    focalPoint: '50% 40%',
  },
  // 10. VIDEO
  {
    type: 'video',
    id: 'hero-media-10',
    src: '/media/IMG_0414.mp4',
    poster: '/media/posters/IMG_0414.webp',
    title: 'Craft Signature Wedding Celebration',
    subtitle: 'Live Wedding Film · Energy & Atmosphere',
    focalPoint: 'center 48%',
  },
]

function HeroSlideMediaItem({ slide, isActive, heroAudio }) {
  const videoRef = useRef(null)

  useEffect(() => {
    if (slide.type !== 'video' || !videoRef.current) return
    if (isActive) {
      videoRef.current.currentTime = 0
      const playPromise = videoRef.current.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {})
      }
    } else {
      videoRef.current.pause()
    }
  }, [isActive, slide.type])

  return (
    <div
      className={`hero-slide hero-slide--${slide.type} ${isActive ? 'hero-slide--active' : ''}`}
      aria-hidden={!isActive}
    >
      {slide.type === 'video' ? (
        <video
          ref={videoRef}
          src={slide.src}
          poster={slide.poster}
          muted={!heroAudio}
          playsInline
          loop
          preload={isActive ? 'auto' : 'metadata'}
          className="hero-slide-video"
          aria-label={slide.title}
          style={{ objectPosition: slide.focalPoint || 'center center' }}
        />
      ) : (
        <picture>
          <source srcSet={slide.src} type="image/webp" />
          <img
            src={slide.fallbackSrc}
            alt={slide.title}
            className="hero-slide-img"
            style={{ objectPosition: slide.focalPoint }}
            loading={isActive ? 'eager' : 'lazy'}
          />
        </picture>
      )}
    </div>
  )
}

function VideoReelCard({ video, isActive, onSelect, onOpenCinema }) {
  const previewRef = useRef(null)

  useEffect(() => {
    if (previewRef.current) {
      previewRef.current.play().catch(() => {})
    }
  }, [video.src])

  const handleClick = () => {
    if (onSelect) onSelect(video)
    if (onOpenCinema) onOpenCinema(video)
  }

  return (
    <article
      className={`film-card ${isActive ? 'film-card--active' : ''}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleClick()
        }
      }}
      aria-label={`Watch ${video.title} in cinema popup`}
    >
      <div className="film-card-inner">
        <img
          src={video.poster}
          alt={video.title}
          className="film-card-poster"
          loading="lazy"
        />
        <video
          ref={previewRef}
          src={video.src}
          poster={video.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="film-card-preview is-playing"
        />

        <div className="film-card-top">
          <span className="film-card-badge">{video.badge || video.category}</span>
          <span className="film-card-duration">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            {video.duration}
          </span>
        </div>

        <div className="film-card-play-btn" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <polygon points="6 4 20 12 6 20 6 4" />
          </svg>
        </div>

        <div className="film-card-scrim">
          <p className="film-card-subtitle">{video.subtitle}</p>
          <h3 className="film-card-title">{video.title}</h3>
          <div className="film-card-bottom-actions">
            <span className="film-card-status-label">
              Watch Reel ↗
            </span>
            <div className="film-card-cinema-trigger" aria-hidden="true" title="Watch in Cinema Theater">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

function CinemaModal({ video, onClose, onNavigate, onEnquire }) {
  const currentIndex = weddingVideos.findIndex((v) => v.id === video.id)
  const total = weddingVideos.length
  const videoRef = useRef(null)

  useEffect(() => {
    const handleModalKeys = (e) => {
      if (e.key === 'ArrowLeft') {
        onNavigate(-1)
      } else if (e.key === 'ArrowRight') {
        onNavigate(1)
      }
    }
    window.addEventListener('keydown', handleModalKeys)
    return () => window.removeEventListener('keydown', handleModalKeys)
  }, [onNavigate])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = false
      videoRef.current.volume = 1
      videoRef.current.currentTime = 0
      const playPromise = videoRef.current.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          if (videoRef.current) {
            videoRef.current.muted = true
            videoRef.current.play().catch(() => {})
          }
        })
      }
    }
  }, [video.src])

  return (
    <div className="cinema-modal-backdrop cinema-modal-backdrop--fullscreen" onClick={onClose}>
      <div className="cinema-modal-card cinema-modal-card--fullscreen" onClick={(e) => e.stopPropagation()}>
        {/* Floating Close Button */}
        <button
          className="cinema-modal-close"
          type="button"
          onClick={onClose}
          aria-label="Close fullscreen video"
        >
          ✕
        </button>

        {/* Minimal Floating Header Pill */}
        <div className="cinema-floating-meta">
          <span className="cinema-badge">{video.category}</span>
          <span className="cinema-floating-title">{video.title}</span>
          <span className="cinema-floating-count">{currentIndex + 1} of {total}</span>
        </div>

        {/* Fullscreen Video Stage */}
        <div className="cinema-stage cinema-stage--fullscreen">
          <div className={`cinema-player-wrapper cinema-player-wrapper--fullscreen ${video.aspect === 'landscape' ? 'cinema-player-wrapper--landscape' : 'cinema-player-wrapper--portrait'}`}>
            <video
              ref={videoRef}
              key={video.src}
              src={video.src}
              poster={video.poster}
              autoPlay
              playsInline
              controls
              className="cinema-video cinema-video--fullscreen"
            />
          </div>

          {/* Floating Prev / Next Navigation */}
          <button
            type="button"
            className="cinema-nav-btn cinema-nav-btn--prev"
            onClick={() => onNavigate(-1)}
            aria-label="Previous wedding film"
          >
            <svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <button
            type="button"
            className="cinema-nav-btn cinema-nav-btn--next"
            onClick={() => onNavigate(1)}
            aria-label="Next wedding film"
          >
            <svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>

        {/* Floating Subtle Enquire Pill */}
        <div className="cinema-floating-bottom">
          <button
            type="button"
            className="cinema-floating-enquire"
            onClick={() => onEnquire(video)}
          >
            Enquire about this celebration <Arrow />
          </button>
        </div>
      </div>
    </div>
  )
}

function HalfCircleMemoriesMarquee({ memories, onCardClick }) {
  const containerRef = useRef(null)
  const isHoveredRef = useRef(false)
  const isDraggingRef = useRef(false)
  const startXRef = useRef(0)
  const dragDistanceRef = useRef(0)
  const offsetRef = useRef(0)
  const cardElementsRef = useRef([])

  // Duplicate memories 2x (24 cards total) for smooth seamless infinite loop
  const items = [...memories, ...memories]

  useEffect(() => {
    let animId
    let lastTime = performance.now()

    const updateLoop = (now) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1)
      lastTime = now

      if (!isHoveredRef.current && !isDraggingRef.current) {
        // Continuous movement right to left
        const speed = 46 // px/s
        offsetRef.current -= speed * dt
      }

      const container = containerRef.current
      if (container) {
        const viewportW = container.clientWidth || window.innerWidth
        const isMobile = viewportW < 768
        const isSmallMobile = viewportW <= 420
        const cardW = isSmallMobile ? 132 : (isMobile ? 168 : 220)
        const cardH = isSmallMobile ? 186 : (isMobile ? 232 : 304)
        const gap = isSmallMobile ? 12 : (isMobile ? 18 : 24)
        const step = cardW + gap
        const totalCards = items.length
        const loopLen = totalCards * step
        const centerX = viewportW / 2
        const archHeight = isSmallMobile ? 24 : (isMobile ? 36 : 62)
        const maxAngle = isSmallMobile ? 5 : (isMobile ? 7 : 10)
        const maxRotY = isSmallMobile ? 10 : (isMobile ? 14 : 18)

        // Keep offset wrapped cleanly
        offsetRef.current = ((offsetRef.current % loopLen) - loopLen) % loopLen

        cardElementsRef.current.forEach((el, i) => {
          if (!el) return

          const rawX = (i * step + offsetRef.current) % loopLen
          const x = ((rawX - centerX + loopLen / 2) % loopLen) - loopLen / 2 + centerX

          const normX = (x + cardW / 2 - centerX) / (viewportW / 2)
          const absNorm = Math.abs(normX)

          if (x < -cardW * 1.5 || x > viewportW + cardW * 0.5) {
            el.style.display = 'none'
            return
          }

          el.style.display = 'block'
          el.style.width = `${cardW}px`
          el.style.height = `${cardH}px`

          // Half-circle arch: Center card is at apex (y=0), curving down gracefully on both sides
          const y = Math.pow(Math.min(absNorm, 1.3), 1.85) * archHeight
          const rotZ = normX * maxAngle
          const rotY = normX * maxRotY
          const scale = 1.0 - Math.min(absNorm * 0.12, 0.22)
          const zIndex = Math.max(1, Math.round((1 - Math.min(absNorm, 1)) * 30))

          el.style.transform = `translate3d(${x}px, ${y}px, 0) rotateZ(${rotZ}deg) rotateY(${rotY}deg) scale(${scale})`
          el.style.zIndex = zIndex
        })
      }

      animId = requestAnimationFrame(updateLoop)
    }

    animId = requestAnimationFrame(updateLoop)
    return () => cancelAnimationFrame(animId)
  }, [items.length])

  const handlePointerDown = (e) => {
    isDraggingRef.current = true
    startXRef.current = e.clientX ?? (e.touches && e.touches[0] ? e.touches[0].clientX : 0)
    dragDistanceRef.current = 0
  }

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return
    const currentX = e.clientX ?? (e.touches && e.touches[0] ? e.touches[0].clientX : 0)
    const delta = currentX - startXRef.current
    startXRef.current = currentX
    dragDistanceRef.current += Math.abs(delta)
    offsetRef.current += delta
  }

  const handlePointerUp = () => {
    isDraggingRef.current = false
  }

  return (
    <div
      ref={containerRef}
      className="half-circle-marquee-container"
      onMouseEnter={() => { isHoveredRef.current = true }}
      onMouseLeave={() => { isHoveredRef.current = false; isDraggingRef.current = false }}
      onMouseDown={handlePointerDown}
      onMouseMove={handlePointerMove}
      onMouseUp={handlePointerUp}
      onTouchStart={handlePointerDown}
      onTouchMove={handlePointerMove}
      onTouchEnd={handlePointerUp}
    >
      <div className="half-circle-stage">
        {items.map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            ref={(el) => (cardElementsRef.current[idx] = el)}
            className="half-circle-card"
            onClick={() => {
              if (dragDistanceRef.current < 6) {
                onCardClick && onCardClick(item)
              }
            }}
          >
            <img
              src={item.src}
              alt={item.alt}
              loading={idx < 8 ? 'eager' : 'lazy'}
              draggable={false}
              onError={(e) => {
                if (item.fallback && e.currentTarget.src !== item.fallback) {
                  e.currentTarget.src = item.fallback
                }
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [filmPlaying, setFilmPlaying] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    }
    return true
  })
  const [brandFilmIndex, setBrandFilmIndex] = useState(0)
  const [brandFilmAudio, setBrandFilmAudio] = useState(false)

  const [activeVideo, setActiveVideo] = useState(null)
  const [videoFilter, setVideoFilter] = useState('All')
  const [featuredFilmId, setFeaturedFilmId] = useState(weddingVideos[0].id)
  const [featuredFilmAudio, setFeaturedFilmAudio] = useState(false)
  const [featuredFilmPlaying, setFeaturedFilmPlaying] = useState(true)
  const [reelPage, setReelPage] = useState(0)
  const featuredFilmRef = useRef(null)
  const [activeStory, setActiveStory] = useState(null)
  const [plannerOpen, setPlannerOpen] = useState(false)
  const [plannerSubmitted, setPlannerSubmitted] = useState(false)

  // Hero auto-display alternating Image & Video slider state (1 image after 1 video continuously)
  const [heroSlide, setHeroSlide] = useState(0)
  const [heroPaused, setHeroPaused] = useState(false)
  const [heroAudio, setHeroAudio] = useState(false)

  const currentHeroSlide = heroMediaSlides[heroSlide]

  // Continuous alternating playback: 1 image (5s) after 1 video (6.5s)
  useEffect(() => {
    if (heroPaused) return
    const duration = currentHeroSlide.type === 'video' ? 6500 : 5000
    const timer = setTimeout(() => {
      setHeroSlide((prev) => (prev + 1) % heroMediaSlides.length)
    }, duration)
    return () => clearTimeout(timer)
  }, [heroSlide, heroPaused, currentHeroSlide.type])

  const nextHeroSlide = () => {
    setHeroSlide((prev) => (prev + 1) % heroMediaSlides.length)
  }

  const prevHeroSlide = () => {
    setHeroSlide((prev) => (prev - 1 + heroMediaSlides.length) % heroMediaSlides.length)
  }

  const [formData, setFormData] = useState({
    names: '',
    phone: '',
    email: '',
    service: 'Luxury Wedding Celebrations',
    destination: 'Kerala',
    guests: '300-500',
    date: '',
    message: '',
  })

  const filmRef = useRef(null)

  const filteredVideos = videoFilter === 'All'
    ? weddingVideos
    : weddingVideos.filter((v) => v.category === videoFilter)

  // Keep featured video aligned with active category filter and reset pagination
  useEffect(() => {
    setReelPage(0)
    if (filteredVideos.length > 0 && !filteredVideos.some((v) => v.id === featuredFilmId)) {
      setFeaturedFilmId(filteredVideos[0].id)
    }
  }, [videoFilter])

  const currentFeaturedFilm =
    filteredVideos.find((v) => v.id === featuredFilmId) ||
    filteredVideos[0] ||
    weddingVideos[0]

  const totalReelPages = Math.ceil(filteredVideos.length / 4)
  const pagedVideos = filteredVideos.slice(reelPage * 4, (reelPage + 1) * 4)

  const handleSelectFeaturedFilm = (video) => {
    setFeaturedFilmId(video.id)
    setFeaturedFilmPlaying(true)
    if (featuredFilmRef.current) {
      featuredFilmRef.current.currentTime = 0
      void featuredFilmRef.current.play()
    }
  }

  const toggleFeaturedFilmPlay = () => {
    if (!featuredFilmRef.current) return
    if (featuredFilmRef.current.paused) {
      void featuredFilmRef.current.play()
      setFeaturedFilmPlaying(true)
    } else {
      featuredFilmRef.current.pause()
      setFeaturedFilmPlaying(false)
    }
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.12 },
    )
    document.querySelectorAll('.scroll-reveal').forEach((element) => observer.observe(element))

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches && filmRef.current) {
      filmRef.current.pause()
    }
    const handleMotionChange = (e) => {
      if (e.matches) {
        filmRef.current?.pause()
        setFilmPlaying(false)
      }
    }
    mediaQuery.addEventListener?.('change', handleMotionChange)

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveStory(null)
        setPlannerOpen(false)
        setActiveVideo(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', handleKeyDown)
      mediaQuery.removeEventListener?.('change', handleMotionChange)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.08 },
    )
    const elements = document.querySelectorAll('.wedding-films .scroll-reveal')
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [videoFilter, reelPage])

  const toggleFilm = () => {
    if (!filmRef.current) return
    if (filmRef.current.paused) {
      void filmRef.current.play()
      setFilmPlaying(true)
    } else {
      filmRef.current.pause()
      setFilmPlaying(false)
    }
  }

  const handlePlannerSubmit = (e) => {
    e.preventDefault()
    setPlannerSubmitted(true)
    const text = encodeURIComponent(
      `Hello Craft Event Management! I would like to plan our wedding.\n` +
      `Names: ${formData.names}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `Celebration: ${formData.service}\n` +
      `Destination: ${formData.destination}\n` +
      `Guests: ${formData.guests}\n` +
      `Date: ${formData.date}\n` +
      `Notes: ${formData.message}`
    )
    window.open(`https://wa.me/919995000000?text=${text}`, '_blank')
  }

  return (
    <main>
      {/* 01. NAVIGATION */}
      <header className={`site-header ${scrolled || menuOpen ? 'site-header--solid' : ''}`}>
        <a href="#home" className="brand" aria-label="Craft Event Management home">
          CRAFT
          <span>EVENT MANAGEMENT</span>
        </a>
        <nav className={`nav ${menuOpen ? 'nav--open' : ''}`} aria-label="Main navigation">
          {[
            { label: 'Home', href: '#home' },
            { label: 'About', href: '#about' },
            { label: 'Films & Reels', href: '#wedding-films' },
            { label: 'Experiences', href: '#experiences' },
            { label: 'Our Stories', href: '#our-stories' },
            { label: 'Destinations', href: '#destinations' },
            { label: 'Contact', href: '#contact' },
          ].map((item) => (
            <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="header-cta"
          onClick={() => setPlannerOpen(true)}
        >
          Plan your wedding
        </button>
        <button
          className={`menu-button ${menuOpen ? 'menu-button--active' : ''}`}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </header>

      {/* 02. CINEMATIC WEDDING HERO — CONTINUOUS ALTERNATING IMAGE & VIDEO SHOWCASE */}
      <section
        id="home"
        className="hero hero--slider"
        onMouseEnter={() => setHeroPaused(true)}
        onMouseLeave={() => setHeroPaused(false)}
        aria-label="Craft Event Management Signature Celebrations"
      >
        {/* Background Alternating Slides (1 Image after 1 Video continuously) */}
        <div className="hero-slides" aria-live="polite">
          {heroMediaSlides.map((slide, idx) => (
            <HeroSlideMediaItem
              key={slide.id}
              slide={slide}
              isActive={idx === heroSlide}
              heroAudio={heroAudio}
            />
          ))}
        </div>

        <div className="hero-overlay" />

        {/* Floating Slide Navigation Arrows */}
        <button
          type="button"
          className="hero-nav-arrow hero-nav-arrow--prev"
          onClick={prevHeroSlide}
          aria-label="Previous celebration"
        >
          <svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" /></svg>
        </button>
        <button
          type="button"
          className="hero-nav-arrow hero-nav-arrow--next"
          onClick={nextHeroSlide}
          aria-label="Next celebration"
        >
          <svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" /></svg>
        </button>

        {/* Hero Headline */}
        <div className="hero-content">
          <h1 className="hero-animate hero-animate--one">
            Every Love Story <br />Deserves a Grand <em>Celebration.</em>
          </h1>
        </div>

        {/* Bottom Right: Slide Progress, Audio Toggle & Indicators */}
        <div className="hero-pagination">
          {currentHeroSlide.type === 'video' && (
            <button
              type="button"
              className={`hero-audio-btn ${heroAudio ? 'hero-audio-btn--active' : ''}`}
              onClick={() => setHeroAudio((prev) => !prev)}
              aria-label={heroAudio ? 'Mute film sound' : 'Unmute film sound'}
              title={heroAudio ? 'Mute sound' : 'Unmute film sound'}
            >
              {heroAudio ? (
                <svg viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
              ) : (
                <svg viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
              )}
              <span>{heroAudio ? 'Sound On' : 'Unmute'}</span>
            </button>
          )}

          <div className="hero-dots">
            {heroMediaSlides.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                className={`hero-dot hero-dot--${slide.type} ${idx === heroSlide ? 'hero-dot--active' : ''} ${heroPaused ? 'hero-dot--paused' : ''}`}
                onClick={() => setHeroSlide(idx)}
                aria-label={`Show ${slide.title} (${idx + 1} of ${heroMediaSlides.length} - ${slide.type})`}
                title={`${slide.type === 'video' ? '🎬 Film' : '📷 Photo'}: ${slide.title}`}
              >
                <span className="hero-dot-fill" />
              </button>
            ))}
          </div>

          <span className="hero-counter">
            <em>{String(heroSlide + 1).padStart(2, '0')}</em> / {String(heroMediaSlides.length).padStart(2, '0')}
          </span>
        </div>

        <a href="#about" className="scroll-cue" aria-label="Scroll to introduction">
          <span>Scroll</span>
          <i />
        </a>
      </section>

      {/* 03. VISUAL BRAND INTRODUCTION */}
      <section id="about" className="intro intro--redesign section">
        <div className="intro-collage scroll-reveal">
          <WeddingImage
            id="about-main"
            alt="Ananthu and Nidushi royal wedding celebration"
            className="intro-main"
          />
          <WeddingImage
            id="about-detail"
            alt="Handcrafted bridal floral artistry and intricate embroidery"
            className="intro-detail"
          />
          <span>Celebrations with soul</span>
        </div>
        <div className="intro-copy scroll-reveal reveal-delay">
          <p className="eyebrow">The Craft philosophy</p>
          <h2>
            Where Beautiful Celebrations Become <em>Timeless Memories.</em>
          </h2>
          <p className="lead">
            At Craft, we bring together creativity, thoughtful planning and exceptional event production to transform your wedding vision into an unforgettable celebration.
          </p>
          <p>
            Every setting, flower, light and guest experience is considered as part of one extraordinary story—yours.
          </p>
          <a className="text-link" href="#experiences">
            Discover our craft <Arrow />
          </a>
        </div>
      </section>

      {/* CONTINUOUS TIMELESS MEMORIES HALF-CIRCLE MARQUEE */}
      <section className="memories-section" aria-label="Timeless Wedding Memories">
        <HalfCircleMemoriesMarquee
          memories={timelessMemories}
          onCardClick={(item) => {
            setFormData((prev) => ({
              ...prev,
              message: `I would like to enquire about a wedding celebration similar to "${item.alt}".`,
            }))
            setPlannerOpen(true)
          }}
        />
      </section>

      {/* CINEMATIC WEDDING FILMS & REELS SHOWCASE */}
      <section id="wedding-films" className="wedding-films section" aria-label="Craft wedding films and celebration reels">
        <div className="films-heading scroll-reveal">
          <p className="eyebrow">Cinematic Wedding Films & Reels</p>
          <h2>
            Moments in Motion.<br /><em>Stories That Breathe.</em>
          </h2>
          <p className="films-lead">
            Experience the unfiltered energy, grand entrances, sacred rituals and bespoke stagecraft captured live across our signature celebrations.
          </p>
        </div>

        {/* Category Filter Bar */}
        <div className="films-filter-bar scroll-reveal">
          {videoCategories.map((category) => {
            const count = category === 'All'
              ? weddingVideos.length
              : weddingVideos.filter((v) => v.category === category).length
            return (
              <button
                key={category}
                type="button"
                className={`film-filter-btn ${videoFilter === category ? 'film-filter-btn--active' : ''}`}
                onClick={() => setVideoFilter(category)}
              >
                {category}
                <span className="film-filter-count">{count}</span>
              </button>
            )
          })}
        </div>

        {/* Spotlight Showcase Container matching wireframe */}
        <div className="films-spotlight-container">
          {/* 1. TOP LARGE FEATURED PLAYER CARD */}
          <div className="films-featured-stage scroll-reveal">
            <div className="featured-film-card">
              <div className="featured-film-video-wrap">
                <video
                  ref={featuredFilmRef}
                  key={currentFeaturedFilm.src}
                  src={currentFeaturedFilm.src}
                  poster={currentFeaturedFilm.poster}
                  autoPlay
                  loop
                  playsInline
                  muted={!featuredFilmAudio}
                  className="featured-film-video"
                />
                <div className="featured-film-overlay-gradient" />

                {/* Top Control Bar */}
                <div className="featured-film-topbar">
                  <div className="featured-film-quick-actions">
                    <button
                      type="button"
                      className="featured-action-btn"
                      onClick={toggleFeaturedFilmPlay}
                      aria-label={featuredFilmPlaying ? 'Pause video' : 'Play video'}
                    >
                      {featuredFilmPlaying ? (
                        <>
                          <svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
                          <span>Pause</span>
                        </>
                      ) : (
                        <>
                          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                          <span>Play</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      className={`featured-action-btn ${featuredFilmAudio ? 'featured-action-btn--active' : ''}`}
                      onClick={() => setFeaturedFilmAudio(!featuredFilmAudio)}
                      aria-label={featuredFilmAudio ? 'Mute sound' : 'Unmute sound'}
                    >
                      {featuredFilmAudio ? (
                        <>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                          <span>Sound On</span>
                        </>
                      ) : (
                        <>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
                          <span>Mute</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      className="featured-action-btn featured-action-btn--cinema"
                      onClick={() => setActiveVideo(currentFeaturedFilm)}
                      aria-label="Open fullscreen cinema theater"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
                      <span>Cinema View</span>
                    </button>
                  </div>
                </div>

                {/* Bottom Information Scrim */}
                <div className="featured-film-info">
                  <div className="featured-film-meta">
                    <p className="featured-film-subtitle">{currentFeaturedFilm.subtitle}</p>
                    <h3 className="featured-film-title">{currentFeaturedFilm.title}</h3>
                    <p className="featured-film-desc">{currentFeaturedFilm.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. BOTTOM 4 VERTICAL CARDS ROW (WIREFRAME 4-CARD QUAD) */}
          <div className="films-quad-section scroll-reveal reveal-delay">
            <div className="films-quad-header">
              <div className="films-quad-title-wrap">
                <span className="films-quad-eyebrow">CHOOSE A WEDDING CELEBRATION</span>
                <h4 className="films-quad-heading">Tap Any Reel to Watch</h4>
              </div>

              {/* Carousel / Pagination Controls */}
              {totalReelPages > 1 && (
                <div className="films-quad-pagination">
                  <span className="films-page-count">
                    Showing {reelPage * 4 + 1}–{Math.min((reelPage + 1) * 4, filteredVideos.length)} of {filteredVideos.length}
                  </span>
                  <div className="films-page-arrows">
                    <button
                      type="button"
                      className="films-page-btn"
                      disabled={reelPage === 0}
                      onClick={() => setReelPage((p) => Math.max(0, p - 1))}
                      aria-label="Previous 4 celebration reels"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
                    </button>

                    <div className="films-page-dots">
                      {Array.from({ length: totalReelPages }).map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          className={`films-dot ${reelPage === i ? 'films-dot--active' : ''}`}
                          onClick={() => setReelPage(i)}
                          aria-label={`Go to reels page ${i + 1}`}
                        />
                      ))}
                    </div>

                    <button
                      type="button"
                      className="films-page-btn"
                      disabled={reelPage >= totalReelPages - 1}
                      onClick={() => setReelPage((p) => Math.min(totalReelPages - 1, p + 1))}
                      aria-label="Next 4 celebration reels"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="films-quad-grid">
              {pagedVideos.map((video) => (
                <VideoReelCard
                  key={video.id}
                  video={video}
                  isActive={video.id === currentFeaturedFilm.id}
                  onSelect={(selected) => handleSelectFeaturedFilm(selected)}
                  onOpenCinema={(selected) => setActiveVideo(selected)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BRAND FILM — BEHIND THE CELEBRATION */}
      <section className="brand-film section" aria-label="A Craft wedding transformation">
        <div className="brand-film-copy scroll-reveal">
          <p className="eyebrow">Behind the celebration</p>
          <h2>
            The Beauty Is<br />in Every <em>Detail.</em>
          </h2>
          <p>
            From the first floral stem to the final glow of the stage, watch real Craft wedding celebrations come together with intention, artistry and care.
          </p>

          {/* Film Selector Pills */}
          <div className="film-selector-bar">
            {featuredBrandFilms.map((film, index) => (
              <button
                key={film.title}
                type="button"
                className={`film-selector-pill ${brandFilmIndex === index ? 'film-selector-pill--active' : ''}`}
                onClick={() => {
                  setBrandFilmIndex(index)
                  setFilmPlaying(true)
                }}
              >
                {film.tag}
              </button>
            ))}
          </div>

          <span className="film-signature">{featuredBrandFilms[brandFilmIndex].description}</span>
        </div>

        <div className="brand-film-visual scroll-reveal reveal-delay">
          <div className="film-frame">
            <video
              ref={filmRef}
              key={featuredBrandFilms[brandFilmIndex].src}
              src={featuredBrandFilms[brandFilmIndex].src}
              poster={featuredBrandFilms[brandFilmIndex].poster}
              autoPlay
              muted={!brandFilmAudio}
              loop
              playsInline
              preload="metadata"
              aria-label={featuredBrandFilms[brandFilmIndex].title}
            />
            <div className="film-controls-group">
              <button
                className="film-control-btn"
                type="button"
                onClick={toggleFilm}
                aria-label={filmPlaying ? 'Pause wedding film' : 'Play wedding film'}
              >
                {filmPlaying ? (
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 7v10M15 7v10" /></svg>
                ) : (
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 7 8 5-8 5Z" /></svg>
                )}
                <span>{filmPlaying ? 'Pause' : 'Play'}</span>
              </button>

              <button
                className="film-control-btn"
                type="button"
                onClick={() => setBrandFilmAudio((prev) => !prev)}
                aria-label={brandFilmAudio ? 'Mute sound' : 'Unmute sound'}
              >
                {brandFilmAudio ? (
                  <svg viewBox="0 0 24 24" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                ) : (
                  <svg viewBox="0 0 24 24" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
                )}
                <span>{brandFilmAudio ? 'Sound On' : 'Unmute'}</span>
              </button>

              <button
                className="film-control-btn"
                type="button"
                onClick={() => {
                  const targetVideo = weddingVideos.find((v) => v.id === featuredBrandFilms[brandFilmIndex].fullVideoId) || weddingVideos[0]
                  setActiveVideo(targetVideo)
                }}
                aria-label="Watch in Cinema Theater"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
                <span>Cinema</span>
              </button>
            </div>
          </div>
          <div className="film-accent">
            <WeddingImage
              src="/photo/curated/accent-waterfront.webp?v=5"
              alt="Bespoke waterfront floral canopy, royal couple and traditional brass deepams"
            />
          </div>
          <span className="film-number">{featuredBrandFilms[brandFilmIndex].number}</span>
        </div>
      </section>

      {/* 04. THE ART OF WEDDING EXPERIENCES */}
      <section id="experiences" className="experiences experiences--editorial section">
        <div className="section-heading section-heading--split scroll-reveal">
          <div>
            <p className="eyebrow">The art of weddings</p>
            <h2>
              Celebrations Beyond<br /><em>Expectations.</em>
            </h2>
          </div>
          <p>
            From the atmosphere of the first welcome to the energy of the final dance, we create weddings that are seen, felt and remembered.
          </p>
        </div>
        <div className="editorial-experiences">
          {experiences.map((experience) => (
            <article className="editorial-experience scroll-reveal" key={experience.title}>
              <a href="#contact" onClick={(e) => { e.preventDefault(); setPlannerOpen(true); }}>
                <div className="editorial-experience-image">
                  <WeddingImage id={experience.id} alt={experience.alt} />
                  <span>{experience.number}</span>
                  <div className="experience-hover">
                    <p>{experience.text}</p>
                    <Arrow diagonal />
                  </div>
                </div>
                <h3>{experience.title}</h3>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* 05. SIGNATURE WEDDING PORTFOLIO */}
      <section id="our-stories" className="portfolio section">
        <div className="portfolio-heading scroll-reveal">
          <p className="eyebrow">The signature portfolio</p>
          <h2>
            Real Celebrations.<br /><em>Extraordinary Stories.</em>
          </h2>
          <p>
            A glimpse into the worlds we have imagined—rich with ritual, beauty, joy and unforgettable detail.
          </p>
        </div>
        <div className="portfolio-grid">
          {portfolio.map((story, index) => (
            <article
              className={`portfolio-item ${story.shape} scroll-reveal`}
              key={`${story.title}-${index}`}
            >
              <div
                onClick={() => setActiveStory(story)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setActiveStory(story)}
              >
                <div className="portfolio-image">
                  <WeddingImage id={story.id} alt={story.alt} />
                  <span className="portfolio-index">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="portfolio-caption">
                  <div>
                    <span>{story.place}</span>
                    <h3>{story.title}</h3>
                  </div>
                  <Arrow diagonal />
                </div>
              </div>
            </article>
          ))}
        </div>
        <button
          type="button"
          className="portfolio-link"
          onClick={() => setPlannerOpen(true)}
        >
          View all celebrations <Arrow />
        </button>
      </section>

      {/* 06. GRAND WEDDING MOMENTS */}
      <section className="grand-moment">
        <WeddingImage
          id="grand-moment"
          alt="Panoramic lakefront mandap with mirrored reflection runway"
        />
        <div className="grand-moment-overlay" />
        <div className="grand-moment-copy scroll-reveal">
          <p className="eyebrow">The grand moment</p>
          <h2>
            Designed to Take<br />Your Breath <em>Away.</em>
          </h2>
          <p>
            From the smallest details to the grandest celebrations, every moment is thoughtfully crafted.
          </p>
        </div>
      </section>

      {/* 07. DESTINATION WEDDINGS */}
      <section id="destinations" className="destination-gallery section">
        <div className="section-heading section-heading--split scroll-reveal">
          <div>
            <p className="eyebrow">Destination weddings</p>
            <h2>
              Extraordinary Celebrations.<br />Beautiful <em>Destinations.</em>
            </h2>
          </div>
          <p>
            Palaces, coastlines and places beyond imagination—each destination becomes an unforgettable part of your story.
          </p>
        </div>
        <div className="destination-mosaic">
          {destinations.map((destination, index) => (
            <div
              className={`destination-card destination-card--${index + 1} scroll-reveal`}
              onClick={() => {
                setFormData((prev) => ({ ...prev, destination: destination.name }))
                setPlannerOpen(true)
              }}
              key={destination.name}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setFormData((prev) => ({ ...prev, destination: destination.name }))
                  setPlannerOpen(true)
                }
              }}
            >
              <WeddingImage id={destination.id} alt={`${destination.name} destination wedding setting`} />
              <div className="destination-card-overlay" />
              <span>0{index + 1}</span>
              <div>
                <p>{destination.note}</p>
                <h3>{destination.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 08. OUR APPROACH */}
      <section className="process process--redesign section">
        <div className="section-heading scroll-reveal">
          <p className="eyebrow">Our approach</p>
          <h2>
            Your Vision.<br /><em>Our Craft.</em>
          </h2>
        </div>
        <div className="process-grid">
          {process.map(([number, title, text]) => (
            <article className="process-step scroll-reveal" key={number}>
              <span>{number}</span>
              <div className="process-line" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 09. FINAL CINEMATIC CTA */}
      <section id="contact" className="contact-cta contact-cta--redesign">
        <WeddingImage
          id="contact-cta"
          alt="Atmospheric evening wedding celebration glowing under ambient lighting"
        />
        <div className="contact-overlay" />
        <div className="contact-content scroll-reveal">
          <p className="eyebrow">Your story begins here</p>
          <h2>
            Let’s Create Something<br /><em>Extraordinary.</em>
          </h2>
          <p>
            Your forever story deserves a celebration unlike any other.
          </p>
          <button
            type="button"
            className="button button--light"
            onClick={() => setPlannerOpen(true)}
          >
            Start planning your wedding
          </button>
          <div className="quick-contact">
            <a href="https://wa.me/919995000000?text=Hello%20Craft%20Event%20Management%2C%20I%20would%20like%20to%20enquire%20about%20planning%20our%20wedding." target="_blank" rel="noreferrer">
              Connect on WhatsApp
            </a>
            <span />
            <a href="https://instagram.com/craftevents.co" target="_blank" rel="noreferrer">
              @craftevents.co
            </a>
          </div>
        </div>
      </section>

      {/* 10. PREMIUM FOOTER */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="brand">
              CRAFT<span>EVENT MANAGEMENT</span>
            </a>
            <p>
              Crafting moments that last forever through thoughtful design, flawless production and extraordinary celebration.
            </p>
          </div>
          <div className="footer-column">
            <p className="footer-label">Explore</p>
            <a href="#about">Our philosophy</a>
            <a href="#wedding-films">Films & reels</a>
            <a href="#experiences">Experiences</a>
            <a href="#our-stories">Celebrations</a>
            <a href="#destinations">Destinations</a>
          </div>
          <div className="footer-column">
            <p className="footer-label">Weddings</p>
            <a href="#experiences">Luxury weddings</a>
            <a href="#experiences">Destination weddings</a>
            <a href="#experiences">Stage & floral design</a>
            <a href="#experiences">Reception production</a>
          </div>
          <div className="footer-column footer-contact">
            <p className="footer-label">Enquiries</p>
            <a href="mailto:hello@craftevents.example">hello@craftevents.example</a>
            <a href="https://wa.me/919995000000?text=Hello%20Craft%20Event%20Management%2C%20I%20would%20like%20to%20enquire%20about%20planning%20our%20wedding." target="_blank" rel="noreferrer">
              WhatsApp · +91 99950 00000
            </a>
            <p>Kerala, India · Worldwide</p>
            <a className="social" href="https://instagram.com/craftevents.co" target="_blank" rel="noreferrer">
              <InstagramIcon /> @craftevents.co
            </a>
          </div>
        </div>
        <div className="footer-wordmark">CRAFT</div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Craft Event Management</span>
          <span>Crafting moments that last forever.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>

      {/* INTERACTIVE LIGHTBOX MODAL */}
      {activeStory && (
        <div className="lightbox-backdrop" onClick={() => setActiveStory(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              type="button"
              onClick={() => setActiveStory(null)}
              aria-label="Close modal"
            >
              Close ✕
            </button>
            <div className="lightbox-image-wrapper">
              <WeddingImage id={activeStory.id} alt={activeStory.alt} />
            </div>
            <div className="lightbox-caption">
              <div>
                <span>{activeStory.place}</span>
                <h4>{activeStory.title}</h4>
              </div>
              <button
                className="button button--light"
                type="button"
                onClick={() => {
                  setActiveStory(null)
                  setFormData((prev) => ({ ...prev, message: `Inquiring about ${activeStory.title} (${activeStory.place})` }))
                  setPlannerOpen(true)
                }}
              >
                Enquire about this celebration
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CINEMATIC THEATER VIDEO MODAL */}
      {activeVideo && (
        <CinemaModal
          video={activeVideo}
          onClose={() => setActiveVideo(null)}
          onNavigate={(direction) => {
            const idx = weddingVideos.findIndex((v) => v.id === activeVideo.id)
            const nextIdx = (idx + direction + weddingVideos.length) % weddingVideos.length
            setActiveVideo(weddingVideos[nextIdx])
          }}
          onEnquire={(video) => {
            const videoTitle = video.title
            const videoSub = video.subtitle
            setActiveVideo(null)
            setFormData((prev) => ({
              ...prev,
              service: video.category === 'Rituals & Traditions' ? 'Destination Weddings' : 'Luxury Wedding Celebrations',
              message: `I would like to enquire about styling similar to "${videoTitle}" (${videoSub}).`,
            }))
            setPlannerOpen(true)
          }}
        />
      )}

      {/* INTERACTIVE WEDDING CONSULTATION PLANNER MODAL */}
      {plannerOpen && (
        <div className="modal-backdrop" onClick={() => setPlannerOpen(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              type="button"
              onClick={() => setPlannerOpen(false)}
              aria-label="Close form"
            >
              Close ✕
            </button>
            <p className="eyebrow" style={{ marginBottom: '10px' }}>Craft Event Management</p>
            <h3>Plan Your Wedding</h3>
            <p>
              Tell us about your celebration. Our creative directors and event producers will curate a bespoke concept for your special day.
            </p>

            {plannerSubmitted ? (
              <div className="modal-success">
                <h4>Thank You</h4>
                <p>Your details have been recorded and WhatsApp has been initiated. Our wedding curation team will be in touch shortly.</p>
                <button
                  type="button"
                  className="button button--dark"
                  onClick={() => {
                    setPlannerSubmitted(false)
                    setPlannerOpen(false)
                  }}
                >
                  Return to Website
                </button>
              </div>
            ) : (
              <form className="modal-form" onSubmit={handlePlannerSubmit}>
                <div className="form-group">
                  <label htmlFor="names">Couple’s Names / Family</label>
                  <input
                    id="names"
                    required
                    placeholder="e.g. Ananya & Arjun"
                    value={formData.names}
                    onChange={(e) => setFormData({ ...formData, names: e.target.value })}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone / WhatsApp</label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="+91 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="service">Celebration Type</label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option>Luxury Wedding Celebrations</option>
                      <option>Destination Weddings</option>
                      <option>Wedding Stage & Floral Design</option>
                      <option>Reception & Entertainment</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="destination">Preferred Destination</label>
                    <select
                      id="destination"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    >
                      <option>Kerala</option>
                      <option>Goa</option>
                      <option>Rajasthan</option>
                      <option>Udaipur</option>
                      <option>International Destinations</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="guests">Estimated Guest Count</label>
                    <select
                      id="guests"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    >
                      <option>Under 150 (Intimate)</option>
                      <option>150 - 300 guests</option>
                      <option>300 - 600 guests</option>
                      <option>600 - 1,200 guests</option>
                      <option>1,200+ guests (Grand Scale)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="date">Anticipated Date / Month</label>
                    <input
                      id="date"
                      type="text"
                      placeholder="e.g. December 2026"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Vision & Notes</label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Tell us about the atmosphere, mandap styling, or special preferences..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="button button--dark">
                  Connect & Send Enquiry <Arrow />
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  )
}
