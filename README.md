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

Both `show`, `hide` and `share` methods are published. So that you can directly share with the help of specified attributes.

### show(options)

Triggers the modal and needs to provide options for dynamic usage.

### hide(document)

Clears the modal from the `DOM`

### share(document, type, attributes)

Execute directly 

### Example

```typescript
import { SocialMedia, SocialShare } from 'social-share';
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
                    }
                }, {
                    type: SocialMedia.LinkedIn,
                    attributes: {
                        url: window.location.href
                    }
                }, {
                    type: SocialMedia.Whatsapp,
                    attributes: {
                        url: window.location.href,
                        text: "Hi Sage Savas"
                    }
                }, {
                    type: SocialMedia.Pinterest,
                    attributes: {
                        url: window.location.href
                    }
                }, {
                    type: SocialMedia.Reddit,
                    attributes: {
                        url: window.location.href
                    }
                }, {
                    type: SocialMedia.Twitter,
                    attributes: {
                        url: window.location.href
                    }
                }, {
                    type: SocialMedia.Dscvr,
                    attributes: {
                        url: window.location.href
                    }
                }, {
                    type: SocialMedia.HackerNews,
                    attributes: {
                        url: window.location.href
                    }
                }, {
                    type: SocialMedia.OpenChat,
                    attributes: {
                        url: window.location.href
                    }
                }, {
                    type: SocialMedia.Telegram,
                    attributes: {
                        url: window.location.href
                    }
                }, {
                    type: SocialMedia.Email,
                    attributes: {
                        to: 'example@domain.com'
                    }
                }
            ],
            copy: {
                url: 'https://www.domain.com',
                text: 'Domain'
            }
        });
    }
```
