# Social Share

## Features
- DSCVR
- Email
- Facebook
- Hacker News
- Line
- LinkedIn
- Open Chat
- Pinterest
- Reddit
- Telegram
- Tumbler
- Twitter
- WhatsApp

## Instalation
```
$ npm install social-share OR npm install 'path to your location'
```
## Getting Started
Both `show` and `hide` methods are published.

### show
Triggers the modal and needs to provide options for dynamic usage.

### hide
Clears the modal from the `DOM`

### Example

```javascript
import { 
    SocialShare, SocialMedia, 
    FacebookAttributes, LinkedinAttributes, 
    WhatsappAttributes, PinterestAttributes, 
    RedditAttributes, TwitterAttributes,
    HackerNewsAttributes, DSCVRAttributes, 
    OpenChatAttributes, TelegramAttributes, 
    EmailAttributes 
} from 'social-share';
openShare() {
        const shareObj = new SocialShare();
        shareObj.show({
            doc: document,
            title: "Social Modal",
            message: "Share this link via",
            socials: [
                {
                    type: SocialMedia.Facebook,
                    attributes: {
                        type: 'feed'
                    } as FacebookAttributes
                }, {
                    type: SocialMedia.LinkedIn,
                    attributes: {
                        url: window.location.href
                    } as LinkedinAttributes
                }, {
                    type: SocialMedia.Whatsapp,
                    attributes: {
                        url: window.location.href,
                        text: "Hi Sanjib"
                    } as WhatsappAttributes
                }, {
                    type: SocialMedia.Pinterest,
                    attributes: {
                        url: window.location.href
                    } as PinterestAttributes
                }, {
                    type: SocialMedia.Reddit,
                    attributes: {
                        url: window.location.href
                    } as RedditAttributes
                }, {
                    type: SocialMedia.Twitter,
                    attributes: {
                        url: window.location.href
                    } as TwitterAttributes
                }, {
                    type: SocialMedia.Dscvr,
                    attributes: {
                        url: window.location.href
                    } as DSCVRAttributes
                }, {
                    type: SocialMedia.HackerNews,
                    attributes: {
                        url: window.location.href
                    } as HackerNewsAttributes
                }, {
                    type: SocialMedia.OpenChat,
                    attributes: {
                        url: window.location.href
                    } as OpenChatAttributes
                }, {
                    type: SocialMedia.Telegram,
                    attributes: {
                        url: window.location.href
                    } as TelegramAttributes
                }, {
                    type: SocialMedia.Email,
                    attributes: {
                        to: 'sanjib0248@gmail.com'
                    } as EmailAttributes
                }
            ],
            copy: {
                url: 'https://web.stockedge.com',
                text: 'StockEdge'
            }
        });
    }
```