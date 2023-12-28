import { RedditAttributes } from "../interfaces/attributes";
import { shareEncodedUrl } from "../utils/utils";

export class Reddit {
  static generateUrl(doc: Document, options: RedditAttributes) {
    if (options.url) {
      let urlString = "https://www.reddit.com/";

      if (options.subReddit) {
        urlString += "r/" + options.subReddit + "/submit?url=";
      } else {
        urlString += "submit?url=";
      }

      urlString += shareEncodedUrl(doc, options.url);

      if (options.title) {
        urlString += `&title=${encodeURIComponent(options.title)}`;
      }

      return urlString;
    } else {
      return null;
    }
  }
}
