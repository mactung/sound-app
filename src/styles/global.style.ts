export const Colors = {
    // Deep-violet sleep/meditation palette (Sleepie-style).
    primary: '#150A2B', // deep base (dark backdrops)
    secondary: '#241539', // tab bar / raised surface
    danger: '#E5484D',
    white: '#ffffff',
    gray: '#BDBDBD',
    gray_light: '#E0E0E0',
    light: '#A99BC7', // muted lavender
    silver: '#C0C0C0',
    dark: '#0F0620',
    black: '#000',
    teal: '#008080',
    orange: '#FFA863',
    darkorange: '#E76F51',
    green: '#006400',
    gold: '#DAA520',
    bright: '#B794F6',
    background: '#1C0D38',
    opacity_background: 'rgba(30, 18, 52, 0.9)',

    // --- Purple design tokens ---
    accent: '#8B5CF6', // vivid violet — main highlight/control
    accent2: '#C46BE0', // pink-violet secondary
    onAccent: '#FFFFFF', // text/icons placed on top of accent
    card: '#241539', // raised surface (list rows, tiles)
    sheet: '#1F1235', // bottom-sheet / modal panel background
    overlay: 'rgba(15, 8, 30, 0.65)', // dimmed modal backdrop
    textMuted: '#A99BC7', // secondary text (lavender)
    divider: 'rgba(255, 255, 255, 0.08)',
    glassBorder: 'rgba(139, 92, 246, 0.35)',
    branch: '#7C6F63',
};

// Vertical gradient stops for the app background — deep violet night.
export const BackgroundGradient = ['#2A1250', '#1C0D38', '#120726'];

export const BACKGROUND_RANDOM = ['#40E0D0', '#FF8C00', '#FF0080', '#659999', '#f4791f'];

export const Radius = {
    sm: 10,
    md: 16,
    lg: 24,
    pill: 999,
};

export const Spacing = {
    xs: 6,
    sm: 12,
    md: 20,
    lg: 28,
};

/**
 * Shared props for react-native-modal to make every modal open/close feel
 * smooth and gentle (relaxing) instead of snappy. Spread onto <Modal />.
 */
export const ModalAnim = {
    animationIn: 'fadeInUp' as const,
    animationOut: 'fadeOutDown' as const,
    animationInTiming: 420,
    animationOutTiming: 320,
    backdropTransitionInTiming: 420,
    backdropTransitionOutTiming: 320,
    backdropOpacity: 0.6,
    useNativeDriverForBackdrop: true,
    hideModalContentWhileAnimating: true,
};
