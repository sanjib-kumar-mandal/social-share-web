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

private readonly shareObj = new SocialShare();

openShareModal() {
        this.shareObj.show({
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

directShare(doc: Document, type: SocialMedia, attributes: any) {
    this.shareObj.share(doc, type, attributes);
}

close() {
    this.shareObj.hide(doc: Document);
}
```

## DOCUMENTs

- [Email](https://en.wikipedia.org/wiki/Mailto)
- [Facebook](https://developers.facebook.com/docs/sharing/reference/share-dialog)
- [Line](https://developers.line.biz/en/docs/line-social-plugins/install-guide/using-line-share-buttons/#using-custom-icons)
- [Hacker News](https://www.igzebedze.com/2012/08/howto-add-hacker-news-share-button-on-wordpress-com/)
- [LinkedIn](https://learn.microsoft.com/en-us/linkedin/marketing/community-management/shares/share-api?view=li-lms-unversioned&tabs=http)
- [Reddit](https://www.reddit.com/submit?url={{some_url}})
- [Telegram](https://core.telegram.org/widgets/share)
- [Tumbler](https://www.tumblr.com/docs/en/share_button)
- [Twitter](https://developer.twitter.com/en/docs/twitter-for-websites/web-intents/overview)
- [Whatsapp](https://faq.whatsapp.com/425247423114725/?locale=en_US&cms_platform=iphone)
