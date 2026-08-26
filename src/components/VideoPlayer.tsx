import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Minimize2, Loader2, RefreshCw, ExternalLink } from 'lucide-react';

interface VideoPlayerProps {
  src: string;
}

export function VideoPlayer({ src }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Core Play/Volume states
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.8);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  // HUD Interaction UI states
  const [isHovered, setIsHovered] = useState(false);
  const [isFullViewport, setIsFullViewport] = useState(false);
  const [showCenterIcon, setShowCenterIcon] = useState<'play' | 'pause' | null>(null);

  // Check if YouTube
  const isYouTube = src.includes('youtube.com') || src.includes('youtu.be') || src.includes('watch?v=');
  const getYouTubeId = (url: string) => {
    // Standard watch URL or relative/embed match
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      return match[2];
    }
    // Fail-safe manual parse for standard watch query
    if (url.includes('v=')) {
      const parts = url.split('v=');
      if (parts[1]) {
        return parts[1].substring(0, 11);
      }
    }
    return null;
  };
  const ytId = isYouTube ? getYouTubeId(src) : null;

  if (isYouTube && ytId) {
    return (
      <div
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative bg-black border border-ananta-border overflow-hidden select-none group transition-all duration-300 ${
          isFullViewport 
            ? 'fixed inset-0 z-[9999] w-screen h-screen border-none bg-black flex items-center justify-center' 
            : 'w-full aspect-video'
        }`}
      >
        {isFullViewport && (
          <div 
            className="absolute inset-0 pointer-events-none opacity-20 filter blur-[80px] scale-110 z-0 select-none transition-all duration-500" 
            style={{ backgroundImage: `radial-gradient(circle, #00e5ff 0%, transparent 70%)` }}
          />
        )}
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1&mute=1&playlist=${ytId}&loop=1&controls=1&rel=0`}
          title="Ananta Gameplay Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full relative z-10"
        />
        {/* Cyber Grid / scanline aesthetic overlays */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.10] z-20 mix-blend-overlay" style={{ backgroundImage: 'linear-gradient(transparent 50%, rgba(0, 0, 0, 0.4) 50%)', backgroundSize: '100% 4px' }}></div>
      </div>
    );
  }

  const isTwitter = src.includes('x.com') || src.includes('twitter.com');
  const videoStreamSrc = isTwitter 
    ? 'https://www.anantagame.com/2025/0922/e6d6799d3064d53e2f473ea6d83f4179.mp4' 
    : src;

  const [videoError, setVideoError] = useState(false);
  const [currentSrcIndex, setCurrentSrcIndex] = useState(0);

  const fallbackUrls = [
    'https://www.anantagame.com/2025/0924/b09de7064df692f4abcf0b6483b41290.mp4',
    'https://www.anantagame.com/2025/0922/e6d6799d3064d53e2f473ea6d83f4179.mp4',
    'https://www.anantagame.com/2024/1205/04a8d06634d01bf5ff3d2d567cab95b5.mp4'
  ];

  const handleVideoError = () => {
    if (currentSrcIndex < fallbackUrls.length) {
      setVideoError(true);
      setCurrentSrcIndex(prev => prev + 1);
    }
  };

  const activeSrc = videoError && currentSrcIndex > 0 && currentSrcIndex <= fallbackUrls.length
    ? fallbackUrls[currentSrcIndex - 1]
    : videoStreamSrc;

  // Sync internal video volume and mute properties with React state
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.volume = volume;
      video.muted = isMuted;
    }
  }, [volume, isMuted]);

  // Reset errors when source URL prop changes
  useEffect(() => {
    setVideoError(false);
    setCurrentSrcIndex(0);
  }, [src]);

  // Adjust controls when video source changes
  useEffect(() => {
    setIsPlaying(true);
    setIsLoading(true);
    setCurrentTime(0);
    // Force reload video element on actual source stream switches
    const video = videoRef.current;
    if (video) {
      video.load();
    }
  }, [activeSrc]);

  // Track standard Fullscreen API state to stay in sync with OS fullscreen
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isFs = !!document.fullscreenElement;
      // If native fullscreen was closed, make sure fullViewport respects it
      if (!isFs && isFullViewport) {
        setIsFullViewport(false);
      }
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [isFullViewport]);

  // Keyboard shortcut support for immersive desktop navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isHovered && !isFullViewport) return; // Only process when focusing video
      if (e.code === 'Space') {
        e.preventDefault();
        togglePlay();
      } else if (e.code === 'KeyM') {
        e.preventDefault();
        toggleMute();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMuted, isPlaying, isHovered, isFullViewport]);

  // Control Functions
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
      setShowCenterIcon('pause');
    } else {
      video.play().catch(() => {});
      setIsPlaying(true);
      setShowCenterIcon('play');
    }

    // Reset center icon notification after a short interval
    setTimeout(() => {
      setShowCenterIcon(null);
    }, 600);
  };

  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      if (volume === 0) {
        setVolume(0.5); // Provide sensible default if unmuted from zero volume
      }
    } else {
      setIsMuted(true);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (vol > 0) {
      setIsMuted(false);
    } else {
      setIsMuted(true);
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video) {
      setCurrentTime(video.currentTime);
    }
  };

  const handleDurationChange = () => {
    const video = videoRef.current;
    if (video) {
      setDuration(video.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    const time = parseFloat(e.target.value);
    if (video) {
      video.currentTime = time;
      setCurrentTime(time);
    }
  };

  const toggleMaximize = async () => {
    const container = containerRef.current;
    if (!container) return;

    if (!isFullViewport) {
      // Step 1: Trigger full viewport CSS wrapper
      setIsFullViewport(true);
      // Step 2: Attempt native browser fullscreen API if allowed in the context
      try {
        if (container.requestFullscreen) {
          await container.requestFullscreen();
        } else if ((container as any).webkitRequestFullscreen) {
          await (container as any).webkitRequestFullscreen();
        }
      } catch (err) {
        console.warn('HTML5 Fullscreen API blocked/unsupported inside iframe environment. Falling back to beautifully styled fluid CSS Full-Viewport overlay.');
      }
    } else {
      setIsFullViewport(false);
      try {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          await (document as any).webkitExitFullscreen();
        }
      } catch (err) {
        // Safe to ignore on exits
      }
    }
  };

  // Human-readable timings
  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds === Infinity) return '00:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative bg-black border border-ananta-border overflow-hidden select-none group transition-all duration-300 ${
        isFullViewport 
          ? 'fixed inset-0 z-[9999] w-screen h-screen border-none bg-black flex items-center justify-center' 
          : 'w-full aspect-video'
      }`}
    >
      {/* Immersive background ambient blur glow while maximized */}
      {isFullViewport && (
        <div 
          className="absolute inset-0 pointer-events-none opacity-20 filter blur-[80px] scale-110 z-0 select-none transition-all duration-500" 
          style={{ backgroundImage: `radial-gradient(circle, #00e5ff 0%, transparent 70%)` }}
        />
      )}

      {/* Video Stream Element */}
      <video
        ref={videoRef}
        src={activeSrc}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        referrerPolicy="no-referrer"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleDurationChange}
        onDurationChange={handleDurationChange}
        onLoadStart={() => setIsLoading(true)}
        onCanPlay={() => setIsLoading(false)}
        onError={handleVideoError}
        onClick={togglePlay}
        className={`w-full max-h-full object-contain relative z-10 cursor-pointer ${
          isFullViewport ? 'h-full md:max-h-[90vh]' : 'h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300'
        }`}
      />

      {/* Cyber Grid / scanline aesthetic overlays */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.12] z-20 mix-blend-overlay" style={{ backgroundImage: 'linear-gradient(transparent 50%, rgba(0, 0, 0, 0.4) 50%)', backgroundSize: '100% 4px' }}></div>

      {/* Spin Loader */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-30 transition-all">
          <Loader2 className="w-8 h-8 text-ananta-neon animate-spin glow-neon" />
        </div>
      )}

      {/* Unmute Hint Banner - Helps bypass Autoplay blocks with quick interaction */}
      {isMuted && isPlaying && !isLoading && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={toggleMute}
          className="absolute top-4 left-4 z-30 bg-ananta-bg/90 backdrop-blur-md border border-ananta-neon/40 px-3 py-1.5 text-[0.7rem] font-mono uppercase tracking-[0.1em] text-ananta-neon shadow-lg flex items-center gap-1.5 cursor-pointer hover:bg-ananta-neon hover:text-black transition-all"
        >
          <VolumeX className="w-3.5 h-3.5 animate-pulse" />
          <span>Click to Unmute / 开启声音</span>
        </motion.div>
      )}

      {/* Twitter Video Info Overlay */}
      {isTwitter && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-4 right-4 z-30 bg-[#0c1015]/95 backdrop-blur-md border border-[#00e5ff]/30 p-3 rounded shadow-xl max-w-[85%] md:max-w-[280px] text-left"
        >
          <div className="flex items-center gap-2 mb-1.5">
            <span className="flex h-2 w-2 rounded-full bg-[#00e5ff] animate-pulse" />
            <span className="text-[0.65rem] font-mono uppercase tracking-[0.15em] text-[#00e5ff] font-bold">
              X (TWITTER) DETECTED
            </span>
          </div>
          
          <p className="text-[0.62rem] text-ananta-muted leading-relaxed font-sans mb-2.5">
            X.com prevents direct video playback inside standard web layers due to safety/CORs restrictions. 
            Enjoy our high-speed gameplay backup, or jump to original post:
            <br />
            <span className="text-white">由于 X.com 安全限制，原帖视频无法在内部直接流化。此处提供官方备用实机演示，您亦可点击下方一键查阅原神级原贴！</span>
          </p>
          
          <a 
            href={src} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-1.5 w-full justify-center bg-ananta-neon hover:bg-ananta-neon/80 text-black py-1.5 px-3 text-[0.65rem] font-mono font-bold uppercase transition-all rounded shadow-[0_0_8px_rgba(0,229,255,0.3)] hover:shadow-[0_0_12px_rgba(0,229,255,0.5)]"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Watch on X.com / 访问原贴</span>
          </a>
        </motion.div>
      )}

      {/* Animated Center Feedback Icons */}
      <AnimatePresence>
        {showCenterIcon && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            exit={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-30"
          >
            <div className="bg-black/70 border border-ananta-neon/40 p-5 rounded-full backdrop-blur-sm shadow-[0_0_20px_rgba(0,229,255,0.2)]">
              {showCenterIcon === 'play' ? (
                <Play className="w-7 h-7 text-ananta-neon fill-current" />
              ) : (
                <Pause className="w-7 h-7 text-ananta-neon" />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cyberpunk Dynamic HUD Controllers Bar */}
      <div 
        className={`absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-4 flex flex-col gap-3 transition-opacity duration-300 ${
          isHovered || isFullViewport ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Progress scrub timeline bar */}
        <div className="flex items-center gap-2 w-full">
          <div className="flex-1 relative group/scrub">
            <input
              type="range"
              min="0"
              max={duration || 100}
              step="any"
              value={currentTime}
              onChange={handleSeek}
              style={{
                background: `linear-gradient(to right, #00e5ff 0%, #00e5ff ${(currentTime / (duration || 100)) * 100}%, rgba(255,255,255,0.1) ${(currentTime / (duration || 100)) * 100}%, rgba(255,255,255,0.1) 100%)`
              }}
              className="w-full h-1 appearance-none bg-white/10 rounded-lg outline-none cursor-pointer transition-all hover:h-1.5 focus:outline-none accent-ananta-neon shadow-sm [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-ananta-neon [&::-webkit-slider-thumb]:shadow-[0_0_8px_#00e5ff]"
            />
          </div>
        </div>

        {/* Lower row buttons list & status indicators */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="text-white hover:text-ananta-neon transition-colors p-1"
              title={isPlaying ? "Pause (Space)" : "Play (Space)"}
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
            </button>

            {/* Volume controller and Slider */}
            <div className="flex items-center gap-2 group/volume">
              <button
                onClick={toggleMute}
                className="text-white hover:text-ananta-neon transition-colors p-1"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-5 h-5 text-gray-400" /> : <Volume2 className="w-5 h-5" />}
              </button>
              
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                style={{
                  background: `linear-gradient(to right, #00e5ff 0%, #00e5ff ${(isMuted ? 0 : volume) * 100}%, rgba(255,255,255,0.2) ${(isMuted ? 0 : volume) * 100}%, rgba(255,255,255,0.2) 100%)`
                }}
                className="w-16 h-1 appearance-none bg-white/15 outline-none cursor-pointer transition-all group-hover/volume:w-20 accent-ananta-neon [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-ananta-neon"
              />
            </div>

            {/* Elapsed Time Counter */}
            <div className="font-mono text-xs text-ananta-muted flex items-center tracking-wider gap-1">
              <span className="text-white">{formatTime(currentTime)}</span>
              <span>/</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Fullscreen/Maximize button */}
            <button
              onClick={toggleMaximize}
              className="text-white hover:text-ananta-neon transition-colors p-1"
              title={isFullViewport ? "Exit Fullscreen" : "Fullscreen / Maximize"}
            >
              {isFullViewport ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
