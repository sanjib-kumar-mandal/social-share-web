interface Styles {
    [key: string]: string;
}

export type Target = '_blank' | '_self';
export interface FacebookAttributes {
    type: 'feed' | 'share' | 'send';
    appId?: string;
    redirectUri?: string;
    link?: string;
    to?: string;
    display?: string;
    ref?: string;
    from?: string;
    source?: string;
    href?: string;
    quote?: string;
    mobileIframe?: any;
    hashtags?: string;
    style?: Styles;
    target?: Target;
}

export interface LinkedinAttributes {
    url?: string;
    title?: string;
    description?: string;
    source?: string;
    style?: Styles;
    target?: Target;
}

export interface PinterestAttributes {
    media?: string;
    description?: string;
    url?: string;
    style?: Styles;
    target?: Target;
}

export interface RedditAttributes {
    subReddit?: string;
    url?: string;
    title?: string;
    style?: Styles;
    target?: Target;
}

export interface TwitterAttributes {
    url?: string;
    via?: string;
    text?: string;
    hashtags?: string;
    style?: Styles;
    target?: Target;
}

export interface WhatsappAttributes {
    url?: string;
    text?: string;
    style?: Styles;
    target?: Target;
}

export interface DSCVRAttributes {
    url?: string;
    text?: string;
    title?: string;
    portal?: string;
    style?: Styles;
    target?: Target;
}

export interface HackerNewsAttributes {
    url?: string;
    text?: string;
    style?: Styles;
    target?: Target;
}

export interface OpenChatAttributes {
    url?: string;
    text?: string;
    style?: Styles;
    target?: Target;
}

export interface TelegramAttributes {
    text?: string;
    url?: string;
    style?: Styles;
    target?: Target;
}

export interface EmailAttributes {
    to: string;
    body?: string;
    subject?: string;
    cc?: string;
    bcc?: string;
    style?: Styles;
    target?: Target;
}

export interface LineAttributes {
    url?: string;
    style?: Styles;
    target?: Target;
}

export interface TumblerAttributes {
    canonicalUrl?: string;
    style?: Styles;
    target?: Target;
}