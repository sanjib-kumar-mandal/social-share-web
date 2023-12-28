import { DSCVRAttributes } from "../interfaces/attributes";
import { shareEncodedUrl } from "../utils/utils";

export class DSCVR {
  static generateUrl(doc: Document, options: DSCVRAttributes) {
    let urlString: string = `https://dscvr.one/?url=${shareEncodedUrl(
      doc,
      options.url ?? doc.URL,
    )}`;

    if (options.text) {
      urlString += `&text=${encodeURIComponent(options.text)}`;
    }

    if (options.title) {
      urlString += "&title=" + encodeURIComponent(options.title);
    }

    if (options.portal) {
      urlString += "&portal=" + encodeURIComponent(options.portal);
    }
    return urlString;
  }
}
