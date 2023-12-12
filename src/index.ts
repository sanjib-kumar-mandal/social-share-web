import { SocialMedias, SocialShareOptions } from "./interfaces/social-share-options";
import { SocialMedia } from './interfaces/social-share-options';
import { Colors, DefaultIcons, Titles, allNetworks } from "./constatnts/const";
import { Facebook } from "./share-links/facebook";
import { LinkedIn } from "./share-links/linkedin";
import { DSCVRAttributes, EmailAttributes, FacebookAttributes, HackerNewsAttributes, LineAttributes, LinkedinAttributes, OpenChatAttributes, PinterestAttributes, RedditAttributes, TelegramAttributes, TumblerAttributes, TwitterAttributes, WhatsappAttributes } from "./interfaces/attributes";
import { Pinterest } from "./share-links/pinterest";
import { Reddit } from "./share-links/reddit";
import { Twitter } from "./share-links/twitter";
import { WhatsApp } from "./share-links/whatsapp";
import { DSCVR } from "./share-links/dscvr";
import { HackerNews } from "./share-links/hacker-news";
import { OpenChat } from "./share-links/open-chat";
import { Telegram } from "./share-links/telegram";
import { Email } from "./share-links/email";
import { openWindow } from "./utils/utils";
import { Line } from "./share-links/line";
import { Tumbler } from "./share-links/tumbler";

class SocialShare {

    show = (options: SocialShareOptions) => {
        try {
            const doc = options.doc;
            if (doc) {
                const socials = options.socials;
                if (socials?.length) {
                    const layer = this.getLayer(doc);
                    const container = this.getContainer(doc, options.title, options.message);
                    const shareButtonsContainer = this.socialListContainer(doc);
                    for (let i = 0, l = socials.length; i < l; i++) {
                        const social = socials[i];
                        const hasSocial = allNetworks.indexOf(social.type);
                        if (hasSocial !== -1) {
                            const icon = this.getIcon(doc, social);
                            icon && shareButtonsContainer.appendChild(icon);
                        }
                    }
                    container.appendChild(shareButtonsContainer);
                    if (options.hasOwnProperty('copy') && options.copy) {
                        const copyContainer = this.addCopyOption(doc, options.copy);
                        container.appendChild(copyContainer);
                    }
                    layer.appendChild(container);
                    doc.body.appendChild(layer);
                } else {
                    throw new Error("At least one social media referance needed.");
                }
            } else {
                throw new Error("Document needs to provide");
            }
        } catch (e) {
            throw e;
        }
    }

    hide = (doc: Document) => {
        const ref = doc.getElementById('social-share-layer');
        if (ref) {
            ref.remove()
        }
    }

    private share(doc: Document, info: SocialMedias) {
        let url;
        if (info.type === SocialMedia.Facebook) {
            url = Facebook.generateUrl(doc, info.attributes as FacebookAttributes);
        } else if (info.type === SocialMedia.LinkedIn) {
            url = LinkedIn.generateUrl(doc, info.attributes as LinkedinAttributes);
        } else if (info.type === SocialMedia.Pinterest) {
            url = Pinterest.generateUrl(doc, info.attributes as PinterestAttributes);
        } else if (info.type === SocialMedia.Reddit) {
            url = Reddit.generateUrl(doc, info.attributes as RedditAttributes);
        } else if (info.type === SocialMedia.Twitter) {
            url = Twitter.generateUrl(doc, info.attributes as TwitterAttributes);
        } else if (info.type === SocialMedia.Whatsapp) {
            url = WhatsApp.generateUrl(doc, info.attributes as WhatsappAttributes);
        } else if (info.type === SocialMedia.Dscvr) {
            url = DSCVR.generateUrl(doc, info.attributes as DSCVRAttributes);
        } else if (info.type === SocialMedia.HackerNews) {
            url = HackerNews.generateUrl(doc, info.attributes as HackerNewsAttributes);
        } else if (info.type === SocialMedia.OpenChat) {
            url = OpenChat.generateUrl(doc, info.attributes as OpenChatAttributes);
        } else if (info.type === SocialMedia.Telegram) {
            url = Telegram.generateUrl(doc, info.attributes as TelegramAttributes);
        } else if (info.type === SocialMedia.Email) {
            url = Email.generateUrl(info.attributes as EmailAttributes);
        } else if (info.type === SocialMedia.Line) {
            url = Line.generateUrl(doc, info.attributes as LineAttributes);
        } else if (info.type === SocialMedia.Tumbler) {
            url = Tumbler.generateUrl(doc, info.attributes as TumblerAttributes);
        }
        url && openWindow(doc, url, info.target);
        this.hide(doc);
    }

