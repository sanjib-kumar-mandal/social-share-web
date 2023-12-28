import { LinkedinAttributes } from "../interfaces/attributes";
import { shareEncodedUrl } from "../utils/utils";

export class LinkedIn {
  static generateUrl(doc: Document, options: LinkedinAttributes) {
    if (options.url) {
      let urlString = "https://www.linkedin.com/shareArticle?mini=true";

      urlString += "&url=" + shareEncodedUrl(doc, options.url ?? doc.URL);

      if (options.title) {
        urlString += "&title=" + encodeURIComponent(options.title);
      }

      if (options.description) {
        urlString += "&summary=" + encodeURIComponent(options.description);
      }

      if (options.source) {
        urlString += "&source=" + encodeURIComponent(options.source);
      }
      return urlString;
    } else {
      return null;
    }
  }
}
