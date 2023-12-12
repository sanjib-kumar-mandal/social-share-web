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
}

export interface LinkedinAttributes {
    url?: string;
    title?: string;
    description?: string;
    source?: string;
}

export interface PinterestAttributes {
    media?: string;
    description?: string;
    url?: string;
}

export interface RedditAttributes {
    subReddit?: string;
    url?: string;
    title?: string;
}

export interface TwitterAttributes {
    url?: string;
    via?: string;
    text?: string;
    hashtags?: string;
}

export interface WhatsappAttributes {
    url?: string;
    text?: string;
}

export interface DSCVRAttributes {
    url?: string;
    text?: string;
    title?: string;
    portal?: string;
}

export interface HackerNewsAttributes {
    url?: string;
    text?: string;
}

export interface OpenChatAttributes {
    url?: string;
    text?: string;
}

export interface TelegramAttributes {
    text?: string;
    url?: string;
}

export interface EmailAttributes {
    to: string;
    body?: string;
    subject?: string;
    cc?: string;
    bcc?: string;
}

export interface LineAttributes {
    url?: string;
}

export interface TumblerAttributes {
    canonicalUrl?: string;
}