export interface HeaderProps {
    profile: {
        username: string;
    } | null;
}

export interface FooterProps {
    contacts: {
        email: string;
        phone: string;
    };
}

export interface FieldProps {
    field: {
        id: number;
        label: string;
        type: string;
        value: string;
        required: boolean;
        options?: string[];
    };
    onChange: (id: number, value: string) => void;
}

interface FieldType {
    id: number;
    label: string;
    type: string;
    value: string;
    required: boolean;
    options?: string[];
}

export interface EditViewProps {
    fields: FieldType[];
    onChange: (id: number, value: string) => void;
}

interface CardData {
    id: number;
    quote: string;
    word: string;
    example: string;
    translation: string;
    isFlipped: boolean;
    onFlip: () => void;
}

export interface CardListProps {
    cards: CardData[];
}

export interface CardProps {
    quote: string;
    word: string;
    example: string;
    translation: string;
    isFlipped: boolean;
    onFlip: () => void;
}

export interface Word {
    id: number;
    word: string;
    example: string;
    translation: string;
}

export interface WordsState {
    words: Word[];
    loading: boolean;
    error: string | null;
}

export interface AuthState {
    isAuthenticated: boolean;
    user: {
        username: string;
    } | null;
}

