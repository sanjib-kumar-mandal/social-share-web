import {
  SocialMedias,
  SocialShareOptions,
} from "./interfaces/social-share-options";
import { SocialMedia } from "./interfaces/social-share-options";
import { Colors, DefaultIcons, Titles, allNetworks } from "./constatnts/const";
import { Facebook } from "./share-links/facebook";
import { LinkedIn } from "./share-links/linkedin";
import {
  BufferAttributes,
  DSCVRAttributes,
  EmailAttributes,
  FacebookAttributes,
  HackerNewsAttributes,
  LineAttributes,
  LinkedinAttributes,
  OpenChatAttributes,
  PinterestAttributes,
  PocketAttributes,
  RedditAttributes,
  TelegramAttributes,
  TumblerAttributes,
  TwitterAttributes,
  WhatsappAttributes,
} from "./interfaces/attributes";
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
import { Pocket } from "./share-links/pocket";
import { Buffer } from "./share-links/buffer";

class SocialShare {
  show = (options: SocialShareOptions) => {
    try {
      const doc = options.doc;
      if (doc) {
        const socials = options.socials;
        if (socials && Object.keys(socials).length) {
          const layer = this.getLayer(doc);
          const container = this.getContainer(
            doc,
            options.title,
            options.message,
          );
          const shareButtonsContainer = this.socialListContainer(doc);
          Object.keys(socials).forEach((el: string) => {
            const element = el as unknown as SocialMedia;
            const hasSocial = allNetworks.indexOf(element);
            if (hasSocial !== -1) {
              const icon = this.getIcon(doc, element, socials[element]);
              icon && shareButtonsContainer.appendChild(icon);
            }
          });
          container.appendChild(shareButtonsContainer);
          if (options.hasOwnProperty("copy") && options.copy) {
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
  };

  hide = (doc: Document) => {
    const ref = doc.getElementById("social-share-layer");
    if (ref) {
      ref.remove();
    }
  };

  share(
    doc: Document,
    type: SocialMedia,
    attributes: SocialMedias[SocialMedia],
  ) {
    let url;
    if (type === SocialMedia.Facebook) {
      url = Facebook.generateUrl(doc, attributes as FacebookAttributes);
    } else if (type === SocialMedia.LinkedIn) {
      url = LinkedIn.generateUrl(doc, attributes as LinkedinAttributes);
    } else if (type === SocialMedia.Pinterest) {
      url = Pinterest.generateUrl(doc, attributes as PinterestAttributes);
    } else if (type === SocialMedia.Reddit) {
      url = Reddit.generateUrl(doc, attributes as RedditAttributes);
    } else if (type === SocialMedia.Twitter) {
      url = Twitter.generateUrl(doc, attributes as TwitterAttributes);
    } else if (type === SocialMedia.Whatsapp) {
      url = WhatsApp.generateUrl(doc, attributes as WhatsappAttributes);
    } else if (type === SocialMedia.Dscvr) {
      url = DSCVR.generateUrl(doc, attributes as DSCVRAttributes);
    } else if (type === SocialMedia.HackerNews) {
      url = HackerNews.generateUrl(doc, attributes as HackerNewsAttributes);
    } else if (type === SocialMedia.OpenChat) {
      url = OpenChat.generateUrl(doc, attributes as OpenChatAttributes);
    } else if (type === SocialMedia.Telegram) {
      url = Telegram.generateUrl(doc, attributes as TelegramAttributes);
    } else if (type === SocialMedia.Email) {
      url = Email.generateUrl(attributes as EmailAttributes);
    } else if (type === SocialMedia.Line) {
      url = Line.generateUrl(doc, attributes as LineAttributes);
    } else if (type === SocialMedia.Tumbler) {
      url = Tumbler.generateUrl(doc, attributes as TumblerAttributes);
    } else if (type === SocialMedia.Pocket) {
      url = Pocket.generateUrl(doc, attributes as PocketAttributes);
    } else if (type === SocialMedia.Buffer) {
      url = Buffer.generateUrl(doc, attributes as BufferAttributes);
    }
    url && openWindow(doc, url, attributes?.target ?? "_blank");
    this.hide(doc);
  }

  private getIcon(doc: Document, type: SocialMedia, info: any) {
    if (doc && info) {
      const div = doc.createElement("div");
      div.setAttribute("class", type);
      div.setAttribute('title', Titles[type] ?? '');
      div.style.display = "flex";
      div.style.alignItems = "center";
      div.style.justifyContent = "center";

      const div1 = doc.createElement("div");
      div1.style.border = `2px solid ${
        info.style?.color ?? Colors[type] + "46"
      }`;
      div1.style.padding = "10px";
      div1.style.cursor = "pointer";
      div1.style.borderRadius = "50%";
      div1.style.transition = ".3s";
      div1.style.width = "50px";
      div1.style.height = "50px";
      div1.style.display = "flex";
      div1.style.alignItems = "center";
      div1.style.justifyContent = "center";

      const svg = doc.createElement("img");
      svg.setAttribute("src", info.icon ?? DefaultIcons[type]);
      svg.loading = "lazy";
      svg.alt = Titles[type];
      svg.style.height = "27px";
      svg.style.width = "30px";
      svg.style.transition = ".5s";
      svg.style.padding = "3px";
      svg.style.borderRadius = "5px";
      div1.appendChild(svg);

      div1.addEventListener("click", () => this.share(doc, type, info));

      div.appendChild(div1);

      return div;
    } else {
      return null;
    }
  }

  private addCopyOption(doc: Document, copyOptions: any) {
    try {
      if (doc && copyOptions.url) {
        const div1 = doc.createElement("div");
        div1.classList.add("social-share-copy-container");
        div1.style.display = "flex";
        div1.style.flexDirection = "column";

        const h2 = doc.createElement("h2");
        h2.textContent = "Or copy link";
        h2.classList.add("social-media-copy-text");
        h2.style.color = "#9b9b9b";
        h2.style.margin = "20px 0 0 0";
        h2.style.fontSize = "14px";
        h2.style.fontWeight = "400";
        div1.appendChild(h2);

        const div = doc.createElement("div");
        div.style.display = "flex";
        div.style.alignItems = "center";
        div.style.border = "1px solid rgba(128, 128, 128, .4)";
        div.style.padding = "5px";
        div.style.borderRadius = "3px";
        div.style.overflow = "hidden";
        div.style.marginTop = "10px";
        const p = doc.createElement("p");
        p.style.textAlign = "start";
        p.style.whiteSpace = "nowrap";
        p.style.color = copyOptions.textColor ?? "#292826";
        p.style.overflow = "hidden";
        p.style.fontSize = "15px";
        p.style.width = "calc(100% - 80px)";
        p.style.margin = "0px 10px 0px 5px";
        p.innerText = copyOptions.url;
        div.appendChild(p);
        const button = doc.createElement("button");
        button.style.background = copyOptions.buttonColor ?? "#2196F3";
        button.style.color = "white";
        button.style.border = "none";
        button.style.borderRadius = "3px";
        button.style.width = "70px";
        button.style.padding = "10px";
        button.style.fontSize = "11px";
        button.innerText = "Copy";
        button.style.cursor = "pointer";
        button.style.textTransform = "uppercase";
        button.addEventListener("click", () => {
          doc.defaultView?.navigator.clipboard.writeText(copyOptions.url);
          button.innerText = "Copied!";
          setTimeout(() => this.hide(doc), 1000);
        });
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
        const container = doc.createElement("div");
        container.className = "social-list-container";
        container.style.display = "grid";
        container.style.gridTemplateColumns =
          "repeat(auto-fill, minmax(50px, 1fr))";
        container.style.gap = "10px";
        container.style.margin = "20px 0 0 0";
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
        const div = doc.createElement("div");
        div.style.display = "flex";
        div.style.alignItems = "center";
        div.style.flexDirection = "row";
        div.style.padding = "5px 0px 15px";
        div.style.borderBottom = "1px solid rgba(181, 181, 181, .43)";
        div.style.marginBottom = "10px";
        div.classList.add("social-share-title");
        const titleC = doc.createElement("h1");
        if (title) titleC.innerText = title;
        titleC.style.fontSize = "18px";
        titleC.style.fontWeight = "600";
        titleC.style.margin = "0px";
        titleC.style.width = "calc(100% - 25px)";
        titleC.style.color = "#292826";
        div.appendChild(titleC);
        const span = doc.createElement("span");
        span.style.display = "flex";
        span.style.alignItems = "center";
        span.style.justifyContent = "center";
        span.style.width = "25px";
        span.style.height = "25px";
        span.style.color = "#f5f5f5";
        span.style.fontSize = "10px";
        span.style.borderRadius = "50%";
        span.style.cursor = "pointer";
        span.style.background = "#ff655a";
        span.classList.add("close-button");
        span.innerHTML = "&#10006;";
        span.addEventListener("click", () => this.hide(doc));
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
        const messageC = doc.createElement("p");
        messageC.innerText = message;
        messageC.classList.add("social-share-message");
        messageC.style.fontSize = "13px";
        messageC.style.fontWeight = "400";
        messageC.style.color = "#9b9b9b";
        messageC.style.margin = "10px 0 0";
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
        const container = doc.createElement("div");
        container.classList.add("social-share-container");
        container.style.width = "320px";
        container.style.height = "auto";
        container.style.background = "#f5f5f5";
        container.style.borderRadius = "3px";
        container.style.borderBottom = "4px solid #2196F3";
        container.style.padding = "10px";
        const titleC = this.getTitle(doc, title ?? 'Share via');
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
        const div = doc.createElement("div");
        // div.attachShadow({mode: 'open'})
        div.classList.add("social-share-layer");
        div.setAttribute("id", "social-share-layer");
        div.style.zIndex = "999999";
        div.style.position = "absolute";
        div.style.top = "0";
        div.style.right = "0";
        div.style.bottom = "0";
        div.style.left = "0";
        div.style.background = "rgba(0,0,0,.3)";
        div.style.display = "flex";
        div.style.alignItems = "center";
        div.style.justifyContent = "center";
        return div;
      } else {
        throw new Error("Document is not provided");
      }
    } catch (e) {
      throw e;
    }
  }
}

export { SocialMedia, SocialShare };