    private getIcon(doc: Document, info: SocialMedias) {
        if (doc && info) {
            const div = doc.createElement('div');
            div.setAttribute('class', info.type);
            div.style.display = 'flex';
            div.style.alignItems = 'center';
            div.style.justifyContent = 'center';

            const div1 = doc.createElement('div');
            div1.style.border = `2px solid ${info.style?.color ?? Colors[info.type]+'46'}`;
            div1.style.padding = '10px';
            div1.style.cursor = 'pointer';
            div1.style.borderRadius = '50%';
            div1.style.transition = '.3s';
            div1.style.width = '50px';
            div1.style.height = '50px';
            div1.style.display = 'flex';
            div1.style.alignItems = 'center';
            div1.style.justifyContent = 'center';
    
            const svg = doc.createElement('img');
            svg.setAttribute('src', info.icon ?? DefaultIcons[info.type]);
            svg.loading = 'lazy';
            svg.alt = Titles[info.type];
            svg.style.height = '27px';
            svg.style.width = '30px';
            svg.style.transition = '.5s';
            svg.style.padding = '3px';
            svg.style.borderRadius = '5px';
            div1.appendChild(svg);

            div1.addEventListener('click', () => this.share(doc, info));

            div.appendChild(div1);
    
            return div;
        } else {
            return null
        }
    }

    private addCopyOption(doc: Document, copyOptions: any) {
        try {
            if (doc && copyOptions.url) {
                const div1 = doc.createElement('div');
                div1.classList.add('social-share-copy-container');
                div1.style.display = 'flex';
                div1.style.flexDirection = 'column';

                const h2 = doc.createElement('h2');
                h2.textContent = 'Or copy link';
                h2.classList.add('social-media-copy-text');
                h2.style.color = '#9b9b9b';
                h2.style.margin = '20px 0 0 0';
                h2.style.fontSize = '14px';
                h2.style.fontWeight = 'bold';
                div1.appendChild(h2);

                const div = doc.createElement('div');
                div.style.display = 'flex';
                div.style.alignItems = 'center';
                div.style.border = '2px solid rgba(128, 128, 128, .4)';
                div.style.padding = '5px';
                div.style.borderRadius = '3px';
                div.style.overflow = 'hidden';
                div.style.marginTop = '10px';
                const p = doc.createElement('p');
                p.style.textAlign = 'start';
                p.style.whiteSpace = 'nowrap';
                p.style.color = copyOptions.textColor ?? '#292826';
                p.style.overflow = 'hidden';
                p.style.fontSize = '15px';
                p.style.width = 'calc(100% - 80px)';
                p.style.margin = '0 10px 0 10px';
                p.innerText = copyOptions.url;
                div.appendChild(p);
                const button = doc.createElement('button');
                button.style.background = copyOptions.buttonColor ?? '#2196F3';
                button.style.color = 'white';
                button.style.border = 'none';
                button.style.borderRadius = '3px';
                button.style.width = '80px';
                button.style.padding = '10px';
                button.style.fontSize = '12px';
                button.innerText = 'copy';
                button.style.cursor = 'pointer';
                button.style.textTransform = 'uppercase';
                button.addEventListener('click', () => doc.defaultView?.navigator.clipboard.writeText(copyOptions.url));
                div.appendChild(button);
                div1.appendChild(div);
                return div1;
            } else {
                throw new Error("Document and URL needs to be provided.");
            }
        } catch (e) {
            throw e;
        }
    }

