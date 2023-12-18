import { DSCVRAttributes, EmailAttributes, FacebookAttributes, HackerNewsAttributes, LineAttributes, LinkedinAttributes, OpenChatAttributes, PinterestAttributes, RedditAttributes, TelegramAttributes, TumblerAttributes, TwitterAttributes, WhatsappAttributes } from "./attributes";

export interface SocialShareOptions {
    doc: Document;
    title: string;
    message: string;
    socials?: SocialMedias;
    copy?: CopyOption;
}

interface CopyOption {
    url: string;
    text?: string;
    buttonColor?: string;
    textColor?: string;
}

export interface SocialMedias {
    [SocialMedia.Dscvr]?: DSCVRAttributes;
    [SocialMedia.Email]?: EmailAttributes;
    [SocialMedia.Facebook]?: FacebookAttributes;
    [SocialMedia.HackerNews]?: HackerNewsAttributes;
    [SocialMedia.Line]?: LineAttributes;
    [SocialMedia.LinkedIn]?: LinkedinAttributes;
    [SocialMedia.OpenChat]?: OpenChatAttributes;
    [SocialMedia.Pinterest]?: PinterestAttributes;
    [SocialMedia.Reddit]?: RedditAttributes;
    [SocialMedia.Telegram]?: TelegramAttributes;
    [SocialMedia.Tumbler]?: TumblerAttributes;
    [SocialMedia.Twitter]?: TwitterAttributes;
    [SocialMedia.Whatsapp]?: WhatsappAttributes;
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