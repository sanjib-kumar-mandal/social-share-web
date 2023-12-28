import { TelegramAttributes } from "../interfaces/attributes";
import { shareEncodedUrl } from "../utils/utils";

export class Telegram {
  static generateUrl(doc: Document, options: TelegramAttributes) {
    let urlString: string = `https://t.me/share/url?url=${shareEncodedUrl(
      doc,
      options.url ?? doc.URL,
    )}`;

    if (options.text) {
      urlString += `&text=${encodeURIComponent(options.text)}`;
    }

    return urlString;
  }
}
