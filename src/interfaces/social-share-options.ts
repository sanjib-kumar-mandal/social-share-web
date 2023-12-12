import { DSCVRAttributes, EmailAttributes, FacebookAttributes, HackerNewsAttributes, LinkedinAttributes, OpenChatAttributes, PinterestAttributes, RedditAttributes, TelegramAttributes, TwitterAttributes, WhatsappAttributes } from "./attributes";

export interface SocialShareOptions {
    doc: Document;
    title: string;
    message: string;
    socials: Array<SocialMedias>;
    copy?: CopyOption;
}

interface CopyOption {
    url: string;
    text?: string;
    buttonColor?: string;
    textColor?: string;
}

export interface SocialMedias {
    icon?: string;
    type: SocialMedia;
    style?: {
        color?: string;
        background?: string;
    },
    attributes: FacebookAttributes | LinkedinAttributes | PinterestAttributes | RedditAttributes | TwitterAttributes | WhatsappAttributes | DSCVRAttributes | HackerNewsAttributes | OpenChatAttributes | TelegramAttributes | EmailAttributes;
    target?: '_self' | '_blank';
}

export enum SocialMedia {
    Dscvr = 'dscvr',
    Facebook = "facebook",
    HackerNews = 'hackernews',
    Line = 'line',
    LinkedIn = 'linkedIn',
    OpenChat = 'openchat',
    Pinterest = 'pinterest',
    Reddit = 'reddit',
    Telegram = 'telegram',
    Tumbler = 'tumbler',
    Twitter = 'twitter',
    Whatsapp = 'whatsapp',
    Email = 'email'
}