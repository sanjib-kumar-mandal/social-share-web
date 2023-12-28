import { LineAttributes } from "../interfaces/attributes";
import { shareEncodedUrl } from "../utils/utils";

export class Line {
  static generateUrl(doc: Document, options: LineAttributes) {
    return `https://social-plugins.line.me/lineit/share?url=${shareEncodedUrl(
      doc,
      options.url ?? doc.URL,
    )}`;
  }
}
