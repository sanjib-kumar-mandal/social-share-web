import { HackerNewsAttributes } from "../interfaces/attributes";
import { shareEncodedUrl } from "../utils/utils";

export class HackerNews {
  static generateUrl(doc: Document, options: HackerNewsAttributes) {
    let urlString = "https://news.ycombinator.com/submitlink?u=";

    //default to the current page if a URL isn't specified
    urlString += shareEncodedUrl(doc, options.url);

    if (options.text) {
      urlString += "&t=" + encodeURIComponent(options.text);
    }

    return urlString;
  }
}
