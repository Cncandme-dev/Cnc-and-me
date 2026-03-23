# CNC & Me Play Store Preparation Notes

This package is prepared as a production-candidate offline-first PWA build.

Included:
- Offline-ready web app with service worker
- Web app manifest and installable icons
- Bundled mode artwork and app icons
- Privacy policy page
- Store asset starter images in `store-assets/`

Brand locked in:
- App name: CNC & Me
- Subtitle: Machining Calculator & Chip Load Tool
- Version: 1.0.0

Before Play Store submission:
1. Convert this package into an Android wrapper that loads all files locally for robust offline use.
2. Replace placeholder store art with final phone screenshots captured from a real device.
3. Finalize package ID, signing key, support email, and Play Console contact details.
4. Publish the privacy policy at a public HTTPS URL.
5. Run final device testing on Android phone and tablet, including airplane-mode launch.
6. Verify calculator outputs against the supplied test cases before release.
7. Check text scaling, dark theme readability, and landscape layout on smaller phones.
8. Freeze this version tag before generating the first signed release build.