    private socialListContainer(doc: Document) {
        try {
            if (doc) {
                const container = doc.createElement('div');
                container.className = 'social-list-container';
                container.style.display = 'grid';
                container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(50px, 1fr))';
                container.style.gap = '10px';
                container.style.margin = '20px 0 0 0';
                return container;
            } else {
                throw new Error("Document needs to provide");
            }
        } catch (e) {
            throw e;
        }
    }

    private getTitle(doc: Document, title?: string) {
        try {
            if (doc) {
                const div = doc.createElement('div');
                div.style.display = 'flex';
                div.style.flexDirection = 'row';
                div.style.padding = '15px 0';
                div.style.borderBottom = '2px solid rgba(181, 181, 181, .43)';
                div.style.marginBottom = '10px';
                div.classList.add('social-share-title');
                const titleC = doc.createElement('h1');
                if (title) titleC.innerText = title;   
                titleC.style.fontSize = '20px';
                titleC.style.fontWeight = '600';
                titleC.style.margin = '0px';
                titleC.style.width = 'calc(100% - 25px)';
                div.appendChild(titleC);
                const span = doc.createElement('span');
                span.style.display = 'flex';
                span.style.alignItems = 'center';
                span.style.justifyContent = 'center';
                span.style.width = '25px';
                span.style.height = '25px';
                span.style.color = '#f5f5f5';
                span.style.fontSize = '12px';
                span.style.borderRadius = '50%';
                span.style.cursor = 'pointer';
                span.style.background = '#F44336';
                span.classList.add('close-button');
                span.innerHTML = '&#10006;';
                span.addEventListener('click', () => this.hide(doc));
                div.appendChild(span);
                return div;
            } else {
                throw new Error("Document is not provided.");
            }
        } catch (e) {
            throw e;
        }
    }

    private getMessage(doc: Document, message: string) {
        try {
            if (doc && message) {
                const messageC = doc.createElement('p');
                messageC.innerText = message;
                messageC.classList.add('social-share-message');
                messageC.style.fontSize = '16px';
                messageC.style.fontWeight = '600';
                messageC.style.color = '#9b9b9b';
                messageC.style.margin = '10px 0 0';
                return messageC;
            } else {
                throw new Error("Document and message is required.");
            }
        } catch (e) {
            throw e;
        }
    }

    private getContainer(doc: Document, title?: string, message?: string) {
        try {
            if (doc) {
                const container = doc.createElement('div');
                container.classList.add("social-share-container");
                container.style.width = '320px';
                container.style.height = 'auto';
                container.style.background = '#d9d9d9';
                container.style.borderRadius = '3px';
                container.style.padding = '10px';
                const titleC = this.getTitle(doc, title);
                container.appendChild(titleC);
                if (message) {
                    const messageC = this.getMessage(doc, message);
                    container.appendChild(messageC);
                }
                return container;
            } else {
                throw new Error("Document is not provided");
            }
        } catch (e) {
            throw e;
        }
    }

    private getLayer(doc: Document) {
        try { 
            if (doc) {
                const div = doc.createElement('div');
                div.classList.add("social-share-layer");
                div.setAttribute('id', 'social-share-layer');
                div.style.zIndex = '999999';
                div.style.position = 'absolute';
                div.style.top = '0';
                div.style.right = '0';
                div.style.bottom = '0';
                div.style.left = '0';
                div.style.background = 'rgba(0,0,0,.3)';
                div.style.display = 'flex';
                div.style.alignItems = 'center';
                div.style.justifyContent = 'center';
                return div;
            } else {
                throw new Error("Document is not provided");
            }
        } catch (e) {
            throw e;
        }
    }

}

export {
    SocialMedia,
    SocialShare,
    FacebookAttributes,
    LinkedinAttributes,
    PinterestAttributes,
    RedditAttributes,
    TwitterAttributes,
    WhatsappAttributes,
    DSCVRAttributes,
    HackerNewsAttributes,
    OpenChatAttributes,
    TelegramAttributes,
    EmailAttributes,
    LineAttributes
};