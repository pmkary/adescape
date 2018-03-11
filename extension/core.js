
//
// ─── DETECT AD ──────────────────────────────────────────────────────────────────
//

    function isAd ( ) {
        const videoColoredProgressBar =
            document.querySelector( '.ytp-swatch-background-color' )
        const backgroundOfVideoColoredProgressBar =
            getComputedStyle( videoColoredProgressBar ).backgroundColor
        const isAd =
            backgroundOfVideoColoredProgressBar !== 'rgb(255, 0, 0)'

        return isAd
    }

//
// ─── SKIP ───────────────────────────────────────────────────────────────────────
//

    function skip ( ) {
        const video =
            document.querySelector('video')

        video.currentTime = video.duration
    }

//
// ─── SKIP ON AD ─────────────────────────────────────────────────────────────────
//

    function skipAdIfRunning ( ) {
        if ( isAd( ) )
            skip( )
    }

//
// ─── SKIP LOOP ──────────────────────────────────────────────────────────────────
//

    window.onload = ( ) =>
        setInterval( skipAdIfRunning, 1000 )

// ────────────────────────────────────────────────────────────────────────────────
