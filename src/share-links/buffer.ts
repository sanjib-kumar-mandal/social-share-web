import { BufferAttributes } from "../interfaces/attributes";
import { shareEncodedUrl } from "../utils/utils";

export class Buffer {
  static generateUrl(doc: Document, options: BufferAttributes) {
    let urlString = "https://bufferapp.com/add?url=";

    //default to the current page if a URL isn't specified
    urlString += shareEncodedUrl(doc, options.url ?? doc.URL);

    if (options.text) {
      urlString += "&text=" + encodeURIComponent(options.text);
    }

    return urlString;
  }
}
