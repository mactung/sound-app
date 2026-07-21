export const Colors = {
    primary: '#1E2652',
    secondary: '#2B3662',
    danger: '#4d194d',
    white: '#ffffff',
    gray: '#BDBDBD',
    gray_light: '#E0E0E0',
    light: '#a9d6e5',
    silver: '#C0C0C0',
    dark: '#012a4a',
    black: '#000',
    teal: '#008080',
    orange: '#FFA863',
    darkorange: '#E76F51',
    green: '#006400',
    gold: '#DAA520',
    bright: '#89c2d9',
    background: '#35245A',
    // Softer, blue-tinted translucent surface — calmer than the old flat gray.
    opacity_background: 'rgba(30, 38, 82, 0.82)',

    // --- Relaxing design tokens ---
    accent: '#9FD3E6', // soft calming blue used for highlights/controls
    accent2: '#C9B6E4', // gentle lavender secondary accent
    card: '#34335E', // raised surface (list rows, tiles)
    sheet: '#2A2A54', // bottom-sheet / modal panel background
    overlay: 'rgba(20, 22, 48, 0.6)', // dimmed modal backdrop
    textMuted: '#9AA6D4', // secondary text
    divider: 'rgba(255, 255, 255, 0.08)',
    glassBorder: 'rgba(169, 214, 229, 0.25)',
    branch: '#7C6F63', // muted twig/branch color for the hanging sound list
};

// Vertical gradient stops for the app background — soft twilight (no image).
export const BackgroundGradient = ['#3A3470', '#2B2C55', '#1B1D38'];

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
