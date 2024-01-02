import { PocketAttributes } from "../interfaces/attributes";
import { shareEncodedUrl } from "../utils/utils";

export class Pocket {
  static generateUrl(doc: Document, options: PocketAttributes) {
    if (options.url) {
      return `https://getpocket.com/edit?url=${shareEncodedUrl(
        doc,
        options.url ?? doc.URL,
        )}`;
    } else {
      return null;
    }
  }
}
