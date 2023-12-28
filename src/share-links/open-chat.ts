import { OpenChatAttributes } from "../interfaces/attributes";
import { shareEncodedUrl } from "../utils/utils";

export class OpenChat {
  static generateUrl(doc: Document, options: OpenChatAttributes) {
    let urlString: string = `https://oc.app/?url=${shareEncodedUrl(
      doc,
      options.url ?? doc.URL,
    )}`;

    if (options.text) {
      urlString += `&text=${encodeURIComponent(options.text)}`;
    }

    // openchat requires a suffix `#/share` to understand it is a share action
    urlString += `#/share`;

    return urlString;
  }
}
