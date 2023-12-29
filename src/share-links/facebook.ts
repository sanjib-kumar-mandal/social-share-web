import { FacebookAttributes } from "../interfaces/attributes";
import { shareEncodedUrl } from "../utils/utils";

export class Facebook {
  static generateUrl(doc: Document, options: FacebookAttributes) {
    if (options.type === "feed") {
      let urlString = "https://www.facebook.com/dialog/feed?";
      if (options.appId) {
        urlString += "&app_id=" + encodeURIComponent(options.appId);
      }
      if (options.redirectUri) {
        urlString += "&redirect_uri=" + encodeURIComponent(options.redirectUri);
      }
      if (options.link) {
        urlString += "&link=" + shareEncodedUrl(doc, options.link);
      }
      if (options.to) {
        urlString += "&to=" + encodeURIComponent(options.to);
      }
      if (options.display) {
        urlString += "&display=" + encodeURIComponent(options.display);
      }
      if (options.ref) {
        urlString += "&ref=" + encodeURIComponent(options.ref);
      }
      if (options.from) {
        urlString += "&from=" + encodeURIComponent(options.from);
      }
      if (options.source) {
        urlString += "&source=" + encodeURIComponent(options.source);
      }
      return urlString;
    } else if (options.type === "share") {
      // if user specifies that they want to use the Facebook share dialog
      //(https://developers.facebook.com/docs/sharing/reference/share-dialog)
      let urlString = "https://www.facebook.com/dialog/share?";
      if (options.appId) {
        urlString += "&app_id=" + encodeURIComponent(options.appId);
      }
      if (options.redirectUri) {
        urlString += "&redirect_uri=" + encodeURIComponent(options.redirectUri);
      }
      if (options.href) {
        urlString += "&href=" + shareEncodedUrl(doc, options.href ?? doc.URL);
      }
      if (options.quote) {
        urlString += "&quote=" + encodeURIComponent(options.quote);
      }
      if (options.display) {
        urlString += "&display=" + encodeURIComponent(options.display);
      }
      if (options.mobileIframe) {
        urlString +=
          "&mobile_iframe=" + encodeURIComponent(options.mobileIframe);
      }
      if (options.hashtags) {
        urlString += "&hashtag=" + encodeURIComponent(options.hashtags);
      }
      return urlString;
    } else if (options.type === "send") {
      // if user specifies that they want to use the Facebook send dialog
      //(https://developers.facebook.com/docs/sharing/reference/send-dialog)
      let urlString = "https://www.facebook.com/dialog/send?";
      if (options.appId) {
        urlString += "&app_id=" + encodeURIComponent(options.appId);
      }
      if (options.redirectUri) {
        urlString += "&redirect_uri=" + encodeURIComponent(options.redirectUri);
      }
      if (options.link) {
        urlString += "&link=" + shareEncodedUrl(doc, options.link);
      }
      if (options.to) {
        urlString += "&to=" + encodeURIComponent(options.to);
      }
      if (options.display) {
        urlString += "&display=" + encodeURIComponent(options.display);
      }
      return urlString;
    } else {
      return `https://www.facebook.com/sharer/sharer.php?u=${shareEncodedUrl(doc, options.href ?? doc.URL)}`;
    }
  }
}
