# Social Share

Social Share plugin is made from new UI perspective. Also for angular it takes care of SSR as it takes `document` as input. It can be used for all frameworks which uses typescript.

## Features

- Buffer
- DSCVR
- Email
- Facebook
- Hacker News
- Line
- LinkedIn
- Open Chat
- Pinterest
- Pocket
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
            socials: {
                [SocialMedia.Facebook]: {
                        type: 'feed'
                },
                [SocialMedia.LinkedIn]: {
                    url: window.location.href
                },
                [SocialMedia.Whatsapp]: {
                    url: window.location.href,
                    text: "Hi Sage Savas"
                },
                [SocialMedia.Pinterest]: {
                    url: window.location.href
                },
                [SocialMedia.Reddit]: {
                    url: window.location.href
                },
                [SocialMedia.Twitter]: {
                    url: window.location.href
                },
                [SocialMedia.Dscvr]: {
                    url: window.location.href
                },
                [SocialMedia.HackerNews]: {
                    url: window.location.href
                },
                [SocialMedia.OpenChat]: {
                    url: window.location.href
                },
                [SocialMedia.Telegram]: {
                    url: window.location.href
                },
                [SocialMedia.Email]: {
                    to: 'example@domain.com'
                },
                [SocialMedia.Pocket]: {
                    url: window.location.href
                },
                [SocialMedia.Buffer]: {
                    url: window.location.href,
                    text: 'Something'
                }
            },
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
- [Pocket](https://getpocket.com/publisher/button_docs)