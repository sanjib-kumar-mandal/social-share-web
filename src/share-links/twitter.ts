import { TwitterAttributes } from "../interfaces/attributes";
import { shareEncodedUrl } from "../utils/utils";

export class Twitter {
  static generateUrl(doc: Document, options: TwitterAttributes) {
    let urlString = "https://www.twitter.com/intent/tweet?";

    if (options.text) {
      urlString += "text=" + encodeURIComponent(options.text);
    }

    if (options.via) {
      urlString += "&via=" + encodeURIComponent(options.via);
    }

    if (options.hashtags) {
      urlString += "&hashtags=" + encodeURIComponent(options.hashtags);
    }

    //default to the current page if a URL isn't specified
    urlString += "&url=" + shareEncodedUrl(doc, options.url ?? doc.URL);

    return urlString;
  }
}
